import { setRequestLocale } from 'next-intl/server'
import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = {
  title: 'Polityka prywatności | Nexotic',
}

export default function PolitykaPrywatnosciPage({
  params,
}: {
  params: { locale: string }
}) {
  setRequestLocale(params.locale)

  return (
    <LegalPage title="Polityka prywatności" updated="2 sierpnia 2026">
      <p>
        Niniejsza polityka opisuje, jakie dane osobowe przetwarzamy w związku z korzystaniem
        z serwisu <strong>nexotic.pl</strong>, w jakim celu i na jakiej podstawie, a także jakie
        prawa przysługują użytkownikom w związku z przetwarzaniem ich danych.
      </p>

      <h2>1. Administrator danych</h2>
      <p>
        Administratorem danych osobowych jest Dm Marcin Izdebski, prowadzący jednoosobową
        działalność gospodarczą. Kontakt w sprawach związanych z ochroną danych:{' '}
        <a href="mailto:Nexotic.contact@gmail.com">Nexotic.contact@gmail.com</a>, tel. +48 501 375 604.
      </p>

      <h2>2. Jakie dane zbieramy</h2>
      <ul>
        <li><strong>Formularz kontaktowy</strong> — imię i nazwisko, adres e-mail, opcjonalnie nazwa firmy, wybrana usługa oraz treść opisu projektu.</li>
        <li><strong>Czat AI</strong> — treść wiadomości wpisanych w widżecie czatu. Historia rozmowy zapisywana jest lokalnie w przeglądarce (localStorage) i nie jest przez nas przechowywana na serwerze.</li>
        <li><strong>Dane techniczne</strong> — adres IP wykorzystywany doraźnie do ograniczenia liczby zapytań do czatu (rate limiting), bez trwałego zapisu.</li>
      </ul>

      <h2>3. Cel i podstawa prawna przetwarzania</h2>
      <ul>
        <li>Odpowiedź na zapytanie i przygotowanie wyceny — art. 6 ust. 1 lit. b RODO (działania przed zawarciem umowy).</li>
        <li>Udzielanie odpowiedzi przez asystenta AI — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes polegający na obsłudze zapytań w czasie rzeczywistym).</li>
        <li>Ochrona przed nadużyciami (rate limiting) — art. 6 ust. 1 lit. f RODO.</li>
      </ul>

      <h2>4. Odbiorcy danych</h2>
      <p>Dane mogą być przekazywane podmiotom przetwarzającym dane w naszym imieniu, w tym:</p>
      <ul>
        <li><strong>Resend</strong> — dostawca usługi wysyłki wiadomości e-mail z formularza kontaktowego.</li>
        <li><strong>Groq</strong> — dostawca infrastruktury AI przetwarzający treść wiadomości wysłanych do czatu w celu wygenerowania odpowiedzi.</li>
        <li><strong>Vercel</strong> — dostawca hostingu, na którym działa serwis.</li>
      </ul>

      <h2>5. Okres przechowywania</h2>
      <p>
        Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi zapytania
        oraz przez czas wynikający z przepisów (np. podatkowych), jeśli dojdzie do zawarcia umowy.
        Historia czatu przechowywana jest wyłącznie lokalnie w przeglądarce użytkownika do czasu
        jej ręcznego wyczyszczenia (przycisk „Nowy czat”) lub wyczyszczenia danych przeglądarki.
      </p>

      <h2>6. Prawa użytkownika</h2>
      <p>W związku z przetwarzaniem danych osobowych przysługuje Ci prawo do:</p>
      <ul>
        <li>dostępu do swoich danych oraz otrzymania ich kopii,</li>
        <li>sprostowania (poprawiania) danych,</li>
        <li>usunięcia danych,</li>
        <li>ograniczenia przetwarzania,</li>
        <li>wniesienia sprzeciwu wobec przetwarzania,</li>
        <li>przenoszenia danych,</li>
        <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
      </ul>

      <h2>7. Bezpieczeństwo</h2>
      <p>
        Stosujemy odpowiednie środki techniczne i organizacyjne w celu zabezpieczenia danych
        przed nieuprawnionym dostępem, utratą lub zniszczeniem.
      </p>

      <h2>8. Zmiany polityki</h2>
      <p>
        Niniejsza polityka może być okresowo aktualizowana. Aktualna wersja jest zawsze dostępna
        pod tym adresem.
      </p>

      <h2>9. Kontakt</h2>
      <p>
        Pytania dotyczące niniejszej polityki prosimy kierować na adres{' '}
        <a href="mailto:Nexotic.contact@gmail.com">Nexotic.contact@gmail.com</a>.
      </p>
    </LegalPage>
  )
}
