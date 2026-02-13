import Button from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Engineering scalable <br className="hidden sm:block" />
          interfaces & backend systems.
        </h1>

        <p className="text-lg sm:text-xl text-subtle max-w-2xl leading-relaxed">
          I’m <span className="text-foreground font-medium">Tyler Varzeas</span>, a full-stack
          engineer based in Spokane, WA. I build high-performance web applications with a focus on
          architectural precision and user experience.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/work">
              View Selected Work
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 text-subtle">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <div className="hidden sm:block h-1 w-1 rounded-full bg-subtle" />

          <span className="text-sm w-full sm:w-auto mt-2 sm:mt-0">
            Open to Remote & Local (Spokane)
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
