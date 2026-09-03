"use client";

import { useEffect, useState } from "react";

export default function SiteLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const finish = () => {
      const remaining = Math.max(0, 900 - (performance.now() - start));
      window.setTimeout(() => setDone(true), remaining);
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", !done);
    return () => document.documentElement.classList.remove("is-loading");
  }, [done]);

  return (
    <div className={done ? "site-loader is-done" : "site-loader"} aria-hidden="true">
      <div className="site-loader-mark">
        <span>wendico</span>
        <i />
      </div>
    </div>
  );
}
