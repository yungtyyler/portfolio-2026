import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import { OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { CgMail, CgPin } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";

const title = "Free Website Review";
const description =
  "Request a free website review from Tyler Varzeas Web + SEO. Get practical feedback on local SEO, speed, messaging, calls to action, analytics, and conversion tracking.";

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

const reviewItems = [
  "What is blocking more calls, forms, or quote requests",
  "Quick wins for local SEO, speed, messaging, and calls to action",
  "Whether a refresh, rebuild, or smaller optimization pass makes the most sense",
];

const reviewMailto =
  "mailto:tyler.varzeas@gmail.com?subject=Free%20website%20review%20request&body=Hi%20Tyler%2C%0A%0AI%27d%20like%20a%20free%20website%20review.%0A%0AWebsite%3A%20%0ABusiness%20type%3A%20%0ALocation%2Fservice%20area%3A%20%0AWhat%20I%20want%20more%20of%3A%20%0A%0AThanks!";

export default function ContactPage() {
  return (
    <Container className="max-w-2xl py-12 md:py-24">
      <p className="text-sm font-medium uppercase text-primary">Free Website Review</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight mb-6">
        Send me your site and I&apos;ll look for lead-generation quick wins.
      </h1>

      <div className="space-y-8">
        <p className="text-lg text-subtle leading-relaxed">
          If you run a Spokane-area service business, I can review your current website and point
          out the highest-impact opportunities across SEO, speed, trust, and conversion.
        </p>

        <ul className="grid gap-3">
          {reviewItems.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-foreground">
              <FaCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Button asChild size="lg" className="w-full sm:w-auto">
          <a href={reviewMailto}>Request a Free Review</a>
        </Button>

        <div className="space-y-4">
          <a
            href={reviewMailto}
            className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface/20 hover:bg-surface/40 hover:border-primary/50 transition-all group"
          >
            <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
              <CgMail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email Tyler</p>
              <p className="text-sm text-subtle">tyler.varzeas@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface/10">
            <div className="p-3 rounded-full bg-background border border-border">
              <CgPin className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-sm text-subtle">Spokane, WA (serving local and remote clients)</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
