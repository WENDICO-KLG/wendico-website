"use client";

import { useEffect } from "react";
import { loadCalendlyScript } from "@/components/CalendlyInlineWidget";

// Kicks off the Calendly script download in the background so the
// inline widget on the Kontakt page is ready instantly when visited.
export default function CalendlyPreloader() {
  useEffect(() => {
    loadCalendlyScript().catch(() => undefined);
  }, []);

  return null;
}
