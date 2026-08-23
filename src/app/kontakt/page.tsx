import type { Metadata } from "next";
import AppNav from "@/components/AppNav";

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
      <AppNav active="kontakt" />
      <section className="standard-hero standard-hero-split" aria-labelledby="contact-title">
        <div>
          <p>Kontakt</p>
          <h1 id="contact-title">Nimm Kontakt auf.</h1>
          <span>
            Hast du Fragen oder möchtest eine Offerte zu einer Idee von dir? Schreib uns kurz, was du vorhast.
          </span>
        </div>
        <form className="contact-form" action="mailto:info@wendico.ch" method="post" encType="text/plain">
          <label>
            <span>Vorname</span>
            <input name="vorname" type="text" autoComplete="given-name" required />
          </label>
          <label>
            <span>Nachname</span>
            <input name="nachname" type="text" autoComplete="family-name" required />
          </label>
          <label>
            <span>E-Mail</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            <span>Telefon</span>
            <input name="telefon" type="tel" autoComplete="tel" />
          </label>
          <label className="full-field">
            <span>Nachricht</span>
            <textarea name="nachricht" rows={5} required />
          </label>
          <label className="full-field contact-privacy-consent">
            <input name="datenschutz" type="checkbox" required />
            <span>Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen.</span>
          </label>
          <button type="submit">Anfrage senden</button>
        </form>
      </section>

      <section className="standard-section contact-booking-section" id="termin-buchen" aria-labelledby="booking-title">
        <div className="section-heading">
          <p>Termin buchen</p>
          <h2 id="booking-title">Direkt einen Termin sichern.</h2>
        </div>
        <div className="calendly-panel">
          <p>Mit dem Öffnen der Terminbuchung werden Daten an Calendly in den USA übermittelt.</p>
          <a
            className="button-primary"
            href="https://calendly.com/info-wendico/30min"
            target="_blank"
            rel="noreferrer"
          >
            Terminbuchung öffnen
          </a>
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