"use client";

import Image from "next/image";
import { useEffect, useRef, type CSSProperties } from "react";
import textImage from "../../text-img.jpg";

const statement = "Wendico baut digitale Systeme, die Marken klar zeigen, Vertrauen schaffen und aus Besuchern echte Anfragen machen.";
const words = statement.split(" ");

export default function HomeTextParallax() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const render = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
      const readingProgress = Math.min(1, Math.max(0, (progress - 0.16) / 0.44));
      section.style.setProperty("--text-img-parallax", `${(progress - 0.5) * 74}px`);
      section.style.setProperty("--text-read-progress", `${readingProgress * (words.length + 3)}`);
      section.setAttribute("data-text-parallax-ready", "true");
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
    <section className="text-parallax-section" ref={sectionRef}>
      <div className="text-parallax-media" aria-hidden="true">
        <div className="text-parallax-frame">
          <Image className="text-parallax-background" src={textImage} alt="" fill loading="eager" sizes="100vw" />
        </div>
        <span className="text-parallax-overlay" />
      </div>
      <div className="shell text-parallax-shell">
        <p className="text-parallax-copy" aria-label={statement}>
          {words.map((word, index) => (
            <span aria-hidden="true" key={`${word}-${index}`} style={{ "--word-index": index } as CSSProperties}>{word}</span>
          ))}
        </p>
      </div>
    </section>
  );
}