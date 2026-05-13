import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

// Step IDs + icons stay constant; titles, durations, descriptions come from translations.
const STEPS = [
  { num: '01', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { num: '02', icon: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { num: '03', icon: 'M16 18l6-6-6-6M8 6L2 12l6 6' },
  { num: '04', icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3' },
] as const

export default function ProcesPage({
  params,
}: {
  params: { locale: string }
}) {
  setRequestLocale(params.locale)
  const t = useTranslations('procesPage')

  return (
    <div className="bg-white pt-[68px]">
      {/* Hero */}
      <div className="bg-ink py-20 px-6 md:px-10 relative">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.18]">
          <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
            {[80, 160, 240, 320, 400, 480].map((y, i) => (
              <path key={y} d={`M0,${y} Q${180 + i * 20},${y - 60} ${380 + i * 10},${y + 40} T700,${y - 20}`} stroke="#c8f135" strokeWidth={0.9 - i * 0.1} fill="none" />
            ))}
            {[[100,60],[320,150],[500,95],[180,270],[440,330],[80,420]].map(([cx,cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 2.5 : 1.5} fill="#c8f135" opacity={0.5 - i * 0.05} />
            ))}
          </svg>
        </div>
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">{t('heroEyebrow')}</div>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-[-2.5px] text-white mb-5 leading-[1.04]">
            {t('heroTitle1')}<br />
            <span className="text-lime" style={{ lineHeight: '90px' }}>{t('heroAccent')}</span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">{t('heroSubtitle')}</p>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20">
        <div className="relative">
          <div className="absolute left-[19px] top-8 bottom-8 w-px bg-neutral-200 hidden md:block" />
          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="flex gap-8 md:gap-12 pb-14 last:pb-0 relative">
                  <div className="hidden md:flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center z-10 shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={step.icon} />
                      </svg>
                    </div>
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[11px] font-bold text-lime tracking-[1px] uppercase">{step.num}</span>
                      <span className="text-[12px] text-neutral-400 bg-neutral-100 px-3 py-1 rounded-full font-medium">
                        {t(`steps.${step.num}.duration`)}
                      </span>
                    </div>

                    <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-3">
                      {t(`steps.${step.num}.title`)}
                    </h2>

                    <p className="text-[15px] text-neutral-500 leading-relaxed">
                      {t(`steps.${step.num}.desc`)}
                    </p>

                    {i < STEPS.length - 1 && (
                      <div className="mt-10 border-t border-neutral-100 md:hidden" />
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-16 pt-16 border-t border-neutral-100">
          <div className="bg-ink rounded-2xl px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.1)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              <p className="text-white/40 text-[13px] font-medium uppercase tracking-[1px] mb-2">{t('nextStep')}</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {t('ctaTitle')}
              </h3>
            </div>

            <div className="relative z-10 shrink-0">
              <Button href="/kontakt" variant="lime" size="lg">{t('ctaButton')}</Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
