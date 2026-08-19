import type { Metadata } from "next";
import AppNav from "@/components/AppNav";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der WENDICO KLG, Im Hofacker 3, CH-8478 Thalheim an der Thur, Schweiz.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "WENDICO KLG",
    items: ["Im Hofacker 3", "CH-8478 Thalheim an der Thur", "Schweiz", "Rechtsform: Kollektivgesellschaft (KLG)", "UID: CHE-298.049.775"],
  },
  {
    title: "Vertretungsberechtigte Personen",
    items: ["Tim Biedermann", "Panat Ruangsri"],
  },
  {
    title: "Kontakt",
    items: ["Telefon: +41 79 504 10 05", "E-Mail: info@wendico.ch"],
  },
];

export default function ImpressumPage() {
  return (
    <main className="standard-page legal-page">
      <AppNav />
      <section className="standard-hero" aria-labelledby="impressum-title">
        <p>Rechtliches</p>
        <h1 id="impressum-title">Impressum.</h1>
        <span>Angaben gemäss der Live-Seite von Wendico.</span>
      </section>

      <section className="standard-section legal-content" aria-label="Impressum Inhalt">
        <div className="standard-card-grid three-columns">
          {sections.map((section) => (
            <article className="standard-card" key={section.title}>
              <h3>{section.title}</h3>
              {section.items.map((item) => <p key={item}>{item}</p>)}
            </article>
          ))}
        </div>

        <article className="standard-card legal-text-card">
          <h3>Hinweis zur Haftung</h3>
          <p>Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.</p>
          <p>Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss; verantwortlich dafür ist ausschliesslich der jeweilige Betreiber der verlinkten Seiten.</p>
        </article>

        <article className="standard-card legal-text-card">
          <h3>Urheberrecht</h3>
          <p>Sämtliche Inhalte dieser Website, insbesondere Texte, Bilder, Grafiken, Logos und Designelemente, sind urheberrechtlich geschützt. Jede Verwendung, Vervielfältigung oder Weitergabe, auch auszugsweise, bedarf der vorherigen schriftlichen Zustimmung von Wendico KLG.</p>
        </article>

        <article className="standard-card legal-text-card">
          <h3>Streitschlichtung</h3>
          <p>Wendico KLG nimmt derzeit nicht an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teil.</p>
        </article>
      </section>
    </main>
  );
}