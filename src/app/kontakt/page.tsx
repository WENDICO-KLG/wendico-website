import Script from "next/script";
import AppNav from "@/components/AppNav";

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
            <input name="vorname" type="text" />
          </label>
          <label>
            <span>Nachname</span>
            <input name="nachname" type="text" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" type="email" />
          </label>
          <label>
            <span>Telefon</span>
            <input name="telefon" type="tel" />
          </label>
          <label className="full-field">
            <span>Nachricht</span>
            <textarea name="nachricht" rows={5} />
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
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/info-wendico/30min?background_color=241020&text_color=ffeede&primary_color=ffc66e"
            style={{ width: "100%", minWidth: "0", height: "700px" }}
          />
        </div>
      </section>

      <section className="standard-section" aria-labelledby="contact-options-title">
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

      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" async />
    </main>
  );
}