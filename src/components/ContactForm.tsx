"use client";

import { FormEvent, useState } from "react";

const inquiryServices = [
  ["websites", "Websites"],
  ["software", "Softwareentwicklung"],
  ["social-media", "Social Media"],
  ["ai-solutions", "KI-Lösungen und Schulungen"],
  ["umsatzsystem", "Umsatzsysteme"],
] as const;

const projectInquiryForm = {
  toolname: "send_project_inquiry",
  tooldescription: "Prepare an inquiry about a Wendico service. The user must review the details and click the submit button to send it.",
};

const projectInquiryParameters = {
  firstName: { toolparamdescription: "The first name of the person making the inquiry." },
  lastName: { toolparamdescription: "The last name of the person making the inquiry." },
  email: { toolparamdescription: "An email address where Wendico can reply." },
  phone: { toolparamdescription: "Optional phone number for a callback." },
  service: { toolparamdescription: "The Wendico service the person is asking about, if selected." },
  package: { toolparamdescription: "The selected package, if the inquiry came from a package card." },
  project: { toolparamdescription: "The project goals, current situation, and relevant requirements." },
  consent: { toolparamdescription: "Privacy consent must only be checked after the user explicitly agrees." },
};

type ContactFormProps = { initialService?: string; initialPackage?: string; initialProject?: string };

export default function ContactForm({ initialService = "", initialPackage = "", initialProject = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [selectedService, setSelectedService] = useState(() => inquiryServices.some(([value]) => value === initialService) ? initialService : "");
  const [selectedPackage, setSelectedPackage] = useState(initialPackage);
  const [projectContext, setProjectContext] = useState(initialProject ? `Ich interessiere mich für ein ähnliches Projekt wie ${initialProject}. ` : "");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY, template_params: Object.fromEntries(data) }) });
      if (!response.ok) throw new Error();
      form.reset();
      setSelectedService("");
      setSelectedPackage("");
      setProjectContext("");
      setStatus("sent");
    } catch { setStatus("error"); }
  }
  return (
    <form {...projectInquiryForm} className="contact-form glass" id="anfrage" onSubmit={submit}>
      <div className="field-row">
        <label><span>Vorname</span><input {...projectInquiryParameters.firstName} name="vorname" required autoComplete="given-name" placeholder="Dein Vorname" /></label>
        <label><span>Nachname</span><input {...projectInquiryParameters.lastName} name="nachname" required autoComplete="family-name" placeholder="Dein Nachname" /></label>
      </div>
      <label><span>E-Mail</span><input {...projectInquiryParameters.email} name="email" type="email" required autoComplete="email" placeholder="name@email.ch" /></label>
      <label><span>Telefon <small>optional</small></span><input {...projectInquiryParameters.phone} name="telefon" type="tel" autoComplete="tel" placeholder="+41" /></label>
      <label>
        <span>Leistung <small>optional</small></span>
        <select {...projectInquiryParameters.service} name="leistung" value={selectedService} onChange={(event) => setSelectedService(event.target.value)}>
          <option value="">Bitte auswählen</option>
          {inquiryServices.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
        </select>
      </label>
      {selectedPackage && <p className="contact-form-context">Anfrage zum Paket <strong>{selectedPackage}</strong></p>}
      <input {...projectInquiryParameters.package} type="hidden" name="paket" value={selectedPackage} />
      <label><span>Erzähl uns von deinem Projekt</span><textarea {...projectInquiryParameters.project} name="nachricht" rows={5} required value={projectContext} onChange={(event) => setProjectContext(event.target.value)} placeholder="Was möchtest du erreichen? Was ist dir bei der Umsetzung wichtig?" /></label>
      <label className="consent"><input {...projectInquiryParameters.consent} name="datenschutz" type="checkbox" required /><span>Ich akzeptiere die <a href="/datenschutz">Datenschutzerklärung</a>.</span></label>
      <button className="button primary" disabled={status === "sending"}>{status === "sending" ? "Wird gesendet ..." : "Projektanfrage senden ↗︎"}</button>
      {status === "sent" && <p className="form-status success">Danke. Wir melden uns so schnell wie möglich.</p>}
      {status === "error" && <p className="form-status error">Senden fehlgeschlagen. Bitte schreib direkt an info@wendico.ch.</p>}
    </form>
  );
}