"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaBarsStaggered, FaX } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Container from "@/components/layout/container";
import Button from "../ui/button";

const navItems = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Freelance", href: "/freelance" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between">
          <Link href="/" className="relative z-50 text-lg font-semibold tracking-tight">
            Tyler Varzeas
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm transition-colors duration-200 hover:text-neutral-100",
                    isActive ? "text-neutral-100" : "text-neutral-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaX className="h-5 w-5" /> : <FaBarsStaggered className="h-5 w-5" />}
          </Button>
        </Container>
      </header>

      {/* Mobile Modal */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        {/* Modal Card */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "w-[85%] max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900 p-10 text-center shadow-2xl transition-all duration-300",
            isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
          )}
        >
          <div className="flex flex-col gap-8">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-medium tracking-tight transition-colors duration-200",
                    isActive ? "text-neutral-100" : "text-neutral-400 hover:text-neutral-100"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
