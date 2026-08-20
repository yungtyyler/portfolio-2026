import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const BASE_ADDRESS = process.env.BASE_ADDRESS ?? "https://tylervarzeas.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/freelance", priority: 0.7, changeFrequency: "monthly" as const },
  ].map((route) => ({
    url: `${BASE_ADDRESS}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_ADDRESS}/work/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: project.slug === "bingd" ? 0.85 : 0.75,
  }));

  return [...routes, ...projectRoutes];
}
