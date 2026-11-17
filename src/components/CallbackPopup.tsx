"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import "./CallbackPopup.css";

const lastShownKey = "wendico-callback-last-shown";
const sentKey = "wendico-callback-sent";
const cooldown = 10 * 60 * 1000;

export default function CallbackPopup({ service, serviceLabel }: { service: string; serviceLabel: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const flightRef = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const headRef = useRef<SVGCircleElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    let timerElapsed = false;
    let flightFrame = 0;
    const stopFlight = () => window.cancelAnimationFrame(flightFrame);
    const startFlight = () => {
      stopFlight();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const start = performance.now();
      const draw = (now: number) => {
        const svg = flightRef.current;
        const trail = trailRef.current;
        const head = headRef.current;
        if (!svg || !trail || !head || !dialogRef.current?.open) return;
        const { width, height } = svg.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.max(48, Math.min(width * .2, 110));
        const position = (time: number) => {
          if (time < 400) {
            const progress = Math.max(0, time / 400);
            const eased = progress + .2 * progress * (1 - progress);
            return { x: -40 + (centerX + 40) * eased, y: centerY - radius };
          }
          if (time < 1120) {
            const angle = -Math.PI / 2 + (time - 400) / 720 * Math.PI * 1.5;
            return { x: centerX + radius * Math.cos(angle), y: centerY + radius * Math.sin(angle) };
          }
          const progress = Math.min(1, (time - 1120) / 220);
          const eased = progress * progress * (3 - 2 * progress);
          return { x: centerX - radius * (1 - eased), y: centerY - radius * .5 * Math.sin(Math.PI * progress) * (1 - progress) };
        };
        const elapsed = now - start;
        const points = Array.from({ length: 10 }, (_, index) => position(elapsed - index * 30));
        const sides = [1, -1].map((side) => points.map((point, index) => {
          const previous = points[Math.max(0, index - 1)];
          const next = points[Math.min(points.length - 1, index + 1)];
          const deltaX = previous.x - next.x;
          const deltaY = previous.y - next.y;
          const length = Math.hypot(deltaX, deltaY) || 1;
          const thickness = 20 * (1 - index / (points.length - 1)) ** .8;
          return { x: point.x - side * deltaY / length * thickness, y: point.y + side * deltaX / length * thickness };
        }));
        const outline = [...sides[0], ...sides[1].reverse()];
        const path = outline.map((point, index) => {
          const next = outline[(index + 1) % outline.length];
          const midpointX = (point.x + next.x) / 2;
          const midpointY = (point.y + next.y) / 2;
          return `${index === 0 ? `M ${point.x} ${point.y}` : ""} Q ${point.x} ${point.y} ${midpointX} ${midpointY}`;
        }).join(" ");
        trail.setAttribute("d", `${path} Z`);
        head.setAttribute("cx", String(points[0].x));
        head.setAttribute("cy", String(points[0].y));
        if (elapsed < 1500) flightFrame = window.requestAnimationFrame(draw);
      };
      flightFrame = window.requestAnimationFrame(draw);
    };
    const show = () => {
      try {
        const lastShown = Number(window.sessionStorage.getItem(lastShownKey));
        if (!timerElapsed || !window.localStorage.getItem("wendico-cookie-preference") || window.sessionStorage.getItem(sentKey) || (lastShown && Date.now() - lastShown < cooldown)) return;
        const dialog = dialogRef.current;
        if (!dialog || dialog.open) return;
        dialog.showModal();
        startFlight();
        window.sessionStorage.setItem(lastShownKey, String(Date.now()));
      } catch {}
    };
    const timer = window.setTimeout(() => { timerElapsed = true; show(); }, 5000);
    window.addEventListener("wendico-cookie-preference", show);
    const dialog = dialogRef.current;
    dialog?.addEventListener("close", stopFlight);
    return () => {
      window.clearTimeout(timer);
      stopFlight();
      dialog?.removeEventListener("close", stopFlight);
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
      <svg ref={flightRef} className="callback-flight" aria-hidden="true">
        <path ref={trailRef} fill="#d8ff71" />
        <circle ref={headRef} r="20" fill="#d8ff71" />
      </svg>
      <div className="callback-panel">
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
      </div>
    </dialog>
  );
}