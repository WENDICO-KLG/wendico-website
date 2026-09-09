import type { MetadataRoute } from "next";
import { projectSlugs } from "./projekte/projects";

const routes = [
  "",
  "/ueber-uns",
  "/preise",
  "/projekte",
  "/kontakt",
  "/impressum",
  "/datenschutz",
  "/agb",
  "/webdesign-zuerich",
  "/webdesign-winterthur",
  "/webdesign-thalheim-an-der-thur",
  ...projectSlugs.map((slug) => `/projekte/${slug}`),
];
const lastModified = new Date("2026-09-08");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://wendico.ch${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}