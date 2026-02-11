import Container from "@/components/layout/container";
import Hero from "@/components/sections/hero";
import SelectedWork from "@/components/sections/selected-work";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SelectedWork />

      <section className="py-16 border-t border-border/40 mt-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium text-foreground">Need a developer?</h3>
            <p className="text-subtle text-sm mt-1">
              Currently accepting freelance projects in Spokane & Remote.
            </p>
          </div>
          <a
            href="/freelance"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
          >
            View Services{" "}
            <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </Container>
  );
}
