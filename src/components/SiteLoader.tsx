"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteLoader() {
  const [done, setDone] = useState(false);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const loadStart = performance.now();
    let hideTimer = 0;
    let finished = false;

    const updateProgress = () => {
      const elapsed = performance.now() - loadStart;
      const next = Math.min(92, 92 * (1 - Math.exp(-elapsed / 900)));
      fillRef.current?.style.setProperty("width", `${next}%`);
    };
    const progressInterval = window.setInterval(updateProgress, 100);

    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearInterval(progressInterval);
      fillRef.current?.style.setProperty("width", "100%");
      const remaining = Math.max(220, 900 - (performance.now() - loadStart));
      hideTimer = window.setTimeout(() => setDone(true), remaining);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    // safety net: never block the site if "load" is delayed by third-party embeds
    const fallback = window.setTimeout(finish, 900);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
      window.clearTimeout(hideTimer);
      window.clearInterval(progressInterval);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !done);
    return () => document.documentElement.classList.remove("is-loading");
  }, [done]);

  return (
    <div className={done ? "site-loader is-done" : "site-loader"} aria-hidden="true">
      <div className="site-loader-mark">
        <span className="site-loader-track">WENDICO</span>
        <span className="site-loader-fill" ref={fillRef}>
          <span>WENDICO</span>
        </span>
      </div>
    </div>
  );
}
