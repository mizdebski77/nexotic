import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

// Service icons stay here (visual data, not translatable). Text lives in
// messages/<locale>.json under `services.items.<key>`.
const SERVICE_ICONS = [
  { key: 'web',       icon: 'M3 3h18v18H3V3zm0 6h18M9 21V9' },
  { key: 'mobile',    icon: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 16h.01' },
  { key: 'ai',        icon: 'M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
  { key: 'systems',   icon: 'M16 18l6-6-6-6M8 6L2 12l6 6' },
  { key: 'chatbots',  icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
] as const

export function Services() {
  const t = useTranslations('services')
  return (
    <section className="bg-white py-20 xl:py-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <AnimatedSection className="text-center mb-12">
          <SectionLabel dark>{t('label')}</SectionLabel>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-[-1.5px] text-neutral-900 mb-3">
            {t('title')}
          </h2>
          <p className="text-[15px] text-neutral-500">{t('subtitle')}</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 overflow-hidden gap-4">
          {SERVICE_ICONS.map((svc) => (
            <StaggerItem key={svc.key} className='border border-neutral-200 rounded-2xl'>
              <Link href="/uslugi" className="group block p-7 xl:p-8 rounded-2xl hover:bg-neutral-50 transition-colors duration-200 relative overflow-hidden h-full">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                <div className="w-[52px] h-[52px] rounded-xl border border-neutral-200 flex items-center justify-center mb-5 group-hover:border-lime/40 group-hover:bg-lime/5 transition-all duration-200">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    <path d={svc.icon}/>
                  </svg>
                </div>
                <h3 className="text-[17px] font-bold text-neutral-900 mb-2.5 tracking-tight">{t(`items.${svc.key}.title`)}</h3>
                <p className="text-[13.5px] text-neutral-500 leading-relaxed mb-5">{t(`items.${svc.key}.description`)}</p>
                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 text-sm group-hover:bg-lime group-hover:border-lime group-hover:text-ink transition-all duration-200">
                  <div className='mb-[4px]'> → </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
