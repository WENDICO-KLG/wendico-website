export type Shot = {
  src: string;
  alt: string;
  caption: string;
  device: "desktop" | "mobile";
  width: number;
  height: number;
};

// screenshots of the live customer websites, taken in November 2026
export const galleries: Record<string, Shot[]> = {
  "mini-tank": [
    { src: "/project-gallery/mini-tank-desktop-1.webp", alt: "Website von Mini Tank: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/mini-tank-desktop-2.webp", alt: "Website von Mini Tank: Kampfvideos und Highlights", caption: "Kampfvideos und Highlights", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/mini-tank-mobile.webp", alt: "Website von Mini Tank: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "panat-ruangsri": [
    { src: "/project-gallery/panat-ruangsri-desktop-1.webp", alt: "Website von Panat Ruangsri: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/panat-ruangsri-desktop-2.webp", alt: "Website von Panat Ruangsri: Inhalte auf gewölbten 3D-Flächen", caption: "Inhalte auf gewölbten 3D-Flächen", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/panat-ruangsri-mobile.webp", alt: "Website von Panat Ruangsri: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "ttc-neuhausen": [
    { src: "/project-gallery/ttc-neuhausen-desktop-1.webp", alt: "Website von TTC Neuhausen: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/ttc-neuhausen-desktop-2.webp", alt: "Website von TTC Neuhausen: Die Trainingshallen", caption: "Die Trainingshallen", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/ttc-neuhausen-mobile.webp", alt: "Website von TTC Neuhausen: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "scbeautyluxe": [
    { src: "/project-gallery/scbeautyluxe-desktop-1.webp", alt: "Website von SC Beauty Luxe: Einstieg des Beauty-Salons", caption: "Einstieg des Beauty-Salons", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/scbeautyluxe-desktop-2.webp", alt: "Website von SC Beauty Luxe: Vorstellung des Salons", caption: "Vorstellung des Salons", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/scbeautyluxe-mobile.webp", alt: "Website von SC Beauty Luxe: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "lostrios": [
    { src: "/project-gallery/lostrios-desktop-1.webp", alt: "Website von Los Trios: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/lostrios-desktop-2.webp", alt: "Website von Los Trios: Galerie mit Fotos und Videos", caption: "Galerie mit Fotos und Videos", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/lostrios-mobile.webp", alt: "Website von Los Trios: Galerie auf dem Smartphone", caption: "Galerie auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "asiafoodfestival": [
    { src: "/project-gallery/asiafoodfestival-desktop-1.webp", alt: "Website von Asia Food Festival: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/asiafoodfestival-desktop-2.webp", alt: "Website von Asia Food Festival: Zahlen und Ziel der Veranstalter", caption: "Zahlen und Ziel der Veranstalter", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/asiafoodfestival-mobile.webp", alt: "Website von Asia Food Festival: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "alija-gebaeudereinigung": [
    { src: "/project-gallery/alija-gebaeudereinigung-desktop-1.webp", alt: "Website von Alija Gebäudereinigung: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/alija-gebaeudereinigung-desktop-2.webp", alt: "Website von Alija Gebäudereinigung: Referenzen der Firma", caption: "Referenzen der Firma", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/alija-gebaeudereinigung-mobile.webp", alt: "Website von Alija Gebäudereinigung: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "ryu-vogler": [
    { src: "/project-gallery/ryu-vogler-desktop-1.webp", alt: "Website von Ryu Vogler: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/ryu-vogler-mobile.webp", alt: "Website von Ryu Vogler: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "elegant-society": [
    { src: "/project-gallery/elegant-society-desktop-1.webp", alt: "Website von Elegant Society: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/elegant-society-mobile.webp", alt: "Website von Elegant Society: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "rebthai": [
    { src: "/project-gallery/rebthai-desktop-1.webp", alt: "Website von Rebthai: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/rebthai-desktop-2.webp", alt: "Website von Rebthai: Restaurant und Take-away", caption: "Restaurant und Take-away", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/rebthai-mobile.webp", alt: "Website von Rebthai: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "weinland-esskultur": [
    { src: "/project-gallery/weinland-esskultur-desktop-1.webp", alt: "Website von Weinland Esskultur: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/weinland-esskultur-mobile.webp", alt: "Website von Weinland Esskultur: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "thai-lodge": [
    { src: "/project-gallery/thai-lodge-desktop-1.webp", alt: "Website von Thai Lodge: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/thai-lodge-desktop-2.webp", alt: "Website von Thai Lodge: Gerichte und Restaurant", caption: "Gerichte und Restaurant", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/thai-lodge-mobile.webp", alt: "Website von Thai Lodge: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
  "thai-helping-point": [
    { src: "/project-gallery/thai-helping-point-desktop-1.webp", alt: "Website von Thai Helping Point: Startseite", caption: "Startseite", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/thai-helping-point-desktop-2.webp", alt: "Website von Thai Helping Point: Die Dienstleistungen im Überblick", caption: "Die Dienstleistungen im Überblick", device: "desktop", width: 1800, height: 1125 },
    { src: "/project-gallery/thai-helping-point-mobile.webp", alt: "Website von Thai Helping Point: Ansicht auf dem Smartphone", caption: "Ansicht auf dem Smartphone", device: "mobile", width: 780, height: 1688 },
  ],
};
