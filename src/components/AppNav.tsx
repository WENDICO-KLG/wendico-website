"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { serviceOrder, services } from "@/lib/services";

const linksBefore = [["Home", "/"], ["Über uns", "/ueber-uns"]];
const linksAfter = [["Projekte", "/projekte"], ["Kontakt", "/kontakt"]];
const serviceLinks = serviceOrder.map((slug) => [services[slug].navLabel, `/dienstleistungen/${slug}`] as const);

// position in the entrance cascade, read by the mobile menu CSS
const stagger = (index: number) => ({ "--i": index }) as CSSProperties;

function scrollToPageTop(href: string) {
  if (!href.includes("#")) window.scrollTo(0, 0);
}

export default function AppNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // desktop dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const servicesActive = pathname.startsWith("/dienstleistungen");
  const navLink = (label: string, href: string) => <Link className={pathname === href ? "active" : ""} href={href} key={href} onClick={() => scrollToPageTop(href)}>{label}</Link>;
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
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    // hide while scrolling down, show again on the first scroll up
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (Math.abs(y - lastY) < 8) return;
      setHidden(y > lastY && y > 160);
      lastY = y;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  useEffect(() => {
    // close only after the new route has rendered, so the closing animation reveals it
    const id = window.setTimeout(() => { setOpen(false); setServicesOpen(false); }, 140);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!servicesOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [servicesOpen]);
  const onDropdownKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(dropdownRef.current?.querySelectorAll<HTMLElement>(".nav-dropdown-menu a") ?? []);
    const toggle = dropdownRef.current?.querySelector<HTMLElement>(".nav-dropdown-toggle");
    const index = items.indexOf(document.activeElement as HTMLElement);
    if (event.key === "Escape" && servicesOpen) {
      setServicesOpen(false);
      toggle?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setServicesOpen(true);
      window.setTimeout(() => (items[Math.min(index + 1, items.length - 1)] ?? items[0])?.focus(), 60);
    } else if (event.key === "ArrowUp" && index >= 0) {
      event.preventDefault();
      (index === 0 ? toggle : items[index - 1])?.focus();
    }
  };

  return (
    <header className="nav-wrap" data-menu-open={open ? "true" : "false"} data-nav-hidden={hidden && !open ? "true" : "false"}>
      <nav className="site-nav glass" aria-label="Hauptnavigation">
        <Link className="brand" href="/" aria-label="Wendico Startseite"><Image className="brand-logo" src="/wendico_logo.png" alt="" width={180} height={52} sizes="49px" /><strong>wendico</strong></Link>
        <div className="nav-links">
          {linksBefore.map(([label, href]) => navLink(label, href))}
          <div
            className="nav-dropdown"
            ref={dropdownRef}
            data-open={servicesOpen ? "true" : "false"}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setServicesOpen(false); }}
            onKeyDown={onDropdownKeyDown}
          >
            <button type="button" className={servicesActive ? "nav-dropdown-toggle active" : "nav-dropdown-toggle"} aria-expanded={servicesOpen} aria-controls="services-menu" onClick={() => setServicesOpen((current) => !current)}>
              Dienstleistungen <i aria-hidden="true" />
            </button>
            <div className="nav-dropdown-panel">
              <ul id="services-menu" className="nav-dropdown-menu" aria-label="Dienstleistungen">
                {serviceLinks.map(([label, href]) => <li key={href}><Link className={pathname === href ? "active" : ""} href={href} onClick={() => { scrollToPageTop(href); setServicesOpen(false); }}>{label}</Link></li>)}
              </ul>
            </div>
          </div>
          {linksAfter.map(([label, href]) => navLink(label, href))}
        </div>
        <Link className="nav-cta" href="/kontakt#anfrage">Projekt anfragen <span>↗︎</span></Link>
      </nav>
      <button className="menu-button" onClick={() => { if (!open) setMobileServicesOpen(servicesActive); setOpen(!open); }} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menü schliessen" : "Menü öffnen"}><i /><i /></button>
      {/* kept outside .site-nav: its backdrop-filter would trap position:fixed children in Safari */}
      <div id="mobile-navigation" className={open ? "mobile-menu open" : "mobile-menu"}>
        {linksBefore.map(([label, href], index) => <Link className={pathname === href ? "active" : ""} href={href} key={href} style={stagger(index)} onClick={() => { scrollToPageTop(href); if (pathname === href) setOpen(false); }}>{label}</Link>)}
        <button type="button" className={servicesActive ? "mobile-menu-toggle active" : "mobile-menu-toggle"} style={stagger(2)} aria-expanded={mobileServicesOpen} aria-controls="mobile-services" onClick={() => setMobileServicesOpen((current) => !current)}>
          Dienstleistungen <span className="mobile-menu-toggle-icon" aria-hidden="true"><i /></span>
        </button>
        {/* grid-rows 0fr -> 1fr animates the height; inert keeps the closed links out of tab order */}
        <div id="mobile-services" className="mobile-submenu" data-open={mobileServicesOpen ? "true" : "false"} inert={!mobileServicesOpen}>
          <div className="mobile-submenu-inner">
            {serviceLinks.map(([label, href], index) => (
              <Link className={pathname === href ? "active" : ""} href={href} key={href} style={stagger(index)} onClick={() => { scrollToPageTop(href); if (pathname === href) setOpen(false); }}>{label}</Link>
            ))}
          </div>
        </div>
        {linksAfter.map(([label, href], index) => <Link className={pathname === href ? "active" : ""} href={href} key={href} style={stagger(index + 3)} onClick={() => { scrollToPageTop(href); if (pathname === href) setOpen(false); }}>{label}</Link>)}
        <Link className="mobile-menu-cta" href="/kontakt#anfrage" style={stagger(6)} onClick={() => setOpen(false)}>Projekt anfragen <span>↗︎</span></Link>
      </div>
    </header>
  );
}