import Container from "@/components/layout/container";
import { FaIdBadge } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <Container>
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-12">
        {/* Left Column: Narrative */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight">From the Lab to the Codebase.</h1>

          <div className="prose prose-invert prose-neutral text-subtle leading-relaxed space-y-6">
            <p>
              I didn&apos;t start as a software engineer. My background is in{" "}
              <strong>Environmental Science</strong> and <strong>Education</strong>. I spent years
              analyzing complex datasets in laboratories and breaking down difficult concepts for
              students.
            </p>
            <p>
              This non-traditional path shaped my engineering philosophy:{" "}
              <strong>Context is everything.</strong>
            </p>
            <p>
              In the lab, a single data error could invalidate weeks of research. In software, I
              apply that same rigor to
              <strong> type safety, testing, and system architecture</strong>. As an educator, I
              learned that the best solution is useless if people can&apos;t understand it. I build
              systems that are not just performant for machines, but intuitive for humans.
            </p>
            <p>
              Today, I specialize in the <strong>React ecosystem (Next.js)</strong>, focusing on
              scalable frontend architecture and robust backend integrations. I thrive in
              environments that value code quality, clear communication, and user-centric design.
            </p>
          </div>
        </div>

        {/* Right Column: Hard Skills & Stack */}
        <div className="space-y-8">
          <div className="p-6 border border-border bg-surface/20 rounded-xl">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <FaIdBadge className="w-4 h-4 text-primary" /> Technical Stack
            </h3>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Core
                </span>
                <p className="text-sm mt-1 text-foreground">
                  TypeScript, React, Next.js 15, Node.js
                </p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Styling
                </span>
                <p className="text-sm mt-1 text-foreground">Tailwind CSS, CSS Modules, Bootstrap</p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  Database
                </span>
                <p className="text-sm mt-1 text-foreground">PostgreSQL, Prisma, Supabase, Redis</p>
              </div>
              <div>
                <span className="text-xs font-medium text-subtle uppercase tracking-wider">
                  DevOps
                </span>
                <p className="text-sm mt-1 text-foreground">Vercel, Docker, Azure DevOps, CI/CD</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-border bg-surface/20 rounded-xl">
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/yungtyyler"
                  className="text-subtle hover:text-primary transition-colors block"
                >
                  GitHub &rarr;
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/tyler-varzeas"
                  className="text-subtle hover:text-primary transition-colors block"
                >
                  LinkedIn &rarr;
                </a>
              </li>
              <li>
                <a
                  href="mailto:tylervarzeas@gmail.com"
                  className="text-subtle hover:text-primary transition-colors block"
                >
                  Email &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
