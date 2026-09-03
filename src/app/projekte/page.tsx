import type { Metadata } from "next";
import Image from "next/image";
import ProjectsGrid from "./ProjectsGrid";
import mountainImage from "../../../hero.jpg";

export const metadata: Metadata = {
  title: "Projekte",
  description: "Referenzen von Wendico: individuelle Websites für Marken, Gastronomie, Events, Services, Beauty und Portfolio-Auftritte in der Schweiz.",
  alternates: { canonical: "/projekte" },
  keywords: ["Webdesign Referenzen Schweiz", "Wendico Projekte", "Website Beispiele", "Restaurant Website", "Business Website Schweiz"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/projekte",
    title: "Projekte | Wendico",
    description: "Referenzen von Wendico: individuelle Websites für Marken, Gastronomie, Events, Services, Beauty und Portfolio-Auftritte in der Schweiz.",
  },
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-page-hero">
        <Image className="projects-page-hero-bg" src={mountainImage} alt="" fill priority sizes="100vw" />
        <span className="projects-page-hero-overlay" aria-hidden="true" />
        <div className="shell projects-page-hero-shell">
          <span className="eyebrow projects-page-eyebrow"><i /> Projekte</span>
          <h1>Digitale Auftritte<br /><em>mit sichtbarer Wirkung.</em></h1>
          <p>Websites für Marken, Gastronomie, Events und Menschen, die online nicht austauschbar wirken wollen.</p>
          <div className="projects-page-hero-metrics" aria-label="Projekt Kennzahlen">
            <span><strong>10+</strong> realisierte Auftritte</span>
            <span><strong>100%</strong> individueller Code</span>
            <span><strong>CH</strong> aus dem Zürcher Weinland</span>
          </div>
        </div>
      </section>
      <ProjectsGrid />
    </main>
  );
}