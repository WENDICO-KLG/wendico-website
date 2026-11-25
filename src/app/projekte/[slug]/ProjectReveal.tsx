"use client";

import { useEffect } from "react";

// content is only hidden (via .pd-reveal-ready) once this effect has run, so the page stays readable without JS
export default function ProjectReveal() {
  useEffect(() => {
    const main = document.querySelector<HTMLElement>("main.pd");
    if (!main || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = [...main.querySelectorAll<HTMLElement>("[data-pd-reveal]")];
    const pending = elements.filter((element) => element.getBoundingClientRect().top >= window.innerHeight);
    elements.forEach((element) => {
      if (!pending.includes(element)) element.classList.add("is-visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // also reveal what was jumped past (anchor, End key), so nothing stays hidden above the viewport
          if (!entry.isIntersecting && entry.boundingClientRect.top > 0) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    main.classList.add("pd-reveal-ready");
    pending.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      main.classList.remove("pd-reveal-ready");
      elements.forEach((element) => element.classList.remove("is-visible"));
    };
  }, []);

  return null;
}
