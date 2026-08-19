import type { Metadata } from "next";
import ProjekteClient from "./ProjekteClient";

export const metadata: Metadata = {
  title: "Projekte",
  description:
    "Projekte mit klarer Wirkung: eine Auswahl von Websites und digitalen Auftritten, die schnell zeigen, worum es geht und wie man Kontakt aufnimmt.",
  alternates: { canonical: "/projekte" },
  openGraph: {
    title: "Projekte | Wendico",
    description: "Eine Auswahl von Websites und digitalen Auftritten, die Wendico gebaut hat.",
    url: "/projekte",
  },
};

export default function Page() {
  return <ProjekteClient />;
}
