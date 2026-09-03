"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import DNAHelix from "@/components/DNAHelix";

const projects = [
  { name: "Lostrios", type: "Brand Experience", date: "Mai 2026", image: "/customer-websites/lostrios-website.png", href: "https://lostrios.ch/", description: "Ein kompromissloser Markenauftritt für Musik, Community und gemeinsame Erlebnisse.", tags: ["Branding", "Custom Code"], tone: "graphite" },
  { name: "Asia Food Festival", type: "Event", date: "Mai 2026", image: "/customer-websites/tresch-asia-events-website.png", href: "https://www.asiafoodfestival.ch/", description: "Programm, Stände und Anmeldung in einem lebendigen digitalen Eventauftritt.", tags: ["Event", "Conversion"], tone: "warm" },
  { name: "Alija Gebäudereinigung", type: "Service", date: "April 2026", image: "/customer-websites/alija-gebäudereinigung-website.png", href: "https://alija-gebaeudereinigung.ch/", description: "Ein lokaler Serviceauftritt, der Vertrauen schafft und Anfragen ohne Umwege ermöglicht.", tags: ["Local SEO", "Service"], tone: "graphite" },
  { name: "SC Beauty Luxe", type: "Beauty & Commerce", date: "März 2026", image: "/customer-websites/scbeautyluxe-website.png", href: "https://scbeautyluxe.com/", description: "Premium Beauty digital übersetzt: ruhig, hochwertig und direkt auf Buchungen ausgerichtet.", tags: ["Webdesign", "Conversion"], tone: "warm" },
  { name: "Ryu Vogler", type: "Portfolio", date: "Februar 2026", image: "/customer-websites/ryuvogler-website.png", href: "https://ryuvogler.com/", description: "Persönlichkeit, Arbeit und Kontakt als präzises digitales Portfolio inszeniert.", tags: ["Portfolio", "Personal Brand"], tone: "graphite" },
  { name: "Elegant Society", type: "Premium Community", date: "Dezember 2025", image: "/customer-websites/elegantsociety-website.png", href: "https://elegantsociety.ch/", description: "Eine exklusive Plattform, die Atmosphäre, Anspruch und Membership nahtlos verbindet.", tags: ["Experience", "Membership"], tone: "bronze" },
  { name: "Rebthai", type: "Gastronomie", date: "Oktober 2025", image: "/customer-websites/rebthai-website.png", href: "https://rebthai.ch/", description: "Angebot, Atmosphäre und Kontakt für schnelle Entscheidungen klar zusammengeführt.", tags: ["Restaurant", "Mobile First"], tone: "warm" },
  { name: "Weinland Esskultur", type: "Gastronomie", date: "Oktober 2025", image: "/customer-websites/weinlandesskultur-website.png", href: "https://weinlandesskultur.ch/", description: "Regionale Identität und Genuss in einer warmen, klar geführten Bildwelt.", tags: ["Storytelling", "Restaurant"], tone: "bronze" },
  { name: "Thai Lodge", type: "Gastronomie", date: "Oktober 2025", image: "/customer-websites/thailodge-website.png", href: "https://thai-lodge.ch/", description: "Menü, Ambiente und Tischreservation als direkte digitale Gästereise.", tags: ["Reservation", "Gastronomie"], tone: "warm" },
  { name: "Thai Helping Point", type: "Information", date: "September 2025", image: "/customer-websites/thaihelpingpoint-website.png", href: "https://thaihelpingpoint.ch/", description: "Strukturierte Informationen und schnelle Orientierung für Menschen, die Antworten brauchen.", tags: ["Information", "Accessibility"], tone: "graphite" },
];

export default function HomeProjectSpiral() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rows = Array.from(section.querySelectorAll<HTMLElement>(".project-spiral-row"));
    let frame = 0;
    const render = () => {
      const mobile = window.innerWidth <= 900 || window.matchMedia("(pointer: coarse)").matches;
      const viewportCenter = window.innerHeight / 2;
      const radius = mobile ? 70 : 430;
      const states = rows.map((row) => {
        const bounds = row.getBoundingClientRect();
        const distanceFromCenter = bounds.top + bounds.height / 2 - viewportCenter;
        const angle = (distanceFromCenter / radius) * (180 / Math.PI);
        const depth = (Math.cos(angle * (Math.PI / 180)) + 1) / 2;
        return { card: row.querySelector<HTMLElement>(".home-project-card"), angle, depth };
      });

      states.forEach(({ card, angle, depth }) => {
        if (!card) return;
        if (mobile) {
          card.style.removeProperty("--helix-angle");
          card.style.removeProperty("--helix-radius");
          card.style.removeProperty("--helix-scale");
          card.style.removeProperty("--helix-opacity");
          card.style.zIndex = "auto";
          return;
        }
        card.style.setProperty("--helix-angle", `${angle.toFixed(2)}deg`);
        card.style.setProperty("--helix-radius", `${radius}px`);
        card.style.setProperty("--helix-scale", (0.93 + depth * 0.07).toFixed(3));
        card.style.setProperty("--helix-opacity", (0.76 + depth * 0.24).toFixed(3));
        card.style.zIndex = String(Math.round(depth * 100));
      });
    };
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        render();
      });
    };

    render();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="home-projects-section">
      <div className="home-projects-bg" aria-hidden="true" />
      <div className="shell home-projects-inner">
        <div className="section-heading split">
          <div><span className="eyebrow">Alle Projekte</span><h2>Eine Linie.<br /><em>Zehn Geschichten.</em></h2><p className="home-projects-mobile-note">Unsere aktuellsten Arbeiten.</p></div>
          <Link className="text-link" href="/projekte">Projektübersicht öffnen ↗︎</Link>
        </div>
        <div className="project-spiral-line"><DNAHelix /></div>
        <div className="home-projects-grid">
          {projects.map((project, index) => (
            <article className="project-spiral-row" key={project.name}>
              <a className={`home-project-card ${project.tone}${index > 2 ? " is-mobile-hidden" : ""}`} href={project.href} target="_blank" rel="noreferrer">
                <div className="home-project-preview"><Image src={project.image} alt={`Website ${project.name}`} fill sizes="(max-width: 680px) 82vw, 39vw" /></div>
                <div className="home-project-blur" aria-hidden="true"><Image src={project.image} alt="" fill sizes="(max-width: 680px) 82vw, 39vw" /></div>
                <span className="home-project-shade" />
                <div className="home-project-content">
                  <span className="home-project-type">{project.type} · {project.date}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="home-project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}