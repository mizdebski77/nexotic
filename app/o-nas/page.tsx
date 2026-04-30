import { TEAM_MEMBERS } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

const metrics = [
  {n:'50+',l:'Projektow'},{n:'30+',l:'Klientow'},{n:'5',l:'Lat doswiadczenia'},
  {n:'5',l:'Krajow'},{n:'100%',l:'Zadowolonych klientow'},{n:'6h',l:'Czas odpowiedzi'},
]

export default function ONasPage() {
  return (
    <div className="bg-white pt-[68px]">
      <PageHero eyebrow="O nas" title="Jestesmy" accent="teamem budowniczych" subtitle="Laczymy design, inzynierie i AI, zeby tworzyc produkty, ktore naprawde dzialaja."/>
      <div className="max-w-site mx-auto px-6 md:px-10 py-20">
        <div className="grid xl:grid-cols-2 gap-16 items-start mb-20">
          <AnimatedSection>
            <h2 className="text-3xl xl:text-4xl font-extrabold tracking-[-1px] text-neutral-900 mb-6 leading-[1.1]">
              Dzialamy od 2021 roku i przez ten czas nauczylismy sie jednej waznej rzeczy.
            </h2>
            <p className="text-[15px] text-neutral-500 leading-relaxed mb-4">Nie liczy sie liczba linii kodu. Liczy sie to, czy produkt realnie pomaga Twoim klientom i czy Twoj biznes na nim zarabia.</p>
            <p className="text-[15px] text-neutral-500 leading-relaxed">Dlatego zaczynamy od zrozumienia Twojego biznesu, a dopiero potem siadamy do kodu.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map(m => (
              <StaggerItem key={m.l}>
                <div className="p-5 border border-neutral-200 rounded-xl hover:border-lime/40 transition-colors">
                  <div className="text-3xl font-extrabold text-lime tracking-tight mb-1">{m.n}</div>
                  <div className="text-[13px] text-neutral-500">{m.l}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        <div className="border-t border-neutral-200 pt-16">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 mb-10 text-center">Nasz zespol</h2>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map(m => (
              <StaggerItem key={m.name}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-ink flex items-center justify-center text-[18px] font-extrabold text-lime mx-auto mb-4 group-hover:bg-lime group-hover:text-ink transition-all duration-200">{m.initials}</div>
                  <div className="text-[15px] font-bold text-neutral-900 mb-1">{m.name}</div>
                  <div className="text-[13px] text-neutral-400">{m.role}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </div>
  )
}
