"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  ["Lostrios.ch", "Brand", "Mai 2026", "https://lostrios.ch/", "/customer-websites/lostrios-website.png", "Markenauftritt mit klarer Story und hochwertiger Präsentation."],
  ["Asiafoodfestival.ch", "Event", "Mai 2026", "https://www.asiafoodfestival.ch/", "/customer-websites/tresch-asia-events-website.png", "Event-Informationen, Programm und Besucherführung schnell erfassbar gemacht."],
  ["Alija Gebäudereinigung", "Service", "April 2026", "https://alija-gebaeudereinigung.ch/", "/customer-websites/alija-gebäudereinigung-website.png", "Dienstleistungen strukturiert und Kontaktaufnahme einfacher gemacht."],
  ["SC Beauty Luxe", "Beauty", "März 2026", "https://scbeautyluxe.com/", "/customer-websites/scbeautyluxe-website.png", "Premium-Gefühl und Angebotsübersicht für bessere Anfragen verbunden."],
  ["Ryu Vogler", "Portfolio", "Februar 2026", "https://ryuvogler.com/", "/customer-websites/ryuvogler-website.png", "Portfolio-Auftritt mit Fokus auf Persönlichkeit und Arbeiten."],
  ["Elegant Society", "Brand", "Dezember 2025", "https://elegantsociety.ch/", "/customer-websites/elegantsociety-website.png", "Brand-Welt digital verdichtet und eleganter erlebbar gemacht."],
  ["Rebthai", "Gastronomie", "Oktober 2025", "https://rebthai.ch/", "/customer-websites/rebthai-website.png", "Angebot, Atmosphäre und Kontakt für schnelle Entscheidungen gebündelt."],
  ["Weinland Esskultur", "Gastronomie", "Oktober 2025", "https://weinlandesskultur.ch/", "/customer-websites/weinlandesskultur-website.png", "Regionale Identität und Genuss klarer sichtbar gemacht."],
  ["Thai Lodge", "Gastronomie", "Oktober 2025", "https://thai-lodge.ch/", "/customer-websites/thailodge-website.png", "Menü, Ambiente und Tischreservation als digitale Gästereise geführt."],
  ["Thai Helping Point", "Information", "September 2025", "https://thaihelpingpoint.ch/", "/customer-websites/thaihelpingpoint-website.png", "Informationen übersichtlich strukturiert und zugänglicher gemacht."],
];
const filters = ["Alle", "Brand", "Gastronomie", "Service", "Event", "Beauty", "Portfolio", "Information"];
const categoryFilters = filters.filter((item) => item !== "Alle");

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("Alle");
  const visibleProjects = projects.filter((project) => filter === "Alle" || project[1] === filter);

  return (
    <section className="projects-page-work">
      <div className="projects-page-work-bg" aria-hidden="true" />
      <div className="shell projects-page-work-shell">
        <div className="projects-page-toolbar">
          <div>
            <span className="eyebrow projects-page-eyebrow"><i /> Ausgewählte Arbeiten</span>
            <h2>Ein Raster aus Marken, Systemen und Momenten.</h2>
          </div>
          <div className="projects-page-filter-panel" aria-label="Projekte filtern">
            <button className={filter === "Alle" ? "active" : ""} onClick={() => setFilter("Alle")}>Alle Projekte</button>
            <span aria-hidden="true" />
            <div className="projects-page-filters">
              {categoryFilters.map((item) => <button className={filter === item ? "active" : ""} onClick={() => setFilter(item)} key={item}>{item}</button>)}
            </div>
          </div>
        </div>
        <div className="projects-page-grid">
          {visibleProjects.map((project) => (
            <a className="projects-page-card" href={project[3]} target="_blank" rel="noreferrer" key={project[0]}>
              <div className="projects-page-card-image">
                <Image src={project[4]} alt={`Website ${project[0]}`} fill sizes="(max-width: 760px) 92vw, 44vw" />
              </div>
              <div className="projects-page-card-copy">
                <span>{project[1]} · {project[2]}</span>
                <h3>{project[0]}</h3>
                <p>{project[5]}</p>
                <b>↗︎</b>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}