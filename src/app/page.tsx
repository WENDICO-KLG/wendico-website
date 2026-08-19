import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wendico | Websites, die sofort verstanden werden",
  description:
    "Wendico baut moderne Websites, übernimmt saubere Technik und laufende Betreuung: klar, schnell und auf echte Anfragen ausgelegt. Schweizer Webstudio aus dem Zürcher Weinland.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Wendico | Websites, die sofort verstanden werden",
    description:
      "Moderne Website, saubere Technik und laufende Betreuung ohne unnötige Komplexität.",
    url: "/",
  },
};

export default function Page() {
  return <HomeClient />;
}
