import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign Winterthur für Beauty & Coiffeur",
  description: "Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in Winterthur. Zeige deine Arbeit hochwertig und führe neue Kundschaft direkt zur Online-Terminbuchung.",
  alternates: { canonical: "/webdesign-winterthur" },
  keywords: ["Webdesign Winterthur", "Coiffeur Website Winterthur", "Beauty Salon Website Winterthur", "Salon Website mit Online-Buchung"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/webdesign-winterthur",
    title: "Webdesign Winterthur für Beauty & Coiffeur | Wendico",
    description: "Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in Winterthur.",
  },
};

export default function WebdesignWinterthurPage() {
  return (
    <main className="geo-page">
      <section className="geo-page-hero" style={{ backgroundImage: "linear-gradient(108deg, rgba(4,13,9,.86), rgba(4,13,9,.44) 46%, rgba(4,13,9,.8)), url('https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Blick_auf_die_Winterthurer_Altstadt.jpg/1920px-Blick_auf_die_Winterthurer_Altstadt.jpg')" }}>
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Winterthur</span>
            <h1>Webdesign für Beauty- und Coiffeur-Salons in <em>Winterthur</em>, die mehr Termine gewinnen wollen.</h1>
            <p>Wir gestalten Salon-Websites, die deine Arbeit hochwertig zeigen, Leistungen verständlich erklären und Interessierte direkt zur Online-Terminbuchung führen.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Gespräch vereinbaren</Link>
              <Link className="about-page-text-link" href="/preise">Preise ansehen</Link>
            </div>
          </div>

          <aside className="geo-page-card glass">
            <span>Für Salons in Winterthur</span>
            <strong>Einfach zum Wunschtermin</strong>
            <p>Zeige, was deinen Salon ausmacht, und verknüpfe deinen Auftritt mit dem Buchungssystem, das du bereits nutzt.</p>
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
          <div><strong>01</strong><span>Kompetent positioniert</span></div>
          <div><strong>02</strong><span>Strukturierte Erfahrung</span></div>
          <div><strong>03</strong><span>Ergebnisorientiert</span></div>
        </div>
      </section>

      <section className="shell geo-page-overview">
        <div className="geo-page-intro">
          <span className="eyebrow"><i /> Warum wir?</span>
          <h2>Vor dem ersten Salonbesuch zählen online Stil, Leistungen und ein einfacher Weg zum passenden Termin.</h2>
        </div>

        <div className="geo-page-grid">
          <article className="glass">
            <h3>Deine Arbeit im Fokus</h3>
            <p>Zeige Behandlungen, Ergebnisse und Atmosphäre so, dass neue Kundschaft schnell den passenden Salon findet.</p>
          </article>
          <article className="glass">
            <h3>Einfacher Buchungsweg</h3>
            <p>Ein klar sichtbarer Buchungslink führt Interessierte ohne Umwege zur passenden Behandlung und zum freien Termin.</p>
          </article>
          <article className="glass">
            <h3>Mobil gut erreichbar</h3>
            <p>Die Website ist für Smartphones optimiert, damit Kundinnen und Kunden auch unterwegs Services ansehen und Termine buchen können.</p>
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
              <h3>Analyse</h3>
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
            <div><strong>+ 26%</strong><span>mehr lokale Sichtbarkeit</span></div>
            <div><strong>2x</strong><span>mehr Vertrauen im ersten Eindruck</span></div>
            <div><strong>100%</strong><span>auf deinen Salon zugeschnitten</span></div>
          </div>
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Webdesign Winterthur</span>
            <h2>Bereit für eine Salon-Website, die mehr Termine ermöglicht?</h2>
            <p>Wir verbinden einen hochwertigen Auftritt mit klaren Leistungen und direkter Online-Terminbuchung.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
