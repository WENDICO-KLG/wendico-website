import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, openGraphImage, serializeJsonLd, siteUrl } from "@/lib/seo";
import { serviceOrder, services } from "@/lib/services";

const title = "Dienstleistungen: Websites, Software, KI und mehr";
const description = "Alle Dienstleistungen von Wendico im Überblick: Websites, Software, Social Media, KI-Lösungen und das Umsatzsystem für mehr gebuchte Termine.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dienstleistungen" },
  keywords: ["Dienstleistungen Wendico", "Websites", "Individuelle Software", "Social Media Management", "KI-Lösungen", "Umsatzsystem"],
  openGraph: { type: "website", locale: "de_CH", siteName: "Wendico", url: "/dienstleistungen", title: `${title} | Wendico`, description, images: [openGraphImage] },
  twitter: { card: "summary_large_image", title: `${title} | Wendico`, description, images: [openGraphImage.url] },
};

export default function ServicesOverviewPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Startseite", path: "/" },
    { name: "Dienstleistungen", path: "/dienstleistungen" },
  ]);
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/dienstleistungen#page`,
    name: "Dienstleistungen von Wendico",
    description,
    url: `${siteUrl}/dienstleistungen`,
    inLanguage: "de-CH",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: serviceOrder.map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/dienstleistungen/${slug}`,
        name: services[slug].navLabel,
      })),
    },
  };

  return (
    <main className="geo-page service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(listJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbs) }} />
      <section className="geo-page-hero service-page-hero">
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Dienstleistungen</span>
            <h1>Alles, was dein Geschäft <em>digital</em> voranbringt.</h1>
            <p>Von der Website über individuelle Software und Social Media bis zu KI-Lösungen und dem Umsatzsystem: Wähle, was zu dir passt, oder lass dich im Gespräch beraten.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
              <Link className="about-page-text-link" href="/preise">Preise ansehen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shell geo-page-overview">
        <div className="geo-page-intro">
          <span className="eyebrow"><i /> Unser Angebot</span>
          <h2>Fünf Dienstleistungen, ein Ansprechpartner.</h2>
        </div>
        <div className="geo-page-grid">
          {serviceOrder.map((slug) => (
            <article className="glass" key={slug}>
              <h3><Link href={`/dienstleistungen/${slug}`}>{services[slug].navLabel}</Link></h3>
              <p>{services[slug].summary}</p>
              <Link className="about-page-text-link" href={`/dienstleistungen/${slug}`}>Mehr erfahren</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Dienstleistungen</span>
            <h2>Nicht sicher, was du brauchst?</h2>
            <p>In einem kostenlosen Gespräch klären wir deine Ziele und empfehlen dir passende nächste Schritte.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
