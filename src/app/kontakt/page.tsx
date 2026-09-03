import type { Metadata } from "next";
import Image from "next/image";
import CalendlyInlineWidget from "@/components/CalendlyInlineWidget";
import ContactForm from "@/components/ContactForm";
import mountainImage from "../../../footer.jpg";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere Wendico in Thalheim an der Thur für Webdesign, Website-Projekte, Social Media Management und digitale Umsatzsysteme.",
  alternates: { canonical: "/kontakt" },
  keywords: ["Wendico Kontakt", "Webdesign Erstgespräch", "Website Beratung Schweiz", "Webdesign Zürcher Weinland", "Thalheim an der Thur Website"],
  openGraph: {
    type: "website",
    locale: "de_CH",
    siteName: "Wendico",
    url: "/kontakt",
    title: "Kontakt | Wendico",
    description: "Kontaktiere Wendico in Thalheim an der Thur für Webdesign, Website-Projekte, Social Media Management und digitale Umsatzsysteme.",
  },
};

const people = [
  { name: "Panat Ruangsri", role: "Sales · Strategie · Webdesign", phone: "+41 79 504 10 05", phoneHref: "tel:+41795041005", image: "/wendico-live/panat.JPG", linkedin: "https://www.linkedin.com/in/panat-ruangsri-28a137288/" },
  { name: "Tim Biedermann", role: "Finance · Strategie · Design", phone: "+41 79 502 76 98", phoneHref: "tel:+41795027698", image: "/wendico-live/tim.jpg", linkedin: "https://www.linkedin.com/in/tim-biedermann-ba5b35286/" },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-page-hero">
        <Image className="contact-page-bg" src={mountainImage} alt="" fill priority sizes="100vw" />
        <span className="contact-page-overlay" aria-hidden="true" />
        <div className="shell contact-page-hero-grid">
          <div className="contact-copy">
            <span className="eyebrow contact-page-eyebrow"><i /> Kontakt</span>
            <h1>Was möchtest du<br /><em>bewegen?</em></h1>
            <p>Erzähl uns kurz von deiner Idee. Wir melden uns mit einer ehrlichen Einschätzung und einem klaren nächsten Schritt.</p>
            <div className="contact-details">
              <a href="mailto:info@wendico.ch"><span>E-Mail</span><strong>info@wendico.ch ↗︎</strong></a>
              <a href="tel:+41795041005"><span>Telefon</span><strong>+41 79 504 10 05 ↗︎</strong></a>
              <div><span>Studio</span><strong>Thalheim an der Thur, CH</strong></div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="contact-page-booking" id="termin-buchen">
        <div className="shell contact-page-booking-card">
          <div>
            <span className="eyebrow contact-page-eyebrow"><i /> Direkter Termin</span>
            <h2>15 Minuten.<br />Volle Klarheit.</h2>
            <p>Wähle einen passenden Termin für ein kostenloses Erstgespräch. Danach weisst du, welcher nächste Schritt sinnvoll ist.</p>
          </div>
          <div className="contact-calendly-panel">
            <CalendlyInlineWidget />
          </div>
          <a className="contact-calendly-fallback" href="https://calendly.com/info-wendico/30min?hide_gdpr_banner=1" target="_blank" rel="noreferrer">Falls der Kalender nicht lädt, direkt in Calendly öffnen ↗︎</a>
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