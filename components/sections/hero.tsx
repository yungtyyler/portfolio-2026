import Button from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="flex flex-col gap-6">
        <h1>
          Engineering scalable <br className="hidden sm:block" />
          interfaces & backend systems.
        </h1>

        <p className="text-lg sm:text-xl text-subtle max-w-2xl leading-relaxed">
          I&apos;m <span className="text-foreground font-medium">Tyler Varzeas</span>, a full-stack
          engineer based in Spokane, WA. I build high-performance web applications with a focus on
          architectual precision and user experience.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button asChild size="lg">
            <Link href="/work">
              View Selected Work
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex items-center gap-6 pt-8 text-subtle">
          <a
            href="https://github.com/yungtyyler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tyler-varzeas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <div className="h-1 w-1 rounded-full bg-subtle" />
          <span className="text-sm">Open to Remote & Local (Spokane)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
