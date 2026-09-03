"use client";

import { useState } from "react";

const questions = [
  ["Was genau macht Wendico?", "Wir konzipieren, gestalten und entwickeln digitale Auftritte für Unternehmen. Dazu gehören individuelle Websites, Hosting, Wartung und digitale Umsatzsysteme."],
  ["Für wen entwickelt ihr Websites?", "Wir arbeiten mit Unternehmen, Restaurants und Marken, die ihren digitalen Auftritt klarer, hochwertiger und wirksamer machen möchten."],
  ["Arbeitet ihr mit Vorlagen oder Baukästen?", "Nein. Wir entwickeln mit eigenem, sauberem Code. Das gibt uns mehr Freiheit im Design, bessere Performance und eine Website, die wirklich zu deiner Marke passt."],
  ["Übernehmt ihr Hosting und Wartung?", "Ja. Auf Wunsch kümmern wir uns um Domain, SSL, Backups, Updates und laufende Pflege. So bleibt dein Auftritt technisch sicher und aktuell."],
  ["Wie starten wir ein Projekt?", "Mit einem unverbindlichen Gespräch. Wir klären Ziele, Zielgruppe und Umfang, geben eine ehrliche Empfehlung und planen dann die nächsten Schritte gemeinsam."],
];

export default function HomeFaq() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return <section className="home-faq-section"><div className="shell home-faq-layout"><div className="home-faq-intro"><span className="eyebrow">Fragen & Antworten</span><h2>Was du über<br /><em>Wendico</em> wissen solltest.</h2><p>Gute Zusammenarbeit beginnt mit Klarheit. Hier sind die wichtigsten Antworten auf einen Blick.</p></div><div className="home-faq-list">{questions.map(([question, answer], index) => <article className={openQuestion === index ? "is-open" : ""} key={question}><button type="button" aria-expanded={openQuestion === index} onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{question}</span><b>+</b></button><div><p>{answer}</p></div></article>)}</div></div></section>;
}