"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../logo.png";

type NavItem = {
  label: string;
  href: string;
  key: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/#top", key: "home" },
  { label: "Über Uns", href: "/ueber-uns", key: "ueber-uns" },
  { label: "Preise", href: "/preise", key: "preise" },
  { label: "Projekte", href: "/projekte", key: "projekte" },
  { label: "Kontakt", href: "/kontakt", key: "kontakt" },
];

type AppNavProps = {
  active?: string;
};

export default function AppNav({ active = "home" }: AppNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="site-nav" aria-label="Hauptnavigation">
      <a className="site-nav-brand" href="/#top" aria-label="Wendico Startseite">
        <Image src={logoImage} alt="" priority />
        <span>Wendico</span>
      </a>
      <button
        type="button"
        className="site-nav-toggle"
        aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        aria-controls="site-nav-links"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={menuOpen ? "site-nav-links is-open" : "site-nav-links"} id="site-nav-links">
        {navItems.map((item) =>
          item.key === "home" ? (
            <a aria-current={active === item.key ? "page" : undefined} href={item.href} key={item.key} onClick={closeMenu}>
              {item.label}
            </a>
          ) : (
            <Link
              aria-current={active === item.key ? "page" : undefined}
              href={item.href}
              key={item.key}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ),
        )}
        <a className="site-nav-cta site-nav-cta-mobile" href="/kontakt#termin-buchen" onClick={closeMenu}>
          Projekt starten
        </a>
      </div>
      <a className="site-nav-cta" href="/kontakt#termin-buchen">
        Projekt starten
      </a>
    </nav>
  );
}