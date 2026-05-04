import Link from 'next/link'
import Image from 'next/image'
import { PROJECTS } from '@/lib/data'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <Link href="/portfolio" className="group block">
      {/* Photo */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-100">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Result badge — top right */}
        {project.result && (
          <div className="absolute top-3 right-3 bg-lime text-ink text-[11px] font-bold px-2.5 py-1 rounded-lg">
            {project.result}
          </div>
        )}
        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="text-[15px] font-bold text-neutral-900 group-hover:text-lime transition-colors duration-200">
          {project.name}
        </h3>
        <span className="text-[11px] text-neutral-400 shrink-0 mt-0.5">{project.year}</span>
      </div>

      <p className="text-[12px] font-medium text-lime mb-2">{project.type}</p>

      <p className="text-[13.5px] text-neutral-500 leading-relaxed line-clamp-2">
        {project.description}
      </p>
    </Link>
  )
}

export function PortfolioSection() {
  return (
    <section className="bg-white border-t border-neutral-200 py-20 xl:py-24">
      <div className="max-w-site mx-auto px-6 md:px-10">
        <AnimatedSection className="flex items-end justify-between mb-10 gap-5">
          <div>
            <SectionLabel dark>Nasze realizacje</SectionLabel>
            <h2 className="text-3xl md:text-4xl xl:text-[44px] font-extrabold tracking-[-1.5px] text-neutral-900 leading-[1.08]">
              Projekty, z których jesteśmy dumni
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group shrink-0 flex items-center gap-1.5 text-[13.5px] font-semibold text-neutral-700 border border-neutral-200 px-4 py-2.5 rounded-lg hover:border-neutral-400 hover:text-neutral-900 transition-all duration-200 whitespace-nowrap"
          >
            Zobacz wszystkie realizacje
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-6">
          {PROJECTS.map((project, i) => (
            <StaggerItem key={i}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
