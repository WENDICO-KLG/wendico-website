"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import mountainImage from "../../section-2.jpg";

const founders = [
  { id: "panat", name: "Panat Ruangsri", image: "/wendico-live/panat.JPG" },
  { id: "tim", name: "Tim Biedermann", image: "/wendico-live/tim.jpg" },
];

export default function AboutHero() {
  const [activeFounder, setActiveFounder] = useState(founders[0].id);
  const inactiveFounder = founders.find((founder) => founder.id !== activeFounder) ?? founders[1];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveFounder((currentFounder) => founders.find((founder) => founder.id !== currentFounder)?.id ?? founders[0].id);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="about-page-hero">
      <Image className="about-page-hero-bg" src={mountainImage} alt="" fill priority sizes="100vw" />
      <span className="about-page-hero-overlay" aria-hidden="true" />
      <div className="shell about-page-hero-shell">
        <div className="about-page-hero-copy">
          <span className="eyebrow about-page-eyebrow"><i /> Über uns</span>
          <h1>Jung. Direkt.<br /><em>Digital mit Haltung.</em></h1>
          <p>Wendico ist ein Digitalstudio aus dem Zürcher Weinland. Wir entwickeln Webauftritte und Systeme, die Marken klar zeigen und aus Aufmerksamkeit echte Anfragen machen.</p>
          <div className="about-page-actions">
            <Link className="button hero-button" href="/kontakt#termin-buchen">15-Minuten-Erstgespräch buchen <span>↗</span></Link>
            <Link className="about-page-text-link" href="/projekte">Arbeiten ansehen</Link>
          </div>
        </div>
        <div
          className="about-page-portrait-stack"
          aria-label="Wendico Gründer"
          onPointerDownCapture={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            if (event.clientX > bounds.left + bounds.width * 0.52) setActiveFounder(inactiveFounder.id);
          }}
        >
          {founders.map((founder) => (
            <button
              className={`about-page-portrait ${activeFounder === founder.id ? "is-front" : "is-back"}`}
              key={founder.id}
              onClick={() => setActiveFounder(founder.id)}
              type="button"
              aria-pressed={activeFounder === founder.id}
              aria-label={`${founder.name} nach vorne bringen`}
            >
              <Image src={founder.image} alt={founder.name} fill priority sizes="(max-width: 760px) 64vw, 330px" />
              <span>{founder.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}