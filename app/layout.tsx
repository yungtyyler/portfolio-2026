import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/layout/navbar";
import Container from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_IMAGE,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: "Tyler Varzeas", url: SITE_URL }],
  creator: "Tyler Varzeas",
  publisher: SITE_NAME,
  alternates: {
    canonical: absoluteUrl(),
  },
  category: "Web Design and SEO Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex flex-col min-h-screen">
        <div
          className="fixed inset-0 z-[-1] pointer-events-none"
          style={{
            backgroundSize: "40px 40px",
            backgroundImage:
              "linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)",
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          }}
        />

        <JsonLd />
        <Navbar />
        <main className="grow py-12">
          {children}
          <Analytics />
        </main>
        <footer className="py-8 border-t border-border/40 text-center text-sm text-subtle">
          <Container>
            &copy; {new Date().getFullYear()} Tyler Varzeas. Built with Next.js & Tailwind.
          </Container>
        </footer>
      </body>
    </html>
  );
}
