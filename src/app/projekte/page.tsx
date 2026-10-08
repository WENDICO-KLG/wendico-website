import type { Metadata } from "next";
import Image from "next/image";
import { openGraphImage, serializeJsonLd, siteUrl } from "@/lib/seo";
import ProjectsGrid from "./ProjectsGrid";
import { projects } from "./projects";
import mountainImage from "../../../hero.jpg";

export const metadata: Metadata = {
  title: "Salon-Websites: Projekte und Referenzen",
  description: "Salon-Websites von Wendico: Beauty- und Coiffeur-Auftritte mit klarem Design und direktem Weg zur Online-Terminbuchung. Dazu ausgewählte weitere Referenzen.",
  alternates: { canonical: "/projekte" },
  keywords: ["Beauty Salon Website Beispiele", "Coiffeur Website Referenzen", "Salon Website mit Buchung", "Wendico Projekte", "Webdesign Schweiz"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/projekte",
    title: "Salon-Websites: Projekte und Referenzen | Wendico",
    description: "Salon-Websites von Wendico: Beauty- und Coiffeur-Auftritte mit klarem Design und direktem Weg zur Online-Terminbuchung. Dazu ausgewählte weitere Referenzen.",
    images: [openGraphImage],
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Webdesign-Projekte und Referenzen von Wendico",
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${siteUrl}/projekte/${project.slug}`,
    name: project.name,
  })),
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(projectsJsonLd) }} />
      <section className="projects-page-hero">
        <Image className="projects-page-hero-bg" src={mountainImage} alt="" fill priority sizes="100vw" />
        <span className="projects-page-hero-overlay" aria-hidden="true" />
        <div className="shell projects-page-hero-shell">
          <span className="eyebrow projects-page-eyebrow"><i /> Projekte</span>
          <h1>Websites<br />für Salons.<br /><em>Einfach buchen.</em></h1>
          <p>Websites für Beauty- und Coiffeur-Salons, die ihre Arbeit zeigen und neue Kundschaft einfach zum Wunschtermin führen.</p>
          <div className="projects-page-hero-metrics" role="group" aria-label="Projekt Kennzahlen">
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