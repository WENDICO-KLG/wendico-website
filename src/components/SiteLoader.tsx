"use client";

import { useEffect, useRef, useState } from "react";

export default function SiteLoader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  useEffect(() => {
    const loadStart = performance.now();
    let raf = 0;
    let hideTimer = 0;
    let finished = false;

    const tick = (now: number) => {
      const elapsed = now - loadStart;
      // ease toward 92% while waiting so the fill never looks "stuck" or complete too early
      const next = Math.min(92, 92 * (1 - Math.exp(-elapsed / 900)));
      progressRef.current = next;
      setProgress(next);
      if (!finished) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      setProgress(100);
      const remaining = Math.max(220, 900 - (performance.now() - loadStart));
      hideTimer = window.setTimeout(() => setDone(true), remaining);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    // safety net: never block the site if "load" is delayed by third-party embeds
    const fallback = window.setTimeout(finish, 3500);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
      window.clearTimeout(hideTimer);
      cancelAnimationFrame(raf);
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
        <span className="site-loader-fill" style={{ width: `${progress}%` }}>
          <span>WENDICO</span>
        </span>
      </div>
    </div>
  );
}
