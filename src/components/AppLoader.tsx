"use client";

import { useLayoutEffect, useMemo, useRef, useState } from "react";

const WORD = "WENDICO";

export default function AppLoader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const letters = useMemo(() => WORD.split(""), []);

  useLayoutEffect(() => {
    if (sessionStorage.getItem("wendico-loaded")) {
      // Repeat visit within this session: skip the splash entirely, hide it
      // imperatively (before paint) instead of via setState to avoid an
      // extra render pass.
      if (containerRef.current) containerRef.current.style.display = "none";
      return;
    }
    sessionStorage.setItem("wendico-loaded", "1");

    let raf: number;
    let current = 0;
    const tick = () => {
      current += (90 - current) * 0.04 + 0.15;
      if (current > 90) current = 90;
      setProgress(current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const minTime = new Promise((resolve) => setTimeout(resolve, 900));
    const pageLoad =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));

    Promise.all([minTime, pageLoad]).then(() => {
      cancelAnimationFrame(raf);
      setProgress(100);
      setTimeout(() => setLoading(false), 350);
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={containerRef}
      className={loading ? "app-loader" : "app-loader is-done"}
      aria-hidden={!loading}
      onTransitionEnd={(event) => {
        if (!loading && event.propertyName === "opacity" && containerRef.current) {
          containerRef.current.style.display = "none";
        }
      }}
    >
      <div className="app-loader-glow app-loader-glow-1" />
      <div className="app-loader-glow app-loader-glow-2" />
      <div className="app-loader-content">
        <p className="app-loader-word" aria-label={WORD}>
          {letters.map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.055}s` }}>
              {letter}
            </span>
          ))}
        </p>
        <div className="app-loader-bar">
          <span style={{ width: `${progress}%` }} />
        </div>
        <span className="app-loader-percent">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}
