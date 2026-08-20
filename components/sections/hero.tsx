import Button from "@/components/ui/button";
import Link from "next/link";
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase text-primary">Tyler Varzeas Web + SEO</p>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Helping Spokane businesses get more leads from Google.
        </h1>

        <p className="text-lg sm:text-xl text-subtle max-w-2xl leading-relaxed">
          I&apos;m <span className="text-foreground font-medium">Tyler Varzeas</span>, a
          Spokane-based web developer with SEO and digital marketing experience. I build fast,
          trustworthy websites that help local service businesses show up, earn clicks, and turn
          visitors into real inquiries.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/contact">
              Get a Free Website Review
              <FaArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
            <Link href="/work">View Work</Link>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-8 text-subtle">
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
            href="https://linkedin.com/in/tyler-varzeas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2 text-sm"
          >
            <FaLinkedin className="h-4 w-4" />
            LinkedIn
          </a>

          <div className="hidden sm:block h-1 w-1 rounded-full bg-subtle" />

          <span className="text-sm w-full sm:w-auto mt-2 sm:mt-0">
            Serving Spokane, Coeur d&apos;Alene, and remote small businesses
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
