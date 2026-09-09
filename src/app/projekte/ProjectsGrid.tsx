"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "./projects";

const filters = ["Alle", "Brand", "Gastronomie", "Service", "Event", "Beauty", "Portfolio", "Information"];
const categoryFilters = filters.filter((item) => item !== "Alle");

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("Alle");
  const visibleProjects = projects.filter((project) => filter === "Alle" || project.category === filter);

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
            <article className="projects-page-card" key={project.slug}>
              <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Website ${project.name} öffnen`}>
                <div className="projects-page-card-image">
                  <Image src={project.image} alt={`Website ${project.name}`} fill sizes="(max-width: 760px) 92vw, 44vw" />
                </div>
              </a>
              <div className="projects-page-card-copy">
                <span>{project.category} · {project.date}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="projects-page-card-actions">
                  <a className="projects-page-card-primary" href={project.url} target="_blank" rel="noreferrer">Website öffnen <b>↗︎</b></a>
                  <Link className="projects-page-card-secondary" href={`/projekte/${project.slug}`}>Projektdetails</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}