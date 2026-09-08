import type { Metadata } from "next";
import type { ReactNode } from "react";
import AppFooter from "@/components/AppFooter";
import AppNav from "@/components/AppNav";
import PageTransition from "@/components/PageTransition";
import ScrollReveals from "@/components/ScrollReveals";
import SiteLoader from "@/components/SiteLoader";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://wendico.ch/#organization",
  name: "Wendico KLG",
  url: "https://wendico.ch",
  logo: "https://wendico.ch/wendico_logo.png",
  image: "https://wendico.ch/opengraph-image.png",
  description: "Wendico entwickelt individuelle Websites, digitale Auftritte und Umsatzsysteme für Unternehmen im Zürcher Weinland und der Schweiz.",
  keywords: ["Webdesign Schweiz", "Webdesign Zürcher Weinland", "Website erstellen lassen", "Website Agentur Thalheim an der Thur", "SEO Website Schweiz", "digitale Umsatzsysteme"],
  email: "info@wendico.ch",
  telephone: "+41795041005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Im Hofacker 3",
    postalCode: "8478",
    addressLocality: "Thalheim an der Thur",
    addressCountry: "CH",
  },
  sameAs: ["https://instagram.com/wendico.ch"],
  contactPoint: { "@type": "ContactPoint", telephone: "+41795041005", contactType: "customer service", email: "info@wendico.ch", areaServed: "CH", availableLanguage: ["de", "fr", "en"] },
  areaServed: [
    { "@type": "City", name: "Zürich" },
    { "@type": "Place", name: "Zürcher Weinland" },
    { "@type": "Country", name: "Schweiz" },
  ],
  priceRange: "CHF 3'500–8'500",
  knowsAbout: ["Webdesign", "Webentwicklung", "Suchmaschinenoptimierung", "Social Media Management", "Conversion-Optimierung"],
  founder: [
    { "@type": "Person", name: "Panat Ruangsri", jobTitle: "Sales, Strategie, Webdesign", sameAs: "https://www.linkedin.com/in/panat-ruangsri-28a137288/" },
    { "@type": "Person", name: "Tim Biedermann", jobTitle: "Finance, Strategie, Design", sameAs: "https://www.linkedin.com/in/tim-biedermann-ba5b35286/" },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Webauftritt Erstellung" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Umsatzsystem" } },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://wendico.ch/#website",
  name: "Wendico",
  url: "https://wendico.ch",
  inLanguage: "de-CH",
  publisher: { "@id": "https://wendico.ch/#organization" },
};

const serviceCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": "https://wendico.ch/#services",
  name: "Webdesign- und Digitalleistungen von Wendico",
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Webdesign und Webentwicklung", description: "Individuelle, responsive Websites mit Strategie, Design, Entwicklung und technischer SEO-Basis.", provider: { "@id": "https://wendico.ch/#organization" } } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hosting und Wartung", description: "Hosting, SSL, Backups, Updates, Monitoring und Support für Websites.", provider: { "@id": "https://wendico.ch/#organization" } } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digitale Umsatzsysteme", description: "Digitale Nutzerwege für qualifizierte Anfragen, Buchungen, Leads und Umsatz.", provider: { "@id": "https://wendico.ch/#organization" } } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management", description: "Content-Planung, Social-Media-Formate und konsistente Markenkommunikation.", provider: { "@id": "https://wendico.ch/#organization" } } },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wendico.ch"),
  title: { default: "Wendico | Websites mit Wirkung", template: "%s | Wendico" },
  description: "Wendico entwickelt individuelle Websites, digitale Auftritte und Umsatzsysteme für Unternehmen im Zürcher Weinland und der Schweiz.",
  applicationName: "Wendico",
  authors: [{ name: "Wendico KLG", url: "https://wendico.ch" }],
  creator: "Wendico KLG",
  publisher: "Wendico KLG",
  category: "Webdesign",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://wendico.ch",
    siteName: "Wendico",
    title: "Wendico | Websites mit Wirkung",
    description: "Individuelle Websites, Webdesign und digitale Systeme für Unternehmen im Zürcher Weinland.",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Wendico Websites mit Wirkung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendico | Websites mit Wirkung",
    description: "Individuelle Websites, Webdesign und digitale Systeme für Unternehmen im Zürcher Weinland.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [{ url: "/wendico_logo-quadrat.png", type: "image/png", sizes: "512x512" }],
    shortcut: [{ url: "/wendico_logo-quadrat.png", type: "image/png" }],
    apple: [{ url: "/wendico_logo-quadrat.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de-CH">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceCatalogJsonLd) }} />
        <SiteLoader />
        <AppNav />
        <ScrollReveals />
        <PageTransition>{children}</PageTransition>
        <AppFooter />
      </body>
    </html>
  );
}