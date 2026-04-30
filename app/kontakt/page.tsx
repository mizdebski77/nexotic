'use client'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

const contactDetails = [
  { label:'E-mail',       value:'Nexotic.contact@gmail.com' },
  { label:'Telefon',      value:'+48 123 456 789' },
  { label:'Lokalizacja',  value:'Katowice - Polska - Praca zdalna' },
]

const services = ['Strona internetowa','Aplikacja mobilna','AI i Automatyzacja','Kompleksowe wdrozenie']

export default function KontaktPage() {
  return (
    <div className="bg-white pt-[68px]">
      <div className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-3">Kontakt</div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-2.5px] text-white mb-4 leading-[1.04]">
            Zacznijmy razem<br/><span className="text-lime">projekt</span>
          </h1>
          <p className="text-base text-white/50 max-w-md leading-relaxed">Bezplatna konsultacja. Odpiszemy w ciagu 24 godzin z konkretna propozycja.</p>
        </div>
      </div>

      <div className="max-w-site mx-auto px-6 md:px-10 py-20 grid xl:grid-cols-[1fr_1.3fr] gap-20 items-start">
        <AnimatedSection direction="left">
          <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-8">Dane kontaktowe</h2>
          {contactDetails.map(item => (
            <div key={item.label} className="mb-6 pb-6 border-b border-neutral-100 last:border-0">
              <div className="text-[11px] font-bold text-neutral-400 tracking-[1px] uppercase mb-1.5">{item.label}</div>
              <div className="text-[15px] font-semibold text-neutral-900">{item.value}</div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-10">
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight mb-7">Napisz do nas</h2>
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                {[{l:'Imie i nazwisko',p:'Jan Kowalski',t:'text'},{l:'E-mail',p:'jan@firma.pl',t:'email'}].map(f=>(
                  <div key={f.l}>
                    <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-[0.8px] mb-2">{f.l}</label>
                    <input type={f.t} placeholder={f.p} className="w-full bg-white border-[1.5px] border-neutral-200 rounded-xl px-4 py-3 text-[14px] text-neutral-900 outline-none focus:border-lime transition-colors font-[inherit]"/>
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-[0.8px] mb-2">Firma</label>
                <input type="text" placeholder="Nazwa firmy" className="w-full bg-white border-[1.5px] border-neutral-200 rounded-xl px-4 py-3 text-[14px] text-neutral-900 outline-none focus:border-lime transition-colors font-[inherit]"/>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-[0.8px] mb-2">Czego szukasz?</label>
                <select className="w-full bg-white border-[1.5px] border-neutral-200 rounded-xl px-4 py-3 text-[14px] text-neutral-900 outline-none focus:border-lime transition-colors font-[inherit] appearance-none">
                  <option value="">Wybierz usluge...</option>
                  {services.map(s=><option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-[0.8px] mb-2">Opisz projekt</label>
                <textarea rows={5} placeholder="Co chcesz zbudowac? Jaki problem rozwiazujemy?" className="w-full bg-white border-[1.5px] border-neutral-200 rounded-xl px-4 py-3 text-[14px] text-neutral-900 outline-none focus:border-lime transition-colors font-[inherit] resize-none"/>
              </div>
              <Button type="submit" variant="lime" size="lg" className="w-full">
                Wyslij wiadomosc
              </Button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
