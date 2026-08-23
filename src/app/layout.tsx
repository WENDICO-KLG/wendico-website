import "./globals.css";
import type { Metadata } from "next";
import AppFooter from "@/components/AppFooter";
import AppLoader from "@/components/AppLoader";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL("https://wendico.ch"),
  title: {
    default: "Wendico | Schweizer Web & Software Agentur",
    template: "%s | Wendico",
  },
  description:
    "Wendico baut schnelle, individuelle Websites mit klarem Design, starken Projekten und betreuter Technik.",
  keywords: [
    "Webdesign Schweiz",
    "Website erstellen lassen",
    "Webagentur Zürich",
    "Restaurant Website",
    "Google Ads Restaurant",
    "Wendico",
  ],
  authors: [{ name: "Wendico KLG" }],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    title: "Wendico | Schweizer Web & Software Agentur",
    description:
      "Wendico baut schnelle, individuelle Websites mit klarem Design, starken Projekten und betreuter Technik.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wendico | Schweizer Web & Software Agentur",
    description:
      "Wendico baut schnelle, individuelle Websites mit klarem Design, starken Projekten und betreuter Technik.",
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WENDICO KLG",
  url: "https://wendico.ch",
  email: "info@wendico.ch",
  telephone: "+41795041005",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Im Hofacker 3",
    postalCode: "8478",
    addressLocality: "Thalheim an der Thur",
    addressCountry: "CH",
  },
  areaServed: "CH",
  sameAs: ["https://www.instagram.com/wendico.ch/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <AppLoader />
        <PageTransition>{children}</PageTransition>
        <AppFooter />
      </body>
    </html>
  );
}
