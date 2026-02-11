import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "@/components/layout/navbar";
import Container from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Tyler Varzeas | Full-Stack Engineer",
  description: "Senior-focused Full-Stack Engineer based in Spokane, WA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex flex-col min-h-screen">
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
