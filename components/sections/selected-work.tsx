import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const SelectedWork = () => {
  return (
    <section className="py-12 border-t border-border/40">
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
        <Link
          href="/work"
          className="text-sm text-subtle hover:text-foreground transition-colors flex items-center"
        >
          View all projects <FaArrowUpRightFromSquare className="ml-1 h-3 w-3" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group block h-full">
            <div className="flex flex-col h-full p-6 rounded-lg border border-border bg-surface/30 hover:bg-surface/60 transition-all hover:border-border/80">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.year}
                </span>
                {project.comingSoon && (
                  <span className="text-[10px] uppercase tracking-wider font-bold text-subtle">
                    In Progress
                  </span>
                )}
              </div>

              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-subtle leading-relaxed mb-6 grow">
                {project.shortDescription}
              </p>

              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-subtle/80 bg-background/50 px-2 py-1 rounded border border-border/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
