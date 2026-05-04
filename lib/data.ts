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
    description: 'Strona, która nie tylko wygląda świetnie — ale zamienia odwiedzających w zapytania. Szybka, responsywna, zoptymalizowana pod konwersję.',
    icon: 'M3 3h18v18H3V3zm0 6h18M9 21V9',
    viewBox: '0 0 24 24',
  },
  {
    title: 'Aplikacje mobilne',
    description: 'iOS i Android budowane z myślą o użytkownikach Twoich klientów. Testujemy prototyp razem z Tobą, zanim napiszemy linijkę kodu.',
    icon: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 16h.01',
    viewBox: '0 0 24 24',
  },
  {
    title: 'Automatyzacje AI',
    description: 'Skończyły się godziny spędzone na powtarzalnych zadaniach. Wdrażamy AI, które pracuje za Twój zespół — 24/7, bez błędów.',
    icon: 'M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
    viewBox: '0 0 24 24',
  },
  {
    title: 'Systemy i integracje',
    description: 'Twoje narzędzia powinny ze sobą rozmawiać. Łączymy CRM, płatności i API w jeden sprawny ekosystem.',
    icon: 'M16 18l6-6-6-6M8 6L2 12l6 6',
    viewBox: '0 0 24 24',
  },
]

export const STATS: Stat[] = [
  { number: '50+',   label: 'Zrealizowanych projektów',                      iconPath: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
  { number: '30+',   label: 'Zadowolonych klientów',                          iconPath: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' },
  { number: '3000+', label: 'Godzin zaoszczędzonych dzięki automatyzacjom',   iconPath: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { number: '120%',  label: 'Średni wzrost wyników naszych klientów',          iconPath: 'M22 7L13.5 15.5l-5-5L2 17M16 7h6v6' },
]

export const PROJECTS: Project[] = [
  {
    name: 'GymFlow',
    type: 'Aplikacja mobilna',
    year: '2024',
    image: '/../assets/Projects/Denticare.png',
    description: 'Aplikacja fitness, która pomogła siłowni zwiększyć retencję członków o 40% dzięki spersonalizowanym planom treningowym i powiadomieniom.',
    result: '+40% retencji',
  },
  {
    name: 'Horizon Estates',
    type: 'Strona internetowa',
    year: '2024',
    image: '/../assets/Projects/Denticare.png',
    description: 'Nowa strona agencji nieruchomości przełożyła się na 3x więcej zapytań miesięcznie już w pierwszym kwartale po wdrożeniu.',
    result: '3x więcej zapytań',
  },
  {
    name: 'Finmate',
    type: 'Aplikacja webowa',
    year: '2023',
    image: '/../assets/Projects/Denticare.png',
    description: 'Platforma do zarządzania finansami osobistymi — 12 000 użytkowników w pierwszych 3 miesiącach bez budżetu marketingowego.',
    result: '12k użytkowników',
  },
  {
    name: 'AI Content Hub',
    type: 'Platforma AI',
    year: '2024',
    image: '/../assets/Projects/Denticare.png',
    description: 'System generowania treści skrócił czas produkcji contentu marketingowego z 8 godzin do 45 minut tygodniowo.',
    result: '8h → 45 min',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  { num:'01', title:'Analiza i strategia', description:'Poznajemy Twój biznes i cele, aby stworzyć najlepszy plan działania. Po tej rozmowie wiesz dokładnie, co i kiedy zrobimy',          duration:'1–2 tygodnie', iconPath:'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14v4l3 3' },
  { num:'02', title:'Projekt i prototyp',  description:'Projektujemy UX/UI i tworzymy prototyp, który testujemy wspólnie. Klikasz i testujesz zanim cokolwiek zostanie zakodowane',            duration:'2–3 tygodnie', iconPath:'M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z' },
  { num:'03', title:'Tworzenie',           description:'Kodujemy, integrujemy i dbamy o każdy detal, aby wszystko działało bez zarzutu. Pilnujemy każdego detalu — Ty możesz skupić się na biznesie', duration:'4–12 tygodni', iconPath:'M16 18l6-6-6-6M8 6L2 12l6 6' },
  { num:'04', title:'Wdrożenie i rozwój',  description:'Uruchamiamy projekt i wspieramy Cię w dalszym rozwoju produktu. Uruchamiamy i zostajemy — bo dobre projekty się rozwijają',              duration:'Stale',        iconPath:'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3' },
]

export const TESTIMONIALS: Testimonial[] = [
  { quote: '"NEXOTIC stworzyła dla nas stronę, która nie tylko świetnie wygląda, ale przede wszystkim realnie zwiększyła liczbę zapytań od klientów."', name:'Barbara S.',  role:'Marketing Manager, GreenSpace', initials:'MK' },
  { quote: '"Automatyzacja AI wdrożona przez NEXOTIC oszczędza nam kilkanaście godzin pracy tygodniowo. To był strzał w dziesiątkę!"',                   name:'Paweł R.',  role:'CEO, LogiSmart',                 initials:'PR' },
  { quote: '"Profesjonalne podejście, świetny kontakt i dowiezienie projektu na czas. Zdecydowanie polecam!"',                                           name:'Kamil W.',  role:'Founder, FixApp',                 initials:'KW' },
]

export const TEAM_MEMBERS: TeamMember[] = [
  { initials:'MI', name:'Marcin I.',   role:'CEO & Co-founder, Developer' },
  { initials:'WK', name:'Wiktoria K.',  role:'Head of Design' },
  { initials:'PJ', name:'Patryk J.',  role:'Marketing Specialist' },
  { initials:'MI', name:'Magdalena I.',  role:'SEO Specialist' },
]


