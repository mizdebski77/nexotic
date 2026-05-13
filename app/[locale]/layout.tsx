import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale, getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { ChatWidget } from '@/components/widgets/ChatWidget'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nexotic — Strony, Aplikacje i Automatyzacje AI | Polska',
  description:
    'Łączymy nowoczesny design, technologię i AI, aby tworzyć produkty, które przyciągają klientów i zwiększają zysk.',
  keywords: [
    'tworzenie stron internetowych',
    'aplikacje mobilne',
    'automatyzacja AI',
    'software house Polska',
  ],
  icons: { icon: '/ico.png' },
}

// Pre-render every locale at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Tell next-intl which locale this request is on.
  setRequestLocale(locale)

  // Load messages for the current locale and pass them to the client.
  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={font.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
