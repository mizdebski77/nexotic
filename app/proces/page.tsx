import { PROCESS_STEPS } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

export default function ProcesPage() {
  return (
    <div className="bg-white pt-[68px]">
      <PageHero eyebrow="Nasz proces" title="Prosto, jasno," accent="skutecznie" subtitle="Wiesz na kazdym etapie co sie dzieje z Twoim projektem."/>
      <div className="max-w-[860px] mx-auto px-6 md:px-10 py-20">
        <div className="flex flex-col">
          {PROCESS_STEPS.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.1} className="flex gap-8 pb-12 border-l-2 border-neutral-200 ml-5 pl-10 relative last:border-transparent">
              <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-lime flex items-center justify-center text-[11px] font-extrabold text-ink">{i+1}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold text-lime tracking-[1px]">{step.num}</span>
                  <span className="text-[12px] text-neutral-400 bg-neutral-100 px-2.5 py-0.5 rounded-full">{step.duration}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-3">{step.title}</h2>
                <p className="text-[15px] text-neutral-500 leading-relaxed">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-8 pt-12 border-t border-neutral-200">
          <p className="text-[16px] text-neutral-500 mb-6">Gotowy zeby zaczac?</p>
          <Button href="/kontakt" variant="lime" size="lg">Porozmawiajmy o projekcie</Button>
        </div>
      </div>
    </div>
  )
}
