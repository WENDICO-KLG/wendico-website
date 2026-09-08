import type { Metadata } from "next";
import PriceModels from "./PriceModels";

export const metadata: Metadata = {
  title: "Preise",
  description: "Website Preise von Wendico: klare Pakete für Unternehmen, Marken, Gastronomie und laufende Betreuung in der Schweiz.",
  alternates: { canonical: "/preise" },
  keywords: ["Website Kosten Schweiz", "Webdesign Preise", "Website Paket", "Website Betreuung", "Wendico Preise"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/preise",
    title: "Preise | Wendico",
    description: "Website Preise von Wendico: klare Pakete für Unternehmen, Marken, Gastronomie und laufende Betreuung in der Schweiz.",
  },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Website Preise von Wendico",
  url: "https://wendico.ch/preise",
  itemListElement: [
    { "@type": "Offer", name: "Website", price: "3500", priceCurrency: "CHF", description: "Website-Paket bis 5 Seiten mit Mobile-Optimierung, Kontaktformular und Basic SEO.", url: "https://wendico.ch/preise" },
    { "@type": "Offer", name: "Business", price: "5500", priceCurrency: "CHF", description: "Business-Website bis 10 Seiten mit erweiterten SEO-Leistungen und individuellen Animationen.", url: "https://wendico.ch/preise" },
    { "@type": "Offer", name: "Full System", price: "8500", priceCurrency: "CHF", description: "Individuelles digitales System mit unlimitierten Seiten, Mehrsprachigkeit und Umsatzprozess.", url: "https://wendico.ch/preise" },
  ],
};

export default function PricesPage() {
  return <main className="page pricing-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }} /><div className="pricing-page-atmosphere" aria-hidden="true" /><span className="pricing-page-wordmark" aria-hidden="true">Preise</span><section className="pricing-page-hero shell"><span className="eyebrow">Transparente Preise</span><h1>Ein System, das sich<br /><em>rechnen darf.</em></h1><p>Website, Kontaktwege, Google und Betrieb als klares Gesamtpaket. Einmal investieren, danach gehört der Auftritt euch.</p></section><section className="pricing-page-metrics shell"><div><strong>Mehr</strong><span>Anfragen, Buchungen und Kontakte als Ziel</span></div><div><strong>100%</strong><span>Eigentum nach Abschluss</span></div><div><strong>0</strong><span>Plugin-Abhängigkeiten</span></div></section><PriceModels /></main>;
}