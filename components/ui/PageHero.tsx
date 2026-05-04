'use client'
import { motion } from 'framer-motion'
import { SectionLabel } from './SectionLabel'

interface Props {
  eyebrow: string
  title: string
  accent: string
  subtitle: string
}

export function PageHero({ eyebrow, title, accent, subtitle }: Props) {
  return (
    <section className="bg-ink py-20 px-6 md:px-10">
      <div className="max-w-site mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>{eyebrow}</SectionLabel>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-[-2.5px] leading-[1.04] text-white mb-5">
            {title}<br />
            <span className="text-lime">{accent}</span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}
