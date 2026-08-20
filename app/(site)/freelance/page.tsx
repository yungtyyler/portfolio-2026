import Container from "@/components/layout/container";
import FreelanceHero from "@/components/sections/freelance-hero";
import { OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaBolt, FaChartLine, FaCodeBranch } from "react-icons/fa";

const title = "Freelance Web & SEO Consulting";
const description =
  "Freelance web development, technical SEO, local SEO, optimization, and analytics support for Spokane and Coeur d'Alene businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: absoluteUrl("/freelance"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/freelance"),
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

export default function FreelancePage() {
  return (
    <Container>
      {/* Freelance Hero */}
      <FreelanceHero />

      {/* Services Grid */}
      <div id="services" className="grid md:grid-cols-3 gap-6 py-12">
        <div className="p-6 rounded-xl border border-border bg-surface/10 hover:border-primary/50 transition-colors">
          <FaCodeBranch className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Web Design & Development</h3>
          <p className="text-sm text-subtle leading-relaxed">
            Fast, modern websites with clear service pages, mobile-first layouts, and contact paths
            built around lead generation.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-surface/10 hover:border-primary/50 transition-colors">
          <FaBolt className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Technical & Local SEO</h3>
          <p className="text-sm text-subtle leading-relaxed">
            Technical cleanup, local search foundations, service-area messaging, and structure that
            helps Google understand your business.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-surface/10 hover:border-primary/50 transition-colors">
          <FaChartLine className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Optimization & Tracking</h3>
          <p className="text-sm text-subtle leading-relaxed">
            Speed, UX, analytics, and conversion tracking improvements so your website becomes a
            measurable marketing asset.
          </p>
        </div>
      </div>

      {/* Why Me Section */}
      <div className="py-16 border-t border-border/40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why work with Tyler?</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-subtle">
                  <strong>Developer-level execution:</strong> Your site gets clean structure,
                  performance, accessibility, and maintainable code.
                </p>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-subtle">
                  <strong>SEO-informed strategy:</strong> Pages are planned around how local
                  customers search, compare, and choose.
                </p>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-subtle">
                  <strong>Local and practical:</strong> I&apos;m a Spokane partner focused on useful
                  changes, clear communication, and measurable next steps.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-surface/30 border border-border text-center">
            <p className="text-lg font-medium text-foreground mb-2">
              &quot;We are ABSOLUTELY pleased with the effort and dedication{" "}
              <strong className="text-primary">Tyler</strong> has to bring our vision to life.&quot;
            </p>
            <Link
              href="https://dimasco.org"
              className="text-sm text-subtle hover:text-primary transition-colors duration-200"
            >
              — Dimas Co., Owners
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
