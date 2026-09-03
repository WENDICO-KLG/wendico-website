"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

export default function SloganParallax({ image }: { image: StaticImageData }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const render = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      section.style.setProperty("--slogan-parallax", `${(progress - 0.5) * 110}px`);
    };
    const update = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="slogan-section">
      <Image className="slogan-background" src={image} alt="" fill sizes="100vw" />
      <div className="slogan-overlay" />
      <h2>Jung. Kreativ. Digital.</h2>
    </section>
  );
}