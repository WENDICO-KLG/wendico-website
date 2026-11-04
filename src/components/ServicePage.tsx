import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd, openGraphImage, serializeJsonLd, siteUrl } from "@/lib/seo";
import { services } from "@/lib/services";
import websitesImg from "../../section-2.jpg";
import softwareImg from "../../slogan-img.jpg";
import socialImg from "../../text-img.jpg";
import aiImg from "../../footer.jpg";
import umsatzImg from "../../hero.jpg";

const heroImages: Record<string, { src: typeof websitesImg; alt: string; position: string }> = {
  websites: { src: websitesImg, alt: "Das Matterhorn ragt hinter einem Berghang in den Himmel", position: "60% 40%" },
  software: { src: softwareImg, alt: "Felswand mit Gletscher und Wolken in den Schweizer Alpen", position: "40% 35%" },
  "social-media": { src: socialImg, alt: "Grüner Berggrat mit Wanderweg bis zum Gipfelkreuz", position: "60% 45%" },
  "ai-solutions": { src: aiImg, alt: "Matterhorn spiegelt sich im Morgenlicht in einem Bergsee", position: "50% 40%" },
  umsatzsystem: { src: umsatzImg, alt: "Alpental mit Wanderweg und Blick auf schneebedeckte Gipfel", position: "50% 50%" },
};
const processImages: Record<string, keyof typeof heroImages> = {
  websites: "umsatzsystem", software: "ai-solutions", "social-media": "software", "ai-solutions": "websites", umsatzsystem: "social-media",
};

export function serviceMetadata(slug: string): Metadata {
  const s = services[slug];
  const path = `/dienstleistungen/${slug}`;
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: path },
    keywords: s.keywords,
    openGraph: { type: "website", locale: "de_CH", siteName: "Wendico", url: path, title: `${s.metaTitle} | Wendico`, description: s.metaDescription, images: [openGraphImage] },
  };
}

export default function ServicePage({ slug }: { slug: string }) {
  const s = services[slug];
  const path = `/dienstleistungen/${slug}`;
  const hero = heroImages[slug];
  const bg = heroImages[processImages[slug]];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: s.metaTitle,
    description: s.metaDescription,
    url: `${siteUrl}${path}`,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Schweiz" },
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: s.navLabel, path },
  ]);

  return (
    <main className="geo-page service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <section className="geo-page-hero service-page-hero">
        <Image className="service-page-hero-img" src={hero.src} alt={hero.alt} fill priority sizes="100vw" quality={70} style={{ objectPosition: hero.position }} />
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> {s.eyebrow}</span>
            <h1>{s.h1[0]}<em>{s.h1[1]}</em>{s.h1[2]}</h1>
            <p>{s.lead}</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">{s.ctaButton}</Link>
              <Link className="about-page-text-link" href="/preise">Preise ansehen</Link>
            </div>
          </div>
          <aside className="geo-page-card glass">
            <span>{s.cardLabel}</span>
            <strong>{s.cardTitle}</strong>
            <p>{s.cardText}</p>
            <ul>{s.cardPoints.map((p) => <li key={p}>{p}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section className="geo-page-band">
        <div className="shell geo-page-metrics">
          {s.metrics.map(([a, b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      </section>

      <section className="shell geo-page-overview">
        <div className="geo-page-intro">
          <span className="eyebrow"><i /> {s.overviewLabel}</span>
          <h2>{s.overviewTitle}</h2>
        </div>
        <div className={s.offerings.length === 4 ? "geo-page-grid service-page-grid-four" : "geo-page-grid"}>
          {s.offerings.map((o) => <article className="glass" key={o.title}><h3>{o.title}</h3><p>{o.text}</p></article>)}
        </div>
      </section>

      {s.audiences && (
        <section className="shell service-page-audiences">
          {s.audiences.map((a) => (
            <article className="glass" key={a.label}>
              <span className="eyebrow"><i /> {a.label}</span>
              <h2>{a.title}</h2>
              <p>{a.text}</p>
              <ul>{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </section>
      )}

      <section className="geo-page-process service-page-process">
        <Image className="service-page-bg-img" src={bg.src} alt="" aria-hidden="true" fill sizes="100vw" quality={55} style={{ objectPosition: bg.position }} />
        <div className="shell geo-page-process-inner">
          <div className="geo-page-process-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> So arbeiten wir</span>
            <h2>{s.processTitle}</h2>
            <p>{s.processText}</p>
          </div>
          <div className="geo-page-flow">
            {s.steps.map((st, i) => (
              <div className="geo-page-step glass" key={st.title}><span>0{i + 1}</span><h3>{st.title}</h3><p>{st.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell service-page-related">
        <span className="eyebrow"><i /> Weitere Dienstleistungen</span>
        <div>
          {s.related.map((r) => <Link className="glass" href={`/dienstleistungen/${r}`} key={r}>{services[r].navLabel} <span>↗︎</span></Link>)}
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> {s.eyebrow}</span>
            <h2>{s.ctaTitle}</h2>
            <p>{s.ctaText}</p>
            <Link className="button primary" href="/kontakt#termin-buchen">{s.ctaButton}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
