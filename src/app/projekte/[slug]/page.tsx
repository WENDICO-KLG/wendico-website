import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd, serializeJsonLd, siteUrl } from "@/lib/seo";
import { galleries } from "../gallery";
import { projectMap, projects, projectSlugs } from "../projects";
import ProjectReveal from "./ProjectReveal";
import "./project-detail.css";

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
      title: project.seoTitle ?? `${project.name} | Projekt`,
      description: project.description,
      keywords: project.keywords,
      alternates: { canonical: `/projekte/${slug}` },
      openGraph: {
        type: "website",
        locale: "de_CH",
        siteName: "Wendico",
        url: `/projekte/${slug}`,
        title: `${project.seoTitle ?? `${project.name} | Projekt`} | Wendico`,
        description: project.description,
        images: [{ url: project.image, alt: `Website von ${project.name}` }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${project.seoTitle ?? `${project.name} | Projekt`} | Wendico`,
        description: project.description,
        images: [project.image],
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

  const projectUrl = `${siteUrl}/projekte/${slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#project`,
    name: project.name,
    description: project.description,
    image: `${siteUrl}${project.image}`,
    url: projectUrl,
    dateCreated: project.dateCreated,
    genre: project.category,
    keywords: project.keywords,
    inLanguage: "de-CH",
    isBasedOn: { "@type": "WebSite", name: project.name, url: project.url },
    creator: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: projectUrl,
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Projekte", path: "/projekte" },
    { name: project.name, path: `/projekte/${slug}` },
  ]);

  const shots = galleries[slug] ?? [];
  const nextProject = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];
  const facts = [
    { label: "Kunde", value: project.client ?? project.name },
    { label: "Jahr", value: project.date },
    { label: "Branche", value: project.category },
    { label: "Rolle", value: project.role },
    { label: "Technik", value: project.tech?.join(", ") },
    { label: "Ergebnis", value: project.outcome },
  ].filter((fact) => fact.value);

  return (
    // keyed so the reveal state starts fresh when moving on to the next project
    <main className="pd" key={slug}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(projectJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <ProjectReveal />

      <header className="pd-hero">
        <div className="shell pd-hero-top">
          <nav className="pd-crumb" aria-label="Brotkrumen">
            <ol>
              <li><Link href="/projekte">Projekte</Link></li>
              <li><span aria-hidden="true">/</span> <span aria-current="page">{project.name}</span></li>
            </ol>
          </nav>
          <h1 className="pd-title">{project.name}</h1>
        </div>
        <div className="shell pd-hero-info">
          <div className="pd-hero-lead">
            <p className="pd-summary">{project.description}</p>
            <a className="pd-visit" href={project.url} target="_blank" rel="noreferrer">
              Website besuchen<span className="sr-only"> (öffnet in neuem Tab)</span> <span className="pd-arrow" aria-hidden="true">↗︎</span>
            </a>
          </div>
          <dl className="pd-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="pd-hero-image">
          <Image
            src={project.image}
            alt={`Website von ${project.name} auf Laptop und Smartphone`}
            width={1536}
            height={1024}
            preload
            quality={75}
            sizes="(max-width: 900px) 100vw, 92vw"
          />
        </figure>
      </header>

      <section className="pd-story" aria-label="Über das Projekt">
        <div className="shell">
          <div className="pd-chapter pd-chapter--challenge" data-pd-reveal>
            <h2 className="pd-label">Herausforderung</h2>
            <p className="pd-lead">{project.challenge}</p>
          </div>
          <div className="pd-chapter pd-chapter--solution" data-pd-reveal>
            <h2 className="pd-label">Lösung</h2>
            <p className="pd-body">{project.solution}</p>
          </div>
        </div>
      </section>

      {shots.length > 0 && (
        <section className="pd-gallery" aria-labelledby="pd-gallery-title">
          <div className="shell">
            <h2 className="pd-label" id="pd-gallery-title">Einblicke</h2>
            {shots.map((shot) => (
              <figure className={`pd-shot pd-shot--${shot.device}`} key={shot.src} data-pd-reveal>
                <div className="pd-shot-frame">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.width}
                    height={shot.height}
                    quality={75}
                    sizes={shot.device === "desktop" ? "(max-width: 900px) 100vw, 1180px" : "(max-width: 900px) 70vw, 400px"}
                  />
                </div>
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="pd-results" aria-labelledby="pd-results-title">
        <div className="shell">
          <h2 className="pd-label" id="pd-results-title">Ergebnis</h2>
          <p className="pd-result" data-pd-reveal>{project.result}</p>
          <ul className="pd-values" data-pd-reveal>
            {project.value.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {project.tech && project.tech.length > 0 && (
        <section className="pd-tech" aria-labelledby="pd-tech-title">
          <div className="shell">
            <h2 className="pd-label" id="pd-tech-title">Technik</h2>
            <ul className="pd-tech-list" data-pd-reveal>
              {project.tech.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section className="pd-cta" aria-labelledby="pd-cta-title">
        <div className="shell" data-pd-reveal>
          <h2 className="pd-cta-title" id="pd-cta-title">Ein ähnliches Projekt im Kopf?</h2>
          <Link className="pd-cta-link" href={`/kontakt?service=websites&project=${encodeURIComponent(project.name)}#anfrage`}>
            Ähnliches Projekt anfragen <span className="pd-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <Link className="pd-next" href={`/projekte/${nextProject.slug}`}>
        <span className="pd-next-label">Nächstes Projekt</span>{" "}
        <span className="pd-next-name">{nextProject.name} <span className="pd-arrow" aria-hidden="true">→</span></span>
        <span className="pd-next-image">
          <Image src={nextProject.image} alt="" width={1536} height={1024} quality={60} sizes="(max-width: 900px) 60vw, 420px" />
        </span>
      </Link>
    </main>
  );
}
