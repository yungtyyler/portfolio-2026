import Container from "@/components/layout/container";
import Hero from "@/components/sections/hero";
import SelectedWork from "@/components/sections/selected-work";
import Button from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";
import { FaChartLine, FaGaugeHigh, FaLocationDot, FaMagnifyingGlassChart } from "react-icons/fa6";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: DEFAULT_TITLE,
  },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: absoluteUrl(),
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: absoluteUrl(),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

const problems = [
  "Your site looks fine, but the phone is not ringing from Google.",
  "Your competitors show up in local search while your business is buried.",
  "Visitors land on your site but do not know what to do next.",
  "You are missing clean tracking, so you cannot tell what is working.",
];

const services = [
  {
    title: "Website Design & Development",
    description:
      "Modern, mobile-first sites built around trust, speed, clear service pages, and simple paths to contact you.",
    icon: <FaGaugeHigh />,
  },
  {
    title: "Technical & Local SEO",
    description:
      "Page structure, metadata, local signals, crawlability, and content foundations that help Google understand your business.",
    icon: <FaLocationDot />,
  },
  {
    title: "Website Optimization",
    description:
      "Performance, UX, and conversion improvements for sites that already exist but are not producing enough leads.",
    icon: <FaMagnifyingGlassChart />,
  },
  {
    title: "Analytics & Conversion Tracking",
    description:
      "GA4, Search Console, Tag Manager, forms, calls, and event tracking so decisions are based on real behavior.",
    icon: <FaChartLine />,
  },
];

export default function Home() {
  return (
    <Container>
      <Hero />

      <section className="py-14 border-t border-border/40">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-medium uppercase text-primary">The Problem</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              A website should be more than an online brochure.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-subtle">
              For most local service businesses, the website has one job: help the right customer
              find you, trust you, and take the next step. If that is not happening, the issue is
              usually a mix of messaging, SEO, speed, tracking, and conversion friction.
            </p>
          </div>

          <ul className="grid gap-3">
            {problems.map((problem) => (
              <li
                key={problem}
                className="rounded-lg border border-border bg-surface/20 p-4 text-sm text-foreground"
              >
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-14 border-t border-border/40">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase text-primary">Services</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Focused help for the parts of your site that drive leads.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-subtle">
            Tyler Varzeas Web + SEO helps Spokane and Coeur d&apos;Alene service businesses with
            website design, web development, technical SEO, local SEO, performance optimization,
            GA4, Search Console, Tag Manager, and conversion tracking.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-border bg-surface/20 p-6 transition-colors hover:border-primary/50 hover:bg-surface/30"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background text-2xl text-primary">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-subtle">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 border-t border-border/40">
        <div className="grid gap-8 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase text-primary">Why Tyler</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
              A developer who also understands search, content, and conversion.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-subtle">
              I bring professional full-stack development experience together with my current work
              as a Digital Marketing Specialist - Web &amp; Search at Horizon Credit Union. That
              means your site is not only cleaner code; it is planned around how local customers
              search, compare, and choose a business.
            </p>
          </div>

          <div className="rounded-lg border border-border bg-surface/20 p-6">
            <dl className="grid gap-5">
              <div>
                <dt className="text-sm font-medium text-foreground">Built for performance</dt>
                <dd className="mt-1 text-sm text-subtle">
                  Next.js, TypeScript, clean structure, and mobile-first delivery.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground">Built for local growth</dt>
                <dd className="mt-1 text-sm text-subtle">
                  Service pages, local SEO basics, analytics, and conversion-focused CTAs.
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-foreground">Built with care</dt>
                <dd className="mt-1 text-sm text-subtle">
                  Direct communication, practical recommendations, and no unnecessary agency bloat.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <SelectedWork />

      <section className="py-16 border-t border-border/40 mt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase text-primary">Free Review</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
              Want to know why your website is not bringing in more leads?
            </h3>
            <p className="text-subtle text-sm mt-3 max-w-xl leading-relaxed">
              Send me your website and I&apos;ll look for quick wins across speed, local SEO,
              messaging, calls to action, and tracking.
            </p>
          </div>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Request a Free Review</Link>
          </Button>
        </div>
      </section>
    </Container>
  );
}
