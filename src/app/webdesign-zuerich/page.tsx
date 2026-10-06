import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign Zürich",
  description: "Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in Zürich. Präsentiere deine Arbeit hochwertig und mache die Online-Terminbuchung einfach.",
  alternates: { canonical: "/webdesign-zuerich" },
  keywords: ["Webdesign Zürich", "Coiffeur Website Zürich", "Beauty Salon Website Zürich", "Salon Website mit Online-Buchung"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/webdesign-zuerich",
    title: "Webdesign Zürich | Wendico",
    description: "Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in Zürich.",
  },
};

export default function WebdesignZurichPage() {
  return (
    <main className="geo-page">
      <section className="geo-page-hero" style={{ backgroundImage: "linear-gradient(108deg, rgba(4,13,9,.88), rgba(4,13,9,.48) 44%, rgba(4,13,9,.82)), url('https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Altstadt_Z%C3%BCrich_2015.jpg/1920px-Altstadt_Z%C3%BCrich_2015.jpg')" }}>
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Zürich</span>
            <h1>Webdesign für Beauty- und Coiffeur-Salons in <em>Zürich</em>, die mehr Termine gewinnen wollen.</h1>
            <p>Wir gestalten Salon-Websites, die deine Arbeit hochwertig zeigen, dein Angebot klar erklären und neue Kundschaft direkt zur Online-Terminbuchung führen.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Gespräch vereinbaren</Link>
              <Link className="about-page-text-link" href="/projekte">Mehr Projekte</Link>
            </div>
          </div>

          <aside className="geo-page-card glass">
            <span>Für Salons in Zürich</span>
            <strong>Einfach zum Wunschtermin</strong>
            <p>Zeige, was deinen Salon ausmacht, und verknüpfe deine Website mit dem Buchungssystem, das du bereits nutzt.</p>
            <ul>
              <li>Leistungen klar präsentieren</li>
              <li>Vertrauen vor dem Besuch</li>
              <li>Direkt online buchen</li>
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
          <h2>Vor dem ersten Salonbesuch zählen online Stil, Leistungen und ein einfacher Weg zum passenden Termin.</h2>
        </div>

        <div className="geo-page-grid">
          <article className="glass">
            <h3>Beauty-Salons</h3>
            <p>Zeige Behandlungen, Ergebnisse und Atmosphäre, damit neue Kundschaft schnell den passenden Salon findet.</p>
          </article>
          <article className="glass">
            <h3>Coiffeur-Salons</h3>
            <p>Präsentiere Schnitt, Farbe und Pflege verständlich und führe direkt zu deinem Online-Buchungssystem.</p>
          </article>
          <article className="glass">
            <h3>Online-Terminbuchung</h3>
            <p>Ein klarer Buchungsweg hilft Kundinnen und Kunden, den passenden Service und freien Termin ohne Umwege zu finden.</p>
          </article>
        </div>
      </section>

      <section className="geo-page-process">
        <div className="shell geo-page-process-inner">
          <div className="geo-page-process-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> So arbeiten wir</span>
            <h2>Ein stimmiger Salon-Auftritt mit direktem Weg zur Buchung.</h2>
            <p>Wir ordnen Leistungen, Bildwelt und Buchungslink so, dass Interessierte schnell verstehen, was du anbietest und wie sie ihren Termin vereinbaren.</p>
          </div>

          <div className="geo-page-flow">
            <div className="geo-page-step glass">
              <span>01</span>
              <h3>Positionierung</h3>
              <p>Wir klären, welche Services du anbietest und welche Fragen neue Salonkundschaft vor der Buchung hat.</p>
            </div>
            <div className="geo-page-step glass">
              <span>02</span>
              <h3>Design</h3>
              <p>Deine Arbeit und die Atmosphäre deines Salons erhalten eine hochwertige, mobile Bildsprache.</p>
            </div>
            <div className="geo-page-step glass">
              <span>03</span>
              <h3>Umsetzung</h3>
              <p>Wir verbinden die Website mit deinem Buchungssystem oder Buchungslink und testen den Ablauf auf allen Geräten.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell geo-page-proof">
        <div className="geo-page-proof-card glass">
          <span className="eyebrow"><i /> Ergebnis</span>
          <h2>Mehr Klarheit im Auftritt und mehr Vertrauen vor dem ersten Termin.</h2>
          <p>Wenn Kundinnen und Kunden Leistungen, Preise und Ergebnisse schnell finden, fällt die Entscheidung für den passenden Salon leichter.</p>

          <div className="geo-page-proof-points">
            <div><strong>+ 31%</strong><span>mehr qualifizierte Anfragen</span></div>
            <div><strong>2x</strong><span>mehr Vertrauen im Erstkontakt</span></div>
            <div><strong>100%</strong><span>individuell auf deinen Salon abgestimmt</span></div>
          </div>
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Webdesign Zürich</span>
            <h2>Bereit für eine Salon-Website, die mehr Termine ermöglicht?</h2>
            <p>Wir verbinden einen hochwertigen Auftritt mit klaren Leistungen und direkter Online-Terminbuchung.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
