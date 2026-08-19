"use client";

import { useEffect, useState } from "react";
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

type AppNavProps = {
  active?: string;
};

export default function AppNav({ active = "home" }: AppNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();
    // The hero (#top) is `position: fixed`, so hash-anchor scrolling can't bring it
    // into view when we're already on "/". Scroll manually instead.
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="site-nav" aria-label="Hauptnavigation">
      <Link className="site-nav-brand" href="/" aria-label="Wendico Startseite" onClick={handleHomeClick}>
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
            key={item.key}
            onClick={item.key === "home" ? handleHomeClick : closeMenu}
          >
            {item.label}
          </Link>
        ))}
        <Link className="site-nav-cta site-nav-cta-mobile" href="/kontakt#termin-buchen" onClick={closeMenu}>
          Projekt starten
        </Link>
      </div>
      <Link className="site-nav-cta" href="/kontakt#termin-buchen">
        Projekt starten
      </Link>
    </nav>
  );
}