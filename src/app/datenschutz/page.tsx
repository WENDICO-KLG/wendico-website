import type { Metadata } from "next";
import AppNav from "@/components/AppNav";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der WENDICO KLG: welche Daten wir bearbeiten und wie wir sie schützen.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

const privacySections = [
  { title: "1. Verantwortliche Stelle", text: "Verantwortlich für die Datenbearbeitung ist WENDICO KLG, Im Hofacker 3, 8478 Thalheim an der Thur, Schweiz. E-Mail: info@wendico.ch, Telefon: +41 79 504 10 05." },
  { title: "2. Allgemeines", text: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir bearbeiten Personendaten im Einklang mit dem Schweizer Datenschutzgesetz sowie, sofern anwendbar, der DSGVO." },
  { title: "3. Erhebung und Bearbeitung", text: "Bearbeitet werden Daten, die für Websitebetrieb, Kommunikation oder Dienstleistungen erforderlich sind, zum Beispiel Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Nachrichteninhalte und technische Zugriffsdaten." },
  { title: "4. Hosting", text: "Die Website wird über einen professionellen Hosting-Anbieter bereitgestellt. Beim Besuch werden technische Informationen wie IP-Adresse, Browserinformationen und Zugriffszeitpunkte verarbeitet." },
  { title: "5. Kontaktformular", text: "Kontaktformular-Daten werden verarbeitet, um Anfragen zu bearbeiten, Angebote zu erstellen und mit Ihnen in Kontakt zu treten." },
  { title: "6. Terminbuchung (Calendly)", text: "Für die Buchung von Beratungsterminen nutzen wir den Dienst Calendly (Calendly Inc., USA). Beim Aufruf der Buchungsseite werden Daten wie Name, E-Mail-Adresse und die gewählte Terminzeit an Calendly übermittelt und dort verarbeitet. Dabei kann es zu einer Datenübermittlung in die USA kommen, welche auf Basis geeigneter Garantien (z. B. Standardvertragsklauseln) erfolgt. Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly." },
  { title: "7. Cookies", text: "Cookies und vergleichbare Technologien dienen der technischen Funktionalität, Benutzerfreundlichkeit und statistischen Auswertung." },
  { title: "8. Google Analytics", text: "Google Analytics kann Informationen wie besuchte Seiten, Verweildauer, verwendetes Endgerät, Browserinformationen, ungefähre Standortdaten und IP-Adresse verarbeiten." },
  { title: "9. Google Search Console", text: "Die Google Search Console wird genutzt, um technische Leistung, Suchanfragen und Auffindbarkeit in Suchmaschinen zu überwachen." },
  { title: "10. Datensicherheit", text: "Wir treffen angemessene technische und organisatorische Massnahmen, um Personendaten gegen Verlust, Missbrauch und unbefugten Zugriff zu schützen." },
  { title: "11. Speicherdauer", text: "Personendaten werden nur so lange gespeichert, wie dies zur Erfüllung des jeweiligen Zwecks erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen." },
  { title: "12. Ihre Rechte", text: "Betroffene Personen können Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch verlangen, soweit geltendes Recht dies vorsieht. Zudem besteht das Recht, eine Beschwerde beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten (EDÖB) einzureichen." },
  { title: "13. Änderungen", text: "Diese Datenschutzerklärung kann angepasst werden. Stand: Juli 2026." },
];

export default function PrivacyPage() {
  return (
    <main className="standard-page legal-page">
      <AppNav />
      <section className="standard-hero" aria-labelledby="privacy-title">
        <p>Datenschutz</p>
        <h1 id="privacy-title">Datenschutzerklärung.</h1>
        <span>Zusammenfassung der Datenschutzinformationen aus der Live-Seite von Wendico.</span>
      </section>

      <section className="standard-section legal-content" aria-label="Datenschutzerklärung Inhalt">
        <div className="standard-card-grid two-columns">
          {privacySections.map((section) => (
            <article className="standard-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}