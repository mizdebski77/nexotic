import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// ── Validation ──────────────────────────────────────────────
function validate(data: Record<string, string>) {
  const errors: Record<string, string> = {}
  if (!data.name?.trim())                        errors.name    = 'Imię jest wymagane'
  if (!data.email?.trim())                       errors.email   = 'E-mail jest wymagany'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Nieprawidłowy e-mail'
  if (!data.message?.trim())                     errors.message = 'Wiadomość jest wymagana'
  if (data.message?.trim().length < 10)          errors.message = 'Wiadomość jest za krótka'
  return errors
}

// ── Email HTML template ─────────────────────────────────────
function emailHTML(data: Record<string, string>) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; margin: 0; padding: 32px 0; }
    .wrap { max-width: 560px; margin: 0 auto; background: #fff; border-radius: 16px; overflow: hidden; }
    .header { background: #0a0a0a; padding: 28px 36px; }
    .header-title { color: #c8f135; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 4px; }
    .header-sub { color: rgba(255,255,255,0.4); font-size: 13px; margin: 0; }
    .body { padding: 36px; }
    .field { margin-bottom: 24px; }
    .label { font-size: 11px; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; }
    .value { font-size: 15px; color: #111; line-height: 1.6; }
    .divider { border: none; border-top: 1px solid #f0f0f0; margin: 8px 0 24px; }
    .message-box { background: #f9f9f9; border-radius: 10px; padding: 16px 20px; }
    .footer { background: #f9f9f9; padding: 20px 36px; border-top: 1px solid #f0f0f0; }
    .footer p { font-size: 12px; color: #bbb; margin: 0; }
    a { color: #c8f135; }
  </style>
</head>
<body>
  <div class="wrap">
    <div class="header">
      <p class="header-title">Nowe zapytanie</p>
      <p class="header-sub">Formularz kontaktowy — nexotic.pl</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Imię i nazwisko</div>
        <div class="value">${data.name}</div>
      </div>
      <hr class="divider"/>
      <div class="field">
        <div class="label">E-mail</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>
      <hr class="divider"/>
      ${data.company ? `
      <div class="field">
        <div class="label">Firma</div>
        <div class="value">${data.company}</div>
      </div>
      <hr class="divider"/>
      ` : ''}
      ${data.service ? `
      <div class="field">
        <div class="label">Usługa</div>
        <div class="value">${data.service}</div>
      </div>
      <hr class="divider"/>
      ` : ''}
      <div class="field">
        <div class="label">Wiadomość</div>
        <div class="message-box value">${data.message.replace(/\n/g, '<br/>')}</div>
      </div>
    </div>
    <div class="footer">
      <p>Wysłano ${new Date().toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })} · nexotic.pl</p>
    </div>
  </div>
</body>
</html>`
}

// ── Route handler ───────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, company, service, message } = body

    // Validate
    const errors = validate({ name, email, company, service, message })
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 })
    }

    // Send via Resend
    const { error } = await resend.emails.send({
      from:    'Nexotic Formularz <onboarding@resend.dev>', // change to your domain once verified
      to:      ['nexotic.contact@gmail.com'],                       // ← your email address
      replyTo: email,
      subject: `Nowe zapytanie od ${name}${company ? ` (${company})` : ''}`,
      html:    emailHTML({ name, email, company, service, message }),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ success: false, message: 'Błąd wysyłki' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ success: false, message: 'Błąd serwera' }, { status: 500 })
  }
}
