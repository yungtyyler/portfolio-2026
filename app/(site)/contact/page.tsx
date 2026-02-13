import Container from "@/components/layout/container";
import { CgMail, CgPin } from "react-icons/cg";

export default function ContactPage() {
  return (
    <Container className="max-w-xl py-12 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Get in touch</h1>

      <div className="space-y-8">
        <p className="text-lg text-subtle leading-relaxed">
          I&apos;m currently open to new opportunities for{" "}
          <strong>full-time engineering roles</strong> and select freelance projects.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:tyler.varzeas@gmail.com"
            className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface/20 hover:bg-surface/40 hover:border-primary/50 transition-all group"
          >
            <div className="p-3 rounded-full bg-background border border-border group-hover:border-primary/50 transition-colors">
              <CgMail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email Me</p>
              <p className="text-sm text-subtle">tyler.varzeas@gmail.com</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-surface/10">
            <div className="p-3 rounded-full bg-background border border-border">
              <CgPin className="w-6 h-6 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Location</p>
              <p className="text-sm text-subtle">Spokane, WA (Open to Remote)</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
