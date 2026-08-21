"use client";

import Button from "@/components/ui/button";
import { useForm, ValidationError } from "@formspree/react";

const goals = [
  "A new custom website",
  "A redesign of an existing website",
  "More calls or quote requests",
  "Better local SEO visibility",
  "Speed, conversion, or analytics help",
  "Automation or integration work",
  "Help deciding what matters first",
];

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myegoned");

  if (state.succeeded) {
    return (
      <div className="rounded-lg border border-primary/40 bg-primary/10 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-foreground">Request sent</h2>
        <p className="mt-3 text-sm leading-relaxed text-subtle">
          Thanks, I got your message. I&apos;ll read through the details and follow up soon.
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-lg border border-border bg-surface/20 p-5 sm:p-6"
    >
      <input type="hidden" name="_subject" value="New project inquiry" />

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-foreground">Tell me what you need</h2>
        <p className="mt-2 text-sm leading-relaxed text-subtle">
          Share a little context about the project, problem, or goal. If you already have a website,
          include it below and I can take a look.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle/70 hover:border-border/80 focus:border-primary"
          />
          <ValidationError
            field="name"
            errors={state.errors}
            className="block text-xs text-red-300"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-foreground">
          Email
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle/70 hover:border-border/80 focus:border-primary"
          />
          <ValidationError
            field="email"
            errors={state.errors}
            className="block text-xs text-red-300"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          Current website <span className="text-subtle">(optional)</span>
          <input
            name="website"
            type="url"
            inputMode="url"
            placeholder="https://example.com"
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle/70 hover:border-border/80 focus:border-primary"
          />
          <ValidationError
            field="website"
            errors={state.errors}
            className="block text-xs text-red-300"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-foreground">
          Business type
          <input
            required
            name="businessType"
            placeholder="Landscaping, dental, trades..."
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-subtle/70 hover:border-border/80 focus:border-primary"
          />
          <ValidationError
            field="businessType"
            errors={state.errors}
            className="block text-xs text-red-300"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm font-medium text-foreground">
        What do you need help with?
        <select
          required
          name="goal"
          defaultValue=""
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors hover:border-border/80 focus:border-primary"
        >
          <option value="" disabled>
            Choose the closest fit
          </option>
          {goals.map((goal) => (
            <option key={goal} value={goal}>
              {goal}
            </option>
          ))}
        </select>
        <ValidationError field="goal" errors={state.errors} className="block text-xs text-red-300" />
      </label>

      <label className="mt-4 block space-y-2 text-sm font-medium text-foreground">
        Tell me more
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell me what you want to build, improve, or figure out. A few details about your business, timeline, and goals are helpful."
          className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-subtle/70 hover:border-border/80 focus:border-primary"
        />
        <ValidationError
          field="message"
          errors={state.errors}
          className="block text-xs text-red-300"
        />
      </label>

      <input name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={state.submitting} className="w-full sm:w-auto">
          {state.submitting ? "Sending..." : "Send Project Inquiry"}
        </Button>
        <ValidationError errors={state.errors} className="text-sm text-red-300" />
      </div>
    </form>
  );
}
