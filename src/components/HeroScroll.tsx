"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HeroScroll({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const render = () => {
      const sectionTop = section.offsetTop;
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / scrollDistance));
      const initialInset = window.innerWidth <= 680 ? 10 : 24;
      const initialRadius = window.innerWidth <= 680 ? 14 : 20;

      section.style.setProperty("--hero-inset", `${initialInset * (1 - progress)}px`);
      section.style.setProperty("--hero-radius", `${initialRadius * (1 - progress)}px`);
    };
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        render();
      });
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

  return <section ref={sectionRef} className="hero-landscape">{children}</section>;
}