import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import ContactForm from "@/components/ui/contact-form";
import { OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";
import { FiCalendar, FiMail, FiMapPin } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

const title = "Contact";
const description =
  "Contact Tyler Varzeas Web + SEO about a new custom website, website redesign, local SEO, performance optimization, analytics, or automation project.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/contact"),
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
};

const projectItems = [
  "Custom websites for businesses starting from scratch",
  "Redesigns, SEO, speed, analytics, and conversion improvements",
  "Practical guidance on what to build first and what can wait",
];

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/tyler-varzeas";

export default function ContactPage() {
  return (
    <Container className="max-w-5xl py-12 md:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="text-sm font-medium uppercase text-primary">Start a Project</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Let&apos;s figure out the right next step for your business.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-subtle">
          Whether you need a brand-new website, a better version of the one you have, or help
          connecting the tools behind your business, send a few details and I&apos;ll follow up.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
        <ContactForm />

        <aside className="space-y-5">
          <div className="rounded-lg border border-border bg-surface/20 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-foreground">Good fits</h2>
            <ul className="mt-5 grid gap-4">
              {projectItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-border bg-surface/20 p-5 sm:p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
              <FiCalendar className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">Want to talk first?</h2>
            <p className="mt-2 text-sm leading-relaxed text-subtle">
              Book a quick consultation and we can talk through your goals, options, and best
              starting point.
            </p>
            <Button asChild className="mt-5 w-full">
              <Link href={calendlyUrl} target="_blank" rel="noreferrer">
                Schedule on Calendly
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-surface/10 p-5">
            <div className="flex gap-3">
              <FiMail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <Link
                  href="mailto:tyler.varzeas@gmail.com"
                  className="text-sm text-subtle transition-colors hover:text-primary"
                >
                  tyler.varzeas@gmail.com
                </Link>
              </div>
            </div>

            <div className="mt-4 flex gap-3 border-t border-border/70 pt-4">
              <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">Location</p>
                <p className="text-sm text-subtle">
                  Spokane, WA. Serving local and remote clients.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
