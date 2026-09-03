"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import facebookLogo from "../../facebook.webp";
import instagramLogo from "../../instagram.png";
import tikTokLogo from "../../tik-tok.png";

type ServiceVisual = "social" | "web" | "revenue";

const services = [
  {
    title: "Social Media Management",
    visual: "social" as ServiceVisual,
    description: "Wir planen Inhalte, entwickeln Formate und betreuen deine Kanäle mit einem klaren Blick auf Marke, Reichweite und Relevanz.",
  },
  {
    title: "Webauftritt Erstellung",
    visual: "web" as ServiceVisual,
    description: "Von der ersten Struktur bis zum letzten Detail entsteht ein Webauftritt, der deine Marke verständlich zeigt und auf jedem Gerät überzeugt.",
  },
  {
    title: "Umsatzsystem",
    visual: "revenue" as ServiceVisual,
    description: "Wir verbinden Aufmerksamkeit mit klaren Wegen zur Anfrage: mit überzeugenden Angeboten, intelligenten Abläufen und messbaren Kontaktpunkten.",
  },
];

function ServiceGraphic({ visual }: { visual: ServiceVisual }) {
  if (visual === "social") {
    return (
      <div className="service-graphic service-graphic-social" aria-hidden="true">
        <span className="social-phone">
          <i className="social-story social-story-one" />
          <i className="social-story social-story-two" />
          <i className="social-post" />
          <i className="social-caption social-caption-one" />
          <i className="social-caption social-caption-two" />
        </span>
        <span className="platform-logo platform-logo-tiktok"><Image src={tikTokLogo} alt="" width={52} height={52} loading="eager" /></span>
        <span className="platform-logo platform-logo-instagram"><Image src={instagramLogo} alt="" width={52} height={52} loading="eager" /></span>
        <span className="platform-logo platform-logo-facebook"><Image src={facebookLogo} alt="" width={52} height={52} loading="eager" /></span>
        <span className="social-bubble social-bubble-one">+</span>
        <span className="social-bubble social-bubble-two">↗</span>
        <span className="social-signal social-signal-one" />
        <span className="social-signal social-signal-two" />
      </div>
    );
  }

  if (visual === "web") {
    return (
      <div className="service-graphic service-graphic-web" aria-hidden="true">
        <span className="web-browser">
          <i className="web-dot" />
          <i className="web-dot" />
          <i className="web-dot" />
          <b className="web-hero-block" />
          <b className="web-copy-line web-copy-line-one" />
          <b className="web-copy-line web-copy-line-two" />
          <b className="web-button" />
        </span>
        <span className="web-cursor" />
        <span className="web-grid-line web-grid-line-one" />
        <span className="web-grid-line web-grid-line-two" />
      </div>
    );
  }

  return (
    <div className="service-graphic service-graphic-revenue" aria-hidden="true">
      <span className="system-dashboard">
        <i className="system-topbar" />
        <i className="system-card system-card-one" />
        <i className="system-card system-card-two" />
        <i className="system-card system-card-three" />
        <i className="system-chart" />
      </span>
      <span className="system-node system-node-one">Traffic</span>
      <span className="system-node system-node-two">Anfrage</span>
      <span className="system-node system-node-three">CRM</span>
      <span className="system-node system-node-four">Umsatz</span>
      <span className="system-flow system-flow-one" />
      <span className="system-flow system-flow-two" />
      <span className="system-flow system-flow-three" />
    </div>
  );
}

export default function ServicesDetailSticky() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>("[data-service-index]");
    let frame = 0;
    const updateActiveService = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const closestItem = Array.from(items).reduce((closest, item) => {
        const itemBounds = item.getBoundingClientRect();
        const itemCenter = itemBounds.top + itemBounds.height / 2;
        const closestBounds = closest.getBoundingClientRect();
        const closestCenter = closestBounds.top + closestBounds.height / 2;
        return Math.abs(itemCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter) ? item : closest;
      });
      setActiveService(Number(closestItem.getAttribute("data-service-index")));
    };
    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActiveService);
    };

    updateActiveService();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section className="services-detail-section" ref={sectionRef}>
      <div className="shell services-detail-layout">
        <div className="services-detail-sticky">
          <span className="eyebrow"><i /> Dienstleistungen</span>
          <h2>{services[activeService].title}</h2>
        </div>
        <div className="services-detail-list">
          {services.map((service, index) => (
            <article className={`services-detail-item${activeService === index ? " is-active" : ""}`} data-service-index={index} key={service.title}>
              <ServiceGraphic visual={service.visual} />
              <div className="services-detail-copy">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}