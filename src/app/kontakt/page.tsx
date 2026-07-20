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
    </main>
  );
}