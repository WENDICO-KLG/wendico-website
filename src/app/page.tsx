import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HeroScroll from "@/components/HeroScroll";
import AboutInteractiveSection from "@/components/AboutInteractiveSection";
import HomeFaq from "@/components/HomeFaq";
import HomeSmoothScroll from "@/components/HomeSmoothScroll";
import HomeProjectSpiral from "@/components/HomeProjectSpiral";
import HomeTextParallax from "@/components/HomeTextParallax";
import ServicesParallax from "@/components/ServicesParallax";
import ServicesDetailSticky from "@/components/ServicesDetailSticky";
import SloganParallax from "@/components/SloganParallax";
import { serializeJsonLd } from "@/lib/seo";
import { serviceOrder, services } from "@/lib/services";
import heroImage from "../../hero.jpg";
import servicesImage from "../../section-2.jpg";
import sloganImage from "../../slogan-img.jpg";
import footerImage from "../../footer.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  keywords: ["Digitalagentur Schweiz", "Websites für Unternehmen", "Softwareentwicklung Schweiz", "Social Media Management", "KI-Integration", "digitale Umsatzsysteme", "Webdesign Beauty Salon", "Coiffeur Website", "Digitalstudio Zürcher Weinland"],
};

const homePlans = [
  { name: "Starter", price: "1'500–3'500", description: "Projektpreis · Bis zu 3 Seiten", items: ["Schlankes, professionelles Design", "Mobile-Optimierung", "Kontaktmöglichkeiten", "Basis-SEO"] },
  { name: "Professional", price: "2'750–4'750", description: "Projektpreis · Bis zu 8 Seiten", badge: "Empfohlen", items: ["Individuelles Webdesign", "Erweiterte SEO-Grundlagen", "Animationen und visuelle Elemente", "Conversion-Optimierung"] },
  { name: "Premium", price: "4'500–8'500", description: "Projektpreis · Umfangreiche Website", items: ["Premium-Design und Interaktionen", "Mehrsprachigkeit", "Individuelle Schnittstellen", "Erweiterte Conversion-Optimierung"] },
];

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was genau macht Wendico?",
      acceptedAnswer: { "@type": "Answer", text: "Wendico unterstützt Unternehmen in Thalheim an der Thur, im Zürcher Weinland, in Winterthur, Zürich und online schweizweit mit Websites, Software, Social Media, KI-Integration und digitalen Umsatzsystemen." },
    },
    {
      "@type": "Question",
      name: "Für wen entwickelt Wendico Websites?",
      acceptedAnswer: { "@type": "Answer", text: "Wir entwickeln buchungsoptimierte Websites für Beauty- und Coiffeur-Salons, die ihre Arbeit hochwertig zeigen und mehr Online-Termine gewinnen möchten." },
    },
    {
      "@type": "Question",
      name: "Wie startet ein Projekt mit Wendico?",
      acceptedAnswer: { "@type": "Answer", text: "Mit einem unverbindlichen Gespräch. Wir klären Salon-Angebot, Zielgruppe, Buchungsweg und Projektumfang und empfehlen passende nächste Schritte." },
    },
    {
      "@type": "Question",
      name: "Bietet Wendico KI-Beratung in der Region an?",
      acceptedAnswer: { "@type": "Answer", text: "Ja. Wendico berät Unternehmen in Thalheim an der Thur, im Zürcher Weinland, in Winterthur und Zürich zu KI-Integration, ChatGPT-gestützten Workflows, Chatbots und Automatisierung. Schulungen und Workshops sind vor Ort oder online möglich." },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Digitale Dienstleistungen von Wendico",
  itemListElement: serviceOrder.map((slug, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      "@id": `https://wendico.ch/dienstleistungen/${slug}#service`,
      name: services[slug].metaTitle,
      description: services[slug].metaDescription,
      url: `https://wendico.ch/dienstleistungen/${slug}`,
      provider: { "@id": "https://wendico.ch/#organization" },
    },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeFaqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }} />
      <HomeSmoothScroll />
      <HeroScroll>
        <div className="hero-sticky">
          <div className="hero-frame hero-appear">
          <Image className="hero-image" src={heroImage} alt="Schweizer Berglandschaft über den Wolken" fill loading="eager" fetchPriority="high" quality={50} sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-wordmark hero-appear-wordmark" aria-hidden="true">WENDICO</div>
          <div className="hero-content">
            <div className="hero-copy hero-appear-copy">
              <span className="eyebrow hero-eyebrow"><i /> Websites · Software · Social Media · AI</span>
              <h1>Digital stark aufgestellt.<br />Ein Partner, der <em>liefert.</em></h1>
              <p>Wendico baut Websites, Software und Umsatzsysteme, betreut Social Media und bringt AI-Lösungen, Kurse und Workshops zu Unternehmen und Privatpersonen. Mit besonderem Fokus auf Beauty- und Coiffeur-Salons.</p>
              <div className="actions">
                <Link className="button hero-button" href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗︎</span></Link>
                <Link className="hero-text-link" href="/dienstleistungen/websites">Leistungen entdecken <span aria-hidden="true">→︎</span></Link>
              </div>
              <ul className="hero-trust">
                <li><strong>10+</strong> Websites</li>
                <li><strong>100%</strong> eigener Code</li>
                <li><strong>Swiss</strong> made</li>
              </ul>
            </div>
            <div className="hero-metrics hero-appear-metrics">
              <article className="hero-stat glass"><strong>10+</strong><span>realisierte Websites</span></article>
              <article className="hero-stat glass"><strong>100%</strong><span>individueller Code</span></article>
              <div className="hero-proof glass"><span className="proof-dots"><i>W</i><i>W</i><i>W</i></span><p><strong>Swiss made</strong><br />Konzipiert im Zürcher Weinland</p></div>
            </div>
            </div>
          </div>
        </div>
      </HeroScroll>

      <ServicesParallax>
        <Image className="services-backdrop" src={servicesImage} alt="Schweizer Berggipfel unter einem dramatischen Himmel" fill quality={50} sizes="100vw" />
        <div className="services-tint" />
        <div className="shell services-shell">
          <div className="services-heading">
            <span className="eyebrow services-eyebrow"><i /> Was wir tun</span>
            <h2>Fünf Leistungen.<br />Ein Ziel: <em>mehr Wirkung.</em></h2>
          </div>
          <div className="services-mosaic">
            <article className="service-pane service-pane-design glass">
              <div className="service-interface" aria-hidden="true">
                <span>DESIGNING YOUR PRESENCE...</span>
                <i /><i /><i />
                <div className="interface-window"><b /><b /><b /><strong>wendico.ch</strong></div>
              </div>
              <div className="service-pane-copy">
                <span>01 / Webdesign</span>
                <h3>Websites, die eine Marke spürbar machen.</h3>
                <p>Strategie, Gestaltung und Entwicklung greifen ineinander. Das Ergebnis ist klar, schnell und unverwechselbar.</p>
                <Link href="/dienstleistungen" aria-label="Alle Dienstleistungen ansehen">↗︎</Link>
              </div>
            </article>

            <article className="service-pane service-pane-hosting glass">
              <div className="hosting-flow" aria-hidden="true">
                <span>MONITORING</span><span>BACKUPS</span><span>SECURITY</span>
                <i className="flow-line flow-one" /><i className="flow-line flow-two" /><i className="flow-line flow-three" />
                <b className="flow-status">✓︎</b>
              </div>
              <div className="service-pane-copy">
                <span>02 / Hosting & Wartung</span>
                <h3>Technik, die einfach läuft.</h3>
                <p>Hosting, SSL, Backups, Updates und Support. Sicher betreut, damit du dich auf dein Geschäft konzentrierst.</p>
                <Link href="/dienstleistungen/websites#service-preise" aria-label="Website-Pakete und Betreuung ansehen">↗︎</Link>
              </div>
            </article>

            <article className="service-pane service-pane-revenue glass">
              <div className="revenue-visual" aria-hidden="true"><span>Besucher</span><i>→︎</i><span>Anfrage</span><i>→︎</i><strong>Umsatz</strong></div>
              <div className="service-pane-copy">
                <span>03 / Umsatzsysteme</span>
                <h3>Vom Besuch zum gebuchten Termin.</h3>
                <p>Online-Buchung, klare Leistungen und überzeugende Einblicke machen aus Website-Besuchen echte Termine und Anfragen.</p>
                <Link href="/dienstleistungen/umsatzsystem" aria-label="Umsatzsystem ansehen">↗︎</Link>
              </div>
            </article>
          </div>
        </div>
      </ServicesParallax>

      <ServicesDetailSticky />

      <HomeTextParallax />

      <HomeProjectSpiral />

      <section className="home-pricing-section">
        <div className="home-pricing-atmosphere" aria-hidden="true" />
        <span className="home-pricing-wordmark" aria-hidden="true">Preise</span>
        <div className="shell">
          <div className="home-pricing-heading">
            <span className="eyebrow home-pricing-eyebrow">Preise für Websites</span>
            <h2>Ein klarer Start.<br /><em>Ein starker Auftritt.</em></h2>
            <p>Die Website-Pakete und alle Preise für Software, Social Media, KI-Lösungen und Umsatzsysteme findest du direkt auf den jeweiligen Leistungsseiten.</p>
          </div>
          <div className="home-pricing-grid">
            {homePlans.map((plan) => (
              <article className={`home-pricing-card${plan.badge ? " is-featured" : ""}`} key={plan.name}>
                {plan.badge ? <span className="home-pricing-badge">{plan.badge}</span> : null}
                <span className="home-pricing-name">{plan.name}</span>
                <p>{plan.description}</p>
                <div className="home-pricing-price"><small>CHF</small><strong>{plan.price}</strong></div>
                <ul>{plan.items.map((item) => <li key={item}><b>✓︎</b>{item}</li>)}</ul>
                <Link href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗︎</span></Link>
              </article>
            ))}
          </div>
          <Link className="home-pricing-all" href="/dienstleistungen/websites#service-preise">Website-Pakete und Betreuung ansehen ↗︎</Link>
        </div>
      </section>

      <SloganParallax image={sloganImage} />

      <AboutInteractiveSection>
        <div className="shell">
          <div className="home-about-heading">
            <div className="home-about-intro">
              <span className="eyebrow">Über uns</span>
              <h2>Zwei Köpfe.<br /><em>Eine klare Idee.</em></h2>
            </div>
          </div>
          <div className="home-about-grid">
            <article className="home-about-card">
              <Image src="/wendico-live/panat.JPG" alt="Panat Ruangsri" fill sizes="(max-width: 760px) 92vw, 46vw" />
              <span className="home-about-card-overlay" />
              <blockquote>„Gute digitale Erlebnisse entstehen, wenn Strategie und Technik dieselbe Sprache sprechen.“</blockquote>
              <div className="home-about-card-name"><h3>Panat Ruangsri</h3><span>Founder · CEO</span></div>
            </article>
            <article className="home-about-card">
              <Image src="/wendico-live/tim.jpg" alt="Tim Biedermann" fill sizes="(max-width: 760px) 92vw, 46vw" />
              <span className="home-about-card-overlay" />
              <blockquote>„Eine Website soll nicht nur gut aussehen. Sie soll zeigen, wofür eine Marke wirklich steht.“</blockquote>
              <div className="home-about-card-name"><h3>Tim Biedermann</h3><span>Founder · CEO</span></div>
            </article>
          </div>
        </div>
      </AboutInteractiveSection>

      <HomeFaq />

      <section className="cta-background-section">
        <Image className="cta-background" src={footerImage} alt="" fill sizes="100vw" />
        <span className="cta-overlay" aria-hidden="true" />
        <div className="shell cta-shell">
          <div className="cta glass">
            <span className="eyebrow">Dein nächster Schritt</span>
            <h2>Ein gutes Projekt beginnt<br />mit einem guten Gespräch.</h2>
            <p>Website, Software, Social Media oder AI: Erzähl uns, was du vorhast. Wir sagen dir klar, was sinnvoll ist.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗︎</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}