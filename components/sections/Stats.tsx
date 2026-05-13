import { useTranslations } from 'next-intl'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

// Numbers + icons are universal; labels come from translations.
const STAT_ITEMS = [
  { key: 'projects',   number: '50+',   iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { key: 'clients',    number: '30+',   iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { key: 'hoursSaved', number: '3000+', iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { key: 'growth',     number: '120%',  iconPath: 'M22 7L13.5 15.5l-5-5L2 17M16 7h6v6' },
] as const

export function Stats() {
  const t = useTranslations('stats.items')
  return (
    <section className="bg-white border-t border-neutral-200 py-14 xl:py-16">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-2 divide-y xl:divide-y-0 xl:divide-x divide-neutral-200">
          {STAT_ITEMS.map((stat) => (
            <StaggerItem key={stat.key}>
              <div className="flex items-center gap-4 px-0 xl:px-8 py-6 xl:py-0 first:pl-4 last:pr-0 group">
                <div className="w-[46px] h-[46px] min-w-[46px] rounded-xl border border-neutral-200 flex items-center justify-center group-hover:border-lime/40 group-hover:bg-lime/5 transition-all duration-200">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.iconPath}/>
                  </svg>
                </div>
                <div>
                  <div className="text-3xl xl:text-4xl font-extrabold text-neutral-900 tracking-[-1.5px] leading-none">{stat.number}</div>
                  <div className="text-[13px] text-neutral-500 mt-1 leading-snug">{t(stat.key)}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
