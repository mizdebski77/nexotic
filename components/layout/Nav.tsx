'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

// Nav link definitions — labels come from translations at render time.
const LINKS = [
  { href: '/', key: 'home' as const },
  { href: '/uslugi', key: 'services' as const },
  { href: '/portfolio', key: 'portfolio' as const },
  { href: '/o-nas', key: 'about' as const },
  { href: '/proces', key: 'process' as const },
  { href: '/kontakt', key: 'contact' as const },
]

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="w-5 h-4 flex flex-col justify-between relative">
      <span className={['block h-0.5 bg-white rounded-full transition-all duration-300 origin-center', open ? 'rotate-45 translate-y-[7px]' : ''].join(' ')} />
      <span className={['block h-0.5 bg-white rounded-full transition-all duration-300', open ? 'opacity-0 scale-x-0' : ''].join(' ')} />
      <span className={['block h-0.5 bg-white rounded-full transition-all duration-300 origin-center', open ? '-rotate-45 -translate-y-[9px]' : ''].join(' ')} />
    </div>
  )
}

function DesktopLinks({ path }: { path: string }) {
  const t = useTranslations('nav')
  return (
    <ul className="hidden md:flex items-center gap-0 list-none">
      {LINKS.map(({ href, key }) => {
        const active = path === href
        return (
          <li key={href}>
            <Link href={href} className={['flex items-center h-[68px] px-4 text-[13.5px] font-medium border-b-2 transition-colors duration-200', active ? 'text-lime border-lime' : 'text-white/50 border-transparent hover:text-white hover:border-white/20'].join(' ')}>
              {t(key)}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

function MobileDrawer({ open, path, onClose }: { open: boolean; path: string; onClose: () => void }) {
  const t = useTranslations('nav')
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div key="backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm md:hidden" onClick={onClose} />
          <motion.div key="drawer" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 z-[160] w-[80vw] max-w-[320px] bg-ink-2 border-l border-white/[0.08] flex flex-col md:hidden">
            <div className="flex items-center justify-between px-6 h-[68px] border-b border-white/[0.07]">
              <Link href="/" onClick={onClose}><Logo size="sm" /></Link>
              <button onClick={onClose} className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-200">✕</button>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="flex flex-col gap-1 list-none">
                {LINKS.map(({ href, key }, i) => {
                  const active = path === href
                  return (
                    <motion.li key={href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.055, duration: 0.3 }}>
                      <Link href={href} onClick={onClose} className={['flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all duration-200 group', active ? 'bg-lime/10 text-lime' : 'text-white/60 hover:text-white hover:bg-white/5'].join(' ')}>
                        <span>{t(key)}</span>
                        <span className={['text-sm transition-transform duration-200 group-hover:translate-x-1', active ? 'text-lime' : 'text-white/20'].join(' ')}>→</span>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/[0.07]">
                <div className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/20 mb-3 px-4">{t('language')}</div>
                <LanguageSwitcher variant="mobile" />
              </div>
            </nav>
            <div className="px-4 py-6 border-t border-white/[0.07]">
              <Link href="/kontakt" onClick={onClose} className="flex items-center justify-center gap-2 w-full bg-lime text-ink font-bold py-3.5 rounded-xl text-[15px] hover:bg-lime-hover transition-colors duration-200">
                {t('ctaTalk')}
              </Link>
              <p className="text-center text-[12px] text-white/25 mt-3">Nexotic.contact@gmail.com</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Nav() {
  const path = usePathname()
  const t = useTranslations('nav')
  const [open, setOpen] = useState(false)

  useEffect(() => { setOpen(false) }, [path])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] bg-ink/90 backdrop-blur-xl border-b border-white/[0.07]">
        <div className="max-w-site mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0 group">
            <div className="transition-opacity duration-200 group-hover:opacity-80">
              <Logo size="sm" />
            </div>
          </Link>

          <DesktopLinks path={path} />

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden md:block">
              <LanguageSwitcher variant="desktop" />
            </div>
            <Button href="/kontakt" variant="lime" size="sm" className="hidden md:inline-flex text-[13.5px]">
              {t('ctaTalk')}
            </Button>
            <button onClick={() => setOpen(v => !v)} className="md:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-white/25 transition-colors duration-200" aria-label={t('openMenu')} aria-expanded={open}>
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>
      </nav>
      <MobileDrawer open={open} path={path} onClose={() => setOpen(false)} />
    </>
  )
}
