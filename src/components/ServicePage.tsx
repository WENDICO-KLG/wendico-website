import type { Metadata } from "next";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { breadcrumbJsonLd, openGraphImage, serializeJsonLd, serviceAreasJsonLd, siteUrl } from "@/lib/seo";
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
  const serviceId = `${siteUrl}${path}#service`;
  const pageId = `${siteUrl}${path}#webpage`;
  const serviceFaq = [
    ...s.faq,
    {
      q: "In welchen Regionen bietet Wendico diese Dienstleistung an?",
      a: "Wendico betreut Unternehmen vor Ort in Thalheim an der Thur, im Zürcher Weinland, in Winterthur und Zürich. Für digitale Projekte und Beratung ist Wendico online in der ganzen Schweiz erreichbar.",
    },
    ...(slug === "ai-solutions" ? [{
      q: "Bietet Wendico KI- und ChatGPT-Integration in der Region Winterthur an?",
      a: "Ja. Wendico berät Unternehmen in Thalheim an der Thur, im Zürcher Weinland, in Winterthur und Zürich zu KI-Anwendungen, ChatGPT-Integration, Automatisierung und Team-Schulungen. Workshops sind vor Ort oder online möglich.",
    }] : []),
  ];
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: s.metaTitle,
    description: s.lead,
    url: `${siteUrl}${path}`,
    serviceType: s.navLabel,
    inLanguage: "de-CH",
    mainEntityOfPage: { "@id": pageId },
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: serviceAreasJsonLd,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: s.pricing.title,
      itemListElement: [
        ...s.pricing.packages.map((plan) => ({
          "@type": "Offer",
          name: plan.name,
          description: `${plan.intro} ${plan.items.join(" ")} Preis: ${plan.pricePrefix ? `${plan.pricePrefix} ` : ""}CHF ${plan.price} ${plan.unit}.`,
          url: `${siteUrl}${path}#service-preise`,
          priceCurrency: "CHF",
        })),
        ...(s.pricing.training ? [{
          "@type": "Offer",
          name: s.pricing.training.title,
          description: `${s.pricing.training.description} Preis: ${s.pricing.training.priceText}.`,
          url: `${siteUrl}${path}#svc-ai-training-title`,
          priceCurrency: "CHF",
        }] : []),
      ],
    },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: `${siteUrl}/kontakt`, availableLanguage: ["de", "en", "fr"] },
  };
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageId,
    url: `${siteUrl}${path}`,
    name: s.metaTitle,
    description: s.metaDescription,
    inLanguage: "de-CH",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": serviceId },
    about: { "@id": serviceId },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}${path}#faq`,
    inLanguage: "de-CH",
    mainEntity: serviceFaq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Dienstleistungen", path: "/dienstleistungen" },
    { name: s.navLabel, path },
  ]);

  return (
    <main className={`svc svc-${slug}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }} />
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
              <Link className="svc-text-link" href="#service-preise">Pakete und Preise ansehen</Link>
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

      <section className="svc-pricing" id="service-preise" aria-labelledby="svc-pricing-title">
        <div className="shell">
          <header className="svc-pricing-head">
            <span className="eyebrow"><i /> Preise in CHF</span>
            <h2 id="svc-pricing-title">{s.pricing.title}</h2>
            <p>{s.pricing.description}</p>
          </header>
          <div className="svc-price-grid">
            {s.pricing.packages.map((plan) => (
              <article className={`svc-price-card${plan.badge ? " featured" : ""}`} key={plan.name}>
                <div className="svc-price-name"><h3>{plan.name}</h3>{plan.badge && <span>{plan.badge}</span>}</div>
                <p className="svc-price-intro">{plan.intro}</p>
                <p className="svc-price-amount"><small>{plan.pricePrefix ? `${plan.pricePrefix} CHF` : "CHF"}</small><strong>{plan.price}</strong></p>
                <span className="svc-price-unit">{plan.unit}</span>
                <ul>{plan.items.map((item) => <li key={item}><b aria-hidden="true">✓︎</b>{item}</li>)}</ul>
                <Link href="/kontakt#termin-buchen">Paket anfragen <span aria-hidden="true">↗︎</span></Link>
              </article>
            ))}
          </div>
          <p className="svc-price-note">{s.pricing.note}</p>
        </div>
      </section>
      {s.pricing.training && (
        <section className="svc-ai-training" aria-labelledby="svc-ai-training-title">
          <div className="shell svc-ai-training-grid">
            <header className="svc-ai-training-intro">
              <span className="eyebrow"><i /> Für Teams und Einzelpersonen</span>
              <h2 id="svc-ai-training-title">{s.pricing.training.title}</h2>
              <p>{s.pricing.training.description}</p>
              <strong className="svc-ai-training-price">{s.pricing.training.priceText}</strong>
              <Link className="button svc-ai-training-button" href="/kontakt#termin-buchen">Schulung anfragen <span aria-hidden="true">↗︎</span></Link>
            </header>
            <div className="svc-ai-training-details">
              <section>
                <h3>Mögliche Schulungsinhalte</h3>
                <ul>{s.pricing.training.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </section>
              <section>
                <h3>Durchführung</h3>
                <ul>{s.pricing.training.delivery.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <p className="svc-ai-training-note">Die Offerte richtet sich nach Dauer, Teilnehmerzahl, Inhalt, Vorbereitung und Durchführungsort.</p>
            </div>
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
            {serviceFaq.map((item, index) => (
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
