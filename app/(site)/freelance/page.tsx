import Container from "@/components/layout/container";
import FreelanceHero from "@/components/sections/freelance-hero";
import { FaCheckCircle, FaBolt, FaBrain, FaCodeBranch } from "react-icons/fa";

export default function FreelancePage() {
  return (
    <Container>
      {/* Freelance Hero */}
      <FreelanceHero />

      {/* Services Grid */}
      <div id="services" className="grid md:grid-cols-3 gap-6 py-12">
        <div className="p-6 rounded-xl border border-border bg-surface/10 hover:border-primary/50 transition-colors">
          <FaCodeBranch className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Web Development</h3>
          <p className="text-sm text-subtle leading-relaxed">
            High-converting landing pages and marketing sites. Faster, cleaner, and more reliable
            than WordPress or Squarespace.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-surface/10 hover:border-primary/50 transition-colors">
          <FaBolt className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Custom Applications</h3>
          <p className="text-sm text-subtle leading-relaxed">
            Internal tools, client portals, and SaaS products. I build the software that runs your
            specific business logic.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-border bg-surface/10 hover:border-primary/50 transition-colors">
          <FaBrain className="w-10 h-10 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Technical Strategy</h3>
          <p className="text-sm text-subtle leading-relaxed">
            Not sure what you need? I act as a fractional CTO to help you choose the right tools and
            avoid costly mistakes.
          </p>
        </div>
      </div>

      {/* Why Me Section */}
      <div className="py-16 border-t border-border/40">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why work with an Engineer?</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-subtle">
                  <strong>No Templates:</strong> Everything is built to fit your specific needs, not
                  shoehorned into a generic theme.
                </p>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-subtle">
                  <strong>Performance First:</strong> Google ranks fast sites higher. I build for
                  speed and SEO from day one.
                </p>
              </div>
              <div className="flex gap-3">
                <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-subtle">
                  <strong>Long-term Support:</strong> I&apos;m a local partner, not a distant
                  agency. I&apos;m here when you need updates.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-surface/30 border border-border text-center">
            <p className="text-lg font-medium text-foreground mb-2">
              &quot;Tyler transformed how we track our inventory.&quot;
            </p>
            <p className="text-sm text-subtle">— Dimas Co. Owners</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
