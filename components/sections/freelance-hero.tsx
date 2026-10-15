import Link from "next/link";
import Button from "../ui/button";

const FreelanceHero = () => {
  return (
    <div className="py-12 md:py-24 text-center space-y-6 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
        Websites and SEO for local service businesses.
      </h1>

      <p className="text-lg md:text-xl text-subtle leading-relaxed max-w-2xl mx-auto">
        I help businesses in <strong>Spokane &amp; CDA</strong> improve their website, local search
        visibility, and conversion tracking so more of the right customers take action.
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
