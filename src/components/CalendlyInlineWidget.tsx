"use client";

import { useEffect, useRef } from "react";

const calendlyScript = "https://assets.calendly.com/assets/external/widget.js";
const calendlyUrl = "https://calendly.com/info-wendico/30min?hide_gdpr_banner=1";

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
  };
};

export default function CalendlyInlineWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initWidget = () => {
      const parentElement = widgetRef.current;
      const calendly = (window as CalendlyWindow).Calendly;
      if (!parentElement || !calendly || parentElement.querySelector("iframe")) return;

      calendly.initInlineWidget({ url: calendlyUrl, parentElement });
    };

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${calendlyScript}"]`);
    if (existingScript) {
      initWidget();
      existingScript.addEventListener("load", initWidget, { once: true });
      return () => existingScript.removeEventListener("load", initWidget);
    }

    const script = document.createElement("script");
    script.src = calendlyScript;
    script.async = true;
    script.addEventListener("load", initWidget, { once: true });
    document.body.appendChild(script);
    return () => script.removeEventListener("load", initWidget);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="calendly-inline-widget contact-calendly-widget"
      data-url={calendlyUrl}
    />
  );
}