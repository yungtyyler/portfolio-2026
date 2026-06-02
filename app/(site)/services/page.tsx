import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import type { Service } from "@/lib/types";
import Link from "next/link";
import {
  HiOutlinePaintBrush,
  HiOutlineGlobeAlt,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { FiTrendingUp, FiZap, FiCpu } from "react-icons/fi";

const SERVICES: Service[] = [
  {
    title: "Website redesigns",
    description:
      "Modernize an existing site so it feels trustworthy, loads quickly, and turns more visitors into leads.",
    icon: <HiOutlinePaintBrush />,
    includes: ["UX audit", "Responsive rebuild", "Content and layout cleanup"],
    bestFor: "Outdated sites that need a stronger first impression.",
  },
  {
    title: "New business websites",
    description:
      "Launch a polished web presence with the pages, structure, and messaging your customers need to take action.",
    icon: <HiOutlineGlobeAlt />,
    includes: ["Custom page design", "Mobile-first build", "Launch support"],
    bestFor: "New brands, local businesses, and service providers.",
  },
  {
    title: "SEO optimization",
    description:
      "Improve how your site is structured, written, and surfaced so search engines can understand it more clearly.",
    icon: <FiTrendingUp />,
    includes: ["Metadata cleanup", "Semantic page structure", "Local search basics"],
    bestFor: "Sites that need more qualified organic traffic.",
  },
  {
    title: "Speed optimization",
    description:
      "Tighten the technical details that affect load time, responsiveness, and the overall feel of the experience.",
    icon: <FiZap />,
    includes: ["Performance audit", "Asset optimization", "Core Web Vitals improvements"],
    bestFor: "Slow sites losing visitors before they convert.",
  },
  {
    title: "Automation integrations",
    description:
      "Connect the tools you already use so repetitive tasks become reliable workflows instead of manual busywork.",
    icon: <FiCpu />,
    includes: ["Workflow mapping", "Form and CRM connections", "Admin-friendly handoff"],
    bestFor: "Teams spending too much time moving data by hand.",
  },
  {
    title: "Maintenance retainers",
    description:
      "Keep your site healthy after launch with small improvements, technical fixes, and dependable support.",
    icon: <HiOutlineWrenchScrewdriver />,
    includes: ["Priority updates", "Bug fixes", "Performance and content support"],
    bestFor: "Businesses that want a long-term technical partner.",
  },
];

const ServicesPage = () => {
  return (
    <Container>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Services</h1>
        <p className="text-lg text-subtle max-w-xl">
          Practical web services for businesses that need a sharper site, a smoother workflow, or a
          stronger foundation for growth.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="mailto:tyler.varzeas@gmail.com">
              Email Me Directly
            </Link>
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
              Tell me what is slowing your business down.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle">
              Whether you need a better website, a faster workflow, or an honest technical opinion,
              I can help you map the next step and decide what is worth building first.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button asChild size="lg">
              <Link href="/contact">Book a Consultation</Link>
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
