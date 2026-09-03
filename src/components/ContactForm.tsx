"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending");
    const form = event.currentTarget; const data = new FormData(form);
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, template_params: Object.fromEntries(data) }) });
      if (!response.ok) throw new Error(); form.reset(); setStatus("sent");
    } catch { setStatus("error"); }
  }
  return <form className="contact-form glass" onSubmit={submit}><div className="field-row"><label><span>Vorname</span><input name="vorname" required autoComplete="given-name" placeholder="Dein Vorname" /></label><label><span>Nachname</span><input name="nachname" required autoComplete="family-name" placeholder="Dein Nachname" /></label></div><label><span>E-Mail</span><input name="email" type="email" required autoComplete="email" placeholder="name@unternehmen.ch" /></label><label><span>Telefon <small>optional</small></span><input name="telefon" type="tel" autoComplete="tel" placeholder="+41" /></label><label><span>Erzähl uns von deinem Projekt</span><textarea name="nachricht" rows={5} required placeholder="Was möchtest du erreichen?" /></label><label className="consent"><input name="datenschutz" type="checkbox" required /><span>Ich akzeptiere die <a href="/datenschutz">Datenschutzerklärung</a>.</span></label><button className="button primary" disabled={status === "sending"}>{status === "sending" ? "Wird gesendet ..." : "Anfrage senden ↗︎"}</button>{status === "sent" && <p className="form-status success">Danke. Wir melden uns so schnell wie möglich.</p>}{status === "error" && <p className="form-status error">Senden fehlgeschlagen. Bitte schreib direkt an info@wendico.ch.</p>}</form>;
}