import Link from 'next/link'
import { PROCESS_STEPS } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export function ProcessSection() {
  return (
    <section className="bg-white border-t border-neutral-200 py-20 xl:py-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-14 xl:gap-20 items-start">
          <AnimatedSection direction="left">
            <SectionLabel dark>Nasz proces</SectionLabel>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-extrabold tracking-[-1px] text-neutral-900 mb-4 leading-[1.1]">
              Prosto, jasno,<br/>skutecznie
            </h2>
            <p className="text-[14px] text-neutral-500 leading-relaxed mb-6">
              Przejrzysty proces, dzięki któremu wiesz na każdym etapie, co się dzieje z Twoim projektem.
            </p>
            <Button href="/proces" variant="outline-dark">Dowiedz się więcej o nas →</Button>
          </AnimatedSection>

          {/* Timeline */}
          <AnimatedSection delay={0.2} className="relative">
            {/* connector line */}
            <div className="absolute top-[22px] left-[22px] right-[22px] h-px bg-neutral-200 hidden xl:block"/>
            <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-4 relative z-10">
              {PROCESS_STEPS.map((step) => (
                <StaggerItem key={step.num}>
                  <div className="flex flex-col items-start xl:items-center xl:text-center group">
                    <div className="w-11 h-11 rounded-full border border-neutral-200 bg-white flex items-center justify-center mb-4 group-hover:border-lime group-hover:bg-lime/5 transition-all duration-200">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8f135" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d={step.iconPath}/>
                      </svg>
                    </div>
                    <div className="text-[10px] font-bold text-lime tracking-[0.5px] mb-1.5">{step.num}</div>
                    <h3 className="text-[14.5px] font-bold text-neutral-900 mb-1.5 tracking-tight">{step.title}</h3>
                    <p className="text-[12.5px] text-neutral-500 leading-relaxed">{step.description}</p>
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
