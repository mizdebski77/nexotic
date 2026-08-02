import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

// Metric numbers are universal; only the labels translate.
const METRICS = [
  { key: 'projects',   n: '50+' },
  { key: 'clients',    n: '30+' },
  { key: 'experience', n: '5' },
  { key: 'countries',  n: '5' },
  { key: 'happy',      n: '100%' },
  { key: 'response',   n: '6h' },
] as const

export default function ONasPage({
  params,
}: {
  params: { locale: string }
}) {
  setRequestLocale(params.locale)
  const t = useTranslations('aboutPage')

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
            <span className="text-lime">{t('heroAccent')}</span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">{t('heroSubtitle')}</p>
        </div>
      </div>

      {/* Story */}
      <div className="max-w-site mx-auto px-6 md:px-10 py-20">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-24 items-start mb-20">
          <AnimatedSection>
            <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">{t('storyLabel')}</div>
            <h2 className="text-3xl xl:text-4xl font-extrabold tracking-[-1px] text-neutral-900 mb-6 leading-[1.1]">
              {t('storyTitle')}
            </h2>
            <p className="text-[15px] text-neutral-500 leading-relaxed mb-5">{t('storyP1')}</p>
            <p className="text-[15px] text-neutral-500 leading-relaxed mb-8">
              {t('storyP2Before')}
              <span className="text-neutral-800 font-medium">{t('storyP2Quote')}</span>
              {t('storyP2After')}
            </p>
            <Button href="/kontakt" variant="lime" size="md">{t('storyCta')}</Button>
          </AnimatedSection>

          {/* Metrics grid */}
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {METRICS.map((m) => (
              <StaggerItem key={m.key}>
                <div className="p-6 border border-neutral-200 rounded-2xl hover:border-lime/40 hover:shadow-[0_0_32px_rgba(200,241,53,0.06)] transition-all duration-300">
                  <div className="text-3xl font-extrabold text-lime tracking-tight mb-1 leading-none">{m.n}</div>
                  <div className="text-[13px] text-neutral-400 mt-1">{t(`metrics.${m.key}`)}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-20 pt-16 border-t border-neutral-100 text-center">
          <p className="text-neutral-400 text-[15px] mb-6">{t('bottomPrompt')}</p>
          <Button href="/proces" variant="outline-dark" size="lg">{t('bottomCta')}</Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
