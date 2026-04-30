'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import heroBg from '../../assets/hero.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768


// ── Laptop + Phone mock — Single Responsibility ──
function HeroMockup() {
  return (
    <div className="relative flex justify-end items-end ">
      {/* Laptop */}
    <img src = {heroBg.src} alt='Hero' className=' max-w-[auto] xl:md:min-w-[900px]'/>
    </div>
  )
}

// ── Hero Section ──
export function Hero() {
  return (
    <section className="bg-ink pt-[68px] min-h-screen relative overflow-hidden flex items-center">
      {/* bg lines */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.18]">
        <svg viewBox="0 0 600 600" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
          {[80,160,240,320,400,480].map((y,i)=>(
            <path key={y} d={`M0,${y} Q${180+i*20},${y-60} ${380+i*10},${y+40} T700,${y-20}`}
              stroke="#c8f135" strokeWidth={0.9-i*0.1} fill="none"/>
          ))}
          {[[100,60],[320,150],[500,95],[180,270],[440,330],[80,420]].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r={i%2===0?2.5:1.5} fill="#c8f135" opacity={0.5-i*0.05}/>
          ))}
        </svg>
      </div>

      <div className="max-w-[1640px] mx-auto px-6 md:px-10 grid xl:grid-cols-2 gap-10 xl:gap-14 items-center py-16 md:py-20 relative z-10">
        {/* Left */}
        <div>
          <motion.div {...fadeUp(0.05)}>
            <div className="inline-flex items-center gap-2 border border-lime-border bg-lime-dim px-3.5 py-1.5 rounded-md text-[11px] font-bold text-lime uppercase tracking-[1.2px] mb-7">
              <span className="w-1.5 h-1.5 bg-lime rounded-full animate-blink"/>
              Tworzymy cyfrowe rozwiązania, które działają
            </div>
          </motion.div>
           


          <motion.h1 {...fadeUp(0.15)} style={{ lineHeight: isMobile ? '40px' : '60px' }} className="leading-[400px] text-3xl md:text-2xl xl:text-[40px] 2xl:text-5xl  font-extrabold    text-white mb-5" >
          Aautomatyzacje AI, strony, aplikacje  które realnie<br/>
            <span className="text-lime"> zwiększają przychody<br></br> Twojej firmy</span>
          </motion.h1>

          <motion.p {...fadeUp(0.25)} className="text-[15px] xl:text-base text-white/50 max-w-[440px] mb-8">
            Projektujemy i wdrażamy rozwiązania cyfrowe dla firm, które chcą rosnąć — nie tylko dobrze wyglądać w internecie.
          </motion.p>

          <motion.div {...fadeUp(0.35)} className="flex gap-3 flex-wrap mb-9">
            <Button href="/usługi" variant="lime" size="md">Omów swój projekt bezpłatnie →</Button>
            <Button href="/portfolio" variant="outline-white" size="md">Zobacz realizacje ›</Button>
          </motion.div>

          <motion.div {...fadeUp(0.45)} className="flex items-center gap-3.5">
            <div className="flex">
              {['AK','MN','PW','JS'].map((ini,i)=>(
                <div key={ini} className="w-8 h-8 rounded-full border-2 border-ink bg-ink-3 flex items-center justify-center text-[10px] font-bold text-lime"
                  style={{marginLeft: i===0 ? 0 : -10}}>
                  {ini}
                </div>
              ))}
            </div>
            <div>
              <div className="text-lime text-xs tracking-[1px]">★★★★★ 5.0</div>
              <div className="text-[12.5px] text-white/45">
                Zaufało nam <strong className="text-white">30+ firm</strong> z różnych branż
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — mockup */}
        <motion.div initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.3,ease:[0.22,1,0.36,1]}}>
          <HeroMockup/>
        </motion.div>
      </div>
    </section>
  )
}
