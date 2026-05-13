'use client'

import { useLocale, useTranslations } from 'next-intl'
import { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing, type Locale } from '@/i18n/routing'

const LANGUAGES: Record<Locale, { label: string; flag: string }> = {
  pl: { label: 'Polski', flag: '🇵🇱' },
  en: { label: 'English', flag: '🇬🇧' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  no: { label: 'Norsk', flag: '🇳🇴' },
}

export function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const locale = useLocale() as Locale
  const t = useTranslations('nav')
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Close the dropdown when clicking outside.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', onClick)
      return () => document.removeEventListener('mousedown', onClick)
    }
  }, [open])

  function switchTo(next: Locale) {
    if (next === locale) {
      setOpen(false)
      return
    }
    router.replace(pathname, { locale: next })
    setOpen(false)
  }

  const current = LANGUAGES[locale]

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('language')}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={
          variant === 'desktop'
            ? 'flex items-center gap-1.5 h-9 px-3 rounded-lg border border-white/10 text-white/60 hover:text-white hover:border-white/25 text-[12.5px] font-semibold transition-all duration-200'
            : 'flex items-center justify-between w-full px-4 py-3 rounded-xl text-[15px] font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all'
        }
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="tracking-wide uppercase">{locale}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className={
              variant === 'desktop'
                ? 'absolute top-full right-0 mt-2 min-w-[160px] py-1.5 rounded-xl bg-ink-2 border border-white/10 shadow-2xl z-[210] list-none'
                : 'mt-2 rounded-xl bg-ink-3 border border-white/10 overflow-hidden list-none'
            }
          >
            {routing.locales.map((code) => {
              const lang = LANGUAGES[code]
              const isActive = code === locale
              return (
                <li key={code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={isActive}
                    onClick={() => switchTo(code)}
                    className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-[13px] text-left transition-colors ${
                      isActive
                        ? 'text-lime bg-lime/5'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span className="flex-1">{lang.label}</span>
                    {isActive && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
