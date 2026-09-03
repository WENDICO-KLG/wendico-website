"use client";

import { useRef, type ReactNode } from "react";

export default function AboutInteractiveSection({ children }: { children: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef(0);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (frameRef.current) return;
    const section = sectionRef.current;
    if (!section) return;
    const { clientX, clientY } = event;
    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = 0;
      const bounds = section.getBoundingClientRect();
      section.style.setProperty("--about-pointer-x", `${((clientX - bounds.left) / bounds.width - 0.5) * 22}px`);
      section.style.setProperty("--about-pointer-y", `${((clientY - bounds.top) / bounds.height - 0.5) * 22}px`);
    });
  }

  function resetPointer() {
    const section = sectionRef.current;
    if (!section) return;
    section.style.setProperty("--about-pointer-x", "0px");
    section.style.setProperty("--about-pointer-y", "0px");
  }

  return <section ref={sectionRef} className="home-about-section" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>{children}</section>;
}