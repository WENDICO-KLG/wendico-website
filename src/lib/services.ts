export type ServiceCard = { title: string; text: string };
export type ServicePrice = { name: string; price: string; unit: string; pricePrefix?: string; intro: string; badge?: string; items: string[] };

export type ServiceContent = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  faq: { q: string; a: string }[];
  keywords: string[];
  h1: [string, string, string];
  lead: string;
  cardLabel: string;
  cardTitle: string;
  cardText: string;
  cardPoints: string[];
  heroAlt: string;
  overviewLabel: string;
  overviewTitle: string;
  offerings: ServiceCard[];
  pricing: {
    title: string;
    description: string;
    packages: ServicePrice[];
    note: string;
    training?: { title: string; description: string; topics: string[]; delivery: string[]; priceText: string };
  };
  audiences?: { label: string; title: string; text: string; points: string[] }[];
  processTitle: string;
  processText: string;
  steps: ServiceCard[];
  related: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const serviceLastModified = "2026-11-14";

export const serviceOrder = ["websites", "software", "social-media", "ai-solutions", "umsatzsystem"] as const;

export const services: Record<string, ServiceContent> = {
  websites: {
    slug: "websites",
    navLabel: "Websites",
    eyebrow: "Websites",
    metaTitle: "Webdesign und Websites für Unternehmen in der Schweiz",
    metaDescription: "Wendico plant und entwickelt responsive Unternehmenswebsites in der Schweiz, die Vertrauen schaffen, bei Google gefunden werden und Besucher zu Kunden führen.",
    summary: "Individuelle Websites, die Unternehmen professionell präsentieren und Besucher in Kunden verwandeln.",
    faq: [
      { q: "Arbeitet ihr mit Vorlagen oder Baukästen?", a: "Nein. Wir entwickeln einen individuellen Auftritt, der auf deine Marke und Geschäftsziele abgestimmt ist." },
      { q: "Könnt ihr Buchungssysteme und andere Tools integrieren?", a: "Ja. Je nach Anforderungen binden wir Buchungssysteme, Formulare und externe Tools ein. Umfangreiche Schnittstellen planen wir im Premium-Paket." },
      { q: "Sind Hosting und Wartung enthalten?", a: "Hosting und laufende Wartung sind nicht automatisch Teil des Projektpreises. Den passenden Betrieb und Support stimmen wir separat mit dir ab." },
    ],
    keywords: ["Website erstellen lassen Schweiz", "Unternehmenswebsite", "Webdesign für Unternehmen", "Webdesign Schweiz", "responsive Website", "SEO Website"],
    h1: ["Websites für Unternehmen, die ", "überzeugen", "."],
    lead: "Wir konzipieren und entwickeln individuelle Websites, die dein Unternehmen professionell präsentieren, Vertrauen aufbauen und Besucher in Kunden verwandeln. Von der strategischen Planung bis zur technischen Umsetzung stimmen wir den Auftritt auf deine Marke und Geschäftsziele ab.",
    cardLabel: "Strategie, Design und Entwicklung",
    cardTitle: "Ein digitaler Auftritt mit klarer Aufgabe",
    cardText: "Wir verbinden Markenauftritt und Nutzerführung zu einer Website, die informiert, überzeugt und den nächsten Schritt erleichtert.",
    cardPoints: ["Responsiv und performant", "Suchmaschinenoptimiert", "Funktionen nach Bedarf integrierbar"],
    heroAlt: "Individuelle Unternehmenswebsite auf Laptop und Smartphone",
    overviewLabel: "Was du bekommst",
    overviewTitle: "Von der strategischen Planung bis zum überzeugenden Auftritt.",
    offerings: [
      { title: "Strategie und Inhalte", text: "Wir klären Zielgruppe, Positionierung und Geschäftsziele. Daraus entstehen eine passende Seitenstruktur und Inhalte, die dein Angebot verständlich machen und Vertrauen schaffen." },
      { title: "Individuelles Webdesign", text: "Gestaltung und Bildsprache orientieren sich an deiner Marke und führen Besucher klar durch das Angebot. Professional und Premium bieten zusätzlichen Raum für Animationen und visuelle Elemente." },
      { title: "Technische Umsetzung", text: "Wir entwickeln eine responsive und performante Website und prüfen Darstellung, Bedienbarkeit und Ladeverhalten auf Smartphone, Tablet und Desktop." },
      { title: "SEO, GEO und Integrationen", text: "Saubere technische SEO-Grundlagen gehören dazu. Je nach Paket ergänzen wir erweiterte SEO- und GEO-Optimierung, Buchungssysteme, Formulare und individuelle Schnittstellen." },
    ],
    pricing: {
      title: "Das passende Website-Paket für dein Vorhaben.",
      description: "Alle Pakete umfassen die technische Umsetzung und Mobile-Optimierung. Wähle den Umfang nach Seitenzahl, Gestaltung und benötigten Funktionen.",
      packages: [
        { name: "Starter", price: "1'500–3'500", unit: "Projektpreis", intro: "Ein schlanker, professioneller Auftritt für Unternehmen mit einem klaren Angebot.", items: ["Sehr kleine Website mit bis zu 3 Seiten", "Schlankes, professionelles Design", "Mobile-Optimierung und Kontaktmöglichkeiten", "Basis-SEO", "Keine komplexen Animationen oder individuellen Funktionen"] },
        { name: "Professional", price: "2'750–4'750", unit: "Projektpreis", intro: "Mehr Raum für dein Angebot und gezielte Conversion-Optimierung.", badge: "Empfohlen", items: ["Bis zu 8 Seiten", "Individuelles Webdesign und Mobile-Optimierung", "Erweiterte SEO-Grundlagen", "Animationen und moderne visuelle Elemente", "Kontaktformulare und Conversion-Optimierung", "Integration einfacher externer Tools"] },
        { name: "Premium", price: "4'500–8'500", unit: "Projektpreis", intro: "Ein umfangreicher individueller Auftritt mit zusätzlichen Funktionen und Integrationen.", items: ["Umfangreiche Website mit individuellem Premium-Design", "Komplexere Animationen und Interaktionen", "Erweiterte SEO- und GEO-Optimierung", "Mehrsprachigkeit", "Individuelle Funktionen, Schnittstellen und Buchungssysteme", "Erweiterte Conversion-Optimierung"] },
      ],
      note: "Die effektiven Kosten richten sich nach Umfang, Anforderungen und individuellen Projektzielen.",
    },
    processTitle: "Von der ersten Idee bis zum fertigen Auftritt.",
    processText: "Wir entwickeln deine Website in klaren Schritten und stimmen Konzept, Gestaltung und Umsetzung mit dir ab.",
    steps: [
      { title: "Verstehen", text: "Wir klären Ziele, Zielgruppe, Angebot und Anforderungen an die Website." },
      { title: "Konzipieren", text: "Seitenstruktur, Inhalte und Gestaltung werden auf deine Marke und Geschäftsziele ausgerichtet." },
      { title: "Umsetzen", text: "Wir entwickeln, testen und veröffentlichen den responsiven Webauftritt." },
    ],
    related: ["software", "social-media", "umsatzsystem"],
    ctaTitle: "Mach deine Website zum überzeugenden ersten Kontakt.",
    ctaText: "Wir besprechen deine Marke, Geschäftsziele und den passenden Umfang. Danach weisst du, welches Paket dein Vorhaben am besten abdeckt.",
    ctaButton: "Website-Projekt anfragen",
  },
  software: {
    slug: "software",
    navLabel: "Software",
    eyebrow: "Softwareentwicklung",
    metaTitle: "Individuelle Softwareentwicklung in der Schweiz",
    metaDescription: "Wendico entwickelt Web-Apps, Kundenportale, Verwaltungssysteme und SaaS-Lösungen in der Schweiz, die Prozesse vereinfachen und manuelle Arbeit reduzieren.",
    summary: "Web-Apps und Software, die Prozesse vereinfachen und manuelle Arbeit reduzieren.",
    faq: [
      { q: "Für wen lohnt sich individuelle Software?", a: "Wenn Standardtools nicht zu deinen Abläufen passen, Daten doppelt erfasst werden oder wichtige Arbeitsschritte manuell bleiben." },
      { q: "Wie läuft die Entwicklung ab?", a: "Wir klären Anforderungen, priorisieren den grössten Nutzen und setzen die Lösung schrittweise um. So kannst du Funktionen früh prüfen und gezielt erweitern." },
      { q: "Könnt ihr bestehende Tools anbinden?", a: "Ja. Wir integrieren externe Systeme über APIs und stimmen Datenflüsse, Zugriffsrechte und technische Anforderungen vor der Umsetzung ab." },
    ],
    keywords: ["individuelle Software Schweiz", "Web-App entwickeln lassen", "Softwareentwicklung Schweiz", "SaaS Entwicklung", "API Integration", "Kundenportal entwickeln"],
    h1: ["Software, die deine Prozesse ", "vereinfacht", "."],
    lead: "Wir entwickeln individuelle Software, die Geschäftsprozesse vereinfacht, manuelle Arbeit reduziert und neue digitale Möglichkeiten schafft. Von webbasierten Anwendungen und Kundenportalen bis zu Verwaltungssystemen und SaaS-Plattformen setzen wir Lösungen um, die auf die Anforderungen deines Unternehmens abgestimmt sind.",
    cardLabel: "Individuelle Entwicklung",
    cardTitle: "Digitale Werkzeuge für echte Abläufe",
    cardText: "Durchdachtes UI/UX, Datenbanken, APIs und skalierbare Architektur machen aus manuellen Prozessen verlässliche Anwendungen.",
    cardPoints: ["Web-Apps, Portale und SaaS", "Datenbanken und Geschäftslogik", "APIs und Systemintegrationen"],
    heroAlt: "Individuelle Web-Anwendung mit Datenbank- und Schnittstellenübersicht",
    overviewLabel: "Was wir entwickeln",
    overviewTitle: "Software, abgestimmt auf deine Prozesse.",
    offerings: [
      { title: "Web-Apps und Kundenportale", text: "Browserbasierte Anwendungen für Kunden, Mitarbeitende oder Partner: von Buchungs- und Anfrageabläufen bis zu internen Verwaltungssystemen." },
      { title: "Datenbanken und Geschäftslogik", text: "Datenmodelle, Benutzerkonten und Rollen bilden deine Abläufe sauber ab. Ein modernes responsives UI/UX macht zentrale Funktionen auf jedem Gerät zugänglich." },
      { title: "APIs und Integrationen", text: "Wir verbinden bestehende Systeme und Datenquellen, reduzieren doppelte Erfassung und automatisieren wiederkehrende Schritte." },
      { title: "SaaS und skalierbare Architektur", text: "Für umfangreichere Vorhaben planen wir Module und Architektur so, dass sich Funktionen, Nutzergruppen und Integrationen schrittweise erweitern lassen." },
    ],
    pricing: {
      title: "Softwarepakete für unterschiedliche Anforderungen.",
      description: "Vom fokussierten MVP bis zur modularen Unternehmenslösung. Der endgültige Umfang wird anhand der Anforderungen festgelegt.",
      packages: [
        { name: "Starter", price: "3'500–5'500", unit: "Projektpreis", intro: "Eine kleine Web-Applikation für einen klar definierten Prozess.", items: ["Grundlegende Funktionen und Geschäftslogik", "Einfache Benutzeroberfläche", "Datenbankanbindung", "Basis-Benutzerverwaltung", "Responsives Design und technische Bereitstellung"] },
        { name: "Professional", price: "5'500–9'500", unit: "Projektpreis", intro: "Eine individuelle Anwendung mit erweiterten Abläufen und Integrationen.", badge: "Empfohlen", items: ["Erweiterte Benutzerverwaltung und Rollen", "Datenbank- und API-Anbindungen", "Individuelle Geschäftslogik", "Automatisierte Prozesse", "UI/UX-Design und externe Systemintegration"] },
        { name: "Enterprise", price: "14'000–25'000+", unit: "Projektpreis", intro: "Eine umfangreiche Lösung mit mehreren Modulen und skalierbarer Architektur.", items: ["Mehrere Module und Funktionsebenen", "Individuelle Schnittstellen und Integrationen", "Komplexe Berechtigungen und Datenverarbeitung", "Skalierbare Systemarchitektur", "Technische Beratung und Projektbegleitung"] },
      ],
      note: "Die effektiven Kosten richten sich nach Umfang, Anforderungen und individuellen Projektzielen. Softwareprojekte werden anhand des konkreten Funktionsumfangs kalkuliert.",
    },
    processTitle: "Schlank starten, gezielt erweitern.",
    processText: "Wir priorisieren Funktionen nach Nutzen und setzen die Lösung in überprüfbaren Entwicklungsschritten um.",
    steps: [
      { title: "Analysieren", text: "Wir verstehen Abläufe, Nutzergruppen und technische Anforderungen." },
      { title: "Entwickeln", text: "Wir setzen priorisierte Funktionen um und prüfen sie gemeinsam mit dir." },
      { title: "Einführen", text: "Wir stellen die Software bereit, dokumentieren die Lösung und planen sinnvolle Erweiterungen." },
    ],
    related: ["ai-solutions", "websites", "umsatzsystem"],
    ctaTitle: "Machen wir aus deinem Prozess eine passende Softwarelösung.",
    ctaText: "Erzähl uns, was heute Zeit kostet oder nicht zusammenpasst. Wir besprechen Anforderungen, einen sinnvollen ersten Umfang und die nächsten Schritte.",
    ctaButton: "Projekt anfragen",
  },
  "social-media": {
    slug: "social-media",
    navLabel: "Social Media",
    eyebrow: "Social Media",
    metaTitle: "Social Media Management in der Schweiz",
    metaDescription: "Wendico übernimmt Social Media Management in der Schweiz: Content-Strategie, Beiträge, Reels, Stories und laufende Performance-Auswertung.",
    summary: "Strategie, Inhalte und Betreuung für einen konsistenten Social-Media-Auftritt.",
    faq: [
      { q: "Auf welchen Plattformen seid ihr aktiv?", a: "Wir betreuen Instagram, TikTok und Facebook. Welche Kanäle sinnvoll sind, legen wir anhand deiner Zielgruppe und Ziele fest." },
      { q: "Muss ich selbst Inhalte liefern?", a: "Wir stimmen Themen und nötige Informationen mit dir ab. Grössere Foto- und Videoproduktionen vor Ort sind nicht automatisch enthalten." },
      { q: "Was beeinflusst den monatlichen Umfang?", a: "Die Plattformen, die Content-Produktion und der gewünschte Betreuungsumfang beeinflussen den effektiven Monatspreis." },
    ],
    keywords: ["Social Media Management Schweiz", "Instagram Betreuung", "Social Media Agentur", "Content Planung", "TikTok Content", "Reels Produktion"],
    h1: ["Social Media mit klarer ", "Strategie", "."],
    lead: "Wir übernehmen den strategischen Aufbau und die Betreuung deiner Social-Media-Kanäle. Mit durchdachter Content-Planung, hochwertigen visuellen Inhalten und gezielten Beiträgen stärken wir deine Markenpräsenz, erhöhen die Reichweite und schaffen eine nachhaltige Verbindung zu deiner Zielgruppe.",
    cardLabel: "Strategie und Betreuung",
    cardTitle: "Inhalte mit Plan und Wiedererkennung",
    cardText: "Von der Content-Planung bis zur Analyse sorgen wir für einen professionellen, konsistenten Auftritt auf den vereinbarten Kanälen.",
    cardPoints: ["Strategie und Redaktionsplan", "Beiträge, Reels und Stories", "Veröffentlichung und Analyse"],
    heroAlt: "Social-Media-Inhalte und Redaktionsplanung auf einem Smartphone",
    overviewLabel: "Was wir übernehmen",
    overviewTitle: "Ein konsistenter Auftritt, geplant und betreut.",
    offerings: [
      { title: "Content-Strategie", text: "Wir definieren Ziele, Zielgruppe, Themen und Tonalität. Ein monatlicher Redaktionsplan sorgt dafür, dass Inhalte rechtzeitig vorbereitet und abgestimmt sind." },
      { title: "Beiträge und Reels", text: "Wir gestalten Beiträge, Kurzvideos und Story-Content in einem konsistenten Markenauftritt. Umfang und Formate richten sich nach dem gewählten Betreuungspaket." },
      { title: "Veröffentlichung und Community", text: "Wir veröffentlichen Inhalte auf den vereinbarten Plattformen und übernehmen je nach Paket auch Community-Management und laufende Optimierungen." },
      { title: "Performance-Analyse", text: "Monatliche Kennzahlen zeigen, welche Inhalte Reichweite und Interaktion schaffen. Daraus leiten wir konkrete Anpassungen für den nächsten Plan ab." },
    ],
    pricing: {
      title: "Monatliche Betreuung für deine Social-Media-Kanäle.",
      description: "Wähle den Umfang, der zu deinen Plattformen, Inhalten und Betreuungszielen passt.",
      packages: [
        { name: "Starter", price: "150", unit: "pro Monat", pricePrefix: "Startet ab", intro: "Für einen gepflegten und einheitlichen Auftritt.", items: ["4 Beiträge pro Monat", "Grundlegende Content-Planung", "Gestaltung der Beiträge", "Profiloptimierung", "Einheitlicher Markenauftritt"] },
        { name: "Professional", price: "450", unit: "pro Monat", pricePrefix: "Startet ab", intro: "Für regelmässige Inhalte und mehr Formate.", badge: "Empfohlen", items: ["8 Beiträge pro Monat", "4 Reels pro Monat", "Story-Content", "Monatlicher Redaktionsplan", "Content-Strategie und Profiloptimierung"] },
        { name: "Premium", price: "950", unit: "pro Monat", pricePrefix: "Startet ab", intro: "Für umfassende Betreuung und laufende Optimierung.", items: ["12 Beiträge pro Monat", "8 Reels pro Monat", "Regelmässiger Story-Content", "Umfassende Content-Strategie", "Community-Management", "Monatliche Performance-Analyse"] },
      ],
      note: "Die effektiven Kosten richten sich nach Umfang, Anforderungen und individuellen Projektzielen. Bei Social Media hängen die monatlichen Kosten von Plattformen, Content-Produktion und Betreuungsumfang ab. Werbebudgets und grössere Foto- und Videoproduktionen sind nicht automatisch enthalten.",
    },
    processTitle: "Von der Strategie bis zur Auswertung.",
    processText: "Ein abgestimmter Ablauf hält Themen, Produktion und Veröffentlichung übersichtlich.",
    steps: [
      { title: "Ausrichten", text: "Wir legen Zielgruppe, Ziele, Themen und Tonalität fest." },
      { title: "Planen und erstellen", text: "Wir planen Beiträge, Reels und Stories und stimmen Inhalte mit dir ab." },
      { title: "Veröffentlichen", text: "Wir betreuen die vereinbarten Kanäle und werten die Ergebnisse regelmässig aus." },
    ],
    related: ["websites", "umsatzsystem", "ai-solutions"],
    ctaTitle: "Lass uns deinen Social-Media-Auftritt stärken.",
    ctaText: "Wir besprechen deine Kanäle, Ziele und den passenden Betreuungsumfang. Du erhältst eine klare Empfehlung für den Start.",
    ctaButton: "Beratung vereinbaren",
  },
  "ai-solutions": {
    slug: "ai-solutions",
    navLabel: "KI-Lösungen",
    eyebrow: "KI-Lösungen",
    metaTitle: "KI-Integration und Automatisierung in der Schweiz",
    metaDescription: "Wendico integriert KI in Schweizer Unternehmen: Chatbots, KI-Assistenten, Automatisierungen und individuelle Workflows für effizientere Prozesse.",
    summary: "KI-Integration, Assistenten und Automatisierungen für effizientere Unternehmensprozesse.",
    faq: [
      { q: "Brauchen wir Vorkenntnisse in KI?", a: "Nein. Wir planen die Lösung passend zu euren Abläufen und begleiten die Einführung. Für Schulungen stimmen wir Inhalte und Niveau auf das Team ab." },
      { q: "Könnt ihr bestehende Systeme anbinden?", a: "Ja, sofern die Systeme passende Schnittstellen bereitstellen. Datenzugriffe, technische Grenzen und Anforderungen klären wir vor der Umsetzung." },
      { q: "Wie wird die Qualität der Ergebnisse geprüft?", a: "Wir testen typische und schwierige Fälle, definieren bei Bedarf menschliche Prüfschritte und dokumentieren den Ablauf." },
    ],
    keywords: ["KI Integration Schweiz", "KI Beratung Thalheim an der Thur", "KI Beratung Winterthur", "KI Beratung Zürich", "ChatGPT Integration Schweiz", "KI Automatisierung Unternehmen", "KI Chatbot Schweiz", "KI Workshop Unternehmen"],
    h1: ["KI, die deine Arbeit ", "vereinfacht", "."],
    lead: "Wir integrieren künstliche Intelligenz gezielt in Unternehmensprozesse, um Arbeitsabläufe zu automatisieren, Kosten zu reduzieren und Mitarbeitende zu entlasten. Von Chatbots und KI-Assistenten bis zu individuellen Anwendungen verbinden wir bestehende Systeme und Datenquellen zu praxistauglichen Prozessen.",
    cardLabel: "KI-Integration und Automatisierung",
    cardTitle: "KI, die Prozesse voranbringt",
    cardText: "Wir identifizieren geeignete Abläufe, integrieren passende KI-Technologien und begleiten die Einführung im Team.",
    cardPoints: ["Chatbots und KI-Assistenten", "Workflows und Automatisierungen", "Integration in bestehende Systeme"],
    heroAlt: "KI-Workflow mit verbundenen Unternehmenssystemen",
    overviewLabel: "Was wir umsetzen",
    overviewTitle: "KI dort einsetzen, wo sie Arbeit abnimmt.",
    offerings: [
      { title: "KI-Assistenten und Chatbots", text: "Wir richten intelligente Assistenten ein, die häufige Fragen beantworten, Informationen auffindbar machen oder Anfragen vorsortieren. Antworten und Eskalationen werden passend zu deinen Abläufen definiert." },
      { title: "Automatisierte KI-Workflows", text: "Wir verbinden KI mit Aufgaben wie Dokumentenverarbeitung, E-Mail-Vorsortierung oder Datenübertragung. Mitarbeitende behalten dort die Kontrolle, wo eine Prüfung nötig ist." },
      { title: "Systeme und Daten verbinden", text: "Über APIs binden wir bestehende Tools und Datenquellen an. Zugriffsrechte, Datenflüsse und technische Grenzen klären wir vor der Umsetzung." },
      { title: "Einführung und Qualitätssicherung", text: "Wir testen typische und schwierige Fälle, dokumentieren den Ablauf und zeigen deinem Team, wie Ergebnisse geprüft und verbessert werden." },
    ],
    pricing: {
      title: "KI-Implementierung, passend zu deinen Prozessen.",
      description: "Von einer ersten Integration bis zu mehreren verbundenen Automatisierungen. Die Preisklasse richtet sich nach Systemen, Daten und Prozessumfang.",
      packages: [
        { name: "AI Starter", price: "990–2'990", unit: "Projektpreis", intro: "Eine gezielte KI-Funktion für einen klar umrissenen Anwendungsfall.", items: ["Einfache KI-Integration", "FAQ-Chatbot oder KI-E-Mail-Assistent", "Anbindung an bestehende Systeme, sofern möglich", "Einrichtung, Funktionstest und Übergabe"] },
        { name: "AI Professional", price: "2'990–5'990", unit: "Projektpreis", intro: "Verbundene Workflows für mehrere Schritte eines Prozesses.", badge: "Empfohlen", items: ["Individuelle KI-Workflows", "Mehrere verbundene Automatisierungen", "API- und Systemanbindungen", "Individuelle Prozessoptimierung", "Erweiterte Konfiguration und Tests"] },
        { name: "AI Enterprise", price: "7'990–15'000+", unit: "Projektpreis", intro: "Komplexe KI-Systeme mit individuellen Integrationen.", items: ["Individuelle KI-Agenten und Datenverarbeitung", "Mehrere Automatisierungsprozesse", "Umfangreiche Systemintegrationen", "Erweiterte KI-Architektur", "Technische Beratung und Projektbegleitung"] },
      ],
      note: "Die effektiven Kosten richten sich nach Umfang, Anforderungen und individuellen Projektzielen. Lizenzen, API-Nutzung und externe Dienste können zusätzliche Kosten verursachen.",
      training: {
        title: "KI-Schulungen und Workshops",
        description: "Praxisnahe Schulungen für Einzelpersonen, Teams und Unternehmen. Inhalte und Übungen richten sich nach Wissensstand, Arbeitsalltag und konkreten Anwendungsfällen.",
        topics: ["Einführung in künstliche Intelligenz", "ChatGPT und andere KI-Tools effektiv nutzen", "Prompt Engineering", "KI im Büro- und Arbeitsalltag", "Automatisierung und individuelle Workflows", "Chancen, Grenzen und verantwortungsvoller Einsatz"],
        delivery: ["Online oder vor Ort", "Für Einzelpersonen, Teams oder Unternehmen", "Individuell auf Wissensstand und Bedarf abgestimmt", "Mit praxisorientierten Übungen und konkreten Beispielen"],
        priceText: "Individuelle Offerte",
      },
    },
    audiences: [
      { label: "Für Unternehmen", title: "KI in bestehende Abläufe integrieren", text: "Wir finden Aufgaben mit Automatisierungspotenzial und setzen passende Workflows, Systemintegrationen oder Team-Schulungen um.", points: ["Prozessanalyse und Priorisierung", "Integration und Qualitätssicherung", "Einführung und Team-Unterstützung"] },
      { label: "Für Teams", title: "KI sicher und wirksam einsetzen", text: "Schulungen und Workshops orientieren sich am Wissensstand und an konkreten Aufgaben aus dem Arbeitsalltag.", points: ["Praxisorientierte Übungen", "Verantwortungsvoller Einsatz", "Individuell abgestimmte Inhalte"] },
    ],
    processTitle: "Von der Prozessfrage zur passenden KI-Lösung.",
    processText: "Wir beginnen mit der Aufgabe und prüfen, wo KI einen konkreten und verantwortbaren Nutzen bringt.",
    steps: [
      { title: "Analysieren", text: "Wir klären Ziele, Abläufe, Systeme und Anforderungen an Daten und Zugriff." },
      { title: "Umsetzen", text: "Wir integrieren die Lösung, testen Ergebnisse und definieren nötige Prüfschritte." },
      { title: "Einführen", text: "Wir dokumentieren den Ablauf und unterstützen dein Team beim produktiven Einsatz." },
    ],
    related: ["software", "websites", "social-media"],
    ctaTitle: "Finde den passenden KI-Einsatz für dein Unternehmen.",
    ctaText: "Wir prüfen gemeinsam, welche Prozesse sich eignen, welche Systeme eingebunden werden müssen und wie ein sinnvoller erster Schritt aussieht.",
    ctaButton: "KI-Beratung anfragen",
  },
  umsatzsystem: {
    slug: "umsatzsystem",
    navLabel: "Umsatzsysteme",
    eyebrow: "Umsatzsysteme",
    metaTitle: "Digitale Umsatzsysteme für Unternehmen in der Schweiz",
    metaDescription: "Wendico verbindet Landingpages, CRM, Follow-ups und Conversion-Optimierung zu digitalen Umsatzsystemen für Unternehmen in der Schweiz.",
    summary: "Marketing- und Vertriebskanäle verbinden und Interessenten systematisch zu Kunden entwickeln.",
    faq: [
      { q: "Was ist ein Umsatzsystem?", a: "Ein digitaler Prozess, der Marketing und Vertrieb verbindet: von der ersten Aufmerksamkeit über Anfrage und Follow-up bis zum Verkaufsabschluss und zur langfristigen Kundenbindung." },
      { q: "Muss ich mein CRM oder Buchungssystem wechseln?", a: "Nicht zwingend. Wir prüfen, ob sich deine bestehenden Systeme integrieren lassen, und berücksichtigen sie bei der Planung." },
      { q: "Wie wird der Erfolg gemessen?", a: "Wir legen relevante Schritte und Conversions fest und richten das Tracking passend zu deinen Systemen und Zielen ein." },
    ],
    keywords: ["Umsatzsystem Schweiz", "Sales Funnel erstellen", "CRM Integration Schweiz", "Conversion Optimierung", "Marketing Automatisierung", "Lead Management"],
    h1: ["Mach aus mehr Interesse mehr ", "Umsatz", "."],
    lead: "Wir verbinden Marketing und Vertrieb zu einem strukturierten digitalen Prozess. Von Landingpage und Anfrage über CRM, Buchung und automatisierte Follow-ups bis zur Conversion-Analyse wird jeder Schritt auf die Kundengewinnung und langfristige Kundenbindung ausgerichtet.",
    cardLabel: "Marketing und Vertrieb verbunden",
    cardTitle: "Vom ersten Kontakt zum Abschluss",
    cardText: "Landingpages, CRM und Automatisierungen greifen ineinander und machen Interessenten systematisch zu Kunden.",
    cardPoints: ["Landingpages und Sales-Funnels", "CRM und automatisierte Follow-ups", "Messbare Conversion-Optimierung"],
    heroAlt: "Digitaler Sales-Funnel mit Landingpage, CRM und automatisierten Follow-ups",
    overviewLabel: "Was wir verbinden",
    overviewTitle: "Ein durchgängiger Prozess statt einzelner Marketingmassnahmen.",
    offerings: [
      { title: "Landingpages und Sales-Funnels", text: "Wir führen Interessenten mit einer klaren Botschaft und passenden nächsten Schritten vom ersten Kontakt bis zur Anfrage oder Buchung." },
      { title: "CRM und Lead-Verwaltung", text: "Anfragen werden zentral erfasst, zugeordnet und nachverfolgt. Dein Team sieht, wo jeder Kontakt im Verkaufsprozess steht." },
      { title: "Follow-ups und E-Mail-Marketing", text: "Automatisierte E-Mails und Erinnerungen halten den Kontakt, beantworten typische Fragen und unterstützen die nächsten Schritte." },
      { title: "Buchung, Tracking und Optimierung", text: "Wir verbinden Termin- oder Buchungssysteme, messen wichtige Conversions und verbessern den Prozess anhand nachvollziehbarer Daten." },
    ],
    pricing: {
      title: "Umsatzsysteme für jeden Ausbaustand.",
      description: "Von der Conversion-Landingpage bis zum integrierten Sales-Funnel mit CRM und Automatisierungen.",
      packages: [
        { name: "Starter", price: "990–2'990", unit: "Projektpreis", intro: "Ein klarer Weg von der Landingpage bis zur qualifizierten Anfrage.", items: ["Conversion-optimierte Landingpage", "Kontakt- und Lead-Erfassung", "Einfache Automatisierung", "Grundlegendes Tracking", "Optimierung des Anfrageprozesses"] },
        { name: "Professional", price: "2'990–5'990", unit: "Projektpreis", intro: "Ein verbundener Prozess für Leads, Follow-ups und Vertrieb.", badge: "Empfohlen", items: ["Conversion-Landingpage", "CRM-Integration und Lead-Verwaltung", "Automatisierte Follow-ups", "E-Mail-Marketing-System", "Tracking und Conversion-Analyse"] },
        { name: "Premium", price: "6'990–12'000+", unit: "Projektpreis", intro: "Ein umfassendes System mit Funnel, CRM und Automatisierungen.", items: ["Individueller Sales-Funnel", "CRM-System und Integrationen", "Buchungs- und Terminsysteme", "E-Mail- und Follow-up-Automatisierung", "Reporting und individuelle Conversion-Optimierung"] },
      ],
      note: "Die effektiven Kosten richten sich nach Umfang, Anforderungen und individuellen Projektzielen. Werbebudget und Gebühren externer Systeme werden separat berechnet.",
    },
    processTitle: "Vom ersten Kontakt bis zum Verkaufsabschluss.",
    processText: "Wir verbinden die passenden Kanäle und Systeme zu einem nachvollziehbaren Ablauf für dein Team und deine Kunden.",
    steps: [
      { title: "Analysieren", text: "Wir prüfen Kundengewinnung, Verkaufsprozess und vorhandene Systeme." },
      { title: "Verbinden", text: "Landingpage, CRM, Follow-ups und Buchung werden aufeinander abgestimmt." },
      { title: "Optimieren", text: "Wir messen die vereinbarten Conversions und verbessern den Prozess gezielt." },
    ],
    related: ["websites", "social-media", "ai-solutions"],
    ctaTitle: "Verbinde deine Kanäle zu einem wirksamen Vertriebsprozess.",
    ctaText: "Wir sprechen über deine Kundengewinnung, bestehenden Systeme und die Stellen, an denen Interessenten heute abspringen.",
    ctaButton: "Umsatzsystem anfragen",
  },
};