import type { Metadata } from "next";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { breadcrumbJsonLd, openGraphImage, serializeJsonLd, siteUrl } from "@/lib/seo";
import { services } from "@/lib/services";
import aiImage from "@/assets/services/ai-solutions.webp";
import socialImage from "@/assets/services/social-media.webp";
import softwareImage from "@/assets/services/software.webp";
import umsatzImage from "@/assets/services/umsatzsystem.webp";
import websitesImage from "@/assets/services/websites.webp";
import "./ServicePage.css";

const heroImages: Record<string, StaticImageData> = {
  websites: websitesImage,
  software: softwareImage,
  "social-media": socialImage,
  "ai-solutions": aiImage,
  umsatzsystem: umsatzImage,
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
    twitter: { card: "summary_large_image", title: `${s.metaTitle} | Wendico`, description: s.metaDescription, images: [openGraphImage.url] },
  };
}

export default function ServicePage({ slug }: { slug: string }) {
  const s = services[slug];
  const path = `/dienstleistungen/${slug}`;
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: s.metaTitle,
    description: s.metaDescription,
    url: `${siteUrl}${path}`,
    serviceType: s.navLabel,
    inLanguage: "de-CH",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Country", name: "Schweiz" },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: `${siteUrl}/kontakt`, availableLanguage: ["de", "en", "fr"] },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${path}#faq`,
    inLanguage: "de-CH",
    mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Dienstleistungen", path: "/dienstleistungen" },
    { name: s.navLabel, path },
  ]);

  const priceLink = s.slug === "websites"
    ? { href: "/preise", label: "Website-Preise ansehen" }
    : { href: "/kontakt#termin-buchen", label: "Preis auf Anfrage" };

  return (
    <main className={`svc svc-${slug}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />

      <section className="svc-hero">
        <div className="shell svc-hero-grid">
          <div className="svc-hero-copy">
            <nav className="svc-crumbs" aria-label="Brotkrumen">
              <Link href="/dienstleistungen">Dienstleistungen</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{s.navLabel}</span>
            </nav>
            <h1>{s.h1[0]}<em>{s.h1[1]}</em>{s.h1[2]}</h1>
            <p className="svc-lead">{s.lead}</p>
            <div className="svc-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">{s.ctaButton} <span aria-hidden="true">↗︎</span></Link>
              <Link className="svc-text-link" href={priceLink.href}>{priceLink.label}</Link>
            </div>
          </div>
          <figure className="svc-hero-media">
            <Image src={heroImages[slug]} alt={s.heroAlt} fill priority sizes="(max-width: 900px) 92vw, 46vw" />
            <figcaption className="svc-hero-badge">
              <span>{s.cardLabel}</span>
              <strong>{s.cardTitle}</strong>
            </figcaption>
          </figure>
        </div>
        <div className="shell">
          <ul className="svc-points">
            {s.cardPoints.map((point) => <li key={point}><b aria-hidden="true">✓︎</b>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className="svc-offer">
        <div className="shell svc-offer-grid">
          <header className="svc-offer-intro">
            <span className="eyebrow"><i /> {s.overviewLabel}</span>
            <h2>{s.overviewTitle}</h2>
            <p>{s.cardText}</p>
          </header>
          <ol className="svc-offer-list">
            {s.offerings.map((offering, index) => (
              <li key={offering.title}>
                <span className="svc-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{offering.title}</h3>
                  <p>{offering.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {s.audiences && (
        <section className="svc-audiences">
          <div className="shell svc-audience-grid">
            {s.audiences.map((audience) => (
              <article className="svc-audience" key={audience.label}>
                <span className="svc-audience-label">{audience.label}</span>
                <h2>{audience.title}</h2>
                <p>{audience.text}</p>
                <ul>{audience.points.map((point) => <li key={point}>{point}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="svc-process">
        <div className="shell">
          <header className="svc-process-head">
            <div>
              <span className="eyebrow"><i /> So arbeiten wir</span>
              <h2>{s.processTitle}</h2>
            </div>
            <p>{s.processText}</p>
          </header>
          <ol className="svc-steps">
            {s.steps.map((step, index) => (
              <li key={step.title}>
                <span className="svc-step-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="svc-faq">
        <div className="shell svc-faq-grid">
          <header>
            <span className="eyebrow"><i /> Häufige Fragen</span>
            <h2>Das fragen uns Kundinnen und Kunden oft.</h2>
            <p>Deine Frage ist nicht dabei? <Link href="/kontakt">Schreib uns direkt.</Link></p>
          </header>
          <div className="svc-faq-list">
            {s.faq.map((item, index) => (
              <details key={item.q} open={index === 0}>
                <summary>{item.q}<b aria-hidden="true" /></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-end">
        <div className="shell">
          <div className="svc-cta">
            <div className="svc-cta-copy">
              <span className="eyebrow"><i /> Nächster Schritt</span>
              <h2>{s.ctaTitle}</h2>
              <p>{s.ctaText}</p>
              <Link className="button svc-cta-button" href="/kontakt#termin-buchen">{s.ctaButton} <span aria-hidden="true">↗︎</span></Link>
            </div>
            <nav className="svc-related" aria-label="Weitere Dienstleistungen">
              <span>Weitere Dienstleistungen</span>
              {s.related.map((slug) => (
                <Link href={`/dienstleistungen/${slug}`} key={slug}>
                  <strong>{services[slug].navLabel}</strong>
                  <small>{services[slug].summary}</small>
                  <b aria-hidden="true">↗︎</b>
                </Link>
              ))}
              <Link href="/dienstleistungen" className="svc-related-all">Alle Dienstleistungen <b aria-hidden="true">→︎</b></Link>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
}
