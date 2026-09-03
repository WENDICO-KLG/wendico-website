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
  name: "Wendico KLG",
  url: "https://wendico.ch",
  logo: "https://wendico.ch/logo.png",
  image: "https://wendico.ch/opengraph-image.png",
  description: "Wendico entwickelt individuelle Websites, digitale Auftritte und Umsatzsysteme für Unternehmen im Zürcher Weinland und der Schweiz.",
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
  founder: [
    { "@type": "Person", name: "Panat Ruangsri", jobTitle: "Sales, Strategie, Webdesign" },
    { "@type": "Person", name: "Tim Biedermann", jobTitle: "Finance, Strategie, Design" },
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
  name: "Wendico",
  url: "https://wendico.ch",
  inLanguage: "de-CH",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was genau macht Wendico?",
      acceptedAnswer: { "@type": "Answer", text: "Wendico entwickelt individuelle Websites, digitale Auftritte, Social Media Inhalte und Umsatzsysteme für Unternehmen und Marken." },
    },
    {
      "@type": "Question",
      name: "Wie starten wir ein Projekt?",
      acceptedAnswer: { "@type": "Answer", text: "Der Start erfolgt über ein kurzes Erstgespräch, in dem Ziele, Umfang und sinnvolle nächste Schritte geklärt werden." },
    },
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
    icon: [{ url: "/logo.png", type: "image/png" }],
    shortcut: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de-CH">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <SiteLoader />
        <AppNav />
        <ScrollReveals />
        <PageTransition>{children}</PageTransition>
        <AppFooter />
      </body>
    </html>
  );
}