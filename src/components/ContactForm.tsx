"use client";

import { FormEvent, useEffect, useState } from "react";

const emailJsEndpoint = "https://api.emailjs.com/api/v1.0/email/send";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (!showConfirmation) {
      return;
    }

    const timeout = window.setTimeout(() => setShowConfirmation(false), 3500);
    return () => window.clearTimeout(timeout);
  }, [showConfirmation]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setMessage(null);
    setHasError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(emailJsEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          template_params: {
            vorname: formData.get("vorname"),
            nachname: formData.get("nachname"),
            email: formData.get("email"),
            telefon: formData.get("telefon"),
            nachricht: formData.get("nachricht"),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("EmailJS request failed");
      }

      form.reset();
      setShowConfirmation(true);
      setMessage("Danke für deine Nachricht. Wir melden uns so schnell wie möglich.");
    } catch {
      setHasError(true);
      setMessage("Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSending}>
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
        <span className="contact-privacy-text">Ich habe die <a href="/datenschutz">Datenschutzerklärung</a> gelesen.</span>
      </label>
      <button type="submit" disabled={isSending}>
        {isSending ? (
          <>
            <span className="contact-form-spinner" aria-hidden="true" />
            Wird gesendet ...
          </>
        ) : (
          "Anfrage senden"
        )}
      </button>
      {message ? (
        <p className={hasError ? "contact-form-message is-error" : "contact-form-message"} role="status">
          {message}
        </p>
      ) : null}
      {showConfirmation ? (
        <div
          className="contact-confirmation-overlay"
          role="status"
          aria-live="polite"
          onClick={() => setShowConfirmation(false)}
        >
          <div className="contact-confirmation" onClick={(event) => event.stopPropagation()}>
            <span className="contact-confirmation-check" aria-hidden="true">✓</span>
            <strong>Nachricht gesendet</strong>
            <span>Wir melden uns so schnell wie möglich.</span>
          </div>
        </div>
      ) : null}
    </form>
  );
}
