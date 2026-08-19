import type { Metadata } from "next";
import PreiseClient from "./PreiseClient";

export const metadata: Metadata = {
  title: "Preise für Restaurant-Websites",
  description:
    "Website, Google Firmenseite, Ads und Betrieb als klares System für Restaurants ab CHF 3'500. Einmal investieren, danach gehört der Auftritt euch.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise für Restaurant-Websites | Wendico",
    description: "Website, Reservation, Google und laufender Betrieb als klares System für Restaurants.",
    url: "/preise",
  },
};

export default function Page() {
  return <PreiseClient />;
}
