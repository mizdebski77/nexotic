import { TESTIMONIALS } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export function Testimonials() {
  return (
    <section className="bg-white border-t border-neutral-200 py-20 xl:py-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <AnimatedSection className="flex items-end justify-between mb-10 gap-5">
          <div>
            <SectionLabel dark>Opinie klientów</SectionLabel>
            <h2 className="text-3xl md:text-4xl xl:text-[44px] font-extrabold tracking-[-1.5px] text-neutral-900 leading-[1.08]">
              Zaufanie, które budujemy każdego dnia
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            {['←','→'].map(arrow=>(
              <button key={arrow} className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 text-sm hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-200 active:scale-95">
                {arrow}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <div className="group p-0">
                <p className="text-[14px] text-neutral-500 leading-[1.75] mb-5 italic">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-[12px] font-bold text-neutral-500 group-hover:bg-lime group-hover:text-ink transition-all duration-200">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-bold text-neutral-900">{t.name}</div>
                    <div className="text-[12px] text-neutral-400">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
