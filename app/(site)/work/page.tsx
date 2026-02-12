import Container from "@/components/layout/container";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { FaSquareArrowUpRight } from "react-icons/fa6";

export default function WorkPage() {
  return (
    <Container>
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Work</h1>
        <p className="text-lg text-subtle max-w-xl">
          A selection of projects focusing on full-stack development, real-time systems, and complex
          data visualization.
        </p>
      </div>

      <div className="grid gap-6">
        {PROJECTS.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group block">
            <article className="flex flex-col md:flex-row gap-8 p-6 md:p-8 rounded-xl border border-border bg-surface/20 hover:bg-surface/40 transition-all hover:border-border/80">
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <FaSquareArrowUpRight className="text-subtle group-hover:text-primary transition-colors h-5 w-5" />
                </div>

                <p className="text-subtle leading-relaxed max-w-2xl">{project.shortDescription}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-subtle border border-border/50 px-2 py-1 rounded bg-background/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </Container>
  );
}
