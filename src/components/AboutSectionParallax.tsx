"use client";

import { useEffect } from "react";

const selectors = [".about-page-intro", ".about-page-method"];

export default function AboutSectionParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = selectors
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    let frame = 0;
    const render = () => {
      frame = 0;
      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)));
        section.style.setProperty("--about-bg-parallax", `${(progress - 0.5) * 96}px`);
      });
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

  return null;
}