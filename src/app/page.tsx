"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import founderImage from "../../founder.png";
import scrollZoomImage from "../../scroll-zoom.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AlpineLayer = {
  name: string;
  className: string;
  clipPath: string;
  scroll: number;
  mouse: number;
};

const alpineLayers: AlpineLayer[] = [
  {
    name: "glacier horizon",
    className: "swiss-layer swiss-layer-1",
    clipPath:
      "polygon(0 70%, 6% 66%, 12% 58%, 18% 63%, 25% 45%, 32% 61%, 39% 37%, 46% 55%, 53% 31%, 60% 57%, 67% 42%, 74% 64%, 82% 48%, 90% 62%, 100% 54%, 100% 100%, 0 100%)",
    scroll: 4,
    mouse: 6,
  },
  {
    name: "bernese ridge",
    className: "swiss-layer swiss-layer-2",
    clipPath:
      "polygon(0 78%, 5% 69%, 11% 54%, 18% 60%, 24% 39%, 31% 53%, 38% 20%, 46% 49%, 53% 35%, 60% 56%, 68% 27%, 76% 47%, 84% 37%, 92% 63%, 100% 52%, 100% 100%, 0 100%)",
    scroll: 10,
    mouse: 11,
  },
  {
    name: "valais wall",
    className: "swiss-layer swiss-layer-3",
    clipPath:
      "polygon(0 76%, 6% 66%, 13% 41%, 20% 57%, 27% 32%, 34% 51%, 42% 16%, 50% 54%, 57% 34%, 64% 49%, 72% 24%, 80% 46%, 88% 30%, 96% 59%, 100% 51%, 100% 100%, 0 100%)",
    scroll: 18,
    mouse: 17,
  },
  {
    name: "central valley",
    className: "swiss-layer swiss-layer-4",
    clipPath:
      "polygon(0 88%, 6% 72%, 13% 79%, 19% 49%, 27% 67%, 35% 36%, 43% 72%, 50% 50%, 58% 63%, 66% 30%, 74% 58%, 82% 40%, 90% 74%, 96% 58%, 100% 68%, 100% 100%, 0 100%)",
    scroll: 31,
    mouse: 24,
  },
  {
    name: "near alpine shoulder",
    className: "swiss-layer swiss-layer-5",
    clipPath:
      "polygon(0 91%, 5% 79%, 11% 84%, 17% 61%, 24% 75%, 32% 45%, 40% 80%, 48% 56%, 56% 70%, 64% 42%, 72% 64%, 80% 51%, 88% 83%, 95% 66%, 100% 75%, 100% 100%, 0 100%)",
    scroll: 46,
    mouse: 30,
  },
];

const treePositions = [5, 10, 16, 23, 30, 37, 46, 54, 62, 70, 78, 86, 93];

const customerLogos = [
  { name: "Weinland Esskultur", src: "/customer-logos/weinlandesskultur.png" },
  { name: "Rebthai", src: "/customer-logos/rebthai.png" },
  { name: "Thai Helping Point", src: "/customer-logos/thaihelpingpoint.png" },
  { name: "Thai Lodge", src: "/customer-logos/thai-lodge.png" },
  { name: "Elegant Society", src: "/customer-logos/elegantsociety.png" },
  { name: "SC Beauty Luxe", src: "/customer-logos/scbeautyluxe.png" },
  { name: "Ryu Vogler", src: "/customer-logos/ryuvogler.png" },
  { name: "Anania", src: "/customer-logos/anania.png" },
  { name: "Alija Gebäudereinigung", src: "/customer-logos/alija-gebaeudereinigung.png" },
  { name: "Lostrios", src: "/customer-logos/lostrios.png" },
];

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Reservation", href: "#reservation" },
  { label: "Mission", href: "#mission" },
  { label: "Projekte", href: "#projekte" },
];

const clarityCards = [
  {
    label: "Website",
    title: "Gäste sollen den Ort spüren.",
    text: "Bilder, Sprache und Ablauf machen aus Interesse echte Vorfreude.",
  },
  {
    label: "Reservation",
    title: "Der Tisch ist nur einen Klick entfernt.",
    text: "Unser eigenes System macht Anfragen, Zeiten und Gäste sauber führbar.",
  },
  {
    label: "Plugins",
    title: "Alles, was dein Betrieb braucht.",
    text: "Google, Newsletter, Gutscheine, Analytics oder spezielle Tools lassen sich einbauen.",
  },
];

const restaurantSignals = [
  "Emotionen vor Informationen",
  "Reservation ohne Umwege",
  "Eigenes Reservationssystem inklusive",
  "Plugins nach Wunsch integrierbar",
];

const reservationFeatures = [
  {
    label: "Eigene Lösung",
    title: "Reservationssystem von Wendico",
    text: "Keine starre Standardlösung. Wir stellen ein eigenes System bereit, das zu deinem Betrieb passt.",
  },
  {
    label: "Restaurant Flow",
    title: "Von Hunger zu Buchung",
    text: "Besucher sehen Stimmung, Angebot, Zeiten und freien Tisch in einer klaren Strecke.",
  },
  {
    label: "Erweiterbar",
    title: "Plugins und Tools nach Bedarf",
    text: "Ob Google, Newsletter, Tracking, Gutscheine oder externe Systeme: Wir bauen ein, was sinnvoll ist.",
  },
];

const pluginItems = ["Google", "Newsletter", "Analytics", "Gutscheine", "CRM", "Social", "Zahlung", "Events"];

const processSteps = [
  {
    step: "01",
    title: "Verstehen",
    text: "Wir verstehen Küche, Gäste, Abläufe und die wichtigste Reservation-Strecke.",
  },
  {
    step: "02",
    title: "Emotion wecken",
    text: "Design, Text, Bilder und Bewegung machen Lust auf den Besuch.",
  },
  {
    step: "03",
    title: "Reservieren",
    text: "Website, Reservationssystem, Plugins und Betrieb bleiben sauber betreut.",
  },
];

const latestProjects = [
  {
    name: "Lostrios",
    date: "Mai 2026",
    href: "https://lostrios.ch/",
    logo: "/customer-logos/lostrios.png",
    focus: "Marke & Anfrage",
    text: "Ein schneller Auftritt mit klarem Fokus auf Marke und Kontakt.",
  },
  {
    name: "Alija Gebäudereinigung",
    date: "April 2026",
    href: "https://alija-gebaeudereinigung.ch/",
    logo: "/customer-logos/alija-gebaeudereinigung.png",
    focus: "Lokales Vertrauen",
    text: "Eine lokale Service-Website mit klarer Leistung und Vertrauen.",
  },
  {
    name: "SC Beauty Luxe",
    date: "März 2026",
    href: "https://scbeautyluxe.com/",
    logo: "/customer-logos/scbeautyluxe.png",
    focus: "Premium Eindruck",
    text: "Ein eleganter Beauty-Auftritt mit kurzer Strecke zum Kontakt.",
  },
  {
    name: "Thai Lodge",
    date: "Februar 2026",
    href: "https://thai-lodge.ch/",
    logo: "/customer-logos/thai-lodge.png",
    focus: "Restaurant Flow",
    text: "Menu, Standort und Reservation werden direkt sichtbar.",
  },
  {
    name: "Rebthai",
    date: "Januar 2026",
    href: "https://rebthai.ch/",
    logo: "/customer-logos/rebthai.png",
    focus: "Gastro Website",
    text: "Ein klarer Restaurant-Auftritt für schnelle Entscheidungen.",
  },
  {
    name: "Weinland Esskultur",
    date: "Dezember 2025",
    href: "https://weinlandesskultur.ch/",
    logo: "/customer-logos/weinlandesskultur.png",
    focus: "Region & Genuss",
    text: "Lokale Identität, warme Bildwelt und einfache Orientierung.",
  },
  {
    name: "Thai Helping Point",
    date: "November 2025",
    href: "https://thaihelpingpoint.ch/",
    logo: "/customer-logos/thaihelpingpoint.png",
    focus: "Information",
    text: "Strukturierte Inhalte für Vertrauen und schnelle Hilfe.",
  },
  {
    name: "Elegant Society",
    date: "Oktober 2025",
    href: "https://elegantsociety.ch/",
    logo: "/customer-logos/elegantsociety.png",
    focus: "Brand Design",
    text: "Ein ruhiger Premium-Auftritt mit starker Markenwirkung.",
  },
  {
    name: "Ryu Vogler",
    date: "September 2025",
    href: "https://ryuvogler.ch/",
    logo: "/customer-logos/ryuvogler.png",
    focus: "Portfolio",
    text: "Persönlichkeit, Arbeit und Kontakt auf einer klaren Strecke.",
  },
  {
    name: "Anania",
    date: "August 2025",
    href: "https://anania.ch/",
    logo: "/customer-logos/anania.png",
    focus: "Klares Angebot",
    text: "Ein kompakter Auftritt, der Angebot und Anfrage verbindet.",
  },
];

function SiteNav() {
  return (
    <nav
      className="site-nav"
      aria-label="Hauptnavigation"
    >
      <a className="site-nav-brand" href="#top" aria-label="Wendico Startseite">
        Wendico
      </a>
      <div className="site-nav-links">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <a className="site-nav-cta" href="mailto:info@wendico.ch">
        Projekt starten
      </a>
    </nav>
  );
}

function HeroSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const layerScrollRefs = useRef<HTMLDivElement[]>([]);
  const layerMotionRefs = useRef<HTMLDivElement[]>([]);
  const foregroundRef = useRef<HTMLDivElement | null>(null);
  const fogRefs = useRef<HTMLDivElement[]>([]);
  const cloudRefs = useRef<HTMLDivElement[]>([]);

  const layers = useMemo(() => alpineLayers, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          layerScrollRefs.current,
          { y: 96, opacity: 0.08 },
          {
            y: 0,
            opacity: 1,
            duration: 1.45,
            stagger: { each: 0.07, from: "end" },
          },
        )
        .fromTo(
          foregroundRef.current,
          { opacity: 0.1 },
          { opacity: 1, duration: 1.25 },
          0.05,
        )
        .fromTo(
          fogRefs.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1.25, stagger: 0.1 },
          0.3,
        );

      layers.forEach((layer, index) => {
        gsap.to(layerScrollRefs.current[index], {
          yPercent: -layer.scroll,
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: () => window.innerHeight,
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });
      });

      titleRef.current?.style.setProperty("--hero-copy-scroll-y", "0px");
      ScrollTrigger.create({
        trigger: root,
        start: "top top",
        end: () => window.innerHeight,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (trigger) => {
          titleRef.current?.style.setProperty("--hero-copy-scroll-y", `${trigger.progress * 150}px`);
        },
        onRefresh: (trigger) => {
          titleRef.current?.style.setProperty("--hero-copy-scroll-y", window.scrollY <= 1 ? "0px" : `${trigger.progress * 150}px`);
        },
      });

      cloudRefs.current.forEach((cloud, index) => {
        gsap.to(cloud, {
          x: index % 2 === 0 ? 46 : -42,
          duration: 20 + index * 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      const setters = layerMotionRefs.current.map((layer) => ({
        x: gsap.quickTo(layer, "x", { duration: 0.9, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 0.9, ease: "power3.out" }),
      }));
      const foregroundX = foregroundRef.current
        ? gsap.quickTo(foregroundRef.current, "x", { duration: 0.9, ease: "power3.out" })
        : null;

      const syncForegroundScroll = () => {
        if (!foregroundRef.current) return;
        gsap.set(foregroundRef.current, { y: -window.scrollY });
      };

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = root.getBoundingClientRect();
        const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;

        setters.forEach((setter, index) => {
          const strength = layers[index].mouse;
          setter.x(normalizedX * strength * -2);
          setter.y(normalizedY * strength * -1.1);
        });
        foregroundX?.(normalizedX * -38);
      };

      const handlePointerLeave = () => {
        setters.forEach((setter) => {
          setter.x(0);
          setter.y(0);
        });
        foregroundX?.(0);
      };

      root.addEventListener("pointermove", handlePointerMove);
      root.addEventListener("pointerleave", handlePointerLeave);
      window.addEventListener("scroll", syncForegroundScroll, { passive: true });
      window.addEventListener("resize", syncForegroundScroll);
      syncForegroundScroll();

      return () => {
        root.removeEventListener("pointermove", handlePointerMove);
        root.removeEventListener("pointerleave", handlePointerLeave);
        window.removeEventListener("scroll", syncForegroundScroll);
        window.removeEventListener("resize", syncForegroundScroll);
      };
    }, root);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, [layers]);

  return (
    <section id="top" ref={rootRef} aria-label="Wendico Hero" className="swiss-keyart">
      <div className="swiss-sky" />
      <div
        className="swiss-cloud swiss-cloud-left"
        ref={(node) => {
          if (node) cloudRefs.current[0] = node;
        }}
      />
      <div
        className="swiss-cloud swiss-cloud-right"
        ref={(node) => {
          if (node) cloudRefs.current[1] = node;
        }}
      />
      <div className="swiss-valley-river" />

      <div className="swiss-alps" aria-hidden="true">
        {layers.map((layer, index) => (
          <div
            key={layer.name}
            ref={(node) => {
              if (node) layerScrollRefs.current[index] = node;
            }}
            className={`swiss-layer-scroll swiss-layer-scroll-${index + 1}`}
          >
            <div
              ref={(node) => {
                if (node) layerMotionRefs.current[index] = node;
              }}
              className={layer.className}
              style={{ clipPath: layer.clipPath }}
            >
              <div className="swiss-layer-light" />
            </div>
          </div>
        ))}
      </div>

      <div
        className="swiss-fog swiss-fog-back"
        ref={(node) => {
          if (node) fogRefs.current[0] = node;
        }}
      />
      <div
        className="swiss-fog swiss-fog-front"
        ref={(node) => {
          if (node) fogRefs.current[1] = node;
        }}
      />

      <div ref={foregroundRef} className="swiss-foreground" aria-hidden="true">
        <div className="swiss-left-cliff" />
        <div className="swiss-ground" />
        <div className="swiss-chalet">
          <div className="swiss-chalet-roof" />
          <div className="swiss-chalet-body" />
          <div className="swiss-window swiss-window-left" />
          <div className="swiss-window swiss-window-right" />
        </div>
        {treePositions.map((left, index) => (
          <div
            key={left}
            className={`swiss-pine swiss-pine-${(index % 5) + 1}`}
            style={{ left: `${left}%` }}
          />
        ))}
      </div>

      <div className="swiss-vignette" />

      <div className="swiss-copy" ref={titleRef}>
        <p>Schweizer Web & Software Agentur</p>
        <h1>Wendico</h1>
        <div className="swiss-rating">
          <span>★★★★★</span>
          <strong>5/5 Sterne auf Google</strong>
        </div>
        <div className="swiss-hero-actions">
          <a href="mailto:info@wendico.ch">Kostenloses Gespräch</a>
          <a href="#projekte">Vergangene Projekte</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      const cleanupCallbacks: Array<() => void> = [];

      gsap.utils.toArray<HTMLElement>(".home-reveal").forEach((element) => {
        const reveal = () => {
          if (element.dataset.revealed === "true") return;
          element.dataset.revealed = "true";

          const revealItems = element.querySelectorAll<HTMLElement>(
            ":scope > p, :scope > h2, :scope > span, :scope > a, .story-copy > *, .big-statement > *, .section-heading > *, .mission-copy > *, .restaurant-copy > *, .reservation-copy > *, .custom-code-section > div:last-child > *, .cta-actions > *",
          );
          const staticSurface = element.matches(".clarity-card, .restaurant-check, .reservation-card, .process-step, .project-card");
          const revealTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          if (staticSurface) {
            revealTimeline.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.45, clearProps: "opacity" });
          } else {
            revealTimeline.fromTo(element, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.56, clearProps: "transform,opacity" });
          }

          if (revealItems.length > 0) {
            revealTimeline.fromTo(
              revealItems,
              { y: 12, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.42, stagger: 0.04, clearProps: "transform,opacity" },
              0.06,
            );
          }
        };

        ScrollTrigger.create({
          trigger: element,
          start: "top 82%",
          once: true,
          onEnter: reveal,
          onRefresh: (trigger) => {
            if (trigger.start <= window.scrollY) reveal();
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".text-reveal-target").forEach((text) => {
        gsap.fromTo(
          text,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.58,
            ease: "power4.out",
            scrollTrigger: {
              trigger: text,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      const zoomSource = section.querySelector<HTMLElement>(".zoom-to-background");
      const zoomBackdrop = section.querySelector<HTMLElement>(".scroll-zoom-backdrop");

      if (zoomSource && zoomBackdrop) {
        const zoomImages = [zoomSource, zoomBackdrop]
          .map((element) => element.querySelector("img"))
          .filter((image): image is HTMLImageElement => Boolean(image));
        const zoomSection = zoomSource.closest<HTMLElement>(".zoom-story-section") ?? zoomSource;
        const storyCopy = zoomSection.querySelector<HTMLElement>(".story-copy");
        let zoomMetrics = { left: 0, top: 0, width: 1, height: 1 };
        let zoomAnchorTop = 0;
        let lastZoomProgress = -1;
        let settledBackdrop = false;
        let settledFrameApplied = false;
        const progressBetween = (progress: number, start: number, end: number) => gsap.utils.clamp(0, 1, (progress - start) / (end - start));
        const syncSettledImage = () => {
          const image = zoomSource.querySelector("img") ?? zoomBackdrop.querySelector("img");
          const source = image?.currentSrc || image?.src;
          if (source) section.style.setProperty("--zoom-settled-image", `url("${source}")`);
        };
        const setSettledBackdrop = (settled: boolean) => {
          if (settledBackdrop === settled) return;
          settledBackdrop = settled;
          if (!settled) settledFrameApplied = false;
          section.classList.toggle("zoom-background-settled", settled);
          gsap.set(zoomBackdrop, { willChange: settled ? "auto" : "transform, opacity" });
        };
        const applyZoomProgress = (progress: number) => {
          const roundedProgress = Math.round(progress * 1000) / 1000;
          if (roundedProgress === lastZoomProgress) return;
          lastZoomProgress = roundedProgress;

          if (progress <= 0.001) {
            setSettledBackdrop(false);
            section.style.setProperty("--zoom-page-bg-opacity", "0");
            section.style.setProperty("--zoom-settled-image-opacity", "0");
            section.style.setProperty("--zoom-source-dim-opacity", "0.2");
            gsap.set(zoomSource, { autoAlpha: 1, x: 0, y: 0, scale: 1, borderRadius: 0, transformOrigin: "center center", zIndex: "auto" });
            gsap.set(zoomBackdrop, { autoAlpha: 0, x: zoomMetrics.left, y: zoomMetrics.top, scale: 1, borderRadius: 0, transformOrigin: "top left" });
            if (storyCopy) gsap.set(storyCopy, { yPercent: 0, opacity: 1 });
            return;
          }

          const handoffProgress = gsap.parseEase("power3.out")(progressBetween(progress, 0, 0.025));
          const zoomProgress = gsap.parseEase("power1.inOut")(progressBetween(progress, 0.015, 0.88));
          const dimProgress = progressBetween(progress, 0.16, 0.88);
          const settledImageProgress = gsap.parseEase("power1.inOut")(progressBetween(progress, 0.8, 0.95));
          const liveFadeProgress = gsap.parseEase("power1.inOut")(progressBetween(progress, 0.84, 0.96));
          const copyProgress = progressBetween(progress, 0.08, 0.34);
          const targetScale = Math.max((window.innerWidth * 1.08) / zoomMetrics.width, (window.innerHeight * 1.08) / zoomMetrics.height);
          const finalLeft = (window.innerWidth - zoomMetrics.width * targetScale) / 2;
          const finalTop = (window.innerHeight - zoomMetrics.height * targetScale) / 2;
          const x = gsap.utils.interpolate(zoomMetrics.left, finalLeft, zoomProgress);
          const y = gsap.utils.interpolate(zoomMetrics.top, finalTop, zoomProgress);
          const scale = gsap.utils.interpolate(1, targetScale, zoomProgress);
          const sourceDimOpacity = gsap.utils.interpolate(0.2, 0.66, dimProgress);
          const liveOpacity = handoffProgress * (1 - liveFadeProgress);
          const shouldSettle = progress >= 0.96;

          setSettledBackdrop(shouldSettle);
          section.style.setProperty("--zoom-page-bg-opacity", shouldSettle ? "1" : dimProgress.toFixed(3));
          section.style.setProperty("--zoom-settled-image-opacity", shouldSettle ? "1" : settledImageProgress.toFixed(3));
          section.style.setProperty("--zoom-source-dim-opacity", shouldSettle ? "0.66" : sourceDimOpacity.toFixed(3));
          if (shouldSettle && settledFrameApplied) return;

          gsap.set(zoomSource, { autoAlpha: 1 - handoffProgress, x: 0, y: 0, scale: 1, borderRadius: 0, transformOrigin: "center center", zIndex: "auto" });
          if (!shouldSettle) {
            gsap.set(zoomBackdrop, { autoAlpha: liveOpacity, x, y, scale, borderRadius: 0, transformOrigin: "top left" });
          } else {
            gsap.set(zoomBackdrop, { autoAlpha: 0, x, y, scale, borderRadius: 0, transformOrigin: "top left" });
            settledFrameApplied = true;
          }
          if (storyCopy) {
            gsap.set(storyCopy, {
              yPercent: gsap.utils.interpolate(0, -12, copyProgress),
              opacity: 1 - copyProgress,
            });
          }
        };
        const measureZoom = () => {
          lastZoomProgress = -1;
          syncSettledImage();
          section.style.setProperty("--zoom-page-bg-opacity", "0");
          section.style.setProperty("--zoom-settled-image-opacity", "0");
          section.style.setProperty("--zoom-source-dim-opacity", "0.2");
          gsap.set(zoomSource, { scale: 1, x: 0, y: 0, autoAlpha: 1, borderRadius: 0, clearProps: "zIndex" });
          const bounds = zoomSource.getBoundingClientRect();
          const stickyTop = Number.parseFloat(getComputedStyle(zoomSource).top);
          zoomAnchorTop = Number.isFinite(stickyTop) ? stickyTop : Math.min(bounds.top, window.innerHeight * 0.22);
          zoomMetrics = {
            left: bounds.left,
            top: zoomAnchorTop,
            width: bounds.width,
            height: bounds.height,
          };
          gsap.set(zoomBackdrop, { width: bounds.width, height: bounds.height, autoAlpha: 0, x: bounds.left, y: bounds.top, scale: 1, clearProps: "scaleX,scaleY" });
          applyZoomProgress(0);
        };
        const handleZoomResize = () => {
          measureZoom();
          ScrollTrigger.update();
        };

        measureZoom();
        ScrollTrigger.create({
          trigger: zoomSource,
          start: () => `top ${zoomAnchorTop}px`,
          end: "+=155%",
          scrub: true,
          invalidateOnRefresh: true,
          onRefresh: (trigger) => {
            measureZoom();
            applyZoomProgress(trigger.progress);
          },
          onUpdate: (trigger) => applyZoomProgress(trigger.progress),
        });
        window.addEventListener("resize", handleZoomResize);
        cleanupCallbacks.push(() => {
          window.removeEventListener("resize", handleZoomResize);
          section.classList.remove("zoom-background-settled");
          section.style.removeProperty("--zoom-settled-image");
          section.style.removeProperty("--zoom-page-bg-opacity");
          section.style.removeProperty("--zoom-settled-image-opacity");
          section.style.removeProperty("--zoom-source-dim-opacity");
        });

        zoomImages.forEach((image) => {
          if (image.complete) return;
          image.addEventListener("load", () => {
            ScrollTrigger.refresh();
            handleZoomResize();
          }, { once: true });
        });
      }

      const media = gsap.matchMedia();
      media.add("(min-width: 981px)", () => {
        const projectSection = section.querySelector<HTMLElement>(".horizontal-projects-section");
        const projectShell = projectSection?.querySelector<HTMLElement>(".project-horizontal-shell");
        const projectTrack = projectSection?.querySelector<HTMLElement>(".project-grid");
        if (projectSection && projectShell && projectTrack) {
          let projectFrame = 0;
          const distance = () => Math.max(0, projectTrack.scrollWidth - projectShell.clientWidth);
          const renderProjectTrack = () => {
            projectFrame = 0;
            const projectDistance = distance();
            const scrollRange = Math.max(1, projectSection.offsetHeight - window.innerHeight);
            const progress = gsap.utils.clamp(0, 1, -projectSection.getBoundingClientRect().top / scrollRange);
            projectSection.style.setProperty("--project-scroll-distance", `${projectDistance}px`);
            gsap.set(projectTrack, { x: -projectDistance * progress });
          };
          const updateProjectTrack = () => {
            if (projectFrame) return;
            projectFrame = window.requestAnimationFrame(renderProjectTrack);
          };
          updateProjectTrack();
          window.addEventListener("scroll", updateProjectTrack, { passive: true });
          window.addEventListener("resize", updateProjectTrack);
          ScrollTrigger.addEventListener("refresh", updateProjectTrack);
          gsap.delayedCall(0.2, () => {
            updateProjectTrack();
            ScrollTrigger.refresh();
          });
          return () => {
            if (projectFrame) window.cancelAnimationFrame(projectFrame);
            window.removeEventListener("scroll", updateProjectTrack);
            window.removeEventListener("resize", updateProjectTrack);
            ScrollTrigger.removeEventListener("refresh", updateProjectTrack);
            gsap.set(projectTrack, { clearProps: "transform" });
            projectSection.style.removeProperty("--project-scroll-distance");
          };
        }
      });

      return () => {
        cleanupCallbacks.forEach((cleanup) => cleanup());
        media.revert();
      };
    }, section);

    ScrollTrigger.refresh();
    ScrollTrigger.update();

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-section" aria-labelledby="about-title">
      <div ref={spotlightRef} className="page-spotlight" aria-hidden="true" />
      <div className="about-content">
        <div className="about-copy">
          <h2 id="about-title">Digital. Emotional. Unvergesslich.</h2>
        </div>
        <div className="about-founder-image">
          <Image src={founderImage} alt="Mit und Tim, die Gründer von Wendico" />
        </div>
      </div>

      <div className="about-logo-band" aria-label="Wendico Kundenprojekte">
        <div className="swiss-logo-loop">
          <div className="swiss-logo-track">
            {customerLogos.map((logo) => (
              <div className="swiss-logo-item" key={logo.name}>
                <Image src={logo.src} alt={logo.name} width={180} height={104} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-zoom-backdrop" aria-hidden="true">
        <Image className="scroll-zoom-image" src={scrollZoomImage} alt="" fill sizes="100vw" priority />
      </div>

      <div className="home-sections">
        <section id="leistungen" className="story-hero zoom-story-section home-reveal" aria-labelledby="story-title">
          <div className="story-copy">
            <p>Was Wendico baut</p>
            <h2 id="story-title" className="text-reveal-target">Websites, die Gäste fühlen.</h2>
            <span>
              Nicht nur schön. Sondern so gestaltet, dass Besucher Appetit, Stimmung und den nächsten freien Tisch spüren.
            </span>
            <div className="story-actions">
              <a href="mailto:info@wendico.ch">Gratis Einschätzung holen</a>
              <a href="#projekte">Projekte ansehen</a>
            </div>
          </div>
          <div className="story-panel zoom-scroll-visual zoom-to-background" aria-hidden="true">
            <Image className="scroll-zoom-image" src={scrollZoomImage} alt="" fill sizes="(max-width: 980px) 100vw, 46vw" priority />
          </div>
        </section>

        <section className="clarity-section home-reveal" aria-labelledby="clarity-title">
          <div className="section-atmosphere mountain-code-atmosphere" aria-hidden="true">
            <i className="atmosphere-line atmosphere-line-one" />
            <i className="atmosphere-line atmosphere-line-two" />
            <span />
          </div>
          <div className="big-statement">
            <p>Emotion für Gäste. Einfach für Betriebe.</p>
            <h2 id="clarity-title" className="text-reveal-target">Schön reicht nicht.</h2>
          </div>
          <div className="clarity-grid">
            {clarityCards.map((card) => (
              <article className="clarity-card home-reveal" key={card.label}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="mission" className="mission-section sticky-story-section home-reveal" aria-labelledby="mission-title">
          <div className="mission-copy">
            <p>Unsere Mission</p>
            <h2 id="mission-title" className="text-reveal-target">Digital wieder klar.</h2>
            <span>
              Kein Fachchinesisch. Keine unnötige Komplexität. Nur ein Auftritt, der zu deinem Angebot passt.
            </span>
          </div>
          <div className="mission-alps" aria-hidden="true">
            <div className="alpine-ridge-line alpine-ridge-back" />
            <div className="alpine-ridge-line alpine-ridge-mid" />
            <div className="alpine-ridge-line alpine-ridge-front" />
            <div className="mission-light" />
          </div>
        </section>

        <section className="restaurant-section home-reveal" aria-labelledby="restaurant-title">
          <div className="section-atmosphere swiss-route-atmosphere" aria-hidden="true">
            <i className="atmosphere-line atmosphere-line-one" />
            <i className="atmosphere-line atmosphere-line-two" />
            <span />
          </div>
          <div className="restaurant-copy">
            <p>Für Restaurants</p>
            <h2 id="restaurant-title" className="text-reveal-target">Erst Hunger. Dann Reservation.</h2>
            <span>
              Eine Restaurant-Website muss mehr können als Menü und Öffnungszeiten zeigen. Sie soll Stimmung auslösen, Vertrauen schaffen und Gäste direkt zur Reservation führen.
            </span>
          </div>
          <div className="restaurant-checks">
            {restaurantSignals.map((signal) => (
              <div className="restaurant-check home-reveal" key={signal}>
                <span />
                <p>{signal}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reservation" className="reservation-system-section home-reveal" aria-labelledby="reservation-title">
          <div className="section-atmosphere reservation-flow-atmosphere" aria-hidden="true">
            <i className="atmosphere-line atmosphere-line-one" />
            <i className="atmosphere-line atmosphere-line-two" />
            <span />
          </div>
          <div className="reservation-copy">
            <p>Eigenes Reservationssystem</p>
            <h2 id="reservation-title" className="text-reveal-target">Reservieren ohne Reibung.</h2>
            <span>
              Wir haben ein eigenes Reservationssystem programmiert, das wir unseren Kunden zur Verfügung stellen. Es fügt sich in die Website ein und bleibt erweiterbar für alles, was dein Betrieb braucht.
            </span>
          </div>
          <div className="reservation-stage zoom-scroll-visual" aria-hidden="true">
            <div className="reservation-phone" style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}>
              <div className="reservation-phone-top" />
              <strong>Heute Abend</strong>
              <div className="reservation-slots">
                <span>18:30</span>
                <span>19:00</span>
                <span>19:30</span>
              </div>
              <div className="reservation-guests">
                <i />
                <i />
                <i />
                <i />
              </div>
              <b>Reservieren</b>
            </div>
          </div>
          <div className="reservation-feature-grid">
            {reservationFeatures.map((feature) => (
              <article className="reservation-card home-reveal" key={feature.label}>
                <span>{feature.label}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
          <div className="plugin-strip" aria-label="Mögliche Plugin Integrationen">
            {pluginItems.map((plugin) => (
              <span key={plugin}>{plugin}</span>
            ))}
          </div>
        </section>

        <section className="custom-code-section zoom-code-section home-reveal" aria-labelledby="custom-code-title">
          <div className="code-window zoom-scroll-visual" aria-hidden="true">
            <span className="code-pin code-pin-one" />
            <span className="code-pin code-pin-two" />
            <span className="code-pin code-pin-three" />
            <div className="code-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div>
            <p>Individuell entwickelt</p>
            <h2 id="custom-code-title" className="text-reveal-target">Keine Vorlage von der Stange.</h2>
            <span>
              Eigener Code macht deinen Auftritt schneller, freier und näher an deiner Marke.
            </span>
          </div>
        </section>

        <section className="process-section sticky-process-section home-reveal" aria-labelledby="process-title">
          <div className="section-atmosphere process-summit-atmosphere" aria-hidden="true">
            <i className="atmosphere-line atmosphere-line-one" />
            <i className="atmosphere-line atmosphere-line-two" />
            <span />
          </div>
          <div className="big-statement">
            <p>Der Weg</p>
            <h2 id="process-title" className="text-reveal-target">Drei Schritte. Ein klarer Auftritt.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((item) => (
              <article className="process-step home-reveal" key={item.step}>
                <strong>{item.step}</strong>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projekte" className="projects-section horizontal-projects-section home-reveal" aria-labelledby="projects-title">
          <div className="section-atmosphere laptop-grid-atmosphere" aria-hidden="true">
            <i className="atmosphere-line atmosphere-line-one" />
            <i className="atmosphere-line atmosphere-line-two" />
            <span />
          </div>
          <div className="project-pin-stage">
            <div className="section-heading section-heading-split">
              <div>
                <p>Aktuelle Websites</p>
                <h2 id="projects-title" className="text-reveal-target">Neue Websites. Klar gebaut.</h2>
              </div>
              <span>Kurz erfassen, was gebaut wurde und warum es wirkt.</span>
            </div>
            <div className="project-horizontal-shell">
              <div className="project-grid">
                {latestProjects.map((project) => (
                  <a className="project-card home-reveal" href={project.href} key={project.name} target="_blank" rel="noreferrer">
                    <div className="project-preview zoom-scroll-visual">
                      <div className="project-sky" />
                      <Image src={project.logo} alt={project.name} width={220} height={130} />
                      <span>{project.focus}</span>
                    </div>
                    <div className="project-meta">
                      <span>{project.date}</span>
                      <h3>{project.name}</h3>
                      <p>{project.text}</p>
                      <strong>Website ansehen</strong>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section home-reveal" aria-labelledby="cta-title">
          <div className="section-atmosphere signal-atmosphere" aria-hidden="true">
            <i className="atmosphere-line atmosphere-line-one" />
            <i className="atmosphere-line atmosphere-line-two" />
            <span />
          </div>
          <p>Bereit für einen Auftritt mit eigener Handschrift?</p>
          <h2 id="cta-title" className="text-reveal-target">Dein Ziel. Unsere klare Empfehlung.</h2>
          <div className="cta-actions">
            <a href="mailto:info@wendico.ch">Projekt starten</a>
            <a href="tel:+41795041005">Anrufen</a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <HeroSection />
      <AboutSection />
    </>
  );
}
