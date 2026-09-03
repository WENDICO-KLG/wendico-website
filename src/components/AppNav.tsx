"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../../logo.png";

const links = [
  ["Home", "/"], ["Über uns", "/ueber-uns"], ["Preise", "/preise"], ["Projekte", "/projekte"], ["Kontakt", "/kontakt"],
];

export default function AppNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth > 680) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = open ? "hidden" : "";
    window.addEventListener("resize", closeOnDesktop);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", closeOnDesktop);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  useEffect(() => {
    // close only after the new route has rendered, so the closing animation reveals it
    const id = window.setTimeout(() => setOpen(false), 140);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <header className="nav-wrap" data-menu-open={open ? "true" : "false"}>
      <nav className="site-nav glass" aria-label="Hauptnavigation">
        <Link className="brand" href="/" aria-label="Wendico Startseite"><Image className="brand-logo" src={logo} alt="" priority /><strong>wendico</strong></Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href}>{label}</Link>)}
        </div>
        <Link className="nav-cta" href="/kontakt#termin-buchen">Projekt starten <span>↗︎</span></Link>
      </nav>
      <button className="menu-button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menü schliessen" : "Menü öffnen"}><i /><i /></button>
      {/* kept outside .site-nav: its backdrop-filter would trap position:fixed children in Safari */}
      <div id="mobile-navigation" className={open ? "mobile-menu open" : "mobile-menu"}>
        {links.map(([label, href]) => <Link className={pathname === href ? "active" : ""} href={href} key={href} onClick={() => { if (pathname === href) setOpen(false); }}>{label}</Link>)}
      </div>
    </header>
  );
}