"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import AppNav from "@/components/AppNav";

const projects = [
  { name: "Lostrios.ch", date: "Mai 2026", href: "https://lostrios.ch/", image: "/customer-websites/lostrios-website.png", type: "Brand", focus: "Schneller Start", text: "Ein schneller Auftritt mit klarem Fokus auf Marke und Kontakt.", result: "Kompakter Webauftritt mit sauberer Markenfläche." },
  { name: "Asiafoodfestival.ch", date: "Mai 2026", href: "https://www.asiafoodfestival.ch/", image: "/customer-websites/tresch-asia-events-website.png", type: "Event", focus: "Anmeldung", text: "Ein Event-Auftritt mit Programm, Ständen und schnellem Weg zur Anmeldung.", result: "Übersichtliches Programm und einfache Anmeldung für Besucher." },
  { name: "Alija-gebaeudereinigung.ch", date: "April 2026", href: "https://alija-gebaeudereinigung.ch/", image: "/customer-websites/alija-gebäudereinigung-website.png", type: "Service", focus: "Lokales Vertrauen", text: "Eine lokale Service-Website mit Vertrauen, Leistung und Kontakt im Fokus.", result: "Leistungen, Vertrauen und Anfrage ohne Umwege." },
  { name: "Scbeautyluxe.com", date: "März 2026", href: "https://scbeautyluxe.com/", image: "/customer-websites/scbeautyluxe-website.png", type: "Beauty", focus: "Anfrage", text: "Ein Beauty-Auftritt mit klarer Premium-Wirkung und direktem Weg zur Anfrage.", result: "Elegante Präsentation mit direkter Kontaktführung." },
  { name: "Ryuvogler.com", date: "Februar 2026", href: "https://ryuvogler.com/", image: "/customer-websites/ryuvogler-website.png", type: "Portfolio", focus: "Person", text: "Portfolio, Persönlichkeit und Kontakt kompakt auf einer professionellen Seite.", result: "Arbeit, Profil und Anfrage in einer kurzen Strecke." },
  { name: "Elegantsociety.ch", date: "Dezember 2025", href: "https://elegantsociety.ch/", image: "/customer-websites/elegantsociety-website.png", type: "Brand", focus: "Premium Eindruck", text: "Ein eleganter Webauftritt mit ruhiger Markenwirkung und hochwertigem Eindruck.", result: "Reduzierte Oberfläche mit starkem Markenfokus." },
  { name: "Rebthai.ch", date: "Oktober 2025", href: "https://rebthai.ch/", image: "/customer-websites/rebthai-website.png", type: "Gastronomie", focus: "Schnelle Entscheidung", text: "Ein klarer Restaurant-Auftritt, der Angebot und Kontakt ohne Umwege zeigt.", result: "Reduzierte Struktur für schnelle Gästeentscheidungen." },
  { name: "Weinlandesskultur.ch", date: "Oktober 2025", href: "https://weinlandesskultur.ch/", image: "/customer-websites/weinlandesskultur-website.png", type: "Gastronomie", focus: "Region & Genuss", text: "Regionale Identität, Genuss und ein klarer Weg zu den wichtigsten Inhalten.", result: "Warme Bildwelt, klare Navigation und schnelle Kontaktstrecke." },
  { name: "Thai-lodge.ch", date: "Oktober 2025", href: "https://thai-lodge.ch/", image: "/customer-websites/thailodge-website.png", type: "Gastronomie", focus: "Reservation", text: "Ein Restaurant-Auftritt mit Menu, Ambiente und direktem Weg zur Tischreservation.", result: "Klare Speisekarte, Atmosphäre und schnelle Reservation." },
  { name: "Thaihelpingpoint.ch", date: "September 2025", href: "https://thaihelpingpoint.ch/", image: "/customer-websites/thaihelpingpoint-website.png", type: "Information", focus: "Orientierung", text: "Ein digitaler Auftritt für schnelle Orientierung und klare Kontaktaufnahme.", result: "Strukturierte Inhalte für Menschen, die rasch Antworten brauchen." },
];

const branches = ["Alle", ...Array.from(new Set(projects.map((project) => project.type)))];

export default function ProjectsPage() {
  const [activeBranch, setActiveBranch] = useState("Alle");

  const filteredProjects = useMemo(
    () => (activeBranch === "Alle" ? projects : projects.filter((project) => project.type === activeBranch)),
    [activeBranch]
  );

  return (
    <main className="standard-page projects-page">
      <AppNav active="projekte" />
      <section className="standard-hero projects-hero" aria-labelledby="projects-page-title">
        <h1 id="projects-page-title">Projekte</h1>
      </section>

      <section className="standard-section projects-filter-section">
        <div className="projects-filter-bar" role="group" aria-label="Projekte nach Branche filtern">
          {branches.map((branch) => (
            <button
              key={branch}
              type="button"
              className={branch === activeBranch ? "is-active" : undefined}
              aria-pressed={branch === activeBranch}
              onClick={() => setActiveBranch(branch)}
            >
              {branch}
            </button>
          ))}
        </div>
      </section>

      <section className="standard-section projects-overview-section">
        <div className="project-page-grid">
          {filteredProjects.map((project, index) => (
            <a className="project-page-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
              <div className="project-page-preview">
                <Image src={project.image} alt={`Vorschau von ${project.name}`} width={360} height={240} />
                <span>{project.date}</span>
              </div>
              <div className="project-page-meta">
                <div>
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.text}</p>
                <div className="project-page-tags" aria-label="Projekt Fokus">
                  <span>{project.focus}</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <strong>Website ansehen</strong>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}