import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

const footerCols = [
  { title: 'Usługi', links: [['Strony internetowe','/uslugi'],['Aplikacje mobilne','/uslugi'],['Automatyzacje AI','/uslugi'],['Systemy i integracje','/uslugi']] },
  { title: 'Firma',  links: [['O nas','/o-nas'],['Portfolio','/portfolio'],['Proces','/proces'],['Kontakt','/kontakt']] },
  { title: 'Prawo',  links: [['Polityka prywatności','#'],['Regulamin','#'],['Cookies','#']] },
]

const socials = [
  { label:'LinkedIn', path:'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { label:'Twitter',  path:'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
  { label:'GitHub',   path:'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
]

export function Footer() {
  return (
    <footer>
      {/* CTA band */}
      <div className="bg-ink-2 border-t border-white/[0.07] py-16 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute -bottom-40 -right-20 w-[500px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(200,241,53,0.08)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-site mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-[-1.5px] text-white leading-[1.06] mb-3">Gotowy na kolejny krok?</h2>
            <p className="text-sm text-white/40">Porozmawiajmy o Twoim projekcie i sprawdźmy, jak możemy pomóc Ci osiągnąć więcej.</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <Button href="/kontakt" variant="lime" size="lg">Porozmawiajmy o projekcie →</Button>
            <p className="text-sm text-white/35">
              lub napisz:{' '}
              <a href="mailto:Nexotic.contact@gmail.com" className="text-lime hover:text-lime-hover transition-colors underline underline-offset-2">Nexotic.contact@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-ink border-t border-white/[0.06] px-6 md:px-10 pt-14 pb-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4">
                <Logo size="md" />
              </div>
              <p className="text-sm text-white/30 leading-relaxed max-w-[220px] mb-5">
                Tworzymy cyfrowe produkty, które napędzają rozwój firm dzięki technologii, designowi i AI.
              </p>
              <div className="flex gap-2">
                {socials.map(({ label, path }) => (
                  <a key={label} href="#" aria-label={label}
                    className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/30 hover:border-lime hover:text-lime transition-all duration-200">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={path}/></svg>
                  </a>
                ))}
              </div>
            </div>
            {footerCols.map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/20 mb-4">{title}</h4>
                <ul className="flex flex-col gap-2.5 list-none">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-[13.5px] text-white/35 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/[0.06] pt-5 text-center">
            <p className="text-[12.5px] text-white/20">© 2024 Nexotic. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}