import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nexotic — Strony, Aplikacje i Automatyzacje AI | Polska',
  description: 'Łączymy nowoczesny design, technologię i AI, aby tworzyć produkty, które przyciągają klientów i zwiększają zysk.',
  keywords: ['tworzenie stron internetowych','aplikacje mobilne','automatyzacja AI','software house Polska'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={font.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
