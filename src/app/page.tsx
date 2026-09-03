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
import heroImage from "../../hero.jpg";
import servicesImage from "../../section-2.jpg";
import sloganImage from "../../slogan-img.jpg";
import footerImage from "../../footer.jpg";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  keywords: ["Webdesign Zürcher Weinland", "Webdesign Schweiz", "Website erstellen lassen", "Digitalstudio Thalheim an der Thur", "Umsatzsystem Website", "Social Media Management Schweiz"],
};

const homePlans = [
  { name: "Website", price: "3'500", description: "Für einen klaren, professionellen Start.", items: ["Bis 5 Seiten", "Mobile Optimierung", "Basic SEO"] },
  { name: "Business", price: "5'500", description: "Für Marken, die wachsen wollen.", badge: "Empfohlen", items: ["Bis 10 Seiten", "Erweiterte SEO", "Google Ads Setup"] },
  { name: "Full System", price: "8'500", description: "Für komplexe digitale Auftritte.", items: ["Unlimitierte Seiten", "Mehrsprachig", "Individuelle Systeme"] },
];

export default function Home() {
  return (
    <main>
      <HomeSmoothScroll />
      <HeroScroll>
        <div className="hero-sticky">
          <div className="hero-frame hero-appear">
          <Image className="hero-image" src={heroImage} alt="Schweizer Berglandschaft über den Wolken" fill priority loading="eager" sizes="100vw" />
          <div className="hero-shade" />
          <div className="hero-wordmark hero-appear-wordmark" aria-hidden="true">WENDICO</div>
          <div className="hero-content">
            <div className="hero-copy hero-appear-copy">
              <span className="eyebrow hero-eyebrow"><i /> Digitalstudio aus dem Zürcher Weinland</span>
              <h1>Websites mit Aussicht auf <em>mehr.</em></h1>
              <p>Klare Strategie, ausgezeichnetes Design und eigener Code für digitale Auftritte, die Menschen gerne benutzen.</p>
              <div className="actions">
                <Link className="button hero-button" href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗</span></Link>
                <Link className="hero-text-link" href="/projekte">Arbeiten entdecken</Link>
              </div>
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
        <Image className="services-backdrop" src={servicesImage} alt="Schweizer Berggipfel unter einem dramatischen Himmel" fill loading="eager" sizes="100vw" />
        <div className="services-tint" />
        <div className="shell services-shell">
          <div className="services-heading">
            <span className="eyebrow services-eyebrow"><i /> Was wir tun</span>
            <h2>Drei Systeme.<br />Ein Ziel: <em>mehr Wirkung.</em></h2>
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
                <Link href="/projekte" aria-label="Webdesign Projekte ansehen">↗</Link>
              </div>
            </article>

            <article className="service-pane service-pane-hosting glass">
              <div className="hosting-flow" aria-hidden="true">
                <span>MONITORING</span><span>BACKUPS</span><span>SECURITY</span>
                <i className="flow-line flow-one" /><i className="flow-line flow-two" /><i className="flow-line flow-three" />
                <b className="flow-status">✓</b>
              </div>
              <div className="service-pane-copy">
                <span>02 / Hosting & Wartung</span>
                <h3>Technik, die einfach läuft.</h3>
                <p>Hosting, SSL, Backups, Updates und Support. Sicher betreut, damit du dich auf dein Geschäft konzentrierst.</p>
                <Link href="/preise" aria-label="Hosting Angebote ansehen">↗</Link>
              </div>
            </article>

            <article className="service-pane service-pane-revenue glass">
              <div className="revenue-visual" aria-hidden="true"><span>Besucher</span><i>→</i><span>Anfrage</span><i>→</i><strong>Umsatz</strong></div>
              <div className="service-pane-copy">
                <span>03 / Umsatzsysteme</span>
                <h3>Vom Besuch zur messbaren Anfrage.</h3>
                <p>Reservationen, Kampagnen und klare Nutzerwege verwandeln Aufmerksamkeit in echte Ergebnisse.</p>
                <Link href="/kontakt" aria-label="Umsatzsystem besprechen">↗</Link>
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
            <span className="eyebrow home-pricing-eyebrow">Preise</span>
            <h2>Ein klarer Start.<br /><em>Ein starker Auftritt.</em></h2>
            <p>Jedes Projekt ist individuell. Unsere Pakete geben dir trotzdem von Anfang an eine klare Orientierung.</p>
          </div>
          <div className="home-pricing-grid">
            {homePlans.map((plan) => (
              <article className={`home-pricing-card${plan.badge ? " is-featured" : ""}`} key={plan.name}>
                {plan.badge ? <span className="home-pricing-badge">{plan.badge}</span> : null}
                <span className="home-pricing-name">{plan.name}</span>
                <p>{plan.description}</p>
                <div className="home-pricing-price"><small>CHF</small><strong>{plan.price}</strong></div>
                <ul>{plan.items.map((item) => <li key={item}><b>✓</b>{item}</li>)}</ul>
                <Link href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗</span></Link>
              </article>
            ))}
          </div>
          <Link className="home-pricing-all" href="/preise">Alle Leistungen und Preise ansehen ↗</Link>
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
              <div className="home-about-card-name"><h3>Panat Ruangsri</h3><span>Sales · Strategie · Webdesign</span></div>
            </article>
            <article className="home-about-card">
              <Image src="/wendico-live/tim.jpg" alt="Tim Biedermann" fill sizes="(max-width: 760px) 92vw, 46vw" />
              <span className="home-about-card-overlay" />
              <blockquote>„Eine Website soll nicht nur gut aussehen. Sie soll zeigen, wofür eine Marke wirklich steht.“</blockquote>
              <div className="home-about-card-name"><h3>Tim Biedermann</h3><span>Finance · Strategie · Design</span></div>
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
            <h2>Eine gute Website beginnt<br />mit einem guten Gespräch.</h2>
            <p>Erzähl uns, was du vorhast. Wir sagen dir klar, was sinnvoll ist.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗</span></Link>
          </div>
        </div>
      </section>
    </main>
  );
}