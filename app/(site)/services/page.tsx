import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import type { Service } from "@/lib/types";
import Link from "next/link";
import {
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { FiTrendingUp, FiZap, FiBarChart2 } from "react-icons/fi";

const SERVICES: Service[] = [
  {
    title: "Website design & development",
    description:
      "Launch or rebuild a fast, trustworthy site that explains what you do, where you serve, and why customers should contact you.",
    icon: <HiOutlinePaintBrush />,
    includes: [
      "Mobile-first page design",
      "Service and location page structure",
      "Clear contact paths",
    ],
    bestFor: "Local businesses with an outdated site or no dependable web presence.",
  },
  {
    title: "Technical SEO",
    description:
      "Clean up the structure search engines rely on: metadata, headings, internal links, crawlability, indexability, and speed.",
    icon: <HiOutlineGlobeAlt />,
    includes: ["SEO audit", "Metadata and schema cleanup", "Core Web Vitals improvements"],
    bestFor: "Sites that are hard for Google to understand or slow for customers to use.",
  },
  {
    title: "Local SEO",
    description:
      "Build the local search foundation Spokane-area service businesses need to compete for qualified customers nearby.",
    icon: <FiTrendingUp />,
    includes: [
      "Local keyword mapping",
      "Service area messaging",
      "Google Business Profile guidance",
    ],
    bestFor: "Businesses that want more calls, form fills, and map-pack visibility.",
  },
  {
    title: "Website optimization",
    description:
      "Improve the pages you already have so more visitors understand the offer, trust the business, and take action.",
    icon: <FiZap />,
    includes: [
      "UX and conversion review",
      "CTA and form improvements",
      "Content hierarchy cleanup",
    ],
    bestFor: "Sites getting traffic but not enough leads.",
  },
  {
    title: "Analytics & conversion tracking",
    description:
      "Set up the measurement layer so you can see which pages, searches, forms, and calls are helping the business grow.",
    icon: <FiBarChart2 />,
    includes: ["GA4 and Search Console", "Tag Manager events", "Form and click tracking"],
    bestFor: "Businesses making marketing decisions without clean data.",
  },
  {
    title: "Ongoing improvements",
    description:
      "Keep your site healthy after launch with practical updates, technical fixes, content changes, and performance checks.",
    icon: <HiOutlineWrenchScrewdriver />,
    includes: ["Priority updates", "Bug fixes", "Content and SEO support"],
    bestFor: "Businesses that want a long-term technical partner.",
  },
];

const ServicesPage = () => {
  return (
    <Container>
      <div className="mb-12">
        <p className="text-sm font-medium uppercase text-primary">Services</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight mb-4">
          Web and SEO services for local lead generation.
        </h1>
        <p className="text-lg text-subtle max-w-xl">
          Practical help for Spokane-area businesses that need a faster website, better local search
          visibility, and clearer tracking from visitor to lead.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact">Get a Free Website Review</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:tyler.varzeas@gmail.com">Email Me Directly</Link>
          </Button>
        </div>
      </div>

      <ul className="grid gap-5 md:grid-cols-2">
        {SERVICES.map((service) => (
          <li key={service.title}>
            <div className="h-full rounded-lg border border-border bg-surface/20 p-6 transition-colors hover:border-primary/50 hover:bg-surface/30">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-2xl text-primary">
                {service.icon}
              </div>

              <h2 className="text-lg font-semibold text-foreground">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-subtle">{service.description}</p>

              <div className="mt-5">
                <p className="text-xs font-medium uppercase text-subtle">Includes</p>
                <ul className="mt-3 space-y-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-border/70 pt-4">
                <p className="text-xs font-medium uppercase text-subtle">Best for</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground">{service.bestFor}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-16 border-y border-border/60 py-12">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase text-primary">Need help choosing?</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              Start with a review, then fix the highest-impact issues first.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle">
              You do not need a massive rebuild to begin. I can review your current site, identify
              the biggest blockers, and recommend the smallest useful next step.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild size="lg">
              <Link href="/contact">Request a Review</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/work">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ServicesPage;
