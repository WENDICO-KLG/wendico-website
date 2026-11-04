export type ServiceCard = { title: string; text: string };

export type ServiceContent = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  faq: { q: string; a: string }[];
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

// Real last-edit dates for the sitemap (YYYY-MM-DD).
export const serviceLastModified = "2026-11-04";

export const serviceOrder = ["websites", "software", "social-media", "ai-solutions", "umsatzsystem"] as const;

export const services: Record<string, ServiceContent> = {
  websites: {
    slug: "websites",
    navLabel: "Websites",
    eyebrow: "Websites",
    metaTitle: "Websites für Beauty- und Coiffeur-Salons",
    metaDescription: "Individuelle, mobile Websites für Beauty- und Coiffeur-Salons: Leistungen, Preise und Arbeiten klar präsentiert, mit direktem Weg zur Online-Terminbuchung.",
    summary: "Individuelle, mobile Websites mit direktem Weg zur Online-Terminbuchung.",
    faq: [
      { q: "Arbeitet ihr mit Vorlagen oder Baukästen?", a: "Nein. Wir entwickeln mit eigenem, sauberem Code. Das gibt mehr Freiheit im Design, bessere Performance und eine Website, die zu deiner Marke passt." },
      { q: "Kann ich meine bestehende Online-Buchung behalten?", a: "Ja. Wir verknüpfen deine Website mit dem Buchungstool oder Buchungslink, den du bereits nutzt. Ein eigenes Buchungssystem ist nicht nötig." },
      { q: "Übernehmt ihr Hosting und Wartung?", a: "Auf Wunsch ja: Hosting, SSL, Backups, Updates und Support. Nach Abschluss gehört der Auftritt dir." },
    ],
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
    metaDescription: "Wendico entwickelt individuelle Software, Web-Apps, Schnittstellen und Dashboards für kleine Unternehmen in der Schweiz, passend zu deinen Abläufen.",
    summary: "Web-Apps, Schnittstellen und Dashboards nach Mass.",
    faq: [
      { q: "Für wen lohnt sich individuelle Software?", a: "Für kleine Unternehmen, bei denen Standardtools nicht reichen oder Daten doppelt erfasst werden. Wir sagen dir ehrlich, ob sich eine Lösung lohnt." },
      { q: "Wie läuft die Entwicklung ab?", a: "Wir starten mit dem grössten Nutzen, setzen eine erste nutzbare Version um und erweitern sie in kleinen, überprüfbaren Schritten." },
      { q: "Könnt ihr bestehende Tools anbinden?", a: "Ja. Wir verbinden Systeme wie Buchung, Kalender, Formulare oder Buchhaltung über Schnittstellen." },
    ],
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
    metaDescription: "Social Media Management von Wendico: Content-Planung, Reels- und Story-Formate und konsistente Markenkommunikation für Instagram, TikTok und Facebook.",
    summary: "Content-Planung, Formate und Betreuung deiner Kanäle.",
    faq: [
      { q: "Auf welchen Plattformen seid ihr aktiv?", a: "Wir betreuen Instagram, TikTok und Facebook und stimmen Auftritt und Tonalität über alle Kanäle hinweg ab." },
      { q: "Muss ich selbst Inhalte liefern?", a: "Nur wenig. Wir planen Themen und Formate und stimmen Inhalte mit dir ab, damit der Aufwand für dich klein bleibt." },
      { q: "Wie oft wird veröffentlicht?", a: "Das legen wir im Redaktionsplan gemeinsam fest, passend zu deinem Angebot, deiner Saison und deiner Zielgruppe." },
    ],
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
    navLabel: "KI-Lösungen",
    eyebrow: "KI-Lösungen (AI)",
    metaTitle: "KI-Lösungen (AI): Workflows, Kurse, Workshops",
    metaDescription: "KI-Lösungen (AI) für Unternehmen und Privatpersonen: Workflows, Automationen, Live-Kurse auf Anfrage und Workshops direkt bei dir vor Ort.",
    summary: "KI-Workflows, Automationen, Kurse und Workshops für Unternehmen und Privatpersonen.",
    faq: [
      { q: "Brauche ich Vorkenntnisse in KI?", a: "Nein. Unsere Kurse sind einsteigerfreundlich, und Workflows oder Automationen bauen wir so, dass du kein Technik-Profi sein musst." },
      { q: "Finden die Kurse regelmässig statt?", a: "Kurse finden live auf Anfrage statt, für Einzelpersonen oder Gruppen. Schreib uns, was du lernen möchtest." },
      { q: "Kommt ihr für Workshops zu uns?", a: "Ja. Wir kommen ins Unternehmen und arbeiten mit deinem Team an echten Aufgaben." },
      { q: "Behalte ich die Kontrolle über die Ergebnisse?", a: "Ja. In den Workflows prüfst und entscheidest du. Fragen zu Nutzen, Grenzen und Datenschutz besprechen wir offen." },
    ],
    keywords: ["KI-Lösungen", "AI Solutions", "KI Workflows", "KI Automation", "KI Kurs", "KI Workshop Unternehmen", "KI für Privatpersonen", "KI Schweiz"],
    h1: ["KI-Lösungen (AI), die ", "Arbeit", " wirklich beschleunigen."],
    lead: "Wendico bietet KI-Lösungen (AI) für Unternehmen und Privatpersonen: von massgeschneiderten Workflows und Automationen über Kurse bis zu Workshops direkt bei dir vor Ort.",
    cardLabel: "Für Unternehmen und Privatpersonen",
    cardTitle: "KI praktisch einsetzen",
    cardText: "Wir zeigen und bauen, wie KI im Alltag Zeit spart, ohne dass du dafür Technik-Profi sein musst.",
    cardPoints: ["KI-Workflows und Automationen", "Kurse live auf Anfrage", "Workshops vor Ort im Unternehmen"],
    metrics: [["Workflows", "Abläufe mit KI beschleunigen"], ["Automationen", "Wiederkehrende Aufgaben abgeben"], ["Kurse & Workshops", "Live auf Anfrage oder vor Ort"]],
    overviewLabel: "Unsere Angebote",
    overviewTitle: "Vier Wege, KI im Alltag und im Geschäft zu nutzen.",
    offerings: [
      { title: "KI-Workflows (AI-Workflows)", text: "Wir gestalten Arbeitsabläufe, in denen KI Texte entwirft, Informationen zusammenfasst oder Anfragen vorsortiert. Du behältst die Kontrolle über das Ergebnis." },
      { title: "KI-Automationen", text: "Wiederkehrende Aufgaben laufen automatisch: Anfragen beantworten, Daten übertragen, Dokumente erstellen oder Inhalte vorbereiten, verbunden mit deinen bestehenden Tools." },
      { title: "KI-Kurse", text: "Verständliche Live-Kurse, in denen du lernst, KI sicher und sinnvoll einzusetzen. Kurse finden auf Anfrage statt, für Einzelpersonen oder Gruppen." },
      { title: "KI-Workshops vor Ort", text: "Wir kommen zu dir ins Unternehmen und zeigen mit deinem Team an echten Aufgaben, wie KI die Arbeit beschleunigen kann." },
    ],
    audiences: [
      {
        label: "Für Unternehmen",
        title: "Zeit gewinnen im Tagesgeschäft",
        text: "Wir finden gemeinsam mit dir die Aufgaben, bei denen KI am meisten bringt, und setzen sie als Workflow, Automation oder Team-Workshop um.",
        points: ["Analyse deiner Abläufe", "Umsetzung und Anbindung deiner Tools", "Schulung deines Teams vor Ort"],
      },
      {
        label: "Für Privatpersonen",
        title: "KI im Alltag selbstbewusst nutzen",
        text: "In persönlichen Kursen lernst du, KI für Texte, Organisation, Lernen und Kreatives einzusetzen, in deinem Tempo und ohne Vorkenntnisse.",
        points: ["Einsteigerfreundliche Live-Kurse", "Konkrete Beispiele aus deinem Alltag", "Fragen zu Nutzen, Grenzen und Datenschutz"],
      },
    ],
    processTitle: "Von der Frage zur funktionierenden Lösung.",
    processText: "Wir starten bei deiner Aufgabe, nicht bei der Technik, und zeigen, was machbar und sinnvoll ist.",
    steps: [
      { title: "Gespräch", text: "Wir klären, was du erreichen möchtest und wo KI wirklich hilft." },
      { title: "Umsetzung", text: "Wir bauen den Workflow, richten die Automation ein oder planen Kurs und Workshop." },
      { title: "Einführung", text: "Wir übergeben die Lösung, schulen dich und dein Team und bleiben ansprechbar." },
    ],
    related: ["software", "websites", "social-media"],
    ctaTitle: "Wo könnte KI deine Arbeit beschleunigen?",
    ctaText: "Schreib uns, was du vorhast. Wir melden uns mit einer ehrlichen Einschätzung und passenden nächsten Schritten, auch für einen Kurs oder Workshop. Preis auf Anfrage.",
    ctaButton: "KI-Gespräch anfragen",
  },
  umsatzsystem: {
    slug: "umsatzsystem",
    navLabel: "Umsatzsystem",
    eyebrow: "Umsatzsystem",
    metaTitle: "Umsatzsystem: vom Besuch zum Termin",
    metaDescription: "Das Wendico Umsatzsystem verbindet Leistungen, Einblicke und deinen Buchungslink zu einem klaren Weg vom ersten Besuch bis zum gebuchten Salontermin.",
    summary: "Vom ersten Besuch zum Termin über deinen bestehenden Buchungslink.",
    faq: [
      { q: "Bietet Wendico ein eigenes Buchungssystem an?", a: "Nein. Dein bestehendes Buchungstool bleibt. Wir sorgen dafür, dass der Weg dorthin klar und reibungslos ist." },
      { q: "Was ist ein Umsatzsystem?", a: "Ein klarer Weg von der Website zum Termin: überzeugende Leistungen, Vertrauen durch Einblicke und ein sichtbarer Buchungslink." },
      { q: "Wo verliert meine Website heute Besucher?", a: "Das schauen wir im kostenlosen Gespräch gemeinsam an und leiten daraus konkrete nächste Schritte ab." },
    ],
    keywords: ["Umsatzsystem", "Online-Terminbuchung", "Buchungsweg", "Conversion Optimierung", "Salon mehr Termine"],
    h1: ["Ein Weg vom Besuch zum ", "Termin", ", der funktioniert."],
    lead: "Wir verbinden attraktive Leistungen, überzeugende Einblicke und deinen Buchungslink zu einem klaren Weg vom ersten Besuch bis zum Termin oder zur Anfrage.",
    cardLabel: "Umsatzsystem",
    cardTitle: "Vom Besucher zur Buchung",
    cardText: "Dein bestehendes Buchungstool bleibt. Wir sorgen dafür, dass der Weg dorthin klar und reibungslos ist.",
    cardPoints: ["Klare Leistungsdarstellung", "Buchungslink an den richtigen Stellen", "Messbarer Weg zur Anfrage"],
    metrics: [["Besucher", "kommen auf deine Website"], ["Interessenten", "finden schnell den richtigen Service"], ["Termin", "buchen direkt in deinem Tool"]],
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
