import { STATS } from '@/lib/data'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export function Stats() {
  return (
    <section className="bg-white border-t border-neutral-200 py-14 xl:py-16">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-2 divide-y xl:divide-y-0 xl:divide-x divide-neutral-200">
          {STATS.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-4 px-0 xl:px-8 py-6 xl:py-0 first:pl-4 last:pr-0 group">
                <div className="w-[46px] h-[46px] min-w-[46px] rounded-xl border border-neutral-200 flex items-center justify-center group-hover:border-lime/40 group-hover:bg-lime/5 transition-all duration-200">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={stat.iconPath}/>
                  </svg>
                </div>
                <div>
                  <div className="text-3xl xl:text-4xl font-extrabold text-neutral-900 tracking-[-1.5px] leading-none">{stat.number}</div>
                  <div className="text-[13px] text-neutral-500 mt-1 leading-snug">{stat.label}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
