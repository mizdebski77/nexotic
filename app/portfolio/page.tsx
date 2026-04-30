import { PROJECTS } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

const allProjects = [
  ...PROJECTS,
  { name:'LogiSmart', type:'System B2B', tags:['React','PostgreSQL'], year:'2023', description:'Platforma do automatyzacji procesow logistycznych.', bgClass:'bg-[#100a00]', accentColor:'#c4922d' },
  { name:'GreenSpace', type:'Strona + CMS', tags:['Next.js','Sanity'], year:'2023', description:'Strona korporacyjna z rozbudowanym blogiem.', bgClass:'bg-[#0a1a0a]', accentColor:'#7bc67e' },
]

export default function PortfolioPage() {
  return (
    <div className="bg-white pt-[68px]">
      <PageHero eyebrow="Nasze realizacje" title="Projekty, z ktorych" accent="jestesmy dumni" subtitle="80+ zrealizowanych projektow dla firm z roznych branzy."/>
      <div className="max-w-site mx-auto px-6 md:px-10 py-20">
        <StaggerContainer className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {allProjects.map((p, i) => (
            <StaggerItem key={i}>
              <div className="group border border-neutral-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className={`${p.bgClass} h-48 flex items-center justify-center`}>
                  <span className="text-4xl font-extrabold opacity-10" style={{color:p.accentColor}}>{p.name[0]}</span>
                </div>
                <div className="p-6">
                  <div className="text-[11px] font-bold text-lime tracking-[1px] mb-1.5">{p.year} - {p.type}</div>
                  <h3 className="text-[18px] font-bold text-neutral-900 tracking-tight mb-2 group-hover:text-lime transition-colors">{p.name}</h3>
                  <p className="text-[13.5px] text-neutral-500 leading-relaxed mb-4">{p.description}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tags.map(t=><span key={t} className="text-[11px] bg-neutral-100 text-neutral-500 px-2.5 py-0.5 rounded-md font-medium">{t}</span>)}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  )
}
