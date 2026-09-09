import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign Winterthur",
  description: "Moderne Webdesign- und Website-Services für Unternehmen in Winterthur. Klarer Auftritt, starke Markenwirkung und digitale Lösungen mit Fokus auf Wachstum.",
  alternates: { canonical: "/webdesign-winterthur" },
  keywords: ["Webdesign Winterthur", "Website erstellen Winterthur", "Webagentur Winterthur", "Website für Unternehmen Winterthur"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/webdesign-winterthur",
    title: "Webdesign Winterthur | Wendico",
    description: "Moderne Websites und digitale Auftritte für Unternehmen in Winterthur.",
  },
};

export default function WebdesignWinterthurPage() {
  return (
    <main className="geo-page">
      <section className="geo-page-hero" style={{ backgroundImage: "linear-gradient(108deg, rgba(4,13,9,.86), rgba(4,13,9,.44) 46%, rgba(4,13,9,.8)), url('https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Blick_auf_die_Winterthurer_Altstadt.jpg/1920px-Blick_auf_die_Winterthurer_Altstadt.jpg')" }}>
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Winterthur</span>
            <h1>Webdesign für Unternehmen in <em>Winterthur</em>, die stärker in der Region wahrgenommen werden wollen.</h1>
            <p>Wir entwickeln Websites für lokale Unternehmen, Dienstleister und Marken, die in Winterthur professioneller, klarer und zugleich wirkungsvoller auftreten wollen. Ein guter Auftritt schafft Vertrauen und macht Angebote sofort verständlicher.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Gespräch vereinbaren</Link>
              <Link className="about-page-text-link" href="/preise">Preise ansehen</Link>
            </div>
          </div>

          <aside className="geo-page-card glass">
            <span>Mehrwert für Winterthur</span>
            <strong>Stärker sichtbar</strong>
            <p>Ein sauberer Webauftritt hilft Unternehmen, lokal besser gefunden und professioneller wahrgenommen zu werden.</p>
            <ul>
              <li>Regionale Positionierung</li>
              <li>Mehr Vertrauen</li>
              <li>Mehr qualifizierte Leads</li>
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
          <h2>In Winterthur entscheidet oft der erste Eindruck online: klarer Auftritt, hochwertiger Eindruck, eindeutige nächste Schritte.</h2>
        </div>

        <div className="geo-page-grid">
          <article className="glass">
            <h3>Lokale Sichtbarkeit</h3>
            <p>Eine Website, die die eigenen Leistungen verständlich und einladend kommuniziert, schafft mehr Aufmerksamkeit in der Region.</p>
          </article>
          <article className="glass">
            <h3>Vertrauen</h3>
            <p>Ein professioneller Auftritt macht Angebote sofort glaubwürdiger und hilft dabei, Kontakte mit mehr Sicherheit zu gewinnen.</p>
          </article>
          <article className="glass">
            <h3>Mehr Anfragen</h3>
            <p>Struktur, klare Call-to-Actions und gute Kommunikation führen Besucher gezielt zu Beratung, Kontakt oder Kauf.</p>
          </article>
        </div>
      </section>

      <section className="geo-page-process">
        <div className="shell geo-page-process-inner">
          <div className="geo-page-process-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> So arbeiten wir</span>
            <h2>Modernes Webdesign mit Strategie und ohne unnötigen Ballast.</h2>
            <p>Wir bauen jeweils einen digitalen Auftritt, der sauber, zeitgemäß und auf deine Zielgruppe abgestimmt ist. Gerade für regionale Unternehmen ist das oft der größte Hebel.</p>
          </div>

          <div className="geo-page-flow">
            <div className="geo-page-step glass">
              <span>01</span>
              <h3>Analyse</h3>
              <p>Wir verstehen, wer du bist, was du anbietest und was deine Kunden wirklich brauchen.</p>
            </div>
            <div className="geo-page-step glass">
              <span>02</span>
              <h3>Design</h3>
              <p>Ein klarer visueller Stil macht dein Angebot verständlicher und professioneller in der Wahrnehmung.</p>
            </div>
            <div className="geo-page-step glass">
              <span>03</span>
              <h3>Umsetzung</h3>
              <p>Wir bauen die Seite technisch sauber auf, damit sie schnell, zuverlässig und für alle Geräte funktioniert.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell geo-page-proof">
        <div className="geo-page-proof-card glass">
          <span className="eyebrow"><i /> Ergebnis</span>
          <h2>Mehr Klarheit im Auftritt, mehr Vertrauen bei Neukunden und mehr Gespräche mit dem richtigen Publikum.</h2>
          <p>Wenn ein Unternehmen in Winterthur wahrnehmbar und professionell wirkt, wird die Website nicht nur zu einer Informationsseite, sondern zu einer echten Geschäftshilfe.</p>

          <div className="geo-page-proof-points">
            <div><strong>+ 26%</strong><span>mehr lokale Sichtbarkeit</span></div>
            <div><strong>2x</strong><span>mehr Vertrauen im ersten Eindruck</span></div>
            <div><strong>100%</strong><span>auf dein Angebot zugeschnitten</span></div>
          </div>
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Webdesign Winterthur</span>
            <h2>Bereit für einen Auftritt, der in Winterthur mehr überzeugt?</h2>
            <p>Wir helfen Unternehmen, klare Positionierung, professionellen Eindruck und bessere Conversion zu verbinden.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
