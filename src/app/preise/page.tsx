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

export default function PricesPage() {
  return <main className="page pricing-page"><div className="pricing-page-atmosphere" aria-hidden="true" /><span className="pricing-page-wordmark" aria-hidden="true">Preise</span><section className="pricing-page-hero shell"><span className="eyebrow">Transparente Preise</span><h1>Ein System, das sich<br /><em>rechnen darf.</em></h1><p>Website, Kontaktwege, Google und Betrieb als klares Gesamtpaket. Einmal investieren, danach gehört der Auftritt euch.</p></section><section className="pricing-page-metrics shell"><div><strong>Mehr</strong><span>Anfragen, Buchungen und Kontakte als Ziel</span></div><div><strong>100%</strong><span>Eigentum nach Abschluss</span></div><div><strong>0</strong><span>Plugin-Abhängigkeiten</span></div></section><PriceModels /></main>;
}