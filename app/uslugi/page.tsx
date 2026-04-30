import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Strony internetowe',
    desc: 'Twoja strona to pierwszy kontakt z klientem. Tworzymy strony, które robią dobre pierwsze wrażenie i zamieniają je w zapytania ofertowe. Szybkie, responsywne, gotowe na Google.',
    outcomes: [
      'Więcej zapytań od klientów',
      'Wyższa pozycja w Google',
      'Strona, która działa na każdym urządzeniu',
      'Gotowa do edycji bez programisty',
    ],
    cta: 'Chcę nową stronę',
  },
  {
    num: '02',
    title: 'Aplikacje mobilne',
    desc: 'iOS i Android budowane tak, żeby użytkownicy wracali. Zaczynamy od prototypu, który klikasz i testujesz — zanim napiszemy linijkę kodu.',
    outcomes: [
      'Aplikacja w App Store i Google Play',
      'Prototyp gotowy w 2 tygodnie',
      'Użytkownicy, którzy wracają',
      'Pełna integracja z Twoim systemem',
    ],
    cta: 'Chcę aplikację mobilną',
  },
  {
    num: '03',
    title: 'Automatyzacje AI',
    desc: 'Ile godzin tygodniowo Twój zespół traci na powtarzalne zadania? Wdrażamy AI, które przejmuje tę pracę. Bez błędów, bez przerw, bez urlopu.',
    outcomes: [
      'Nawet 30h zaoszczędzonych tygodniowo',
      'Zero błędów w powtarzalnych procesach',
      'Automatyczne raporty i powiadomienia',
      'AI, które uczy się Twojego biznesu',
    ],
    cta: 'Chcę automatyzację',
  },
  {
    num: '04',
    title: 'Systemy i integracje',
    desc: 'Twój CRM nie gadał z płatnościami? API nie współpracowało z resztą systemu? Łączymy wszystko w jeden ekosystem, który po prostu działa.',
    outcomes: [
      'Wszystkie narzędzia w jednym miejscu',
      'Koniec z ręcznym przepisywaniem danych',
      'Płatności, CRM, e-mail — zsynchronizowane',
      'System, który rośnie razem z firmą',
    ],
    cta: 'Chcę integrację systemów',
  },
]

export default function UslugiPage() {
  return (
    <div className="bg-white pt-[68px]">
      {/* Hero */}
      <div className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-site mx-auto">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-lime mb-4">
            Co robimy
          </div>
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-[-2.5px] text-white mb-5 leading-[1.04]">
            Technologia, która<br />
            <span className="text-lime">pracuje na Twój biznes</span>
          </h1>
          <p className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed">
            Dobieramy rozwiązanie do Twojego celu — nie odwrotnie.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-site mx-auto px-6 md:px-10 py-20">
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {services.map((svc) => (
            <StaggerItem key={svc.num}>
              <div className="group flex flex-col h-full p-10 border border-neutral-200 rounded-2xl hover:border-lime/40 hover:shadow-[0_0_48px_rgba(200,241,53,0.06)] transition-all duration-300">

                <div className="text-[11px] font-bold text-lime tracking-[1px] mb-5">{svc.num}</div>

                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-4">
                  {svc.title}
                </h2>

                <p className="text-[15px] text-neutral-500 leading-relaxed mb-8">
                  {svc.desc}
                </p>

                {/* Outcomes — co zyskujesz */}
                <ul className="flex flex-col gap-3 mb-10 mt-auto">
                  {svc.outcomes.map(o => (
                    <li key={o} className="flex items-start gap-3 text-[14px] text-neutral-700">
                      <span className="w-5 h-5 min-w-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#c8f135" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>

                {/* Per-service CTA */}
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-neutral-500 hover:text-lime transition-colors duration-200 group/link"
                >
                  {svc.cta}
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Global CTA */}
        <div className="text-center mt-16 pt-16 border-t border-neutral-100">
          <p className="text-neutral-400 text-[15px] mb-6">Nie wiesz od czego zacząć?</p>
          <Button href="/kontakt" variant="lime" size="lg">
            Powiedz nam, czego potrzebujesz →
          </Button>
        </div>
      </div>
    </div>
  )
}