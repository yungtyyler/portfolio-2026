import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const BASE_ADDRESS = process.env.BASE_ADDRESS;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/about", "/freelance", "/contact"].map((route) => ({
    url: `${BASE_ADDRESS}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const projectRoutes = PROJECTS.map((project) => ({
    url: `${BASE_ADDRESS}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...routes, ...projectRoutes];
}
