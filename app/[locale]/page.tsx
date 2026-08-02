import { Hero }             from '@/components/sections/Hero'
import { MarqueeBand }      from '@/components/sections/Marquee'
import { Services }         from '@/components/sections/Services'
import { Stats }            from '@/components/sections/Stats'
import { ProcessSection }   from '@/components/sections/Process'
import { PortfolioSection } from '@/components/sections/Portfolio'
import { Testimonials }     from '@/components/sections/Testimonials'

// Single Responsibility: homepage composes section components
export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <Services />
      <Stats />
      <ProcessSection />
      <PortfolioSection />
      <Testimonials />
    </>
  )
}
