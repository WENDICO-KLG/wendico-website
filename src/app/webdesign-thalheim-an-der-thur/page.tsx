import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign Thalheim an der Thur",
  description: "Webdesign und digitale Auftritte für Unternehmen in Thalheim an der Thur. Regionale Websites mit klarer Positionierung und professionellem Eindruck.",
  alternates: { canonical: "/webdesign-thalheim-an-der-thur" },
  keywords: ["Webdesign Thalheim an der Thur", "Website erstellen Thalheim", "Webagentur Zürcher Weinland", "Website für Unternehmen Thalheim"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/webdesign-thalheim-an-der-thur",
    title: "Webdesign Thalheim an der Thur | Wendico",
    description: "Webdesign und digitale Auftritte für Unternehmen in Thalheim an der Thur.",
  },
};

export default function WebdesignThalheimPage() {
  return (
    <main className="geo-page">
      <section className="geo-page-hero" style={{ backgroundImage: "linear-gradient(108deg, rgba(4,13,9,.86), rgba(4,13,9,.42) 46%, rgba(4,13,9,.8)), url('https://upload.wikimedia.org/wikipedia/commons/e/e9/Thalheim_ZH_Switzerland_town.jpg')" }}>
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Thalheim an der Thur</span>
            <h1>Webdesign für Unternehmen im <em>Zürcher Weinland</em>, die lokal glaubwürdig und professionell auftreten wollen.</h1>
            <p>Wir bauen Websites für Unternehmen, Dienstleister und Betriebe im Raum Thalheim an der Thur, die sich regional besser positionieren und ihre Leistungen klarer und vertrauenswürdiger präsentieren möchten.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Projekt besprechen</Link>
              <Link className="about-page-text-link" href="/ueber-uns">Mehr über uns</Link>
            </div>
          </div>

          <aside className="geo-page-card glass">
            <span>Mehrwert für Thalheim</span>
            <strong>Lokaler Mehrwert</strong>
            <p>Ein professioneller Auftritt hilft regionalen Unternehmen, im eigenen Umfeld klarer, vertrauenswürdiger und attraktiver zu wirken.</p>
            <ul>
              <li>Regionale Präsenz</li>
              <li>Klarer Markenauftritt</li>
              <li>Mehr relevanter Sichtbarkeit</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="geo-page-band">
        <div className="shell geo-page-metrics">
          <div><strong>01</strong><span>Regional abgestimmt</span></div>
          <div><strong>02</strong><span>Vertrauensvoll gestaltet</span></div>
          <div><strong>03</strong><span>Wirksam im Alltag</span></div>
        </div>
      </section>

      <section className="shell geo-page-overview">
        <div className="geo-page-intro">
          <span className="eyebrow"><i /> Für wen?</span>
          <h2>Der lokale Auftritt ist oft der erste Vertrautheitspunkt – und genau hier entscheidet sich, ob man ernst genommen wird.</h2>
        </div>

        <div className="geo-page-grid">
          <article className="glass">
            <h3>Lokale Betriebe</h3>
            <p>Für Unternehmen, die im Raum Thalheim die richtigen Kunden besser erreichen und professioneller wirken möchten.</p>
          </article>
          <article className="glass">
            <h3>Dienstleister</h3>
            <p>Für Dienstleistende, die ihre Angebote klarer kommunizieren und Vertrauen über einen modernen digitalen Auftritt aufbauen wollen.</p>
          </article>
          <article className="glass">
            <h3>Marken</h3>
            <p>Für regionale Marken, die mit einer hochwertigen Webpräsenz in der Region stärker und nachhaltiger wahrnehmbar werden.</p>
          </article>
        </div>
      </section>

      <section className="geo-page-process">
        <div className="shell geo-page-process-inner">
          <div className="geo-page-process-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> So arbeiten wir</span>
            <h2>Professioneller Webauftritt auf Grundlage von Klarheit und Strategie.</h2>
            <p>Wir entwickeln digitale Lösungen, die nicht nur gut aussehen, sondern auch zu deinem Unternehmen, deiner Region und deinen Zielen passen. So wächst Vertrauen von Anfang an.</p>
          </div>

          <div className="geo-page-flow">
            <div className="geo-page-step glass">
              <span>01</span>
              <h3>Verstehen</h3>
              <p>Wir schauen, was deine Zielgruppe erwartet und wo dein Unternehmen sich klar abhebt.</p>
            </div>
            <div className="geo-page-step glass">
              <span>02</span>
              <h3>Gestalten</h3>
              <p>Die visuelle Sprache wird so gesetzt, dass der Auftritt hochwertig, verständlich und einladend wirkt.</p>
            </div>
            <div className="geo-page-step glass">
              <span>03</span>
              <h3>Umsetzen</h3>
              <p>Wir bauen die Website technisch sauber und so auf, dass sie in der Praxis zuverlässig funktioniert.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell geo-page-proof">
        <div className="geo-page-proof-card glass">
          <span className="eyebrow"><i /> Ergebnis</span>
          <h2>Ein Auftritt, der regional glaubwürdig wirkt und die richtigen Kontakte leichter anzieht.</h2>
          <p>Gerade in kleineren Regionen ist Vertrauen alles. Eine gut gestaltete Website hilft dabei, sich von der Konkurrenz zu unterscheiden und langfristig professioneller wahrgenommen zu werden.</p>

          <div className="geo-page-proof-points">
            <div><strong>+ 24%</strong><span>mehr regionale Sichtbarkeit</span></div>
            <div><strong>2x</strong><span>mehr Klarheit im ersten Eindruck</span></div>
            <div><strong>100%</strong><span>auf deine Region und Zielgruppe abgestimmt</span></div>
          </div>
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Webdesign Thalheim</span>
            <h2>Für einen regionalen Auftritt, der professioneller und klarer wirkt?</h2>
            <p>Wir planen und bauen Websites, die Vertrauen schaffen, einladen und gleichzeitig das eigene Geschäft besser darstellen.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
