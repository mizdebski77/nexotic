import { SERVICES } from '@/lib/data'
import { PageHero } from '@/components/ui/PageHero'
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'

const details: Record<string, string[]> = {
  'Strony internetowe': ['Next.js 14 / React','TypeScript','Tailwind CSS','SEO On-page','CMS (Sanity, Contentful)','Hosting na Vercel'],
  'Aplikacje mobilne': ['React Native','Flutter','Expo','App Store / Google Play','Push notifications','Offline support'],
  'Automatyzacje AI': ['Custom GPTs','LangChain / LangGraph','n8n, Make, Zapier','RAG Retrieval Augmented','Analiza dokumentow','Auto-raporty i agenci'],
  'Systemy i integracje': ['REST / GraphQL API','Stripe, PayU','Webhooks i event-driven','PostgreSQL / MongoDB','Auth (NextAuth, Clerk)','Monitoring i logging'],
}

export default function UslugiPage() {
  return (
    <div className="bg-white pt-[68px]">
      <PageHero eyebrow="Co robimy" title="Nasze" accent="uslugi" subtitle="Kompleksowe rozwiazania cyfrowe od prostej strony po zaawansowany system AI."/>
      <div className="max-w-site mx-auto px-6 md:px-10 py-20">
        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((svc, i) => (
            <StaggerItem key={i}>
              <div className="group p-10 border border-neutral-200 rounded-2xl hover:border-lime/40 transition-all duration-300">
                <div className="text-[11px] font-bold text-lime tracking-[1px] mb-4">0{i+1}</div>
                <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-3">{svc.title}</h2>
                <p className="text-[14.5px] text-neutral-500 leading-relaxed mb-6">{svc.description}</p>
                <ul className="flex flex-col gap-2.5">
                  {details[svc.title]?.map(d => (
                    <li key={d} className="flex items-center gap-2.5 text-[13.5px] text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0"/>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="text-center mt-16">
          <Button href="/kontakt" variant="lime" size="lg">Zapytaj o wycene</Button>
        </div>
      </div>
    </div>
  )
}
