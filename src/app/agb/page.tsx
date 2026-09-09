import type { Metadata } from "next";
import Image from "next/image";
import mountainImage from "../../../section-2.jpg";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen der WENDICO KLG.",
  alternates: { canonical: "/agb" },
  openGraph: { type: "website", locale: "de_CH", siteName: "Wendico", url: "/agb", title: "AGB | Wendico", description: "Allgemeine Geschäftsbedingungen der WENDICO KLG." },
};

const sections = [
  ["1. Geltungsbereich", "Diese Allgemeinen Geschäftsbedingungen gelten für alle Angebote, Leistungen und Verträge der WENDICO KLG (Wendico) mit ihren Kunden, sofern nicht schriftlich etwas anderes vereinbart wurde."],
  ["2. Angebote und Vertragsschluss", "Angebote von Wendico sind unverbindlich, sofern sie nicht ausdrücklich als verbindlich bezeichnet werden. Ein Vertrag kommt durch die schriftliche Annahme eines Angebots oder die schriftliche Auftragsbestätigung zustande."],
  ["3. Leistungsumfang", "Massgeblich für Umfang, Termine und Vergütung ist das jeweilige Angebot oder die Auftragsbestätigung. Änderungs- und Zusatzwünsche nach Projektbeginn können separat offeriert werden und verlängern vereinbarte Fristen angemessen."],
  ["4. Mitwirkung des Kunden", "Der Kunde stellt Inhalte, Zugänge, Freigaben und sonstige für die Leistungserbringung notwendige Informationen rechtzeitig, vollständig und in geeigneter Form bereit. Verzögerungen aus fehlender Mitwirkung verlängern vereinbarte Termine entsprechend."],
  ["5. Vergütung und Zahlung", "Preise verstehen sich in Schweizer Franken, sofern nicht anders angegeben. Rechnungen sind innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug zahlbar. Bei Zahlungsverzug kann Wendico die weitere Leistungserbringung bis zur Zahlung aussetzen."],
  ["6. Abnahme", "Der Kunde prüft gelieferte Leistungen innerhalb von 10 Arbeitstagen und meldet wesentliche Mängel schriftlich. Ohne fristgerechte Mängelrüge gilt die Leistung als abgenommen. Unwesentliche Mängel berechtigen nicht zur Verweigerung der Abnahme."],
  ["7. Rechte an Arbeitsergebnissen", "Nach vollständiger Bezahlung erhält der Kunde die für den vereinbarten Zweck erforderlichen Nutzungsrechte an den finalen Arbeitsergebnissen. Vorbestehende Rechte, verwendete Open-Source-Komponenten, Werkzeuge, Konzepte und allgemeines Know-how verbleiben bei Wendico oder den jeweiligen Rechteinhabern."],
  ["8. Inhalte des Kunden", "Der Kunde ist für die Rechtmässigkeit, Richtigkeit und die erforderlichen Rechte an bereitgestellten Inhalten verantwortlich. Er stellt Wendico von Ansprüchen Dritter frei, die aus einer vertragsgemässen Verwendung dieser Inhalte entstehen."],
  ["9. Haftung", "Wendico haftet für Schäden nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung für indirekte Schäden, Folgeschäden, entgangenen Gewinn und Datenverlust ist im gesetzlich zulässigen Umfang ausgeschlossen. Zwingende gesetzliche Haftung bleibt unberührt."],
  ["10. Datenschutz und Vertraulichkeit", "Die Bearbeitung von Personendaten richtet sich nach der Datenschutzerklärung von Wendico. Beide Parteien behandeln nicht öffentlich bekannte Informationen aus der Zusammenarbeit vertraulich."],
  ["11. Schlussbestimmungen", "Es gilt schweizerisches Recht unter Ausschluss des Kollisionsrechts. Soweit zulässig, ist Gerichtsstand der Sitz von Wendico. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt."],
];

export default function TermsPage() {
  return <main className="legal-page"><section className="legal-page-hero"><Image className="legal-page-bg" src={mountainImage} alt="" fill priority sizes="100vw" /><span className="legal-page-overlay" aria-hidden="true" /><div className="shell legal-page-hero-copy"><span className="eyebrow legal-page-eyebrow"><i /> Rechtliches</span><h1>Allgemeine<br /><em>Geschäftsbedingungen.</em></h1><p>Die Grundlagen für eine klare und faire Zusammenarbeit mit Wendico.</p></div></section><section className="legal-page-content"><div className="shell legal-page-privacy-grid">{sections.map(([title, text]) => <article className="legal-page-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section></main>;
}