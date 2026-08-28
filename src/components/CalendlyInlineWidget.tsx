"use client";

import { useEffect, useRef } from "react";

const calendlyScriptId = "calendly-widget-script";
const calendlyScriptUrl = "https://assets.calendly.com/assets/external/widget.js";
const calendlyUrl =
  "https://calendly.com/info-wendico/30min?hide_gdpr_banner=1";

type CalendlyApi = {
  initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

export function loadCalendlyScript() {
  const existingScript = document.getElementById(calendlyScriptId) as HTMLScriptElement | null;

  return new Promise<void>((resolve, reject) => {
    if (window.Calendly?.initInlineWidget) {
      resolve();
      return;
    }

    if (existingScript) {
      const startedAt = Date.now();
      const waitForApi = () => {
        if (window.Calendly?.initInlineWidget) {
          resolve();
        } else if (Date.now() - startedAt >= 10000) {
          reject(new Error("Calendly konnte nicht geladen werden."));
        } else {
          window.setTimeout(waitForApi, 50);
        }
      };

      waitForApi();
      return;
    }

    const script = document.createElement("script");
    script.id = calendlyScriptId;
    script.src = calendlyScriptUrl;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly konnte nicht geladen werden."));
    document.head.appendChild(script);
  });
}

export default function CalendlyInlineWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const widgetElement = widgetRef.current;

    loadCalendlyScript()
      .then(() => {
        if (!cancelled && widgetElement && window.Calendly?.initInlineWidget) {
          window.Calendly.initInlineWidget({
            url: calendlyUrl,
            parentElement: widgetElement,
          });
        }
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      if (widgetElement) {
        widgetElement.replaceChildren();
      }
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className="calendly-inline-widget"
      data-url={calendlyUrl}
    />
  );
}
