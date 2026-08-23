import type { MetadataRoute } from "next";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/preise", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projekte", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.7 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://wendico.ch";
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    changeFrequency,
    priority,
  }));
}
