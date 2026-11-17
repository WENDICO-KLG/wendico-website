"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import "./CallbackPopup.css";

const lastShownKey = "wendico-callback-last-shown";
const sentKey = "wendico-callback-sent";
const cooldown = 10 * 60 * 1000;

export default function CallbackPopup({ service, serviceLabel }: { service: string; serviceLabel: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    let timerElapsed = false;
    const show = () => {
      try {
        const lastShown = Number(window.sessionStorage.getItem(lastShownKey));
        if (!timerElapsed || !window.localStorage.getItem("wendico-cookie-preference") || window.sessionStorage.getItem(sentKey) || (lastShown && Date.now() - lastShown < cooldown)) return;
        const dialog = dialogRef.current;
        if (!dialog || dialog.open) return;
        dialog.showModal();
        window.sessionStorage.setItem(lastShownKey, String(Date.now()));
      } catch {}
    };
    const timer = window.setTimeout(() => { timerElapsed = true; show(); }, 5000);
    window.addEventListener("wendico-cookie-preference", show);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("wendico-cookie-preference", show);
    };
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const phone = String(new FormData(event.currentTarget).get("telefon") || "").trim();
    if (!phone) return;
    setStatus("sending");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          template_params: {
            vorname: "Rückrufanfrage",
            nachname: "",
            email: "",
            telefon: phone,
            leistung: service,
            paket: "",
            nachricht: `Rückruf anfordern für ${serviceLabel}. Telefonnummer: ${phone}`,
            datenschutz: "on",
          },
        }),
      });
      if (!response.ok) throw new Error();
      try { window.sessionStorage.setItem(sentKey, "1"); } catch {}
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <dialog ref={dialogRef} className="callback-popup" aria-labelledby="callback-title" aria-describedby="callback-description">
      <button className="callback-close" type="button" aria-label="Schliessen" onClick={() => dialogRef.current?.close()}>×</button>
      <span className="callback-eyebrow">Persönlich für dich da</span>
      {status === "sent" ? (
        <div role="status">
          <h2 id="callback-title">Danke für deine Anfrage.</h2>
          <p id="callback-description">Wir melden uns so schnell wie möglich bei dir.</p>
          <button className="button primary callback-submit" type="button" onClick={() => dialogRef.current?.close()}>Schliessen</button>
        </div>
      ) : (
        <>
          <h2 id="callback-title">Sprechen wir über dein Vorhaben.</h2>
          <p id="callback-description">Hinterlasse deine Nummer und wir rufen dich zurück.</p>
          <form onSubmit={submit}>
            <label htmlFor="callback-phone">Telefonnummer</label>
            <input id="callback-phone" name="telefon" type="tel" autoComplete="tel" placeholder="+41 79 123 45 67" required pattern="(?=(?:\D*\d){7})\+?[0-9\s.\-\(\)]{7,25}" title="Bitte gib eine gültige Telefonnummer ein." />
            <button className="button primary callback-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Wird gesendet ..." : "Rückruf anfordern"}</button>
            <p className="callback-privacy">Mit dem Absenden stimmst du der Bearbeitung deiner Angaben für den Rückruf zu. Mehr in unserer <Link href="/datenschutz" onClick={() => dialogRef.current?.close()}>Datenschutzerklärung</Link>.</p>
            {status === "error" && <p className="callback-error" role="alert">Das hat leider nicht geklappt. Ruf uns unter <a href="tel:+41795041005">+41 79 504 10 05</a> an.</p>}
          </form>
        </>
      )}
    </dialog>
  );
}