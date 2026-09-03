import type { Metadata } from "next";
import Image from "next/image";
import mountainImage from "../../../section-2.jpg";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der WENDICO KLG.",
  alternates: { canonical: "/impressum" },
  openGraph: { type: "website", locale: "de_CH", siteName: "Wendico", url: "/impressum", title: "Impressum | Wendico", description: "Impressum der WENDICO KLG." },
};
const blocks = [{ title: "WENDICO KLG", lines: ["Im Hofacker 3", "CH-8478 Thalheim an der Thur", "Schweiz", "Kollektivgesellschaft", "UID: CHE-298.049.775"] }, { title: "Vertretung", lines: ["Tim Biedermann", "Panat Ruangsri"] }, { title: "Kontakt", lines: ["+41 79 504 10 05", "info@wendico.ch"] }];

export default function ImpressumPage() {
  return <main className="legal-page"><section className="legal-page-hero"><Image className="legal-page-bg" src={mountainImage} alt="" fill priority sizes="100vw" /><span className="legal-page-overlay" aria-hidden="true" /><div className="shell legal-page-hero-copy"><span className="eyebrow legal-page-eyebrow"><i /> Rechtliches</span><h1>Impressum.</h1><p>Angaben zur verantwortlichen Anbieterin dieser Website.</p></div></section><section className="legal-page-content"><div className="shell"><div className="legal-page-grid">{blocks.map((block) => <article className="legal-page-card" key={block.title}><h2>{block.title}</h2>{block.lines.map((line) => <p key={line}>{line}</p>)}</article>)}</div><article className="legal-page-copy"><h2>Hinweis zur Haftung</h2><p>Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Dennoch übernehmen wir keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.</p><p>Unsere Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss; verantwortlich ist ausschliesslich der jeweilige Betreiber.</p><h2>Urheberrecht</h2><p>Sämtliche Inhalte dieser Website, insbesondere Texte, Bilder, Grafiken, Logos und Designelemente, sind urheberrechtlich geschützt. Jede Verwendung bedarf der vorherigen schriftlichen Zustimmung von WENDICO KLG.</p></article></div></section></main>;
}