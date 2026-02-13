import Link from "next/link";
import Button from "../ui/button";

const FreelanceHero = () => {
  return (
    <div className="py-12 md:py-24 text-center space-y-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
        Software consulting for <br /> local business.
      </h1>

      <p className="text-lg md:text-xl text-subtle leading-relaxed max-w-2xl mx-auto">
        I help startups and small businesses in <strong>Spokane & CDA</strong> eliminate manual
        work, fix broken websites, and launch custom software that actually scales.
      </p>

      <div className="pt-8 flex justify-center">
        <Button size="lg" className="h-12 px-8 text-base" asChild>
          <Link href="/contact">Start a Project</Link>
        </Button>
      </div>
    </div>
  );
};

export default FreelanceHero;
