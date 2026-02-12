import Container from "@/components/layout/container";
import Button from "@/components/ui/button";
import { PROJECTS } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowLeft, FaGithub } from "react-icons/fa6";

export const generateStaticParams = () => {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

const WorkSlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <Link
        href="/work"
        className="inline-flex items-center text-sm text-subtle hover:text-foreground transition-colors mb-8"
      >
        <FaArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      {/* Header */}
      <header className="mb-12 border-b border-border/40 pb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-lg text-subtle">{project.shortDescription}</p>
          </div>

          <div className="flex gap-3">
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.link && (
              <Button size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-subtle mb-1">
              Role
            </h3>
            <p className="text-sm font-medium">{project.role}</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-subtle mb-1">
              Year
            </h3>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div className="col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-subtle mb-1">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-xs border border-border px-2 py-1 rounded bg-surface/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="grid md:grid-cols-[2fr_1fr] gap-12">
        <div className="space-y-12">
          {/* Problem & Solution */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">The Problem</h2>
            <p className="text-subtle leading-relaxed">{project.problem}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">The Solution</h2>
            <p className="text-subtle leading-relaxed">{project.solution}</p>
          </section>

          {/* Key Features */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-subtle">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Technical Challenges (The "Senior" Section) */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Technical Challenges</h2>
            <div className="grid gap-6">
              {project.challenges?.map((challenge, i) => (
                <div key={i} className="bg-surface/30 border border-border rounded-lg p-6">
                  <h3 className="font-medium text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{challenge.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar / Sticky area (Optional for screenshots later) */}
        <aside className="space-y-6">
          <div className="p-6 rounded-lg bg-surface/10 border border-border/50 text-center">
            <p className="text-sm text-subtle italic">
              Project screenshots or architecture diagrams would go here.
            </p>
            {/* [Image of Software Architecture Diagram] - Placeholder for future */}
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default WorkSlugPage;
