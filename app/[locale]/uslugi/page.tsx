import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'

// Service IDs live in code; the visible text lives in messages/<locale>.json
// under `uslugiPage.items.<num>`.
const SERVICE_IDS = ['01', '02', '03', '04', '05'] as const

export default function UslugiPage({
  params,
}: {
  params: { locale: string }
}) {
  setRequestLocale(params.locale)
  const t = useTranslations('uslugiPage')

  return (
    <div className="bg-white pt-[68px]">
      {/* Hero */}
      <div className="bg-ink py-20 px-6 md:px-10 relative">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.18]">
          <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
            {[80, 160, 240, 320, 400, 480].map((y, i) => (
              <path
                key={y}
                d={`M0,${y} Q${180 + i * 20},${y - 60} ${380 + i * 10},${y + 40} T700,${y - 20}`}
                stroke="#c8f135"
                strokeWidth={0.9 - i * 0.1}
                fill="none"
              />
            ))}
            {[[100,60],[320,150],[500,95],[180,270],[440,330],[80,420]].map(([cx,cy], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={i % 2 === 0 ? 2.5 : 1.5}
                fill="#c8f135"
                opacity={0.5 - i * 0.05}
              />
            ))}
          </svg>
        </div>
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">
            {t('heroLabel')}
          </div>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-[-2.5px] text-white mb-5 leading-[1.04]">
            {t('heroTitle1')}
            <br />
            <span className="text-lime">{t('heroTitle2')}</span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
            {t('heroSubtitle')}
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-site mx-auto px-6 md:px-10 py-20">
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {SERVICE_IDS.map((num) => {
            const outcomes = (t.raw(`items.${num}.outcomes`) as string[]) ?? []
            return (
              <StaggerItem key={num}>
                <div className="group flex flex-col h-full p-10 border border-neutral-200 rounded-2xl hover:border-lime/40 hover:shadow-[0_0_48px_rgba(200,241,53,0.06)] transition-all duration-300">
                  <div className="text-[11px] font-bold text-lime tracking-[1px] mb-5">{num}</div>

                  <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-4">
                    {t(`items.${num}.title`)}
                  </h2>

                  <p className="text-[15px] text-neutral-500 leading-relaxed mb-8">
                    {t(`items.${num}.desc`)}
                  </p>

                  <ul className="flex flex-col gap-3 mb-10 mt-auto">
                    {outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-3 text-[14px] text-neutral-700">
                        <span className="w-5 h-5 min-w-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5l2 2 4-4" stroke="#c8f135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-neutral-500 hover:text-lime transition-colors duration-200 group/link"
                  >
                    {t(`items.${num}.cta`)}
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <div className="text-center mt-16 pt-16 border-t border-neutral-100">
          <p className="text-neutral-400 text-[15px] mb-6">{t('footerPrompt')}</p>
          <Button href="/kontakt" variant="lime" size="lg">{t('footerCta')}</Button>
        </div>
      </div>
    </div>
  )
}
