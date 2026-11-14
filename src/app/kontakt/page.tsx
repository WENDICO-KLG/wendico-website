import type { Metadata } from "next";
import Image from "next/image";
import CalendlyInlineWidget from "@/components/CalendlyInlineWidget";
import ContactForm from "@/components/ContactForm";
import { openGraphImage } from "@/lib/seo";
import mountainImage from "../../../footer.jpg";

export const metadata: Metadata = {
  title: "Kontakt: Digitalprojekte und KI-Beratung in der Schweiz",
  description: "Besprich mit Wendico Websites, Software, Social Media, KI-Integration oder Umsatzsysteme. Erstgespräch aus Thalheim an der Thur, online oder vor Ort.",
  alternates: { canonical: "/kontakt" },
  keywords: ["KI Beratung Winterthur", "ChatGPT Integration Zürich", "Softwareentwicklung Zürcher Weinland", "Digitalagentur Thalheim an der Thur", "Wendico Kontakt"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/kontakt",
    title: "Kontakt: Digitalprojekte und KI-Beratung | Wendico",
    description: "Besprich mit Wendico Websites, Software, Social Media, KI-Integration oder Umsatzsysteme. Erstgespräch aus Thalheim an der Thur, online oder vor Ort.",
    images: [openGraphImage],
  },
};

const people = [
  { name: "Panat Ruangsri", role: "Sales · Strategie · Webdesign", phone: "+41 79 504 10 05", phoneHref: "tel:+41795041005", image: "/wendico-live/panat.JPG", linkedin: "https://www.linkedin.com/in/panat-ruangsri-28a137288/" },
  { name: "Tim Biedermann", role: "Finance · Strategie · Design", phone: "+41 79 502 76 98", phoneHref: "tel:+41795027698", image: "/wendico-live/tim.jpg", linkedin: "https://www.linkedin.com/in/tim-biedermann-ba5b35286/" },
];

type ContactSearchParams = { service?: string | string[]; package?: string | string[]; project?: string | string[] };

function firstSearchValue(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<ContactSearchParams> }) {
  const query = await searchParams;
  const initialService = firstSearchValue(query.service);
  const initialPackage = firstSearchValue(query.package).slice(0, 100);
  const initialProject = firstSearchValue(query.project).slice(0, 100);

  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <Image className="contact-page-bg" src={mountainImage} alt="" fill priority sizes="100vw" />
        <span className="contact-page-overlay" aria-hidden="true" />
        <div className="shell contact-page-hero-grid">
          <div className="contact-copy">
            <span className="eyebrow contact-page-eyebrow"><i /> Kontakt</span>
            <h1>Dein Projekt<br /><em>startet hier.</em></h1>
            <p>Erzähl uns von deinem Angebot und deinem Ziel, ob Website, Software, Social Media, AI-Lösung oder Umsatzsystem. Wir melden uns mit einer ehrlichen Einschätzung und einem klaren nächsten Schritt.</p>
            <div className="contact-details">
              <a href="mailto:info@wendico.ch"><span>E-Mail</span><strong>info@wendico.ch ↗︎</strong></a>
              <a href="tel:+41795041005"><span>Telefon</span><strong>+41 79 504 10 05 ↗︎</strong></a>
              <div><span>Studio</span><strong>Thalheim an der Thur, CH</strong></div>
            </div>
          </div>
          <ContactForm initialService={initialService} initialPackage={initialPackage} initialProject={initialProject} />
        </div>
      </section>

      <section className="contact-page-booking" id="termin-buchen">
        <div className="shell contact-page-booking-card">
          <div>
            <span className="eyebrow contact-page-eyebrow"><i /> Direkter Termin</span>
            <h2>30 Minuten.<br />Volle Klarheit.</h2>
            <p>Wähle einen passenden Termin für ein kostenloses Erstgespräch. Danach weisst du, welcher nächste Schritt sinnvoll ist.</p>
          </div>
          <div className="contact-calendly-panel">
            <CalendlyInlineWidget />
          </div>
          <a className="contact-calendly-fallback" href="https://calendly.com/info-wendico/30min" target="_blank" rel="noreferrer">Falls der Kalender nicht lädt, direkt in Calendly öffnen ↗︎</a>
        </div>
      </section>

      <section className="contact-people-section">
        <div className="shell contact-people-shell">
          {people.map((person) => (
            <article className="contact-person-card" key={person.name}>
              <div className="contact-person-image">
                <Image src={person.image} alt={person.name} fill sizes="(max-width: 760px) 92vw, 520px" />
              </div>
              <div className="contact-person-copy">
                <span>{person.role}</span>
                <h2>{person.name}</h2>
                <div>
                  <a href="mailto:info@wendico.ch">info@wendico.ch ↗︎</a>
                  <a href={person.phoneHref}>{person.phone} ↗︎</a>
                  <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗︎</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}