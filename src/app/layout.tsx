import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import AppFooter from "@/components/AppFooter";
import AppNav from "@/components/AppNav";
import CookieBanner from "@/components/CookieBanner";
import PageTransition from "@/components/PageTransition";
import ScrollReveals from "@/components/ScrollReveals";
import SiteLoader from "@/components/SiteLoader";
import { openGraphImage, serializeJsonLd, serviceAreasJsonLd, siteUrl } from "@/lib/seo";
import { serviceOrder, services } from "@/lib/services";
import "./globals.css";
import "./mobile.css";

const dmSans = localFont({ src: "./fonts/dm-sans-latin.woff2", weight: "100 1000", variable: "--font-dm-sans", display: "swap" });
const manrope = localFont({ src: "./fonts/manrope-latin.woff2", weight: "200 800", variable: "--font-manrope", display: "swap" });

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://wendico.ch/#organization",
  name: "Wendico KLG",
  url: "https://wendico.ch",
  logo: "https://wendico.ch/wendico_logo.png",
  image: "https://wendico.ch/opengraph-image",
  description: "Wendico ist ein Digital- und Wachstumspartner in der Schweiz für Websites, Software, Social Media, KI-Integration und digitale Umsatzsysteme.",
  keywords: ["Digitalagentur Schweiz", "Websites für Unternehmen", "Softwareentwicklung", "Social Media Management", "KI-Integration", "ChatGPT Integration Thalheim", "KI Beratung Winterthur", "digitale Umsatzsysteme", "Webdesign Zürcher Weinland"],
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
  areaServed: serviceAreasJsonLd,
  priceRange: "CHF 150–25'000+",
  knowsAbout: ["Webdesign", "Webentwicklung", "Suchmaschinenoptimierung", "Generative Engine Optimization", "Softwareentwicklung", "SaaS", "Social Media Management", "Content-Strategie", "Künstliche Intelligenz", "ChatGPT-Integration", "KI-Automatisierung", "Prozessautomatisierung", "CRM", "Sales Funnels", "Conversion-Optimierung"],
  founder: [
    { "@type": "Person", name: "Panat Ruangsri", jobTitle: "Sales, Strategie, Webdesign", sameAs: "https://www.linkedin.com/in/panat-ruangsri-28a137288/" },
    { "@type": "Person", name: "Tim Biedermann", jobTitle: "Finance, Strategie, Design", sameAs: "https://www.linkedin.com/in/tim-biedermann-ba5b35286/" },
  ],
  makesOffer: serviceOrder.map((slug) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      "@id": `https://wendico.ch/dienstleistungen/${slug}#service`,
      name: services[slug].metaTitle,
      url: `https://wendico.ch/dienstleistungen/${slug}`,
      description: services[slug].metaDescription,
      provider: { "@id": "https://wendico.ch/#organization" },
    },
  })),
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
  name: "Digitale Dienstleistungen von Wendico",
  itemListElement: serviceOrder.map((slug) => ({
    "@type": "Offer",
    url: `https://wendico.ch/dienstleistungen/${slug}`,
    itemOffered: {
      "@type": "Service",
      "@id": `https://wendico.ch/dienstleistungen/${slug}#service`,
      name: services[slug].metaTitle,
      description: services[slug].metaDescription,
      url: `https://wendico.ch/dienstleistungen/${slug}`,
      provider: { "@id": "https://wendico.ch/#organization" },
      areaServed: serviceAreasJsonLd,
    },
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Wendico | Digital- und Wachstumspartner", template: "%s | Wendico" },
  description: "Wendico unterstützt Unternehmen in der Schweiz mit Websites, Softwareentwicklung, Social Media, KI-Integration und digitalen Umsatzsystemen.",
  applicationName: "Wendico",
  authors: [{ name: "Wendico KLG", url: "https://wendico.ch" }],
  creator: "Wendico KLG",
  publisher: "Wendico KLG",
  category: "Digitale Dienstleistungen",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://wendico.ch",
    siteName: "Wendico",
    title: "Wendico | Digital- und Wachstumspartner",
    description: "Websites, Software, Social Media, KI-Lösungen und digitale Umsatzsysteme für Unternehmen in der Schweiz.",
    images: [openGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendico | Digital- und Wachstumspartner",
    description: "Websites, Software, Social Media, KI-Lösungen und digitale Umsatzsysteme für Unternehmen in der Schweiz.",
    images: [openGraphImage.url],
  },
  icons: {
    icon: [{ url: "/wendico_logo-quadrat.png", type: "image/png", sizes: "512x512" }],
    shortcut: [{ url: "/wendico_logo-quadrat.png", type: "image/png" }],
    apple: [{ url: "/wendico_logo-quadrat.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de-CH" data-scroll-behavior="smooth" className={`${dmSans.variable} ${manrope.variable}`}>
      <head>
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceCatalogJsonLd) }} />
        <SiteLoader />
        <AppNav />
        <ScrollReveals />
        <PageTransition>{children}</PageTransition>
        <AppFooter />
        <CookieBanner />
      </body>
    </html>
  );
}