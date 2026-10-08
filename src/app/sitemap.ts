import type { MetadataRoute } from "next";
import { projects } from "./projekte/projects";

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/preise", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projekte", changeFrequency: "monthly", priority: 0.9 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/webdesign-zuerich", changeFrequency: "monthly", priority: 0.9 },
  { path: "/webdesign-winterthur", changeFrequency: "monthly", priority: 0.9 },
  { path: "/webdesign-thalheim-an-der-thur", changeFrequency: "monthly", priority: 0.9 },
] as const;
const lastModified = new Date("2026-10-08");

const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
  url: `https://wendico.ch/projekte/${project.slug}`,
  lastModified,
  changeFrequency: "monthly",
  priority: 0.7,
  images: [`https://wendico.ch${project.image}`],
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes.map((route) => ({
      url: `https://wendico.ch${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectRoutes,
];
}