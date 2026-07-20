import Image from "next/image";
import AppNav from "@/components/AppNav";

const projects = [
  { name: "Thaihelpingpoint.ch", date: "Juni 2025", href: "https://thaihelpingpoint.ch/", image: "/wendico-live/project-thaihelpingpoint.png", text: "Ein digitaler Auftritt für schnelle Orientierung und klare Kontaktaufnahme." },
  { name: "Weinlandesskultur.ch", date: "Oktober 2025", href: "https://weinlandesskultur.ch/", image: "/wendico-live/project-weinlandesskultur.png", text: "Regionale Identität, Genuss und ein klarer Weg zu den wichtigsten Inhalten." },
  { name: "Elegantsociety.ch", date: "Januar 2026", href: "https://elegantsociety.ch/", image: "/wendico-live/project-elegantsociety.png", text: "Ein eleganter Webauftritt mit ruhiger Markenwirkung und hochwertigem Eindruck." },
  { name: "Ryuvogler.com", date: "Februar 2026", href: "https://ryuvogler.com/", image: "/wendico-live/project-ryuvogler.png", text: "Portfolio, Persönlichkeit und Kontakt kompakt auf einer professionellen Seite." },
  { name: "Scbeautyluxe.com", date: "März 2026", href: "https://scbeautyluxe.com/", image: "/wendico-live/project-scbeautyluxe.png", text: "Ein Beauty-Auftritt mit klarer Premium-Wirkung und direktem Weg zur Anfrage." },
  { name: "Alija-gebaeudereinigung.ch", date: "April 2026", href: "https://alija-gebaeudereinigung.ch/", image: "/wendico-live/project-alija.png", text: "Eine lokale Service-Website mit Vertrauen, Leistung und Kontakt im Fokus." },
  { name: "Lostrios.ch", date: "Mai 2026", href: "https://lostrios.ch/", image: "/customer-logos/lostrios.png", text: "Ein schneller Auftritt mit klarem Fokus auf Marke und Kontakt." },
];

export default function ProjectsPage() {
  return (
    <main className="standard-page">
      <AppNav active="projekte" />
      <section className="standard-hero" aria-labelledby="projects-page-title">
        <p>Projekte</p>
        <h1 id="projects-page-title">Vergangene Projekte.</h1>
        <span>
          2025 bis 2026: eine Auswahl von Websites und digitalen Auftritten, die für Kunden sichtbar online arbeiten.
        </span>
      </section>

      <section className="standard-section" aria-label="Projektübersicht">
        <div className="project-page-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.href} key={project.name} target="_blank" rel="noreferrer">
              <div className="project-preview">
                <div className="project-sky" />
                <Image src={project.image} alt={project.name} width={300} height={220} />
                <span>{project.date}</span>
              </div>
              <div className="project-meta">
                <h3>{project.name}</h3>
                <p>{project.text}</p>
                <strong>Website ansehen</strong>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}