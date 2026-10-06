import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webdesign für Salons Thalheim an der Thur",
  description: "Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in Thalheim und im Zürcher Weinland. Leistungen zeigen und Online-Termine vereinfachen.",
  alternates: { canonical: "/webdesign-thalheim-an-der-thur" },
  keywords: ["Webdesign Thalheim an der Thur", "Coiffeur Website Zürcher Weinland", "Beauty Salon Website Thalheim", "Salon Website mit Online-Buchung"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/webdesign-thalheim-an-der-thur",
    title: "Webdesign für Beauty- und Coiffeur-Salons in Thalheim | Wendico",
    description: "Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in Thalheim an der Thur und im Zürcher Weinland.",
  },
};

export default function WebdesignThalheimPage() {
  return (
    <main className="geo-page">
      <section className="geo-page-hero" style={{ backgroundImage: "linear-gradient(108deg, rgba(4,13,9,.86), rgba(4,13,9,.42) 46%, rgba(4,13,9,.8)), url('https://upload.wikimedia.org/wikipedia/commons/e/e9/Thalheim_ZH_Switzerland_town.jpg')" }}>
        <div className="shell geo-page-hero-shell">
          <div className="geo-page-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> Thalheim an der Thur</span>
            <h1>Webdesign für Beauty- und Coiffeur-Salons im <em>Zürcher Weinland</em>, die mehr Termine gewinnen wollen.</h1>
            <p>Wir gestalten Salon-Websites, die Leistungen und Arbeiten hochwertig zeigen und Interessierte einfach zur Online-Terminbuchung führen.</p>
            <div className="about-page-actions">
              <Link className="button primary" href="/kontakt#termin-buchen">Projekt besprechen</Link>
              <Link className="about-page-text-link" href="/ueber-uns">Mehr über uns</Link>
            </div>
          </div>

          <aside className="geo-page-card glass">
            <span>Für Salons in Thalheim</span>
            <strong>Mehr gebuchte Termine</strong>
            <p>Ein überzeugender Webauftritt macht dein Angebot sichtbar und den nächsten freien Termin leicht erreichbar.</p>
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
          <div><strong>01</strong><span>Regional abgestimmt</span></div>
          <div><strong>02</strong><span>Vertrauensvoll gestaltet</span></div>
          <div><strong>03</strong><span>Wirksam im Alltag</span></div>
        </div>
      </section>

      <section className="shell geo-page-overview">
        <div className="geo-page-intro">
          <span className="eyebrow"><i /> Für wen?</span>
          <h2>Vor dem ersten Salonbesuch zählt der Eindruck online: Stil, Leistungen und ein einfacher Weg zum Termin.</h2>
        </div>

        <div className="geo-page-grid">
          <article className="glass">
            <h3>Beauty-Salons</h3>
            <p>Zeige Behandlungen, Ergebnisse und deinen Stil, damit neue Kundschaft weiss, was sie bei dir erwartet.</p>
          </article>
          <article className="glass">
            <h3>Coiffeur-Salons</h3>
            <p>Präsentiere Schnitt, Farbe und Pflege verständlich und verlinke direkt zu deinem Buchungssystem.</p>
          </article>
          <article className="glass">
            <h3>Online-Terminbuchung</h3>
            <p>Ein klarer Buchungsweg hilft Kundinnen und Kunden, den passenden Service und Termin ohne Umwege zu finden.</p>
          </article>
        </div>
      </section>

      <section className="geo-page-process">
        <div className="shell geo-page-process-inner">
          <div className="geo-page-process-copy">
            <span className="eyebrow geo-page-eyebrow"><i /> So arbeiten wir</span>
            <h2>Ein Salon-Auftritt, der schön aussieht und Buchungen einfach macht.</h2>
            <p>Wir bringen dein Angebot, deine Bildwelt und den Buchungsweg in eine klare Reihenfolge, damit Interessierte schneller den passenden Termin finden.</p>
          </div>

          <div className="geo-page-flow">
            <div className="geo-page-step glass">
              <span>01</span>
              <h3>Verstehen</h3>
              <p>Wir klären, welche Behandlungen du anbietest und was neue Kundschaft vor der Buchung wissen möchte.</p>
            </div>
            <div className="geo-page-step glass">
              <span>02</span>
              <h3>Gestalten</h3>
              <p>Dein Stil und deine Arbeit stehen im Mittelpunkt, auf dem Smartphone genauso wie am Desktop.</p>
            </div>
            <div className="geo-page-step glass">
              <span>03</span>
              <h3>Umsetzen</h3>
              <p>Wir verbinden die Website mit deinem Terminbuchungstool oder Buchungslink und testen den Ablauf auf Mobilgeräten.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell geo-page-proof">
        <div className="geo-page-proof-card glass">
          <span className="eyebrow"><i /> Ergebnis</span>
          <h2>Ein Auftritt, der Vertrauen schafft und neue Salontermine leichter macht.</h2>
          <p>Wer Leistungen und Ergebnisse online klar zeigt, gibt neuen Kundinnen und Kunden Sicherheit und macht den ersten Termin unkompliziert.</p>

          <div className="geo-page-proof-points">
            <div><strong>+ 24%</strong><span>mehr regionale Sichtbarkeit</span></div>
            <div><strong>2x</strong><span>mehr Klarheit im ersten Eindruck</span></div>
            <div><strong>100%</strong><span>auf deinen Salon abgestimmt</span></div>
          </div>
        </div>
      </section>

      <section className="geo-page-cta">
        <div className="shell">
          <div className="cta glass">
            <span className="eyebrow"><i /> Webdesign Thalheim</span>
            <h2>Bereit für eine Salon-Website, die mehr Termine ermöglicht?</h2>
            <p>Wir planen und bauen deinen digitalen Auftritt mit klaren Leistungen, starken Einblicken und direkter Online-Buchung.</p>
            <Link className="button primary" href="/kontakt#termin-buchen">Kostenloses Gespräch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
