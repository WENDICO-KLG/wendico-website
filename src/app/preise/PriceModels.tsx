"use client";

import Link from "next/link";
import { useState } from "react";

const packages = [
  { name: "Website", price: "3'500", intro: "Für den sauberen Start.", items: ["Bis 5 Seiten", "Kontakt- oder Anfrageformular", "Google Firmenseite", "Mobile-Optimierung", "Basic SEO", "1 Korrekturrunde"] },
  { name: "Business", price: "5'500", intro: "Für Wachstum und Nachfrage.", badge: "Empfohlen", items: ["Alles aus Website", "Bis 10 Seiten", "Individuelle Animationen", "Erweiterte SEO", "Google Ads Setup", "2 Korrekturrunden"] },
  { name: "Full System", price: "8'500", intro: "Für komplexe digitale Systeme.", items: ["Alles aus Business", "Unlimitierte Seiten", "Mehrsprachig DE/FR/EN", "Umsatz- oder Kundenprozess", "Mehrere Ads-Kampagnen", "Unlimitierte Korrekturen"] },
];
const retainers = [
  { name: "Maintenance", price: "150", intro: "Sicher und aktuell.", items: ["Domain & E-Mail", "Hosting & SSL", "Uptime-Monitoring", "Backups & Security", "E-Mail Support"] },
  { name: "Marketing", price: "500", intro: "Für laufendes Wachstum.", badge: "Beliebt", items: ["Alles aus Maintenance", "Google Ads Management", "Performance Reporting", "Inhaltsänderungen", "Priority Support"] },
  { name: "Premium", price: "900", intro: "Das volle System.", items: ["Alles aus Marketing", "Unlimitierte Änderungen", "Google & Meta Ads", "Laufende SEO", "WhatsApp Support"] },
];

const faqs = [
  ["Was ist im Website-Paket enthalten?", "Das Paket umfasst bis zu fünf Seiten, Mobile-Optimierung, Basic SEO, ein Kontakt- oder Anfrageformular und die Einrichtung eurer Google Firmenseite."],
  ["Gehört die Website nach dem Projekt uns?", "Ja. Nach Projektabschluss gehört die Website inklusive Zugangsdaten und Struktur vollständig euch. Es gibt keinen Vendor Lock-in."],
  ["Brauchen wir eine monatliche Betreuung?", "Nein. Die Betreuung ist optional. Sie ist sinnvoll, wenn wir Hosting, Updates, Inhalte oder Google Ads laufend für euch übernehmen sollen."],
  ["Was kostet Google Ads zusätzlich?", "Das Werbebudget fliesst direkt an Google und wird separat vereinbart. Typisch sind CHF 300 bis 800 pro Monat, abhängig von Standort und Reichweite."],
  ["Wie läuft ein Projekt ab?", "Wir starten mit einem kurzen Gespräch, definieren Ziele und Umfang, gestalten und entwickeln die Website, holen Feedback ein und übergeben den fertigen Auftritt."],
];

export default function PriceModels() {
  const [monthly, setMonthly] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const plans = monthly ? retainers : packages;
  return <section className="section shell pricing-models"><div className="pricing-models-heading"><div><span className="eyebrow">Pakete</span><h2>{monthly ? "Laufend in guten Händen." : "Klar definiert. Fair kalkuliert."}</h2></div><div className="segmented pricing-toggle"><button className={!monthly ? "active" : ""} onClick={() => setMonthly(false)}>Website</button><button className={monthly ? "active" : ""} onClick={() => setMonthly(true)}>Betreuung</button></div></div><div className="pricing-page-grid">{plans.map((plan) => <article className={`price-card pricing-page-card ${plan.badge ? "featured" : ""}`} key={plan.name}>{plan.badge && <span className="badge">{plan.badge}</span>}<span className="plan-name">{plan.name}</span><h3><small>CHF</small>{plan.price}</h3><p>{monthly ? "pro Monat · 12 Monate" : plan.intro}</p><hr /><ul>{plan.items.map((item) => <li key={item}><b>✓</b>{item}</li>)}</ul><Link href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗</span></Link></article>)}</div><div className="price-note pricing-page-note"><strong>Du brauchst etwas anderes?</strong><span>Wir erstellen auch individuelle Offerten für besondere Anforderungen.</span><Link href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen ↗</Link></div><section className="pricing-faq" aria-labelledby="pricing-faq-title"><div><span className="eyebrow">Fragen & Antworten</span><h2 id="pricing-faq-title">Klar beantwortet.</h2></div><div className="pricing-faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "is-open" : ""} key={question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><b>+</b></button><div><p>{answer}</p></div></article>)}</div></section></section>;
}