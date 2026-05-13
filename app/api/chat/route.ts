import { groq } from '@ai-sdk/groq'
import { streamText, convertToCoreMessages, type Message } from 'ai'
import { SYSTEM_PROMPT } from '@/lib/chat-prompt'

// Per-locale language directive prepended to the system prompt. Llama 3.3 70B
// is fully multilingual — it reads the Polish knowledge base in SYSTEM_PROMPT
// and answers in whichever language the directive demands.
const LANGUAGE_DIRECTIVES: Record<string, string> = {
  pl: 'CRITICAL: Always respond in Polish (język polski), regardless of the language the user writes in. Use the casual "ty" form. This overrides any language preference the user might express.',
  en: 'CRITICAL: Always respond in English, regardless of the language the user writes in. Use a friendly, informal but professional tone. This overrides any language preference the user might express.',
  de: 'CRITICAL: Always respond in German (Deutsch), regardless of the language the user writes in. Use the casual "du" form. This overrides any language preference the user might express.',
  no: 'CRITICAL: Always respond in Norwegian (Bokmål), regardless of the language the user writes in. Use a casual, friendly tone. This overrides any language preference the user might express.',
}

// Edge runtime keeps responses snappy and supports streaming natively.
export const runtime = 'edge'
export const maxDuration = 30

// ── Naive in-memory rate limit ────────────────────────────────────────────
// Per-IP token bucket. Survives within a single serverless instance but is
// reset on cold starts — that's fine as a first line of defence against a
// single abusive visitor. For production-grade limits use Upstash Redis or
// Vercel KV.
const WINDOW_MS = 60_000
const MAX_PER_WINDOW = 12
const buckets = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (buckets.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  buckets.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

export async function POST(req: Request) {
  // Identify the caller for rate limiting.
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'anonymous'

  if (isRateLimited(ip)) {
    return new Response(
      'Zbyt wiele wiadomości w krótkim czasie. Spróbuj ponownie za chwilę.',
      { status: 429 },
    )
  }

  if (!process.env.GROQ_API_KEY) {
    return new Response(
      'Chatbot nie jest jeszcze skonfigurowany (brak GROQ_API_KEY).',
      { status: 503 },
    )
  }

  let messages: Message[]
  let locale = 'pl'
  try {
    const body = await req.json()
    messages = Array.isArray(body.messages) ? body.messages : []
    if (typeof body.locale === 'string' && body.locale in LANGUAGE_DIRECTIVES) {
      locale = body.locale
    }
  } catch {
    return new Response('Invalid JSON', { status: 400 })
  }

  // Trim conversation history so we don't keep sending unlimited context to
  // the model (and paying for it). Last 20 messages is plenty for context.
  const trimmed = messages.slice(-20)

  // Reject obviously oversized single messages.
  const lastUserMsg = [...trimmed].reverse().find((m) => m.role === 'user')
  if (lastUserMsg && typeof lastUserMsg.content === 'string' && lastUserMsg.content.length > 2000) {
    return new Response('Wiadomość jest zbyt długa.', { status: 413 })
  }

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: `${LANGUAGE_DIRECTIVES[locale]}\n\n${SYSTEM_PROMPT}`,
    messages: convertToCoreMessages(trimmed),
    temperature: 0.7,
    maxTokens: 500,
  })

  return result.toDataStreamResponse()
}
