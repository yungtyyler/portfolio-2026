import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/layout/navbar";
import Container from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";

const BASE_ADDRESS = process.env.BASE_ADDRESS!;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_ADDRESS),
  title: {
    default: "Tyler Varzeas | Full-Stack Engineer",
    template: "%s | Tyler Varzeas",
  },
  description:
    "Full-Stack Engineer based in Spokane, WA. Specializing in Next.js, TypeScript, and scalable architecture.",
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
        <main className="grow py-12">{children}</main>
        <footer className="py-8 border-t border-border/40 text-center text-sm text-subtle">
          <Container>
            &copy; {new Date().getFullYear()} Tyler Varzeas. Built with Next.js & Tailwind.
          </Container>
        </footer>
      </body>
    </html>
  );
}
