import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import AppNav from "@/components/AppNav";
import founderImage from "../../../founder.png";

export const metadata: Metadata = {
  title: "Über Uns",
  description:
    "Wendico ist ein junges Webstudio aus dem Zürcher Weinland. Unser Ziel: digitale Auftritte, die einfach wirken und professionell verkaufen.",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über Uns | Wendico",
    description: "Klar denken. Schnell bauen. Das junge Webstudio aus dem Zürcher Weinland.",
    url: "/ueber-uns",
  },
};

const values = [
  { title: "Innovation", label: "01", text: "Wir denken voraus und entwickeln kreative Lösungen, die Unternehmen online voranbringen." },
  { title: "Orientierung", label: "02", text: "Wir arbeiten zielgerichtet und halten den Weg vom ersten Gespräch bis zum Launch klar." },
  { title: "Qualität", label: "03", text: "Wir verbinden saubere Technik, Design und eine professionelle Onlinepräsenz." },
  { title: "Zielstrebigkeit", label: "04", text: "Wir setzen Ideen fokussiert um und schaffen sichtbaren Fortschritt." },
];

const team = [
  {
    name: "Panat Ruangsri",
    role: "CEO & Founder | Developer",
    href: "https://www.linkedin.com/in/panat-ruangsri-28a137288/",
    image: "/wendico-live/about-founder.jpg",
  },
  {
    name: "Tim Biedermann",
    role: "CEO & Founder | Developer",
    href: "https://www.linkedin.com/in/tim-biedermann-ba5b35286/",
    image: "/wendico-live/about-team.jpg",
  },
];

export default function AboutPage() {
  return (
    <main className="standard-page about-page-redesign">
      <AppNav active="ueber-uns" />
      <section className="standard-hero standard-hero-split about-hero-redesign" aria-labelledby="about-page-title">
        <div className="about-hero-copy">
          <p>Über Uns</p>
          <h1 id="about-page-title">Jung im Kopf. Klar im Web.</h1>
          <span>
            Jung, orientiert und zielstrebig: Seit Anfang 2025 gegründet von zwei Auszubildenden, um Onlinepräsenz und Qualität auf ein neues Level zu heben.
          </span>
          <div className="about-hero-badges" aria-label="Wendico Fakten">
            <span>Seit 2025</span>
            <span>Zürcher Weinland</span>
            <span>Eigener Code</span>
          </div>
        </div>
        <div className="standard-image-panel about-hero-panel">
          <div className="about-orbit" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Image src={founderImage} alt="Panat Ruangsri und Tim Biedermann von Wendico" priority />
        </div>
      </section>

      <section className="standard-section about-values-section" aria-labelledby="values-title">
        <div className="section-heading section-heading-split">
          <div>
            <p>Ein junges Unternehmen mit Sitz im Zürcher Weinland</p>
            <h2 id="values-title">Unsere Werte prägen, wie wir arbeiten.</h2>
          </div>
          <span>Unsere Werte sind der Kern unseres Unternehmens. Sie prägen, wie wir arbeiten, denken und mit unseren Kunden umgehen.</span>
        </div>
        <div className="standard-card-grid four-columns">
          {values.map((value, index) => (
            <article className="standard-card about-value-card" key={value.title} style={{ "--value-index": index } as CSSProperties}>
              <span>{value.label}</span>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standard-section about-team-section" aria-labelledby="team-title">
        <div className="big-statement">
          <p>Unsere Teammitglieder</p>
          <h2 id="team-title">Panat und Tim entwickeln Wendico.</h2>
        </div>
        <div className="standard-card-grid two-columns">
          {team.map((person, index) => (
            <a className="standard-card standard-link-card about-team-card" href={person.href} key={person.name} target="_blank" rel="noreferrer" style={{ "--team-index": index } as CSSProperties}>
              <Image className="team-member-photo" src={person.image} alt={person.name} width={520} height={520} />
              <span>{index === 0 ? "Development" : "Strategy"}</span>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <strong>LinkedIn ansehen</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}