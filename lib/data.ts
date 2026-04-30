// ── Single Responsibility: all static data in one place ──
import type { NavLink, Service, Stat, Project, ProcessStep, Testimonial, TeamMember } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { href: '/',          label: 'Strona główna' },
  { href: '/uslugi',    label: 'Usługi' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/o-nas',     label: 'O nas' },
  { href: '/proces',    label: 'Proces' },
  { href: '/kontakt',   label: 'Kontakt' },
]

export const SERVICES: Service[] = [
  {
    title: 'Strony internetowe',
    description: 'Tworzymy nowoczesne, szybkie i responsywne strony internetowe, które przyciągają uwagę i konwertują.',
    icon: 'M3 3h18v18H3V3zm0 6h18M9 21V9',
    viewBox: '0 0 24 24',
  },
  {
    title: 'Aplikacje mobilne',
    description: 'Projektujemy i rozwijamy aplikacje mobilne (iOS, Android), które zapewniają świetne doświadczenia użytkownika.',
    icon: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 16h.01',
    viewBox: '0 0 24 24',
  },
  {
    title: 'Automatyzacje AI',
    description: 'Wdrażamy inteligentne automatyzacje i rozwiązania AI, które oszczędzają czas, redukują koszty i skalują biznes.',
    icon: 'M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    viewBox: '0 0 24 24',
  },
  {
    title: 'Systemy i integracje',
    description: 'Tworzymy dedykowane systemy webowe oraz integracje z API, CRM, płatnościami i innymi narzędziami.',
    icon: 'M16 18l6-6-6-6M8 6L2 12l6 6',
    viewBox: '0 0 24 24',
  },
]

export const STATS: Stat[] = [
  { number: '80+',   label: 'Zrealizowanych projektów',                      iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { number: '50+',   label: 'Zadowolonych klientów',                          iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { number: '3000+', label: 'Godzin zaoszczędzonych dzięki automatyzacjom',   iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { number: '120%',  label: 'Średni wzrost wyników naszych klientów',          iconPath: 'M22 7L13.5 15.5l-5-5L2 17M16 7h6v6' },
]

export const PROJECTS: Project[] = [
  { name: 'GymFlow',          type: 'Aplikacja mobilna',   tags: ['Flutter','Firebase'],        year: '2024', description: 'Aplikacja fitness z AI trenerem i śledzeniem postępów.',         bgClass: 'bg-[#0d1a0d]', accentColor: '#c8f135' },
  { name: 'Horizon Estates',  type: 'Strona internetowa',  tags: ['Next.js','Tailwind CSS'],    year: '2024', description: 'Strona agencji nieruchomości z wirtualnymi spacerami.',          bgClass: 'bg-[#f0ece4]', accentColor: '#888',    isLight: true },
  { name: 'Finmate',          type: 'Aplikacja webowa',    tags: ['React','Node.js'],           year: '2023', description: 'Platforma finansów osobistych z auto-kategoryzowaniem.',        bgClass: 'bg-[#0a0a18]', accentColor: '#6366f1' },
  { name: 'AI Content Hub',   type: 'Platforma AI',        tags: ['OpenAI API','Next.js'],      year: '2024', description: 'System do generowania treści marketingowych z AI.',            bgClass: 'bg-[#0a0a0a]', accentColor: '#c8f135' },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { num:'01', title:'Analiza i strategia', description:'Poznajemy Twój biznes i cele, aby stworzyć najlepszy plan działania.',          duration:'1–2 tygodnie', iconPath:'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { num:'02', title:'Projekt i prototyp',  description:'Projektujemy UX/UI i tworzymy prototyp, który testujemy wspólnie.',            duration:'2–3 tygodnie', iconPath:'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { num:'03', title:'Tworzenie',           description:'Kodujemy, integrujemy i dbamy o każdy detal, aby wszystko działało bez zarzutu.', duration:'4–12 tygodni', iconPath:'M16 18l6-6-6-6M8 6L2 12l6 6' },
  { num:'04', title:'Wdrożenie i rozwój',  description:'Uruchamiamy projekt i wspieramy Cię w dalszym rozwoju produktu.',              duration:'Stale',        iconPath:'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3' },
]

export const TESTIMONIALS: Testimonial[] = [
  { quote: '"NEXOTIC stworzyła dla nas stronę, która nie tylko świetnie wygląda, ale przede wszystkim realnie zwiększyła liczbę zapytań od klientów."', name:'Marta K.',  role:'Marketing Manager, GreenSpace', initials:'MK' },
  { quote: '"Automatyzacja AI wdrożona przez NEXOTIC oszczędza nam kilkanaście godzin pracy tygodniowo. To był strzał w dziesiątkę!"',                   name:'Paweł R.',  role:'CEO, LogiSmart',                 initials:'PR' },
  { quote: '"Profesjonalne podejście, świetny kontakt i dowiezienie projektu na czas. Zdecydowanie polecam!"',                                           name:'Kamil W.',  role:'Founder, FixApp',                 initials:'KW' },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { initials:'AK', name:'Adam K.',   role:'CEO & Co-founder' },
  { initials:'MN', name:'Marta N.',  role:'Head of Design' },
  { initials:'PW', name:'Piotr W.',  role:'Lead Developer' },
  { initials:'JS', name:'Julia S.',  role:'AI Engineer' },
]
