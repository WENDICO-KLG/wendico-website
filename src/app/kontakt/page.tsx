import type { Metadata } from "next";
import CalendlyInlineWidget from "@/components/CalendlyInlineWidget";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Erzähl uns kurz, was du vorhast. Wendico meldet sich mit einer klaren Einschätzung: was sinnvoll ist, was es braucht und wie schnell es umgesetzt werden kann.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Wendico",
    description: "Erzähl uns kurz, was du vorhast, Wendico meldet sich zeitnah zurück.",
    url: "/kontakt",
  },
};

const contacts = [
  { label: "E-Mail", value: "info@wendico.ch", href: "mailto:info@wendico.ch" },
  { label: "Telefon", value: "+41 (0)79 504 10 05", href: "tel:+41795041005" },
  { label: "Telefon", value: "+41 (0)79 502 76 98", href: "tel:+41795027698" },
  { label: "Ort", value: "Thalheim an der Thur, Schweiz" },
];

export default function ContactPage() {
  return (
    <main className="standard-page">
      <section className="standard-hero standard-hero-split" aria-labelledby="contact-title">
        <div>
          <p>Kontakt</p>
          <h1 id="contact-title">Nimm Kontakt auf.</h1>
          <span>
            Hast du Fragen oder möchtest eine Offerte zu einer Idee von dir? Schreib uns kurz, was du vorhast.
          </span>
        </div>
        <ContactForm />
      </section>

      <section className="standard-section contact-booking-section" id="termin-buchen" aria-labelledby="booking-title">
        <div className="section-heading">
          <p>Termin buchen</p>
          <h2 id="booking-title">Direkt einen Termin sichern.</h2>
        </div>
        <div className="calendly-panel">
          <CalendlyInlineWidget />
        </div>
      </section>

      <section className="standard-section contact-methods-section" aria-labelledby="contact-options-title">
        <div className="section-heading section-heading-split">
          <div>
            <p>Direkt erreichbar</p>
            <h2 id="contact-options-title">Schnelle Frage, schnelle Antwort.</h2>
          </div>
          <span>Wir melden uns mit einer klaren Einschätzung zu Idee, Umfang und nächstem Schritt.</span>
        </div>
        <div className="standard-card-grid four-columns">
          {contacts.map((contact) => {
            const content = (
              <>
                <span>{contact.label}</span>
                <p>{contact.value}</p>
              </>
            );

            return contact.href ? (
              <a className="standard-card standard-link-card" href={contact.href} key={`${contact.label}-${contact.value}`}>
                {content}
              </a>
            ) : (
              <article className="standard-card" key={`${contact.label}-${contact.value}`}>
                {content}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}