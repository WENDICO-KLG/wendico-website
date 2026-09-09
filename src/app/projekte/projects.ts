export type Project = {
  slug: string;
  name: string;
  category: string;
  date: string;
  url: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  value: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "lostrios",
    name: "Lostrios.ch",
    category: "Brand",
    date: "Mai 2026",
    url: "https://lostrios.ch/",
    image: "/customer-websites/lostrios-website.png",
    description: "Markenauftritt mit klarer Story und hochwertiger Präsentation.",
    challenge: "Die Marke hatte eine starke Identität, aber der digitale Auftritt wirkte noch unklar und zu wenig ausgereift für den hohen Anspruch der Brand.",
    solution: "Wir haben die Positionierung verdichtet, die Markenwelt visuell geschärft und den digitalen Auftritt auf Vertrauen, Wiedererkennbarkeit und klare Informationsführung ausgerichtet.",
    value: ["Stärkere Markenwahrnehmung", "Mehr Vertrauen bei neuen Interessenten", "Klarere Story für Produkt und Haltung"],
    result: "Die Website unterstützt die Marke jetzt professionell auf allen digitalen Touchpoints und spricht die Zielgruppe mit mehr Klarheit an.",
  },
  {
    slug: "asiafoodfestival",
    name: "Asiafoodfestival.ch",
    category: "Event",
    date: "Mai 2026",
    url: "https://www.asiafoodfestival.ch/",
    image: "/customer-websites/tresch-asia-events-website.png",
    description: "Event-Informationen, Programm und Besucherführung schnell erfassbar gemacht.",
    challenge: "Ein Festival mit viel Inhalt, aber unklarer Informationsarchitektur und wenig Fokus auf die Besucherreise.",
    solution: "Wir haben die Inhalte strukturiert, die Besucherführung vereinfacht und die wichtigsten Informationen für Planung, Teilnahme und Orientierung klarer in den Fokus gestellt.",
    value: ["Bessere Informationsfindung", "Mehr Verständnis für das Programm", "Stärkere Besucherführung"],
    result: "Besucher finden relevante Informationen schneller und das Event wirkt insgesamt klarer, professioneller und zugänglicher.",
  },
  {
    slug: "alija-gebaeudereinigung",
    name: "Alija Gebäudereinigung",
    category: "Service",
    date: "April 2026",
    url: "https://alija-gebaeudereinigung.ch/",
    image: "/customer-websites/alija-gebäudereinigung-website.png",
    description: "Dienstleistungen strukturiert und Kontaktaufnahme einfacher gemacht.",
    challenge: "Die Firma hatte ein gutes Angebot, aber die Website war nicht auf die Erwartungen von potenziellen Kunden abgestimmt und wirkte zu wenig überzeugend.",
    solution: "Wir haben die Leistungen verständlich neu strukturiert, die Kernbotschaften vereinfacht und die Kontaktwege so gestaltet, dass Anfragen leichter entstehen.",
    value: ["Mehr Klarheit bei Dienstleistungen", "Einfacherer Kontakt", "Stärkerer Eindruck bei Neukunden"],
    result: "Die Website hilft jetzt dabei, das Leistungsangebot professionell zu präsentieren und die Nachfrage insgesamt klarer zu fokussieren.",
  },
  {
    slug: "scbeautyluxe",
    name: "SC Beauty Luxe",
    category: "Beauty",
    date: "März 2026",
    url: "https://scbeautyluxe.com/",
    image: "/customer-websites/scbeautyluxe-website.png",
    description: "Premium-Gefühl und Angebotsübersicht für bessere Anfragen verbunden.",
    challenge: "Die Marke wollte hochwertiger und professioneller wirken, aber die digitale Präsentation war noch nicht auf das gewünschte Premium-Niveau abgestimmt.",
    solution: "Wir haben die visuelle Sprache verfeinert, Premium-Momente im Aufbau stärker gesetzt und die Angebotsstruktur für höhere Klarheit optimiert.",
    value: ["Höherer Premium-Eindruck", "Bessere Anfragemöglichkeiten", "Klarere Markenpositionierung"],
    result: "Der Auftritt wirkt jetzt hochwertiger und liegt damit deutlich besser im Anspruch der Zielgruppe.",
  },
  {
    slug: "ryu-vogler",
    name: "Ryu Vogler",
    category: "Portfolio",
    date: "Februar 2026",
    url: "https://ryuvogler.com/",
    image: "/customer-websites/ryuvogler-website.png",
    description: "Portfolio-Auftritt mit Fokus auf Persönlichkeit und Arbeiten.",
    challenge: "Der Kunde benötigte einen digitalen Auftritt, der seine Persönlichkeit, Qualität und Arbeiten hochwertig vermittelt, ohne zu überladen zu wirken.",
    solution: "Wir haben das Portfolio visuell und inhaltlich klarer aufgebaut, die Arbeiten stärker in Szene gesetzt und die persönliche Marke verständlich in den Vordergrund gestellt.",
    value: ["Stärkere persönliche Präsenz", "Mehr Klarheit bei Projekten", "Professioneller Eindruck bei Interessenten"],
    result: "Die Website unterstützt jetzt die eigene Marke deutlich besser und macht die Arbeitsergebnisse wirkungsvoller sichtbar.",
  },
  {
    slug: "elegant-society",
    name: "Elegant Society",
    category: "Brand",
    date: "Dezember 2025",
    url: "https://elegantsociety.ch/",
    image: "/customer-websites/elegantsociety-website.png",
    description: "Brand-Welt digital verdichtet und eleganter erlebbar gemacht.",
    challenge: "Die Marke hatte hochwertige Inhalte, eine klare Identität und ein gutes Angebot, aber die digitale Welt war noch nicht so stilvoll und klar wie die Marke selbst.",
    solution: "Wir haben die digitale Brand-Experience auf eine klarere, elegantere und konsistentere Form gebracht, mit stärkerem visuellen Fokus und besserer Informationslogik.",
    value: ["Konsistentere Markenwirkung", "Mehr visuelle Qualität", "Stärkere Online-Präsenz"],
    result: "Die Website trägt die Marke jetzt deutlich hochwertiger und macht den digitalen Eindruck wesentlich professioneller.",
  },
  {
    slug: "rebthai",
    name: "Rebthai",
    category: "Gastronomie",
    date: "Oktober 2025",
    url: "https://rebthai.ch/",
    image: "/customer-websites/rebthai-website.png",
    description: "Angebot, Atmosphäre und Kontakt für schnelle Entscheidungen gebündelt.",
    challenge: "Die Gastronomie hatte ein starkes Angebot, aber die Website musste Gästen in wenigen Sekunden verständlich machen, worum es geht und warum sie kommen sollten.",
    solution: "Wir haben Angebot, Atmosphäre und Kontaktwege in eine klare digitale Besucherführung übersetzt, damit sich die Entscheidung für Besuch oder Reservierung deutlich leichter fällt.",
    value: ["Mehr Klarheit für Gäste", "Bessere Entscheidungsfindung", "Stärkere Einbindung der Gastronomie"],
    result: "Die Website hilft Gästen, die richtige Entscheidung schneller zu treffen und vermittelt die Marke deutlich zugänglicher.",
  },
  {
    slug: "weinland-esskultur",
    name: "Weinland Esskultur",
    category: "Gastronomie",
    date: "Oktober 2025",
    url: "https://weinlandesskultur.ch/",
    image: "/customer-websites/weinlandesskultur-website.png",
    description: "Regionale Identität und Genuss klarer sichtbar gemacht.",
    challenge: "Die Marke sollte regionale Identität und Genuss stärker in den digitalen Raum tragen, ohne im Detail zu verlieren.",
    solution: "Wir haben die regionale Story und die kulinarische Wertigkeit in einen klaren, atmosphärischen Auftritt übersetzt, mit mehr Fokus auf Erlebnisse und Erwartungen.",
    value: ["Mehr regionale Identität", "Stärkere Erlebniswahrnehmung", "Klarere Positionierung im Markt"],
    result: "Die Website vermittelt die Marke jetzt emotional und verständlich und macht die Region als Erlebnis besser spürbar.",
  },
  {
    slug: "thai-lodge",
    name: "Thai Lodge",
    category: "Gastronomie",
    date: "Oktober 2025",
    url: "https://thai-lodge.ch/",
    image: "/customer-websites/thailodge-website.png",
    description: "Menü, Ambiente und Tischreservation als digitale Gästereise geführt.",
    challenge: "Die Gäste sollten nicht nur Informationen erhalten, sondern ein Gefühl für die Atmosphäre und die Auswahl erleben, bevor sie vor Ort sind.",
    solution: "Wir haben die Gästereise von Angebot über Ambiente bis hin zur Reservierung als klaren digitalen Weg gestaltet und relevanten Inhalt in die passende Reihenfolge gesetzt.",
    value: ["Mehr Gästeinteresse", "Bessere Reservierungsführung", "Stärkere Vorstellung der Atmosphäre"],
    result: "Die Website hilft, Neugier in echte Erwartungen und letztlich in Besuchsentscheidungen zu verwandeln.",
  },
  {
    slug: "thai-helping-point",
    name: "Thai Helping Point",
    category: "Information",
    date: "September 2025",
    url: "https://thaihelpingpoint.ch/",
    image: "/customer-websites/thaihelpingpoint-website.png",
    description: "Informationen übersichtlich strukturiert und zugänglicher gemacht.",
    challenge: "Eine Informationsseite musste verständlich, höflich und zugänglich aufgebaut werden, damit Besucher schnell die richtigen Informationen finden.",
    solution: "Wir haben die Inhalte in eine einfache, benutzerfreundliche Struktur gebracht und wichtige Informationen mit klarer Hierarchie und besserem Zugang aufbereitet.",
    value: ["Schnellere Informationsfindung", "Mehr Zugänglichkeit", "Mehr Vertrauen durch klare Struktur"],
    result: "Die Website ist jetzt deutlich verständlicher und funktioniert damit besser für Menschen, die schnelle und verlässliche Informationen suchen.",
  },
];

export const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project]));
export const projectSlugs = projects.map((project) => project.slug);
