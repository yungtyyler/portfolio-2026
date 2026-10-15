import Container from "@/components/layout/container";
import { OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { FaIdBadge } from "react-icons/fa6";

const title = "About Tyler Varzeas";
const description =
  "Learn about Tyler Varzeas, a Spokane web developer and Digital Marketing Specialist - Web & Search at Horizon Credit Union focused on websites, SEO, analytics, and conversion.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/about"),
    siteName: SITE_NAME,
    type: "profile",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
};

export default function AboutPage() {
  return (
    <Container>
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
        {/* Left Column: Narrative */}
        <div className="space-y-8">
          <div>
            <p className="text-sm font-medium uppercase text-primary">Why Tyler</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              Web development discipline with SEO and marketing context.
            </h1>
          </div>

          <div className="prose prose-invert prose-neutral text-subtle leading-relaxed space-y-6">
            <p>
              I&apos;m a Spokane-based web developer who cares about the full path from search to
              lead. A fast, well-built website matters, but it also needs clear positioning, useful
              service pages, local SEO signals, and tracking that shows what is actually working.
            </p>
            <p>
              I currently work as a{" "}
              <strong>
                Digital Marketing Specialist - Web &amp; Search at Horizon Credit Union
              </strong>
              , where my day-to-day work sits right at the intersection of websites, search
              visibility, analytics, and digital marketing execution.
            </p>
            <p>
              My background in <strong>Environmental Science</strong> and <strong>Education</strong>{" "}
              shaped how I work: understand the context, make the complex parts clear, and be
              precise with the details. That carries into how I build websites, interpret data, and
              explain tradeoffs to business owners.
            </p>
            <p>
              Professionally, I work across modern web development and digital marketing: Next.js,
              React, TypeScript, analytics, technical SEO, and conversion-focused page structure.
              For small businesses, that mix is useful because the site has to function as both a
              technical asset and a sales asset.
            </p>
            <p>
              My goal with Tyler Varzeas Web + SEO is straightforward: help local service businesses
              improve the parts of their website that make customers find them, trust them, and
              contact them.
            </p>
          </div>
        </div>

        {/* Right Column: Hard Skills & Stack */}
        <div className="space-y-8">
          <div className="p-6 border border-border bg-surface/20 rounded-xl">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <FaIdBadge className="w-4 h-4 text-primary" /> Technical Stack
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Current Role
                </span>
                <p className="text-sm mt-1 text-foreground">
                  Digital Marketing Specialist - Web &amp; Search, Horizon Credit Union
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Web
                </span>
                <p className="text-sm mt-1 text-foreground">
                  TypeScript, React, Next.js 15, Node.js
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Styling
                </span>
                <p className="text-sm mt-1 text-foreground">Tailwind CSS, CSS Modules, Bootstrap</p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  SEO & Analytics
                </span>
                <p className="text-sm mt-1 text-foreground">
                  Technical SEO, Local SEO, GA4, Search Console, Tag Manager
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Data & Infrastructure
                </span>
                <p className="text-sm mt-1 text-foreground">
                  PostgreSQL, Prisma, Supabase, Redis, Vercel, CI/CD
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border bg-surface/20 rounded-xl">
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/yungtyyler"
                  className="text-subtle hover:text-primary transition-colors block"
                >
                  GitHub &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/tyler-varzeas"
                  className="text-subtle hover:text-primary transition-colors block"
                >
                  LinkedIn &rarr;
                </a>
              </li>
              <li>
                <a
                  href="mailto:tyler.varzeas@gmail.com"
                  className="text-subtle hover:text-primary transition-colors block"
                >
                  Email &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
