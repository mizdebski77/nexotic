import { useTranslations } from 'next-intl'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

// Step icons stay here; text comes from translations.
const PROCESS_ICONS = [
  { num: '01', iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { num: '02', iconPath: 'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { num: '03', iconPath: 'M16 18l6-6-6-6M8 6L2 12l6 6' },
  { num: '04', iconPath: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3' },
] as const

export function ProcessSection() {
  const t = useTranslations('process')
  return (
    <section className="bg-white border-t border-neutral-200 py-20 xl:py-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-14 xl:gap-16 items-start">
          <AnimatedSection direction="left">
            <SectionLabel dark>{t('label')}</SectionLabel>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-[-1px] text-neutral-900 mb-4 leading-[1.1]">
              {t('title')}
            </h2>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-6">
              {t('subtitle')}
            </p>
            <Button href="/proces" variant="outline-dark">{t('ctaConsultation')}</Button>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.2} className="relative">
            <div className="absolute top-[22px] left-[22px] right-[22px] h-px bg-neutral-200 hidden xl:block"/>
            <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 relative z-10">
              {PROCESS_ICONS.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="flex flex-col items-start xl:items-center xl:text-center group">
                    <div className="w-11 h-11 rounded-full border border-neutral-200 bg-white flex items-center justify-center mb-4 group-hover:border-lime group-hover:bg-lime/5 transition-all duration-200">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={step.iconPath}/>
                      </svg>
                    </div>
                    <div className="text-[10px] font-bold text-lime tracking-[0.5px] mb-1.5">{step.num}</div>
                    <h3 className="text-[14.5px] font-bold text-neutral-900 mb-1.5 tracking-tight">{t(`items.${step.num}.title`)}</h3>
                    <p className="text-[12.5px] text-neutral-500 leading-relaxed">{t(`items.${step.num}.description`)}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
