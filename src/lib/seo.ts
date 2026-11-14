export const siteUrl = "https://wendico.ch";

export const serviceAreasJsonLd = [
  { "@type": "Place", name: "Thalheim an der Thur" },
  { "@type": "AdministrativeArea", name: "Zürcher Weinland" },
  { "@type": "City", name: "Winterthur" },
  { "@type": "City", name: "Zürich" },
  { "@type": "Country", name: "Schweiz" },
];

export const openGraphImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Wendico: Websites, Software, Social Media, KI-Integration und digitale Umsatzsysteme",
};

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function localServiceJsonLd({ city, path }: { city: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}${path}#service`,
    name: `Webdesign für Beauty- und Coiffeur-Salons in ${city}`,
    description: `Buchungsoptimierte Websites für Beauty- und Coiffeur-Salons in ${city}, mit klaren Leistungen und direktem Weg zur Online-Terminbuchung.`,
    url: `${siteUrl}${path}`,
    serviceType: "Webdesign und Webentwicklung für Beauty- und Coiffeur-Salons",
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: { "@type": "Place", name: city },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}/kontakt`,
      availableLanguage: ["de", "en", "fr"],
    },
  };
}