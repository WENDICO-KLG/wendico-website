"use client";

import { useState } from "react";

const questions = [
  ["Was genau macht Wendico?", "Wendico unterstützt Unternehmen in Thalheim an der Thur, im Zürcher Weinland, in Winterthur, Zürich und online schweizweit mit Websites, individueller Software, Social Media, KI-Integration und digitalen Umsatzsystemen. KI-Schulungen und Workshops sind vor Ort oder online möglich."],
  ["Für wen entwickelt ihr Websites?", "Für Unternehmen und Privatpersonen. Einen besonderen Schwerpunkt setzen wir auf Beauty- und Coiffeur-Salons: Dort gestalten wir Websites, die deine Arbeit hochwertig zeigen und neue Kundschaft einfach zum passenden Termin führen."],
  ["Könnt ihr Online-Terminbuchungen integrieren?", "Wir richten den Buchungsweg klar sichtbar ein und verknüpfen deine Website mit deinem bestehenden Buchungstool oder Buchungslink. Ein eigenes Buchungssystem ist nicht nötig."],
  ["Arbeitet ihr mit Vorlagen oder Baukästen?", "Nein. Wir entwickeln mit eigenem, sauberem Code. Das gibt uns mehr Freiheit im Design, bessere Performance und eine Website, die wirklich zu deiner Marke passt."],
  ["Was kostet das?", "Auf den Leistungsseiten findest du öffentliche Preisranges für Websites, Software, KI-Lösungen und Umsatzsysteme. Social-Media-Pakete zeigen monatliche Startpreise. Hosting und Wartung sind optional."],
  ["Bietet Wendico KI-Beratung in der Region an?", "Ja. Wendico berät Unternehmen in Thalheim an der Thur, im Zürcher Weinland, in Winterthur und Zürich zu KI-Integration, ChatGPT-gestützten Workflows, Chatbots und Automatisierung. Schulungen und Workshops sind vor Ort oder online möglich."],
  ["Wie starten wir ein Projekt?", "Mit einem unverbindlichen Gespräch. Wir klären dein Angebot, deine Ziele, die Ausgangslage und den Umfang, bevor wir passende nächste Schritte empfehlen."],
];

export default function HomeFaq() {
  const [openQuestion, setOpenQuestion] = useState(0);

  return <section className="home-faq-section"><div className="shell home-faq-layout"><div className="home-faq-intro"><span className="eyebrow">Fragen & Antworten</span><h2>Was du über<br /><em>Wendico</em> wissen solltest.</h2><p>Gute Zusammenarbeit beginnt mit Klarheit. Hier sind die wichtigsten Antworten auf einen Blick.</p></div><div className="home-faq-list">{questions.map(([question, answer], index) => <article className={openQuestion === index ? "is-open" : ""} key={question}><button type="button" aria-expanded={openQuestion === index} onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{question}</span><b>+</b></button><div><p>{answer}</p></div></article>)}</div></div></section>;
}