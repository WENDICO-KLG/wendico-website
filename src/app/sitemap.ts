import type { MetadataRoute } from "next";

const routes = ["", "/ueber-uns", "/preise", "/projekte", "/kontakt", "/impressum", "/datenschutz"];
const lastModified = new Date("2026-09-03");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://wendico.ch${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}