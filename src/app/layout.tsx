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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <head>
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </head>
      <body>
        <AppLoader />
        <PageTransition>{children}</PageTransition>
        <AppFooter />
      </body>
    </html>
  );
}
