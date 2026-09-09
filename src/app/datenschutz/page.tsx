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
  ["2. Geltungsbereich und Rechtsgrundlagen", "Wir bearbeiten Personendaten nach dem Schweizer Datenschutzgesetz (DSG). Soweit die DSGVO anwendbar ist, stützen wir die Bearbeitung insbesondere auf berechtigte Interessen, die Durchführung vorvertraglicher Massnahmen, die Vertragserfüllung oder Ihre Einwilligung."],
  ["3. Besuch dieser Website", "Unser Hosting-Anbieter verarbeitet beim Aufruf technische Daten wie IP-Adresse, Datum und Uhrzeit, angeforderte Inhalte, Referrer-URL, Browser- und Geräteinformationen. Dies ist für den sicheren und stabilen Betrieb, die Fehleranalyse und die Abwehr von Missbrauch erforderlich. Bitte teilen Sie uns mit, falls Sie den Namen unseres Hosting-Anbieters wünschen; wir geben ihn auf Anfrage bekannt."],
  ["4. Kontaktformular und E-Mail", "Bei einer Kontaktanfrage bearbeiten wir Vorname, Nachname, E-Mail-Adresse, optional Telefonnummer sowie Ihre Nachricht. Die Übermittlung des Formulars erfolgt über EmailJS. Die Angaben verwenden wir ausschliesslich zur Bearbeitung der Anfrage, für vorvertragliche Kommunikation und gegebenenfalls zur Vertragsabwicklung."],
  ["5. EmailJS", "Für den Versand von Formularanfragen nutzen wir EmailJS. Dabei werden die im Formular eingegebenen Daten an EmailJS übermittelt. Weitere Informationen zur Datenbearbeitung finden Sie in der Datenschutzerklärung von EmailJS unter www.emailjs.com/legal/privacy-policy/."],
  ["6. Terminbuchung mit Calendly", "Die Terminbuchung ist optional. Das Calendly-Widget wird erst geladen, wenn Sie aktiv zustimmen. Anbieter ist Calendly LLC beziehungsweise Calendly Inc. Beim Laden und bei der Buchung können technische Daten sowie Name, E-Mail-Adresse und Termindaten an Calendly, einschliesslich in die USA, übertragen werden. Die Einwilligung kann jederzeit durch «Calendly blockieren» widerrufen werden; bereits übertragene Daten bleiben davon unberührt. Details: calendly.com/privacy."],
  ["7. Externe Inhalte und Links", "Auf den Standortseiten werden Bilder von Wikimedia geladen. Beim Abruf können technische Daten, insbesondere Ihre IP-Adresse, an Wikimedia übermittelt werden. Externe Links, etwa zu Instagram, LinkedIn oder Kundenwebsites, unterliegen den Datenschutzbestimmungen der jeweiligen Anbieter."],
  ["8. Cookies und Einwilligungen", "Diese Website verwendet keine Analyse- oder Marketing-Tracker. Für den Betrieb können technisch notwendige Speichertechnologien verwendet werden. Für Calendly wird vor dem Laden eine ausdrückliche Einwilligung eingeholt. Ohne Zustimmung wird kein Calendly-Inhalt geladen; deshalb ist kein pauschaler Cookie-Banner erforderlich."],
  ["9. Empfänger und Datenübermittlung ins Ausland", "Daten erhalten nur Dienstleister, die wir für Hosting, Kommunikation und Terminbuchungen einsetzen, soweit dies für den genannten Zweck erforderlich ist. Bei Übermittlungen in Staaten ohne angemessenes Datenschutzniveau treffen wir, soweit erforderlich, geeignete Schutzmassnahmen oder holen Ihre Einwilligung ein."],
  ["10. Speicherdauer und Sicherheit", "Wir speichern Personendaten nur so lange, wie dies für den jeweiligen Zweck, die Kommunikation oder gesetzliche Aufbewahrungspflichten notwendig ist. Wir setzen angemessene technische und organisatorische Massnahmen ein, um Daten gegen Verlust, Missbrauch und unbefugten Zugriff zu schützen."],
  ["11. Ihre Rechte", "Sie können Auskunft, Berichtigung, Löschung, Einschränkung der Bearbeitung oder Widerspruch verlangen, soweit das anwendbare Recht dies vorsieht. Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Kontaktieren Sie uns dazu unter info@wendico.ch. Soweit die DSGVO anwendbar ist, besteht zudem ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde."],
  ["12. Änderungen", "Diese Datenschutzerklärung kann angepasst werden. Massgeblich ist die jeweils auf dieser Website veröffentlichte Fassung. Stand: September 2026."],
];

export default function PrivacyPage() {
  return <main className="legal-page"><section className="legal-page-hero"><Image className="legal-page-bg" src={mountainImage} alt="" fill priority sizes="100vw" /><span className="legal-page-overlay" aria-hidden="true" /><div className="shell legal-page-hero-copy"><span className="eyebrow legal-page-eyebrow"><i /> Datenschutz</span><h1>Deine Daten.<br /><em>Klare Regeln.</em></h1><p>Hier erfährst du, welche Daten wir bearbeiten und wie wir sie schützen.</p></div></section><section className="legal-page-content"><div className="shell privacy-grid legal-page-privacy-grid">{sections.map(([title, text]) => <article className="legal-page-card" key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section></main>;
}