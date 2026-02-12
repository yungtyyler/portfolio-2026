import { Project } from "@/lib/types";

export const PROJECTS: Project[] = [
  {
    slug: "limsly",
    title: "LIMSly",
    shortDescription: "Enterprise-grade Laboratory Information Management System.",
    year: "2025",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind"],
    link: "https://limsly.com",
    github: "https://github.com/yungtyyler/limsly",
    problem:
      "Environmental labs struggle with legacy software that lacks real-time collaboration and intuitive sample tracking. Data integrity issues and slow reporting cycles were common pain points.",
    solution:
      "I architected a cloud-native LIMS using Next.js for the frontend and PostgreSQL for rigid data structure. The system enforces strict typing on sample data and provides real-time status updates for lab technicians.",
    features: [
      "Role-based access control (RBAC) for Admins vs Technicians",
      "Automated chain-of-custody tracking",
      "Dynamic reporting engine for client results",
      "Optimistic UI updates for high-volume data entry",
    ],
    challenges: [
      {
        title: "Complex Data Relationships",
        description:
          "Modeling the many-to-many relationships between Samples, Tests, and Clients required a carefully designed SQL schema to prevent query N+1 issues.",
      },
      {
        title: "Audit Logging",
        description:
          "Implemented a middleware-based logging system to track every mutation for compliance purposes without cluttering the business logic.",
      },
    ],
  },
  {
    slug: "bingd",
    title: "Bingd",
    shortDescription: "Social discovery platform for media tracking.",
    year: "2026",
    role: "Lead Engineer",
    tech: ["Next.js", "Supabase", "React Query", "TMDB API"],
    github: "https://github.com/yungtyyler/bingd",
    link: "https://bingd.vercel.app/",
    comingSoon: true,
    problem:
      "Existing media trackers are solitary experiences. Users wanted a way to see what their friends are watching in real-time without the bloat of major social networks.",
    solution:
      "Bingd aggregates data from TMDB and combines it with a social graph. I used Supabase for real-time subscriptions to create a 'live feed' of friend activity.",
    features: [
      "Real-time activity feed using Supabase Realtime",
      "Infinite scroll implementation with React Query",
      "Complex caching strategy for external API rate limits",
      "Dynamic OpenGraph image generation for shared reviews",
    ],
    challenges: [
      {
        title: "API Rate Limiting",
        description:
          "The TMDB API has strict limits. I implemented a server-side caching layer using Redis (via KV) to reduce external calls by 60%.",
      },
      {
        title: "Optimistic Updates",
        description:
          "To make the app feel native, 'Like' and 'Watch' actions update the UI immediately while syncing in the background, handling rollbacks on failure.",
      },
    ],
  },
  {
    slug: "prophet",
    title: "Prophet",
    shortDescription: "Real-time sports analytics and probability engine.",
    year: "2025",
    role: "Full-Stack Engineer",
    tech: ["Next.js", "Redis", "External APIs", "Recharts"],
    github: "https://github.com/yungtyyler/prophet-client",
    link: "https://prophet-client.vercel.app/",
    problem:
      "Sports bettors lack centralized, visualized historical data to make informed decisions. Raw data is often expensive or inaccessible.",
    solution:
      "Prophet ingests odds data and applies custom probability algorithms to highlight value plays. It visualizes trends using high-performance charting libraries.",
    features: [
      "Automated odds ingestion cron jobs",
      "Visual trend analysis using Recharts",
      "User preference settings for specific sports/markets",
      "Server Actions for secure data fetching",
    ],
    challenges: [
      {
        title: "Data Normalization",
        description:
          "Ingesting data from multiple sportsbooks required a robust adapter pattern to normalize odds into a single schema.",
      },
    ],
  },
];
