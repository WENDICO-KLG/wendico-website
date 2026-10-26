"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const selectors = [
  ".eyebrow",
  "main h1, main h2, main h3",
  "main p",
  "main .glass",
  "main .standard-card",
  "main .project-tile",
  "main .price-card",
  "main .home-pricing-card",
  "main .home-about-card",
  "main .service-pane",
  "main .services-detail-item",
  "main .projects-page-card",
  "main .projects-page-filter-panel",
  "main .projects-page-hero-metrics span",
  "main .about-page-value-card",
  "main .about-page-team-card",
  "main .about-page-role-cards article",
  "main .about-page-steps article",
  "main .contact-details a",
  "main .contact-details div",
  "main .contact-form",
  "main .contact-page-booking-card",
  "main .contact-person-card",
  "main .legal-page-card",
  "main .legal-page-copy",
  "main .button",
  "main .text-link",
  "main .home-pricing-all",
  ".site-footer > *",
];

function revealType(element: Element) {
  if (element.matches("h1, h2, h3")) return "reveal-heading";
  if (element.matches("p")) return "reveal-copy";
  if (element.matches(".button, .text-link, .home-pricing-all, .eyebrow")) return "reveal-control";
  return "reveal-card";
}

export default function ScrollReveals() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // on small screens only headings and cards animate in; revealing every paragraph and button makes scrolling feel restless
    const compact = window.matchMedia("(max-width: 760px)").matches;
    const elements = [...document.querySelectorAll<HTMLElement>(selectors.join(","))].filter(
      (element) =>
        !element.closest(".hero-landscape") &&
        !element.closest(".home-projects-section") &&
        !element.closest(".text-parallax-section") &&
        (!compact || revealType(element) === "reveal-heading" || revealType(element) === "reveal-card"),
    );
    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal", revealType(element));
      element.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 55, 220)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        // reveal once: elements that fade out again when scrolling back up feel jumpy
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );
    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "reveal-heading", "reveal-copy", "reveal-control", "reveal-card", "is-revealed");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}