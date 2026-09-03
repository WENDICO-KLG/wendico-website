import type { Metadata } from "next";
import Image from "next/image";
import mountainImage from "../../../hero.jpg";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der WENDICO KLG.",
  alternates: { canonical: "/datenschutz" },
  openGraph: { type: "website", locale: "de_CH", siteName: "Wendico", url: "/datenschutz", title: "Datenschutz | Wendico", description: "Datenschutzerklärung der WENDICO KLG." },
};
const sections = [
  ["1. Verantwortliche Stelle", "WENDICO KLG, Im Hofacker 3, 8478 Thalheim an der Thur, Schweiz. E-Mail: info@wendico.ch, Telefon: +41 79 504 10 05."],
  ["2. Allgemeines", "Wir bearbeiten Personendaten im Einklang mit dem Schweizer Datenschutzgesetz sowie, sofern anwendbar, der DSGVO."],
  ["3. Erhebung und Bearbeitung", "Bearbeitet werden Daten, die für Websitebetrieb, Kommunikation oder Dienstleistungen erforderlich sind, etwa Name, E-Mail-Adresse, Telefonnummer, Nachrichteninhalte und technische Zugriffsdaten."],
  ["4. Hosting", "Beim Besuch werden technische Informationen wie IP-Adresse, Browserinformationen und Zugriffszeitpunkte durch unseren Hosting-Anbieter verarbeitet."],
  ["5. Kontaktformular", "Kontaktformular-Daten werden über EmailJS verarbeitet, um Anfragen zu bearbeiten, Angebote zu erstellen und mit Ihnen in Kontakt zu treten."],
  ["6. Terminbuchung", "Für Beratungstermine nutzen wir Calendly Inc., USA. Das Inline-Widget lädt Inhalte von Calendly; dabei können technische Daten sowie eingegebene Angaben wie Name, E-Mail-Adresse und Terminzeit an Calendly übermittelt werden."],
  ["7. Cookies", "Diese Website setzt derzeit keine optionalen Analyse- oder Marketing-Cookies ein. Technisch notwendige Cookies können für den Betrieb verwendet werden."],
  ["8. Datensicherheit", "Wir treffen angemessene technische und organisatorische Massnahmen zum Schutz von Personendaten gegen Verlust, Missbrauch und unbefugten Zugriff."],
  ["9. Speicherdauer", "Personendaten werden nur so lange gespeichert, wie dies für den jeweiligen Zweck oder gesetzliche Aufbewahrungspflichten erforderlich ist."],
  ["10. Ihre Rechte", "Betroffene Personen können Auskunft, Berichtigung, Löschung, Einschränkung oder Widerspruch verlangen, soweit geltendes Recht dies vorsieht."],
  ["11. Änderungen", "Diese Datenschutzerklärung kann angepasst werden. Stand: September 2026."],
];

export default function PrivacyPage() {
  return <main className="legal-page"><section className="legal-page-hero"><Image className="legal-page-bg" src={mountainImage} alt="" fill priority sizes="100vw" /><span className="legal-page-overlay" aria-hidden="true" /><div className="shell legal-page-hero-copy"><span className="eyebrow legal-page-eyebrow"><i /> Datenschutz</span><h1>Deine Daten.<br /><em>Klare Regeln.</em></h1><p>Hier erfährst du, welche Daten wir bearbeiten und wie wir sie schützen.</p></div></section><section className="legal-page-content"><div className="shell privacy-grid legal-page-privacy-grid">{sections.map(([title, text]) => <article className="legal-page-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section></main>;
}