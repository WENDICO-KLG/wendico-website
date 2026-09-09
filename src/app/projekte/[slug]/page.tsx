import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectMap, projectSlugs } from "../projects";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projectMap[slug];

    if (!project) {
      return {
        title: "Projekt nicht gefunden",
      };
    }

    return {
      title: `${project.name} | Projekt`,
      description: `${project.description} Mehr über den Mehrwert und die Umsetzung von ${project.name}.`,
      alternates: { canonical: `/projekte/${slug}` },
      openGraph: {
        type: "website",
        locale: "de_CH",
        siteName: "Wendico",
        url: `/projekte/${slug}`,
        title: `${project.name} | Wendico Projekt`,
        description: `${project.description} Mehr über den Mehrwert und die Umsetzung von ${project.name}.`,
      },
    };
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectMap[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      <section className="project-detail-hero">
        <div className="project-detail-hero-glow" />
        <div className="shell project-detail-hero-shell">
          <div className="project-detail-header">
            <Link className="project-detail-back" href="/projekte">← Zurück zu Projekte</Link>
            <span className="eyebrow project-detail-eyebrow"><i /> {project.category} · {project.date}</span>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <div className="project-detail-actions">
              <a className="button primary" href={project.url} target="_blank" rel="noreferrer">Website besuchen <span>↗︎</span></a>
              <Link className="project-detail-text-link" href="/kontakt#termin-buchen">Projekt starten</Link>
            </div>
          </div>

          <div className="project-detail-visual">
            <div className="project-detail-image-wrap">
              <Image src={project.image} alt={`Website von ${project.name}`} fill priority sizes="(max-width: 900px) 100vw, 52vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-story">
        <div className="shell project-detail-story-grid">
          <div className="project-detail-story-intro">
            <span className="eyebrow"><i /> Der Anspruch</span>
            <h2>Ein Auftritt, der dem Angebot gerecht wird.</h2>
          </div>
          <div className="project-detail-story-cards">
            <article className="project-detail-card glass">
              <span>01</span>
              <h2>Herausforderung</h2>
              <p>{project.challenge}</p>
            </article>
            <article className="project-detail-card glass">
              <span>02</span>
              <h2>Unsere Lösung</h2>
              <p>{project.solution}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="project-detail-outcome">
        <div className="shell project-detail-outcome-grid">
          <div className="project-detail-value-panel">
            <span className="eyebrow project-detail-eyebrow"><i /> Mehrwert</span>
            <h2>Was sich für den Kunden verbessert hat.</h2>
            <ul>
              {project.value.map((item, index) => <li key={item}><b>0{index + 1}</b>{item}</li>)}
            </ul>
          </div>
          <div className="project-detail-result-panel glass">
            <span>Das Ergebnis</span>
            <p>{project.result}</p>
            <Link href="/projekte" className="project-detail-all-link">Alle Projekte ansehen <b>↗</b></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
