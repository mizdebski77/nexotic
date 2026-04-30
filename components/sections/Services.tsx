import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export function Services() {
  return (
    <section className="bg-white py-20 xl:py-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <AnimatedSection className="text-center mb-12">
          <SectionLabel dark >Co robimy</SectionLabel>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-[-1.5px] text-neutral-900 mb-3">
            Kompleksowe rozwiązania cyfrowe
          </h2>
          <p className="text-[15px] text-neutral-500">Od pomysłu, przez projekt, aż po wdrożenie i rozwój.</p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4   overflow-hidden gap-4">
          {SERVICES.map((svc, i) => (
            <StaggerItem key={i} className='border rounded-2xl'> 
              <Link href="/uslugi" className="group block p-7 xl:p-8 border-r border-b border-neutral-200 rounded-2xl last:border-r-0 [&:nth-child(2)]:xl:border-r [&:nth-child(4)]:border-r-0 hover:bg-neutral-50 transition-colors duration-200 relative overflow-hidden h-full">
                {/* lime accent bar on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                <div className="w-[52px] h-[52px] rounded-xl border border-neutral-200 flex items-center justify-center mb-5 group-hover:border-lime/40 group-hover:bg-lime/5 transition-all duration-200">
                  <svg width="22" height="22" viewBox={svc.viewBox ?? '0 0 24 24'} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-700 group-hover:text-neutral-900 transition-colors">
                    <path d={svc.icon}/>
                  </svg>
                </div>
                <h3 className="text-[17px] font-bold text-neutral-900 mb-2.5 tracking-tight">{svc.title}</h3>
                <p className="text-[13.5px] text-neutral-500 leading-relaxed mb-5">{svc.description}</p>
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
