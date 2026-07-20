"use client";

import Image from "next/image";
import Link from "next/link";
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
  return (
    <nav className="site-nav" aria-label="Hauptnavigation">
      <Link className="site-nav-brand" href="/" aria-label="Wendico Startseite">
        <Image src={logoImage} alt="" priority />
        <span>Wendico</span>
      </Link>
      <div className="site-nav-links">
        {navItems.map((item) => (
          <Link aria-current={active === item.key ? "page" : undefined} href={item.href} key={item.key}>
            {item.label}
          </Link>
        ))}
      </div>
      <Link className="site-nav-cta" href="/kontakt">
        Projekt starten
      </Link>
    </nav>
  );
}