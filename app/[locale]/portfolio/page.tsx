'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { PageHero } from '@/components/ui/PageHero'
import { StaggerContainer, StaggerItem, AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

// Stable project metadata — names, years, images stay constant across locales.
// Type and description come from `portfolioPage.projects.<key>` in messages.
const EXTRA_PROJECTS = [
  { key: 'meius',       name: 'Meius',           year: '2026', image: '/projects/meius.png' },
  { key: 'greenhouse',  name: 'GreenhouseControl', year: '2026', image: '/projects/greenhouse.png' },
  { key: 'autoexpert',  name: 'AutoExpert',      year: '2025', image: '/projects/autoexpert.png' },
  { key: 'estatelink',  name: 'EstateLink',      year: '2026', image: '/projects/estatelink.png' },
  { key: 'ingreso',     name: 'Ingreso',         year: '2026', image: '/projects/ingreso.png' },
  { key: 'lawyerbox',   name: 'LawyerBox',       year: '2025', image: '/projects/lawyerbox.png' },
  { key: 'stach',       name: 'Mirosław Stach',  year: '2024', image: '/projects/stach.png' },
  { key: 'paulownie',   name: 'Polskie Paulownie', year: '2023', image: '/projects/paulownie.png' },
  { key: 'sbpracownia', name: 'SB pracownia',    year: '2025', image: '/projects/SZWA.png' },
] as const

function ProjectCard({
  project,
  onImageClick,
}: {
  project: (typeof EXTRA_PROJECTS)[number]
  onImageClick: (src: string, alt: string) => void
}) {
  const t = useTranslations('portfolioPage.projects')
  return (
    <div className="group block">
      <div
        className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-neutral-100 cursor-zoom-in"
        onClick={(e) => {
          e.preventDefault()
          onImageClick(project.image, project.name)
        }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="4.5" stroke="white" strokeWidth="1.5"/>
              <path d="M10.5 10.5L14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M6.5 4.5v4M4.5 6.5h4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-2 mb-1.5">
        <h3 className="text-[15px] font-bold text-neutral-900 group-hover:text-lime transition-colors duration-200">
          {project.name}
        </h3>
        <span className="text-[11px] text-neutral-400 shrink-0 mt-0.5">{project.year}</span>
      </div>
      <p className="text-[12px] font-semibold text-lime mb-2">{t(`${project.key}.type`)}</p>
      <p className="text-[13.5px] text-neutral-500 leading-relaxed">
        {t(`${project.key}.description`)}
      </p>
    </div>
  )
}

export default function PortfolioPage() {
  const t = useTranslations('portfolioPage')
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="bg-white pt-[68px]">
      <PageHero
        eyebrow={t('heroEyebrow')}
        title={t('heroTitle')}
        accent={t('heroAccent')}
        subtitle={t('heroSubtitle')}
      />

      <section className="bg-white border-t border-neutral-200 py-20 xl:py-24">
        <div className="max-w-site mx-auto px-6 md:px-10">
          <AnimatedSection className="flex items-end justify-between mb-10 gap-5">
            <div>
              <SectionLabel dark>{t('sectionLabel')}</SectionLabel>
              <h2 className="text-3xl md:text-4xl xl:text-[44px] font-extrabold tracking-[-1.5px] text-neutral-900 leading-[1.08]">
                {t('sectionTitle')}
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
            {EXTRA_PROJECTS.map((project) => (
              <StaggerItem key={project.key}>
                <ProjectCard
                  project={project}
                  onImageClick={(src, alt) => setLightbox({ src, alt })}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
