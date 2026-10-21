import Container from "@/components/layout/container";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Tyler Varzeas",
  description: "Learn how Tyler Varzeas handles personal information and website inquiries.",
};

const PrivacyPage = () => {
  return (
    <Container>
      <div className="mx-auto max-w-3xl py-16 md:py-24">
        <header className="mb-12 border-b border-zinc-800 pb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400">
              Legal
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
            Privacy Policy
          </h1>

          <p className="text-sm text-zinc-500">Last updated: October 20, 2026</p>
        </header>

        <article
          className="
            space-y-5
            text-[15px] leading-8 text-zinc-400
            md:text-base

            [&_h3]:mb-4
            [&_h3]:mt-12
            [&_h3]:text-xl
            [&_h3]:font-semibold
            [&_h3]:tracking-tight
            [&_h3]:text-zinc-100

            [&_ul]:my-5
            [&_ul]:list-disc
            [&_ul]:space-y-2
            [&_ul]:pl-6
            [&_li]:pl-1
            [&_li]:marker:text-indigo-500

            [&_a]:font-medium
            [&_a]:text-indigo-400
            [&_a]:underline
            [&_a]:underline-offset-4
            [&_a]:transition-colors
            hover:[&_a]:text-indigo-300
          "
        >
          <p>
            Tyler Varzeas (&quot;I,&quot; &quot;me,&quot; or &quot;my&quot;) operates
            tylervarzeas.com, providing freelance web development, search engine optimization (SEO),
            and related services.
          </p>

          <p>
            This Privacy Policy explains how information is collected, used, and handled when you
            visit my website, contact me, or submit an inquiry through my Facebook or Instagram
            advertisements.
          </p>

          <h3>Information I Collect</h3>
          <p>When you contact me through my website or submit a lead form, I may collect:</p>
          <ul>
            <li>Your name</li>
            <li>Email address</li>
            <li>Business name</li>
            <li>Phone number, if provided</li>
            <li>Website URL, if provided</li>
            <li>Information about your project or services you&apos;re interested in</li>
            <li>Any other information you voluntarily share</li>
          </ul>

          <p>
            My website may also collect technical information through analytics services, such as
            pages visited, approximate location, browser type, device information, and website
            interactions.
          </p>

          <h3>How I Use Your Information</h3>
          <p>I use collected information to:</p>
          <ul>
            <li>Respond to inquiries and requests for services</li>
            <li>Discuss potential projects and provide estimates</li>
            <li>Communicate about projects and services you&apos;ve requested</li>
            <li>Improve my website and understand its performance</li>
            <li>Maintain business records and fulfill applicable legal obligations</li>
          </ul>

          <p>
            Submitting an inquiry does not automatically subscribe you to a marketing email list.
          </p>

          <h3>Facebook and Instagram Lead Forms</h3>
          <p>
            If you submit information through one of my Facebook or Instagram advertisements, I
            receive the information you provide through Meta&apos;s lead-generation tools.
          </p>
          <p>
            I use this information to respond to your inquiry, discuss your website needs, and
            follow up about the services you expressed interest in.
          </p>
          <p>Meta also processes information according to its own privacy policies.</p>

          <h3>Third-Party Services</h3>
          <p>
            I may use third-party providers to operate my website and manage inquiries, including:
          </p>
          <ul>
            <li>Website hosting and infrastructure providers</li>
            <li>Formspree for website contact-form submissions</li>
            <li>Meta for Facebook and Instagram lead forms</li>
            <li>Website analytics services, where enabled</li>
          </ul>
          <p>
            These providers may process information as necessary to provide their services, subject
            to their applicable terms and privacy policies.
          </p>

          <h3>Cookies and Analytics</h3>
          <p>
            My website may use cookies or similar technologies for website functionality and
            analytics.
          </p>
          <p>
            Where analytics tools are enabled, like Google Tag Manager and Google Analytics 4, they
            help me understand how visitors interact with my website so I can improve its
            performance and usability.
          </p>

          <h3>Information Sharing</h3>
          <p>I do not sell personal information.</p>
          <p>
            I may share information with service providers necessary to operate my website or
            respond to inquiries, or when required by law.
          </p>

          <h3>Data Retention and Security</h3>
          <p>
            I retain inquiry information for as long as reasonably necessary to respond to requests,
            manage potential or existing business relationships, maintain appropriate records, and
            meet legal obligations.
          </p>
          <p>
            I take reasonable measures to protect information, but no internet-based service can
            guarantee absolute security.
          </p>

          <h3>Your Choices</h3>
          <p>
            You may contact me to request access to, correction of, or deletion of personal
            information I maintain about you, subject to applicable legal requirements.
          </p>

          <h3>Changes to This Policy</h3>
          <p>
            I may update this Privacy Policy as my services or information-handling practices
            change. Updates will be reflected by the date at the top of this page.
          </p>

          <h3>Contact</h3>
          <p>
            For questions about this Privacy Policy or your personal information, please contact me
            through the contact form at:
          </p>

          <Link href="/contact">tylervarzeas.com/contact</Link>
        </article>
      </div>
    </Container>
  );
};

export default PrivacyPage;
