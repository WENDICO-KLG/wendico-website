"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoImage from "../../logo.png";


type NavItem = {
  label: string;
  href: string;
  key: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", key: "home" },
  { label: "Über Uns", href: "/ueber-uns", key: "ueber-uns" },
  { label: "Preise", href: "/preise", key: "preise" },
  { label: "Projekte", href: "/projekte", key: "projekte" },
  { label: "Kontakt", href: "/kontakt", key: "kontakt" },
];

export default function AppNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingNavigationRef = useRef(false);
  const closeMenu = () => setMenuOpen(false);
  const pathname = usePathname();
  const active = navItems.find((item) => item.href === pathname)?.key;

  useLayoutEffect(() => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    if (pendingNavigationRef.current) {
      pendingNavigationRef.current = false;
      closeMenu();
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetPathname = href.split("#", 1)[0];

    if (targetPathname === pathname) {
      event.preventDefault();
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (href.includes("#")) {
        document.querySelector(href.slice(href.indexOf("#")))?.scrollIntoView({ behavior: "smooth" });
      }
      closeMenu();
      return;
    }

    if (menuOpen) {
      pendingNavigationRef.current = true;
    }
  };

  return (
    <nav className="site-nav" aria-label="Hauptnavigation">
      <Link className="site-nav-brand" href="/" scroll={false} aria-label="Wendico Startseite" onClick={(event) => handleNavigation(event, "/")}>
        <Image src={logoImage} alt="" priority />
        <span>Wendico</span>
      </Link>
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
        {navItems.map((item) => (
          <Link
            aria-current={active === item.key ? "page" : undefined}
            href={item.href}
            scroll={item.href === "/" ? false : undefined}
            key={item.key}
            onClick={(event) => handleNavigation(event, item.href)}
          >
            {item.label}
          </Link>
        ))}
        <Link className="site-nav-cta site-nav-cta-mobile" href="/kontakt#termin-buchen" onClick={(event) => handleNavigation(event, "/kontakt#termin-buchen")}>
          Projekt starten
        </Link>
      </div>
      <Link className="site-nav-cta" href="/kontakt#termin-buchen">
        Projekt starten
      </Link>
    </nav>
  );
}