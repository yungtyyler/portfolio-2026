import { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "limsly",
    title: "LIMSly",
    shortDescription:
      "Enterprise-grade Laboratory Information Management System for environmental data scalability.",
    year: "2025",
    tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
  },
  {
    slug: "prophet",
    title: "Prophet",
    shortDescription:
      "Real-time sports analytics engine utilizing historical data for probability modeling.",
    year: "2025",
    tech: ["Next.js", "Redis", "External APIs", "Recharts"],
  },
  {
    slug: "bingd",
    title: "Bingd",
    shortDescription:
      "Social discovery platform for media tracking with real-time activity feeds and TMDB integration.",
    year: "2026",
    tech: ["Next.js", "Supabase", "React Query", "TMDB API"],
    comingSoon: true,
  },
];
