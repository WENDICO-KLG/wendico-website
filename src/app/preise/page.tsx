"use client";

import { useState } from "react";
import Link from "next/link";
import AppNav from "@/components/AppNav";

const systems = [
  { title: "Website", text: "Konversionsorientiert gebaut, jede Seite führt den Gast zur Tischreservation.", metric: "5-10 Seiten" },
  { title: "Google", text: "Einrichtung, Optimierung und laufende Pflege, damit euch Google schneller findet.", metric: "Local SEO" },
  { title: "Ads", text: "Gezielte Kampagnen für euren Standort, mehr Reichweite und messbare Resultate.", metric: "Setup inkl." },
  { title: "Betrieb", text: "Domain, SSL, Backup und Security-Updates vollständig von uns betreut.", metric: "Optional" },
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
    intro: "Für den sauberen Start.",
    ideal: "Restaurants, die erstmals professionell online auftreten.",
    items: ["Bis 5 Seiten", "Reservationsformular", "Google Firmenseite", "Mobile-Optimierung", "Basic SEO", "1 Korrektur-Runde"],
    fit: "Kleine Restaurants, neue Konzepte, klare Karte.",
  },
  {
    name: "Business",
    price: "CHF 5'500",
    time: "ca. 3-5 Wochen",
    intro: "Für Wachstum und mehr Nachfrage.",
    ideal: "Restaurants mit Eventkalender, Teamseite und höherem Volumen.",
    highlight: "Empfohlen",
    items: ["Alles aus Website", "Bis 10 Seiten", "Animationen", "Erweiterte SEO", "Google Ads Setup", "2 Korrektur-Runden"],
    fit: "Betriebe mit Events, Teamseite und aktivem Marketing.",
  },
  {
    name: "Full System",
    price: "CHF 8'500",
    time: "ca. 5-8 Wochen",
    intro: "Für komplexe Gastronomie-Systeme.",
    ideal: "Restaurant-Gruppen, Franchises und gehobene Gastronomie.",
    items: ["Alles aus Business", "Unlimitierte Seiten", "Mehrsprachig DE/FR/EN", "Loyalty-System", "Mehrere Ads-Kampagnen", "Unlimitierte Korrekturen"],
    fit: "Gruppen, gehobene Gastronomie und mehrsprachige Angebote.",
  },
];

const priceHighlights = [
  { value: "20-30", label: "zusätzliche Reservationen als Ziel pro Monat" },
  { value: "100%", label: "Eigentum nach Projektabschluss" },
  { value: "0", label: "WordPress-Plugin-Abhängigkeiten" },
];

const retainers = [
  {
    name: "Maintenance",
    price: "CHF 150",
    time: "12 Monate Mindestlaufzeit",
    items: ["Custom Domain inklusive (z.B. .ch / .com)", "1 E-Mail-Postfach inklusive (z.B. info@restaurant.ch)", "Sicheres Hosting & SSL", "Uptime-Monitoring & Backup", "Security-Updates", "Support via E-Mail (48h)"],
    fit: "Restaurants, die ihre Site selbst aktuell halten.",
  },
  {
    name: "Marketing",
    price: "CHF 500",
    time: "12 Monate Mindestlaufzeit",
    highlight: "Beliebt",
    items: ["Alles aus Maintenance", "Google Ads Management (laufend)", "Monatliches Performance-Reporting", "Inhaltsänderungen (Menü, Öffnungszeiten, Events)", "Google Firmenseite laufend pflegen", "Priority Support (24h)"],
    fit: "Restaurants, die aktiv mehr Reservierungen gewinnen wollen.",
  },
  {
    name: "Premium",
    price: "CHF 900",
    time: "12 Monate Mindestlaufzeit",
    items: ["Alles aus Marketing", "Unlimitierte Inhaltsänderungen", "Multi-Kanal Ads (Google + Meta)", "SEO-Reporting & laufende Optimierung", "Popup-Systeme & Aktions-Seiten", "WhatsApp-Support (selber Tag)"],
    fit: "Restaurant-Gruppen und Betriebe mit vollem Wachstumsfokus.",
  },
];

export default function PricesPage() {
  const [activeTab, setActiveTab] = useState<"packages" | "retainers">("packages");

  return (
    <main className="standard-page prices-page">
      <AppNav active="preise" />
      <section className="standard-hero prices-hero" aria-labelledby="prices-title">
        <div className="prices-hero-copy">
          <p>Für Restaurants ab 5 Mitarbeitenden</p>
          <h1 id="prices-title">Preise, die man schnell versteht.</h1>
          <span>
            Website, Reservation, Google und laufender Betrieb als klares System. Einmal investieren, danach gehört der Auftritt euch.
          </span>
          <div className="standard-actions">
            <a href="mailto:info@wendico.ch">Gratis Erstgespräch buchen</a>
            <Link href="/projekte">Projekte ansehen</Link>
          </div>
        </div>
        <div className="prices-hero-panel" aria-label="Preisübersicht">
          <span>Einstiegspaket</span>
          <strong>Website</strong>
          <b>{"CHF 3'500"}</b>
          <p>Reservations-optimierte Website, Google Firmenseite, Mobile-Optimierung und Basic SEO für den sauberen Start.</p>
          <a href="mailto:info@wendico.ch">Offerte anfragen</a>
        </div>
      </section>

      <section className="prices-strip" aria-label="Preis Vorteile">
        {priceHighlights.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="standard-section prices-system-section" aria-labelledby="system-title">
        <div className="section-heading section-heading-split">
          <div>
            <p>Restaurant-System</p>
            <h2 id="system-title">Ihr kocht. Ihr empfangt Gäste. Wir füllen eure Tische.</h2>
          </div>
          <span>Ziel sind 20-30 Reservierungen mehr pro Monat aus Website, Google Firmenseite und Ads aus einer Hand.</span>
        </div>
        <div className="standard-card-grid four-columns">
          {systems.map((item) => (
            <article className="standard-card prices-system-card" key={item.title}>
              <span>{item.metric}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standard-section" aria-labelledby="offers-title">
        <div className="prices-toggle" role="group" aria-label="Preismodell wählen">
          <button
            type="button"
            className={activeTab === "packages" ? "is-active" : undefined}
            aria-pressed={activeTab === "packages"}
            onClick={() => setActiveTab("packages")}
          >
            Website-Erstellung
          </button>
          <button
            type="button"
            className={activeTab === "retainers" ? "is-active" : undefined}
            aria-pressed={activeTab === "retainers"}
            onClick={() => setActiveTab("retainers")}
          >
            Monatliche Betreuung
          </button>
        </div>

        {activeTab === "packages" ? (
          <>
            <div className="big-statement">
              <p>Pakete</p>
              <h2 id="offers-title">Einmal investieren. Website gehört euch.</h2>
            </div>
            <div className="price-grid">
              {packages.map((pack) => (
                <article className={`price-card${pack.highlight ? " highlighted" : ""}`} key={pack.name}>
                  <div className="price-card-top">
                    {pack.highlight ? <span>{pack.highlight}</span> : null}
                    <h3>{pack.name}</h3>
                    <p>{pack.intro}</p>
                  </div>
                  <div className="price-card-price">
                    <strong>{pack.price}</strong>
                    <span>{pack.time}</span>
                  </div>
                  <small>{pack.fit}</small>
                  <ul>
                    {pack.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a href="mailto:info@wendico.ch">Paket besprechen</a>
                </article>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="big-statement">
              <p>Monatliche Zahlung</p>
              <h2 id="offers-title">Laufende Betreuung</h2>
              <span>Optional zu jedem Paket buchbar. Wir übernehmen Betrieb, Ads & Inhalte.</span>
            </div>
            <div className="price-grid">
              {retainers.map((retainer) => (
                <article className={`price-card${retainer.highlight ? " highlighted" : ""}`} key={retainer.name}>
                  <div className="price-card-top">
                    {retainer.highlight ? <span>{retainer.highlight}</span> : null}
                    <h3>{retainer.name}</h3>
                  </div>
                  <div className="price-card-price">
                    <strong>{retainer.price}</strong>
                    <span>/ Monat</span>
                  </div>
                  <small>{retainer.time}</small>
                  <ul>
                    {retainer.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <small>Ideal für: {retainer.fit}</small>
                  <a href="mailto:info@wendico.ch">Jetzt anfragen</a>
                </article>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="standard-section prices-note-section" aria-labelledby="included-title">
        <div>
          <p>In jedem Paket</p>
          <h2 id="included-title">Alles klar geregelt.</h2>
        </div>
        <div className="prices-note-grid">
          <article>
            <strong>Eigener Code</strong>
            <span>Schneller, sicherer und ohne WordPress-Plugin-Stack.</span>
          </article>
          <article>
            <strong>Klare Übergabe</strong>
            <span>Website, Zugangsdaten und Struktur gehören nach Abschluss euch.</span>
          </article>
          <article>
            <strong>Optionaler Retainer</strong>
            <span>Hosting, Wartung, Google Ads und Weiterentwicklung nur wenn ihr es wollt.</span>
          </article>
        </div>
      </section>

      <section className="standard-section" aria-labelledby="faq-title">
        <div className="big-statement">
          <p>Häufige Fragen</p>
          <h2 id="faq-title">Klar beantwortet.</h2>
        </div>
        <div className="standard-card-grid two-columns">
          {faqs.map((faq) => (
            <article className="standard-card prices-faq-card" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}