import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign Zürich",
  description: "Professionelles Webdesign und digitale Auftritte für Unternehmen in Zürich. Moderne Websites mit klarer Strategie, starkem Branding und messbarem Mehrwert.",
  alternates: { canonical: "/webdesign-zuerich" },
  keywords: ["Webdesign Zürich", "Website erstellen Zürich", "Webagentur Zürich", "Website für Unternehmen Zürich"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/webdesign-zuerich",
    title: "Webdesign Zürich | Wendico",
    description: "Professionelles Webdesign und digitale Auftritte für Unternehmen in Zürich.",
  },
};

export default function WebdesignZurichPage() {
  return (
    <main className="geo-page">
      <section className="geo-page-hero" style={{ backgroundImage: "linear-gradient(108deg, rgba(4,13,9,.88), rgba(4,13,9,.48) 44%, rgba(4,13,9,.82)), url('https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Altstadt_Z%C3%BCrich_2015.jpg/1920px-Altstadt_Z%C3%BCrich_2015.jpg')" }}>
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Zürich</span>
            <h1>Webdesign für Unternehmen in <em>Zürich</em>, die mehr Vertrauen und mehr Nachfrage wollen.</h1>
            <p>Wir schaffen digitale Auftritte, die in der Stadt mit den richtigen Marken und Dienstleistern ernst genommen werden. Klare Positionierung, starke visuelle Sprache und Websites, die eher Gespräche als nur „Besucher“ produzieren.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Gespräch vereinbaren</Link>
              <Link className="about-page-text-link" href="/projekte">Mehr Projekte</Link>
            </div>
          </div>

          <aside className="geo-page-card glass">
            <span>Warum Kunden in Zürich uns wählen</span>
            <strong>Mehr Sichtbarkeit</strong>
            <p>Für Unternehmen, die in einer kompetitiven Stadt besser wahrgenommen werden möchten.</p>
            <ul>
              <li>Klare Positionierung</li>
              <li>Mehr Vertrauen</li>
              <li>Mehr qualifizierte Anfragen</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="geo-page-band">
        <div className="shell geo-page-metrics">
          <div><strong>01</strong><span>Strategischer Start</span></div>
          <div><strong>02</strong><span>Design mit Wirkung</span></div>
          <div><strong>03</strong><span>Ergebnis orientiert</span></div>
        </div>
      </section>

      <section className="shell geo-page-overview">
        <div className="geo-page-intro">
          <span className="eyebrow"><i /> Für wen?</span>
          <h2>Ein klarer digitaler Auftritt ist in Zürich oft der Unterschied zwischen „vorhanden“ und „gewählt“.</h2>
        </div>

        <div className="geo-page-grid">
          <article className="glass">
            <h3>Unternehmen</h3>
            <p>Für Firmen, die in Zürich professioneller auftreten und ihre Leistungen besser verständlich machen wollen.</p>
          </article>
          <article className="glass">
            <h3>Service-Business</h3>
            <p>Für Dienstleister, die mit einer guten Website Vertrauen schaffen und schneller qualifizierte Anfragen gewinnen möchten.</p>
          </article>
          <article className="glass">
            <h3>Marken</h3>
            <p>Für Marken, die eine digitale Präsenz brauchen, die genauso durchdacht und hochwertig wirkt wie das eigene Angebot.</p>
          </article>
        </div>
      </section>

      <section className="geo-page-process">
        <div className="shell geo-page-process-inner">
          <div className="geo-page-process-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> So arbeiten wir</span>
            <h2>Von der Positionierung bis zur live gehenden Website.</h2>
            <p>Wir verbinden Strategie, Design und Technik, damit deine Website nicht nur gut aussieht, sondern auch eine klare Wirkung im Geschäft erzeugt.</p>
          </div>

          <div className="geo-page-flow">
            <div className="geo-page-step glass">
              <span>01</span>
              <h3>Positionierung</h3>
              <p>Wir klären, was deine Firma stark macht und worauf Kunden dich wahrnehmen sollen.</p>
            </div>
            <div className="geo-page-step glass">
              <span>02</span>
              <h3>Design</h3>
              <p>Eine klare visuelle Sprache macht den digitalen Auftritt verständlicher, hochwertiger und glaubwürdiger.</p>
            </div>
            <div className="geo-page-step glass">
              <span>03</span>
              <h3>Umsetzung</h3>
              <p>Sauber technisch, schnell, responsiv und so aufgebaut, dass Besucher gezielt zum nächsten Schritt geführt werden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell geo-page-proof">
        <div className="geo-page-proof-card glass">
          <span className="eyebrow"><i /> Ergebnis</span>
          <h2>Mehr Vertrauen, mehr Klarheit und eine Website, die wirklich zum Geschäft passt.</h2>
          <p>In der Zürcher Geschäftswelt zählt vor allem eines: ein Auftritt, der schnell erkenntlich, professionell und überzeugend wirkt. Genau daran arbeiten wir.</p>

          <div className="geo-page-proof-points">
            <div><strong>+ 31%</strong><span>mehr qualifizierte Anfragen</span></div>
            <div><strong>2x</strong><span>mehr Vertrauen im Erstkontakt</span></div>
            <div><strong>100%</strong><span>individuell auf dein Geschäft abgestimmt</span></div>
          </div>
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Webdesign Zürich</span>
            <h2>Bereit für einen Webauftritt, der in Zürich besser wirkt?</h2>
            <p>Wir bauen Websites, die klarer kommunizieren, professioneller aussehen und mehr Geschäft generieren.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
