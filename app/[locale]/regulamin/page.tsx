import { setRequestLocale } from 'next-intl/server'
import { LegalPage } from '@/components/legal/LegalPage'

export const metadata = {
  title: 'Regulamin | Nexotic',
}

export default function RegulaminPage({
  params,
}: {
  params: { locale: string }
}) {
  setRequestLocale(params.locale)

  return (
    <LegalPage title="Regulamin" updated="2 sierpnia 2026">
      <h2>1. Postanowienia ogólne</h2>
      <p>
        Niniejszy regulamin określa zasady korzystania z serwisu internetowego{' '}
        <strong>nexotic.pl</strong> (dalej: „Serwis”), prowadzonego przez Dm Marcin Izdebski,
        jednoosobową działalność gospodarczą (dalej: „Usługodawca”). Kontakt z Usługodawcą:{' '}
        <a href="mailto:Nexotic.contact@gmail.com">Nexotic.contact@gmail.com</a>, tel. +48 501 375 604.
      </p>

      <h2>2. Rodzaj i zakres usług</h2>
      <p>Za pośrednictwem Serwisu Usługodawca prezentuje ofertę w zakresie m.in.:</p>
      <ul>
        <li>projektowania i wykonywania stron oraz sklepów internetowych,</li>
        <li>tworzenia aplikacji mobilnych i webowych,</li>
        <li>wdrażania automatyzacji procesów opartych o sztuczną inteligencję,</li>
        <li>tworzenia chatbotów AI oraz integracji systemów.</li>
      </ul>
      <p>
        Informacje prezentowane w Serwisie mają charakter informacyjny i nie stanowią oferty
        w rozumieniu art. 66 Kodeksu cywilnego. Szczegółowe warunki współpracy, w tym zakres
        prac, terminy i wynagrodzenie, ustalane są indywidualnie w odrębnej umowie zawieranej
        z klientem.
      </p>

      <h2>3. Formularz kontaktowy i czat AI</h2>
      <ul>
        <li>Formularz kontaktowy służy do przesyłania zapytań ofertowych. Wypełnienie formularza nie jest równoznaczne z zawarciem umowy.</li>
        <li>Serwis udostępnia widżet czatu opartego o sztuczną inteligencję, którego celem jest wstępne informowanie odwiedzających o ofercie. Odpowiedzi generowane przez asystenta AI mają charakter pomocniczy i mogą zawierać nieścisłości — nie stanowią wiążącej oferty ani porady. W sprawie wyceny i szczegółów współpracy należy skontaktować się bezpośrednio z Usługodawcą.</li>
      </ul>

      <h2>4. Obowiązki użytkownika</h2>
      <p>
        Korzystając z Serwisu, użytkownik zobowiązuje się do niepodejmowania działań mogących
        zakłócić jego funkcjonowanie (np. nadmierne automatyczne zapytania do czatu) oraz do
        podawania w formularzu kontaktowym prawdziwych danych.
      </p>

      <h2>5. Odpowiedzialność</h2>
      <p>
        Usługodawca dokłada starań, aby informacje zawarte w Serwisie były aktualne i rzetelne,
        jednak nie ponosi odpowiedzialności za decyzje podjęte wyłącznie na podstawie treści
        wygenerowanych przez asystenta AI ani za przerwy w działaniu Serwisu wynikające
        z przyczyn technicznych niezależnych od Usługodawcy.
      </p>

      <h2>6. Własność intelektualna</h2>
      <p>
        Treści, grafiki oraz kod źródłowy Serwisu podlegają ochronie prawnoautorskiej i stanowią
        własność Usługodawcy lub jego licencjodawców. Kopiowanie i rozpowszechnianie bez zgody
        Usługodawcy jest zabronione.
      </p>

      <h2>7. Reklamacje</h2>
      <p>
        Reklamacje dotyczące funkcjonowania Serwisu można zgłaszać na adres{' '}
        <a href="mailto:Nexotic.contact@gmail.com">Nexotic.contact@gmail.com</a>. Reklamacje
        rozpatrywane są w terminie 14 dni od dnia otrzymania zgłoszenia.
      </p>

      <h2>8. Postanowienia końcowe</h2>
      <p>
        W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
        polskiego. Usługodawca zastrzega sobie prawo do zmiany regulaminu; aktualna wersja jest
        zawsze dostępna pod tym adresem.
      </p>
    </LegalPage>
  )
}
