import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/AboutHero";
import AboutSectionParallax from "@/components/AboutSectionParallax";

export const metadata: Metadata = {
  title: "Über uns",
  description: "Lerne Wendico kennen: Digitalstudio aus Thalheim an der Thur für Strategie, Webdesign, Design und digitale Systeme.",
  alternates: { canonical: "/ueber-uns" },
  keywords: ["Wendico Team", "Digitalstudio Zürcher Weinland", "Webdesign Thalheim an der Thur", "Panat Ruangsri", "Tim Biedermann"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/ueber-uns",
    title: "Über uns | Wendico",
    description: "Lerne Wendico kennen: Digitalstudio aus Thalheim an der Thur für Strategie, Webdesign, Design und digitale Systeme.",
  },
};

const principles = [
  ["clarity", "Klarheit", "Wir reduzieren Komplexität, bis Strategie, Design und Technik verständlich zusammenarbeiten."],
  ["impact", "Wirkung", "Jede Entscheidung soll deiner Marke helfen: mehr Vertrauen, bessere Anfragen, sauberere Abläufe."],
  ["identity", "Eigenständigkeit", "Wir bauen keine Austauschware, sondern Auftritte mit eigener Sprache, eigenem Code und klarer Haltung."],
];

const workflow = [
  ["Verstehen", "Wir hören zuerst zu, sortieren Ziele und erkennen, wo digital wirklich Hebel entstehen."],
  ["Gestalten", "Aus Inhalt, Struktur und Look entsteht ein Auftritt, der sich nach deiner Marke anfühlt."],
  ["Bauen", "Wir entwickeln performant, responsiv und so, dass dein System langfristig sauber weiterwachsen kann."],
];

const roleCards = [
  ["Strategie", "Ziele ordnen, Nutzer verstehen, Richtung festlegen."],
  ["Auftritt", "Design, Inhalt und Technik zu einer klaren Marke verbinden."],
  ["System", "Anfragen, Abläufe und Wachstum messbar unterstützen."],
];

const team = [
  ["Panat Ruangsri", "/wendico-live/panat.JPG", "Sales · Strategie · Webdesign", "https://www.linkedin.com/in/panat-ruangsri-28a137288/"],
  ["Tim Biedermann", "/wendico-live/tim.jpg", "Finance · Strategie · Design", "https://www.linkedin.com/in/tim-biedermann-ba5b35286/"],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutSectionParallax />
      <AboutHero />

      <section className="about-page-intro">
        <div className="about-page-section-bg" aria-hidden="true" />
        <div className="shell about-page-intro-grid">
          <div>
            <span className="eyebrow"><i /> Unsere Rolle</span>
            <h2>Wir sind nicht einfach eine Agentur. Wir sind dein digitales Gegenüber.</h2>
          </div>
          <div className="about-page-role-panel">
            <p>Wir denken mit, hinterfragen, strukturieren und bauen. Am Ende steht ein Auftritt, der verständlich führt und im Alltag hilft.</p>
            <div className="about-page-role-cards">
              {roleCards.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-values">
        <div className="about-page-values-bg" aria-hidden="true" />
        <div className="shell">
          <div className="about-page-section-heading">
            <span className="eyebrow about-page-eyebrow"><i /> Haltung</span>
            <h2>Drei Prinzipien,<br />die jedes Projekt tragen.</h2>
          </div>
          <div className="about-page-value-grid">
            {principles.map(([icon, title, text]) => (
              <article className="about-page-value-card" key={title}>
                <span className={`about-page-value-icon about-page-value-icon-${icon}`} aria-hidden="true"><i /><i /><i /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-page-method">
        <div className="about-page-section-bg" aria-hidden="true" />
        <div className="shell about-page-method-grid">
          <div className="about-page-method-visual">
            <div className="about-page-process-graphic" aria-hidden="true">
              <span className="workflow-board">
                <i className="workflow-topbar" />
                <b className="workflow-column workflow-column-one"><small>Strategie</small><em /></b>
                <b className="workflow-column workflow-column-two"><small>Design</small><em /></b>
                <b className="workflow-column workflow-column-three"><small>Code</small><em /></b>
              </span>
              <span className="workflow-output">
                <small>Launch-ready System</small>
                <i />
                <i />
                <i />
              </span>
              <span className="workflow-cursor" />
              <span className="workflow-connector workflow-connector-one" />
              <span className="workflow-connector workflow-connector-two" />
              <span className="workflow-pulse workflow-pulse-one" />
              <span className="workflow-pulse workflow-pulse-two" />
            </div>
          </div>
          <div className="about-page-method-copy">
            <span className="eyebrow"><i /> Arbeitsweise</span>
            <h2>Vom Gedanken zum System.</h2>
            <div className="about-page-steps">
              {workflow.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-page-team">
        <div className="shell">
          <div className="about-page-section-heading is-centered">
            <span className="eyebrow"><i /> Team</span>
            <h2>Zwei Perspektiven.<br /><em>Ein Anspruch.</em></h2>
          </div>
          <div className="about-page-team-grid">
            {team.map(([name, image, role, href]) => (
              <a className="about-page-team-card" href={href} target="_blank" rel="noreferrer" key={name}>
                <Image src={image} alt={name} fill sizes="(max-width: 760px) 92vw, 520px" />
                <span className="about-page-team-shade" />
                <div>
                  <span>{role}</span>
                  <h3>{name}</h3>
                  <b>LinkedIn ↗︎</b>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}