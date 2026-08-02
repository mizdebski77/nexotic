'use client'

import { useChat } from '@ai-sdk/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocale, useTranslations } from 'next-intl'

/**
 * Nexotic on-site AI chatbot.
 *
 * Floating bubble bottom-right → opens into a chat panel that streams
 * responses from /api/chat (powered by OpenAI gpt-4o-mini, see lib/chat-prompt.ts).
 *
 * - Conversation persists across page reloads via localStorage.
 * - Auto-scrolls to newest message.
 * - Matches the Nexotic lime/ink theme.
 */

const STORAGE_KEY = 'nexotic_chat_history'
const AUTO_OPEN_KEY = 'nexotic_chat_auto_opened'
const AUTO_OPEN_DELAY_MS = 2500 // pause before auto-opening on first visit

type StoredMessage = { id: string; role: 'user' | 'assistant'; content: string }

function loadHistory(): StoredMessage[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function ChatWidget() {
  const t = useTranslations('chat')
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, input, handleInputChange, handleSubmit, status, error, setMessages } =
    useChat({
      api: '/api/chat',
      // The locale travels with every request so the bot replies in the
      // language of the page the visitor is currently on.
      body: { locale },
    })

  // Load stored conversation once on mount (client only, avoids hydration mismatch).
  // The welcome message (id: 'welcome') is always swapped to the current locale's
  // version — user messages and past bot replies are preserved as-is, since
  // translating prior conversation history mid-stream would be weird.
  useEffect(() => {
    const stored = loadHistory()
    if (stored.length === 0) {
      setMessages([{ id: 'welcome', role: 'assistant', content: t('welcome') }])
    } else {
      setMessages(
        stored.map((m) =>
          m.id === 'welcome' ? { ...m, content: t('welcome') } : m,
        ),
      )
    }
    setHydrated(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // When the visitor switches language after the chat has loaded, refresh the
  // welcome message in place so it speaks their current language.
  useEffect(() => {
    if (!hydrated) return
    const newWelcome = t('welcome')
    setMessages((curr) => {
      if (curr.length === 0 || curr[0].id !== 'welcome') return curr
      if (curr[0].content === newWelcome) return curr
      return [{ ...curr[0], content: newWelcome }, ...curr.slice(1)]
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, hydrated])

  const isLoading = status === 'submitted' || status === 'streaming'

  // Persist conversation to localStorage whenever it changes.
  useEffect(() => {
    if (!hydrated) return
    try {
      const slim = messages.map((m) => ({
        id: m.id,
        role: m.role,
        content: m.content,
      }))
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slim))
    } catch {
      // ignore quota / private-mode errors
    }
  }, [messages, hydrated])

  // Auto-scroll to bottom on new messages.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, isLoading])

  // Focus the input when the panel opens.
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen])

  // Auto-open the panel once per visitor, a couple of seconds after page load.
  // We remember in localStorage that we've already greeted this person, so
  // returning visitors are NOT pestered. To make it open every visit, delete
  // the localStorage check below. To disable auto-open entirely, remove this
  // whole effect.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      if (window.localStorage.getItem(AUTO_OPEN_KEY)) return
    } catch {
      // private mode / storage blocked — fall through and just open
    }
    const timer = setTimeout(() => {
      setIsOpen(true)
      try {
        window.localStorage.setItem(AUTO_OPEN_KEY, '1')
      } catch {
        // ignore
      }
    }, AUTO_OPEN_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function resetChat() {
    setMessages([{ id: 'welcome', role: 'assistant', content: t('welcome') }])
    try {
      window.localStorage.removeItem(STORAGE_KEY)
    } catch {
      // ignore
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Floating bubble */}
      <motion.button
        type="button"
        aria-label={isOpen ? t('close') : t('open')}
        onClick={() => setIsOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full bg-lime text-ink shadow-[0_8px_28px_rgba(0,0,0,0.18)] flex items-center justify-center hover:shadow-[0_10px_32px_rgba(200,241,53,0.4)] transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            style={{ transformOrigin: 'bottom right' }}
            className="fixed bottom-24 right-5 z-[60] w-[calc(100vw-2.5rem)] sm:w-[380px] h-[min(560px,calc(100vh-8rem))] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-neutral-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-ink text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-lime flex items-center justify-center text-ink">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[14px] font-bold tracking-tight">{t('title')}</div>
                  <div className="text-[11px] text-white/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                    {t('status')}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={resetChat}
                title={t('newChat')}
                aria-label={t('newChat')}
                className="text-white/40 hover:text-white transition-colors text-[11px] font-semibold tracking-wide"
              >
                {t('newChat')}
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-5 space-y-3 bg-neutral-50/40"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-ink text-white rounded-br-sm'
                        : 'bg-white text-neutral-800 border border-neutral-200 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator while waiting for first token */}
              {status === 'submitted' && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm bg-white border border-neutral-200">
                    <div className="flex gap-1">
                      {[0, 0.15, 0.3].map((d) => (
                        <motion.span
                          key={d}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.1, repeat: Infinity, delay: d }}
                          className="w-1.5 h-1.5 rounded-full bg-neutral-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="text-[12px] text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {t('error')}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-neutral-200 bg-white px-3 py-3 flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={handleInputChange}
                disabled={isLoading}
                placeholder={t('placeholder')}
                className="flex-1 px-3.5 py-2.5 text-[13.5px] text-neutral-900 bg-neutral-50 border border-neutral-200 rounded-full outline-none focus:border-lime focus:bg-white transition-colors placeholder:text-neutral-400 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading || input.trim().length === 0}
                aria-label="Send"
                className="w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-transform"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </form>

            {/* Footer */}
            <div className="px-4 py-2 text-[10px] text-neutral-400 text-center bg-white border-t border-neutral-100">
              {t('footer')} <a href="/kontakt" className="text-neutral-600 hover:text-ink underline underline-offset-2">{t('footerLink')}</a>.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
