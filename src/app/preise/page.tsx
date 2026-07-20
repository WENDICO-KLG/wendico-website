import Link from "next/link";
import AppNav from "@/components/AppNav";

const systems = [
  { title: "Reservations-Website", text: "Konversionsorientiert gebaut, jede Seite führt den Gast zur Tischreservation." },
  { title: "Google Firmenseite", text: "Einrichtung, Optimierung und laufende Pflege, damit euch Google schneller findet." },
  { title: "Google Ads", text: "Gezielte Kampagnen für euren Standort, mehr Reichweite und messbare Resultate." },
  { title: "Hosting & Wartung", text: "Domain, SSL, Backup und Security-Updates vollständig von uns betreut." },
];

const faqs = [
  { question: "Wie viele Reservierungen mehr kann ich erwarten?", answer: "Unser Ziel sind 20-30 zusätzliche Reservierungen pro Monat durch eine konversionsorientierte Website, eine optimierte Google Firmenseite und gezieltes Google Ads Management. Das Ergebnis hängt von Standort und Budget ab." },
  { question: "Was kostet Google Ads zusätzlich zum Retainer?", answer: "Das Ads-Budget fliesst direkt an Google und wird separat vereinbart, typischerweise CHF 300-800 pro Monat je nach Reichweite." },
  { question: "Brauche ich zwingend einen Retainer?", answer: "Nein. Nach Übergabe gehört die Website vollständig euch. Betreuung ist sinnvoll, wenn ihr euch nicht selbst um Updates, Hosting und Google Ads kümmern wollt." },
  { question: "Warum kein WordPress?", answer: "Wir bauen eigenen, sauberen Code ohne Plugin-Stack. Das bedeutet: schneller, sicherer, kein Update-Chaos und kein Vendor Lock-in." },
  { question: "Wie läuft ein Projekt ab?", answer: "Discovery-Call, Angebot, 50 % Anzahlung, Design und Entwicklung, Feedback-Runden, Abnahme, Übergabe und Restzahlung." },
  { question: "Was wenn mein Restaurant ausserhalb der Pakete liegt?", answer: "Kein Problem, wir erstellen auch individuelle Offerten und besprechen euren konkreten Bedarf in einem kostenlosen Termin." },
];

const packages = [
  {
    name: "Website",
    price: "CHF 3'500",
    time: "ca. 2-3 Wochen",
    ideal: "Restaurants, die erstmals professionell online auftreten.",
    items: ["Reservations-optimierte Website bis 5 Seiten", "Online-Reservationsformular", "Google Firmenseite einrichten und optimieren", "Mobile-Optimierung", "Basic SEO mit Meta, OG-Tags und Sitemap", "1 Korrektur-Runde inklusive"],
  },
  {
    name: "Business",
    price: "CHF 5'500",
    time: "ca. 3-5 Wochen",
    ideal: "Restaurants mit Eventkalender, Teamseite und höherem Volumen.",
    highlight: "Empfohlen",
    items: ["Alles aus Website", "Bis 10 Seiten für Menü, Events, Team und mehr", "Animationen und Micro-Interactions", "Erweiterte SEO mit strukturierten Daten", "Google Ads Setup und erste Kampagne", "2 Korrektur-Runden inklusive"],
  },
  {
    name: "Full System",
    price: "CHF 8'500",
    time: "ca. 5-8 Wochen",
    ideal: "Restaurant-Gruppen, Franchises und gehobene Gastronomie.",
    items: ["Alles aus Business", "Unlimitierte Seiten", "Mehrsprachige Website DE/FR/EN", "Mitgliederbereich oder Loyalty-System", "Vollständiges Google Ads Setup mit mehreren Kampagnen", "Unlimitierte Korrekturen"],
  },
];

export default function PricesPage() {
  return (
    <main className="standard-page">
      <AppNav active="preise" />
      <section className="standard-hero" aria-labelledby="prices-title">
        <p>Für Restaurants ab 5 Mitarbeitenden</p>
        <h1 id="prices-title">Mehr Reservierungen. Mehr Umsatz.</h1>
        <span>
          Wir bauen digitale Systeme für Restaurants: reservations-optimierte Website, Google Firmenseite und Google Ads. Transparent bepreist, messbar im Resultat.
        </span>
        <div className="standard-actions">
          <a href="mailto:info@wendico.ch">Gratis Erstgespräch buchen</a>
          <Link href="/projekte">Projekte ansehen</Link>
        </div>
      </section>

      <section className="standard-section" aria-labelledby="system-title">
        <div className="section-heading section-heading-split">
          <div>
            <p>Restaurant-System</p>
            <h2 id="system-title">Ihr kocht. Ihr empfangt Gäste. Wir füllen eure Tische.</h2>
          </div>
          <span>Ziel sind 20-30 Reservierungen mehr pro Monat aus Website, Google Firmenseite und Ads aus einer Hand.</span>
        </div>
        <div className="standard-card-grid four-columns">
          {systems.map((item) => (
            <article className="standard-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standard-section" aria-labelledby="packages-title">
        <div className="big-statement">
          <p>Pakete</p>
          <h2 id="packages-title">Einmal investieren. Website gehört euch.</h2>
        </div>
        <div className="price-grid">
          {packages.map((pack) => (
            <article className={`price-card${pack.highlight ? " highlighted" : ""}`} key={pack.name}>
              {pack.highlight ? <span>{pack.highlight}</span> : null}
              <h3>{pack.name}</h3>
              <strong>{pack.price}</strong>
              <p>{pack.time}</p>
              <small>{pack.ideal}</small>
              <ul>
                {pack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="standard-section" aria-labelledby="faq-title">
        <div className="big-statement">
          <p>Häufige Fragen</p>
          <h2 id="faq-title">Klar beantwortet.</h2>
        </div>
        <div className="standard-card-grid two-columns">
          {faqs.map((faq) => (
            <article className="standard-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}