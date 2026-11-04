export type ServiceCard = { title: string; text: string };

export type ServiceContent = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: [string, string, string]; // before, emphasised, after
  lead: string;
  cardLabel: string;
  cardTitle: string;
  cardText: string;
  cardPoints: string[];
  metrics: [string, string][];
  overviewLabel: string;
  overviewTitle: string;
  offerings: ServiceCard[];
  audiences?: { label: string; title: string; text: string; points: string[] }[];
  processTitle: string;
  processText: string;
  steps: ServiceCard[];
  related: string[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export const serviceOrder = ["websites", "software", "social-media", "ai-solutions", "umsatzsystem"] as const;

export const services: Record<string, ServiceContent> = {
  websites: {
    slug: "websites",
    navLabel: "Websites",
    eyebrow: "Websites",
    metaTitle: "Websites für Beauty- und Coiffeur-Salons",
    metaDescription: "Individuelle, mobile Websites von Wendico: Leistungen, Preise und Arbeiten klar präsentiert, mit direktem Weg zur Online-Terminbuchung.",
    keywords: ["Website erstellen lassen", "Salon Website", "Webdesign Schweiz", "Coiffeur Website", "Beauty Website"],
    h1: ["Websites, die deinen Salon zeigen und ", "Termine", " ermöglichen."],
    lead: "Wir gestalten und entwickeln Websites, die deine Arbeit hochwertig präsentieren, dein Angebot verständlich erklären und Interessierte direkt zur Online-Terminbuchung führen.",
    cardLabel: "Webauftritt",
    cardTitle: "Dein Angebot, klar präsentiert",
    cardText: "Von Leistungen und Preisen bis zu Vorher-Nachher-Einblicken zeigt deine Website, was dein Angebot ausmacht.",
    cardPoints: ["Individuelles Design", "Mobil gedacht", "Verbunden mit deiner Buchung"],
    metrics: [["01", "Strategischer Start"], ["02", "Design mit Wirkung"], ["03", "Performante Umsetzung"]],
    overviewLabel: "Was du bekommst",
    overviewTitle: "Ein Auftritt, der vor dem ersten Besuch Vertrauen schafft.",
    offerings: [
      { title: "Strategie und Struktur", text: "Wir klären Zielgruppe, Leistungen und Fragen deiner Kundschaft und ordnen die Inhalte so, dass der Weg zum Termin kurz bleibt." },
      { title: "Design und Entwicklung", text: "Individuelles, responsives Design ohne Baukasten-Look, schnell geladen und für Smartphone, Tablet und Desktop getestet." },
      { title: "SEO, Hosting und Wartung", text: "Saubere technische Basis für die Suche in Google. Auf Wunsch übernehmen wir Hosting, SSL, Backups, Updates und Support." },
    ],
    processTitle: "Von der ersten Idee bis zur fertigen Website.",
    processText: "Wir arbeiten in drei klaren Schritten. Nach Abschluss gehört der Auftritt dir.",
    steps: [
      { title: "Verstehen", text: "Wir lernen dein Angebot, deine Ziele und deine Zielgruppe kennen." },
      { title: "Gestalten", text: "Inhalt und Design entstehen mit deiner Bildwelt und deinem Stil." },
      { title: "Umsetzen", text: "Wir bauen, testen und veröffentlichen eine performante, responsive Website." },
    ],
    related: ["umsatzsystem", "social-media", "software"],
    ctaTitle: "Bereit für eine Website, die für dich arbeitet?",
    ctaText: "In einem kostenlosen Gespräch klären wir Ziele und nächste Schritte. Die Website-Pakete mit festen Preisen findest du auf der Preisseite.",
    ctaButton: "Kostenloses Gespräch",
  },
  software: {
    slug: "software",
    navLabel: "Software",
    eyebrow: "Software",
    metaTitle: "Individuelle Software und Web-Apps",
    metaDescription: "Wendico entwickelt individuelle Software, Web-Apps und Schnittstellen für kleine Unternehmen in der Schweiz, passend zu deinen Abläufen.",
    keywords: ["Individuelle Software", "Web-App entwickeln lassen", "Software Schweiz", "Schnittstellen", "Dashboard"],
    h1: ["Software, die zu deinen ", "Abläufen", " passt."],
    lead: "Wenn Standardtools nicht reichen, entwickeln wir massgeschneiderte Web-Apps, interne Werkzeuge und Schnittstellen, die deinen Alltag spürbar einfacher machen.",
    cardLabel: "Software nach Mass",
    cardTitle: "Weniger Handarbeit, mehr Überblick",
    cardText: "Wir bauen genau das, was du brauchst, und nicht mehr.",
    cardPoints: ["Web-Apps und Portale", "Dashboards und Auswertungen", "Anbindung bestehender Tools"],
    metrics: [["01", "Anforderungen klären"], ["02", "Schlank umsetzen"], ["03", "Laufend verbessern"]],
    overviewLabel: "Was wir bauen",
    overviewTitle: "Digitale Werkzeuge, die dein Team wirklich nutzt.",
    offerings: [
      { title: "Web-Apps und Portale", text: "Kundenbereiche, Anfrage- und Buchungsstrecken oder interne Tools, direkt im Browser und auf jedem Gerät nutzbar." },
      { title: "Schnittstellen", text: "Wir verbinden bestehende Systeme wie Buchung, Kalender, Formulare oder Buchhaltung, damit Daten nicht doppelt erfasst werden." },
      { title: "Dashboards und Auswertungen", text: "Wichtige Zahlen übersichtlich an einem Ort, damit du Entscheidungen auf Basis von Fakten triffst." },
    ],
    processTitle: "Schlank starten, gezielt erweitern.",
    processText: "Wir beginnen mit dem, was den grössten Nutzen bringt, und entwickeln die Lösung in kleinen, überprüfbaren Schritten weiter.",
    steps: [
      { title: "Analyse", text: "Wir verstehen deine Abläufe und finden heraus, wo Zeit verloren geht." },
      { title: "Entwicklung", text: "Wir setzen eine erste nutzbare Version um und stimmen sie mit dir ab." },
      { title: "Betrieb", text: "Wir veröffentlichen, betreuen und erweitern die Software nach Bedarf." },
    ],
    related: ["ai-solutions", "websites", "umsatzsystem"],
    ctaTitle: "Du hast eine Idee für ein eigenes Tool?",
    ctaText: "Beschreibe uns deinen Ablauf. Wir sagen dir ehrlich, ob und wie sich eine Lösung lohnt. Preis auf Anfrage, nach deinem Bedarf kalkuliert.",
    ctaButton: "Projekt besprechen",
  },
  "social-media": {
    slug: "social-media",
    navLabel: "Social Media",
    eyebrow: "Social Media",
    metaTitle: "Social Media Management",
    metaDescription: "Social Media Management von Wendico: Content-Planung, Formate und konsistente Markenkommunikation für deine Kanäle.",
    keywords: ["Social Media Management", "Instagram Betreuung", "Content Planung", "TikTok Content", "Markenkommunikation"],
    h1: ["Social Media mit klarer ", "Stimme", " und Wirkung."],
    lead: "Wir planen Inhalte, entwickeln Formate und betreuen deine Kanäle mit einem klaren Blick auf Marke, Reichweite und Relevanz.",
    cardLabel: "Social Media Management",
    cardTitle: "Sichtbar bleiben, ohne Zeit zu verlieren",
    cardText: "Konstante Präsenz auf Instagram, TikTok und Facebook, abgestimmt auf deine Marke.",
    cardPoints: ["Content-Planung", "Formate für Reels und Stories", "Einheitliche Markenstimme"],
    metrics: [["01", "Plan statt Zufall"], ["02", "Formate mit Wiedererkennung"], ["03", "Konsistent sichtbar"]],
    overviewLabel: "Was wir übernehmen",
    overviewTitle: "Deine Kanäle als verlängerter Arm deiner Marke.",
    offerings: [
      { title: "Content-Planung", text: "Wir entwickeln Themen und einen Redaktionsplan, der zu deinem Angebot, deiner Saison und deiner Zielgruppe passt." },
      { title: "Formate und Gestaltung", text: "Posts, Stories und Kurzvideos mit einheitlichem Look, damit man dich auf den ersten Blick erkennt." },
      { title: "Betreuung der Kanäle", text: "Wir veröffentlichen regelmässig und halten Auftritt und Tonalität über alle Plattformen hinweg konsistent." },
    ],
    processTitle: "Von der Idee bis zum Post.",
    processText: "Ein klarer Ablauf sorgt dafür, dass Inhalte regelmässig und mit wenig Aufwand für dich erscheinen.",
    steps: [
      { title: "Positionierung", text: "Wir klären Tonalität, Themen und Ziele deiner Kanäle." },
      { title: "Produktion", text: "Wir planen und gestalten Inhalte und stimmen sie mit dir ab." },
      { title: "Veröffentlichung", text: "Wir veröffentlichen regelmässig und verbessern laufend." },
    ],
    related: ["websites", "umsatzsystem", "ai-solutions"],
    ctaTitle: "Bereit für einen Auftritt, der auffällt?",
    ctaText: "Im Gespräch zeigen wir dir, wie wir deine Kanäle aufbauen und betreuen. Preis auf Anfrage, abgestimmt auf deinen Umfang.",
    ctaButton: "Gespräch vereinbaren",
  },
  "ai-solutions": {
    slug: "ai-solutions",
    navLabel: "AI Solutions",
    eyebrow: "AI Solutions",
    metaTitle: "AI Solutions: Workflows, Automationen, Kurse und Workshops",
    metaDescription: "AI-Lösungen für Unternehmen und Privatpersonen: AI-Workflows, AI-Automationen, AI-Kurse (live auf Anfrage) und AI-Workshops direkt bei dir vor Ort.",
    keywords: ["AI Workflows", "AI Automation", "KI Kurs", "KI Workshop Unternehmen", "KI für Privatpersonen", "AI Schweiz"],
    h1: ["AI-Lösungen, die ", "Arbeit", " wirklich beschleunigen."],
    lead: "Wendico bietet AI-Lösungen für Unternehmen und Privatpersonen: von massgeschneiderten Workflows und Automationen über Kurse bis zu Workshops direkt bei dir vor Ort.",
    cardLabel: "Für Unternehmen und Privatpersonen",
    cardTitle: "AI praktisch einsetzen",
    cardText: "Wir zeigen und bauen, wie AI im Alltag Zeit spart, ohne dass du dafür Technik-Profi sein musst.",
    cardPoints: ["AI-Workflows und Automationen", "Kurse live auf Anfrage", "Workshops vor Ort im Unternehmen"],
    metrics: [["4", "Angebote: Workflows, Automationen, Kurse, Workshops"], ["2", "Zielgruppen: Unternehmen und Privatpersonen"], ["1", "Ansprechperson von der Idee bis zur Umsetzung"]],
    overviewLabel: "Unsere Angebote",
    overviewTitle: "Vier Wege, AI im Alltag und im Geschäft zu nutzen.",
    offerings: [
      { title: "AI-Workflows", text: "Wir gestalten Arbeitsabläufe, in denen AI Texte entwirft, Informationen zusammenfasst oder Anfragen vorsortiert. Du behältst die Kontrolle über das Ergebnis." },
      { title: "AI-Automationen", text: "Wiederkehrende Aufgaben laufen automatisch: Anfragen beantworten, Daten übertragen, Dokumente erstellen oder Inhalte vorbereiten, verbunden mit deinen bestehenden Tools." },
      { title: "AI-Kurse", text: "Verständliche Live-Kurse, in denen du lernst, AI sicher und sinnvoll einzusetzen. Kurse finden auf Anfrage statt, für Einzelpersonen oder Gruppen." },
      { title: "AI-Workshops vor Ort", text: "Wir kommen zu dir ins Unternehmen und zeigen mit deinem Team an echten Aufgaben, wie AI die Arbeit beschleunigen kann." },
    ],
    audiences: [
      {
        label: "Für Unternehmen",
        title: "Zeit gewinnen im Tagesgeschäft",
        text: "Wir finden gemeinsam mit dir die Aufgaben, bei denen AI am meisten bringt, und setzen sie als Workflow, Automation oder Team-Workshop um.",
        points: ["Analyse deiner Abläufe", "Umsetzung und Anbindung deiner Tools", "Schulung deines Teams vor Ort"],
      },
      {
        label: "Für Privatpersonen",
        title: "AI im Alltag selbstbewusst nutzen",
        text: "In persönlichen Kursen lernst du, AI für Texte, Organisation, Lernen und Kreatives einzusetzen, in deinem Tempo und ohne Vorkenntnisse.",
        points: ["Einsteigerfreundliche Live-Kurse", "Konkrete Beispiele aus deinem Alltag", "Fragen zu Nutzen, Grenzen und Datenschutz"],
      },
    ],
    processTitle: "Von der Frage zur funktionierenden Lösung.",
    processText: "Wir starten bei deiner Aufgabe, nicht bei der Technik, und zeigen, was machbar und sinnvoll ist.",
    steps: [
      { title: "Gespräch", text: "Wir klären, was du erreichen möchtest und wo AI wirklich hilft." },
      { title: "Umsetzung", text: "Wir bauen den Workflow, richten die Automation ein oder planen Kurs und Workshop." },
      { title: "Einführung", text: "Wir übergeben die Lösung, schulen dich und dein Team und bleiben ansprechbar." },
    ],
    related: ["software", "websites", "social-media"],
    ctaTitle: "Wo könnte AI deine Arbeit beschleunigen?",
    ctaText: "Schreib uns, was du vorhast. Wir melden uns mit einer ehrlichen Einschätzung und passenden nächsten Schritten, auch für einen Kurs oder Workshop. Preis auf Anfrage.",
    ctaButton: "AI-Gespräch anfragen",
  },
  umsatzsystem: {
    slug: "umsatzsystem",
    navLabel: "Umsatzsystem",
    eyebrow: "Umsatzsystem",
    metaTitle: "Umsatzsystem: vom Besuch zum Termin",
    metaDescription: "Das Wendico Umsatzsystem verbindet Leistungen, Einblicke und deinen Buchungslink zu einem klaren Weg vom ersten Besuch bis zum Salontermin.",
    keywords: ["Umsatzsystem", "Online-Terminbuchung", "Buchungsweg", "Conversion Optimierung", "Salon mehr Termine"],
    h1: ["Ein Weg vom Besuch zum ", "Termin", ", der funktioniert."],
    lead: "Wir verbinden attraktive Leistungen, überzeugende Einblicke und deinen Buchungslink zu einem klaren Weg vom ersten Besuch bis zum Termin oder zur Anfrage.",
    cardLabel: "Umsatzsystem",
    cardTitle: "Vom Besucher zur Buchung",
    cardText: "Dein bestehendes Buchungstool bleibt. Wir sorgen dafür, dass der Weg dorthin klar und reibungslos ist.",
    cardPoints: ["Klare Leistungsdarstellung", "Buchungslink an den richtigen Stellen", "Messbarer Weg zur Anfrage"],
    metrics: [["Besucher", "kommen auf deine Website"], ["Anfrage", "finden schnell den richtigen Service"], ["Termin", "buchen direkt in deinem Tool"]],
    overviewLabel: "So funktioniert es",
    overviewTitle: "Aus Aufmerksamkeit wird ein gebuchter Termin.",
    offerings: [
      { title: "Leistungen, die überzeugen", text: "Wir stellen Services, Preise und Ergebnisse so dar, dass Interessierte schnell verstehen, was zu ihnen passt." },
      { title: "Vertrauen vor dem Besuch", text: "Einblicke, Arbeitsbeispiele und Stimmen schaffen Sicherheit, bevor jemand zum ersten Mal bei dir bucht." },
      { title: "Direkter Buchungsweg", text: "Wir verknüpfen deine Website mit dem Buchungstool, das du bereits nutzt. Wendico stellt kein eigenes Buchungssystem bereit." },
    ],
    processTitle: "Ein klarer Weg in drei Schritten.",
    processText: "Wir ordnen Leistungen, Inhalte und Buchungslink so, dass Interessierte ohne Umwege zum Wunschtermin finden.",
    steps: [
      { title: "Anschauen", text: "Besucher sehen schnell, was du anbietest und wofür du stehst." },
      { title: "Vertrauen", text: "Arbeitsbeispiele und klare Informationen beantworten offene Fragen." },
      { title: "Buchen", text: "Ein sichtbarer Buchungslink führt direkt zum passenden Termin." },
    ],
    related: ["websites", "social-media", "ai-solutions"],
    ctaTitle: "Bereit für mehr gebuchte Termine?",
    ctaText: "Wir schauen gemeinsam an, wo dein Weg zum Termin heute Besucher verliert. Preis auf Anfrage.",
    ctaButton: "Kostenloses Gespräch",
  },
};
