import { setRequestLocale } from 'next-intl/server'
import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = {
  title: 'Polityka cookies | Nexotic',
}

export default function CookiesPage({
  params,
}: {
  params: { locale: string }
}) {
  setRequestLocale(params.locale)

  return (
    <LegalPage title="Polityka cookies" updated="2 sierpnia 2026">
      <h2>1. Czym są pliki cookies i localStorage</h2>
      <p>
        Cookies to niewielkie pliki tekstowe zapisywane przez przeglądarkę. LocalStorage to
        podobny mechanizm przechowywania danych bezpośrednio w przeglądarce użytkownika, bez
        wysyłania ich automatycznie do serwera przy każdym żądaniu.
      </p>

      <h2>2. Jakich technologii używamy</h2>
      <ul>
        <li>
          <strong>Historia czatu AI</strong> — treść rozmowy z asystentem AI zapisywana jest
          w localStorage przeglądarki (klucz <code>nexotic_chat_history</code>), dzięki czemu
          rozmowa jest zachowana po odświeżeniu strony. Dane te pozostają wyłącznie na urządzeniu
          użytkownika i można je usunąć w każdej chwili przyciskiem „Nowy czat” lub czyszcząc
          dane przeglądania w przeglądarce.
        </li>
        <li>
          <strong>Informacja o pierwszym otwarciu czatu</strong> — zapisujemy w localStorage
          (klucz <code>nexotic_chat_auto_opened</code>) informację, że widżet czatu został już
          raz automatycznie otwarty, aby nie pojawiał się ponownie przy kolejnych wizytach.
        </li>
        <li>
          <strong>Wybór języka</strong> — mechanizm next-intl może zapisać preferowany język
          strony w adresie URL / plikach cookie technicznych, niezbędnych do poprawnego
          wyświetlania treści w wybranym języku.
        </li>
      </ul>
      <p>
        Serwis nie wykorzystuje obecnie plików cookies analitycznych ani marketingowych
        (np. Google Analytics, Facebook Pixel).
      </p>

      <h2>3. Zarządzanie plikami cookies i localStorage</h2>
      <p>
        Większość przeglądarek pozwala na zarządzanie plikami cookies i danymi lokalnymi w swoich
        ustawieniach — w tym na ich przeglądanie, blokowanie oraz usuwanie. Ograniczenie
        zapisywania danych lokalnych może wpłynąć na działanie niektórych funkcji Serwisu,
        np. zapamiętywanie historii czatu.
      </p>

      <h2>4. Zmiany polityki</h2>
      <p>
        W miarę rozwoju Serwisu niniejsza polityka może zostać zaktualizowana, np. w przypadku
        wdrożenia narzędzi analitycznych. Aktualna wersja zawsze dostępna jest pod tym adresem.
      </p>

      <h2>5. Kontakt</h2>
      <p>
        Pytania dotyczące niniejszej polityki prosimy kierować na adres{' '}
        <a href="mailto:Nexotic.contact@gmail.com">Nexotic.contact@gmail.com</a>.
      </p>
    </LegalPage>
  )
}
