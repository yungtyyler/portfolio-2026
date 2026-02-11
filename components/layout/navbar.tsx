"use client";

import { NavItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/container";
import Link from "next/link";

const navItems: NavItem[] = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Freelance", href: "/freelance" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-md bg-background/80 border-b border-border/40">
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight hover:text-primary transition-colors cursor-pointer"
        >
          Tyler Varzeas
        </Link>

        <div className="hidden sm:flex gap-6">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors hover:text-foreground",
                  isActive ? "text-foreground font-medium" : "text-subtle"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Toggle would go here - skipping for brevity in Phase 1 */}
      </Container>
    </nav>
  );
};

export default Navbar;
