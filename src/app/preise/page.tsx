import type { Metadata } from "next";
import { openGraphImage, serializeJsonLd } from "@/lib/seo";
import PriceModels from "./PriceModels";

export const metadata: Metadata = {
  title: "Preise für Salon-Websites",
  description: "Website Preise von Wendico: klare Pakete für Beauty- und Coiffeur-Salons, inklusive Buchungsweg und laufender Betreuung in der Schweiz.",
  alternates: { canonical: "/preise" },
  keywords: ["Coiffeur Website Kosten", "Beauty Salon Webdesign Preise", "Salon Website Kosten Schweiz", "Website Betreuung", "Wendico Preise"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/preise",
    title: "Preise für Salon-Websites | Wendico",
    description: "Website Preise von Wendico: klare Pakete für Beauty- und Coiffeur-Salons, inklusive Buchungsweg und laufender Betreuung in der Schweiz.",
    images: [openGraphImage],
  },
};

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Website Preise von Wendico",
  url: "https://wendico.ch/preise",
  itemListElement: [
    { "@type": "Offer", name: "Website", price: "3500", priceCurrency: "CHF", description: "Salon-Website bis 5 Seiten mit Mobile-Optimierung, Kontaktweg und Basic SEO.", url: "https://wendico.ch/preise" },
    { "@type": "Offer", name: "Business", price: "5500", priceCurrency: "CHF", description: "Salon-Website bis 10 Seiten mit erweiterten SEO-Leistungen und individuellen Animationen.", url: "https://wendico.ch/preise" },
    { "@type": "Offer", name: "Full System", price: "8500", priceCurrency: "CHF", description: "Individueller Salon-Auftritt mit unlimitierten Seiten, Mehrsprachigkeit und abgestimmtem Buchungsweg.", url: "https://wendico.ch/preise" },
  ],
};

export default function PricesPage() {
  return <main className="page pricing-page"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(pricingJsonLd) }} /><div className="pricing-page-atmosphere" aria-hidden="true" /><span className="pricing-page-wordmark" aria-hidden="true">Preise</span><section className="pricing-page-hero shell"><span className="eyebrow">Transparente Preise</span><h1>Ein System, das sich<br /><em>rechnen darf.</em></h1><p>Dein Salon, deine Leistungen und die Online-Terminbuchung als klarer digitaler Auftritt. Einmal investieren, danach gehört die Website euch.</p></section><section className="pricing-page-metrics shell"><div><strong>Mehr</strong><span>Online-Termine und neue Kundschaft als Ziel</span></div><div><strong>100%</strong><span>Eigentum nach Abschluss</span></div><div><strong>0</strong><span>Plugin-Abhängigkeiten</span></div></section><PriceModels /></main>;
}