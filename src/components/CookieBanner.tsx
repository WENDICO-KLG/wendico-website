"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const storageKey = "wendico-cookie-preference";

export default function CookieBanner() {
  const hasSavedPreference = useSyncExternalStore(
    (notify) => {
      window.addEventListener("wendico-cookie-preference", notify);
      return () => window.removeEventListener("wendico-cookie-preference", notify);
    },
    () => window.localStorage.getItem(storageKey) !== null,
    () => false,
  );

  const savePreference = (preference: "accepted" | "necessary") => {
    window.localStorage.setItem(storageKey, preference);
    window.dispatchEvent(new Event("wendico-cookie-preference"));
  };

  if (hasSavedPreference) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie-Einstellungen" role="dialog" aria-modal="false">
      <div className="cookie-banner-mark">W</div>
      <div className="cookie-banner-copy">
        <span>Datenschutz</span>
        <h2>Deine Privatsphäre zählt.</h2>
        <p>Wir verwenden notwendige Technologien für den Betrieb der Website. Externe Dienste wie Calendly können Daten verarbeiten. Details findest du in unserer <Link href="/datenschutz">Datenschutzerklärung</Link>.</p>
      </div>
      <div className="cookie-banner-actions">
        <button className="cookie-banner-necessary" type="button" onClick={() => savePreference("necessary")}>Nur notwendige</button>
        <button className="button primary cookie-banner-accept" type="button" onClick={() => savePreference("accepted")}>Akzeptieren</button>
      </div>
    </aside>
  );
}