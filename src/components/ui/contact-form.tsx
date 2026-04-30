"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  message: ""
};

const projectTypeOptions = [
  "Web application",
  "Internal tool or dashboard",
  "Marketing or company website",
  "Portfolio website",
  "AI-assisted workflow feature",
  "Other"
] as const;

const emailPattern = /\S+@\S+\.\S+/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const statusMessageId = error ? "contact-form-error" : "contact-form-status";

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) {
      setError("");
    }
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const hasInvalidName = Boolean(error) && !form.name.trim();
  const hasInvalidEmail = Boolean(error) && !emailPattern.test(form.email);
  const hasInvalidProjectType = Boolean(error) && !form.projectType.trim();
  const hasInvalidMessage = Boolean(error) && form.message.trim().length < 20;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.projectType.trim() || !form.message.trim()) {
      setError("Please complete all required fields before sending your message.");
      return;
    }

    if (!emailPattern.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.message.trim().length < 20) {
      setError("Please provide at least a short project summary before sending.");
      return;
    }

    setError("");
    setStatus("submitting");

    const subject = encodeURIComponent(`${form.projectType} inquiry from ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Company / Organization: ${form.company || "Not provided"}`,
        `Project type: ${form.projectType}`,
        "",
        form.message
      ].join("\n")
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("done");
    setForm(initialState);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor="contact-name">
          <span className="mb-2 block text-sm font-medium text-foreground">Name</span>
          <input
            id="contact-name"
            name="name"
            value={form.name}
            onChange={(event) => handleChange("name", event.target.value)}
            autoComplete="name"
            required
            maxLength={80}
            aria-invalid={hasInvalidName || undefined}
            aria-describedby={statusMessageId}
            className="h-12 w-full rounded-2xl border border-border bg-surface-2 px-4 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/40"
            placeholder="Your full name"
          />
        </label>

        <label className="block" htmlFor="contact-email">
          <span className="mb-2 block text-sm font-medium text-foreground">Email</span>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => handleChange("email", event.target.value)}
            autoComplete="email"
            required
            maxLength={120}
            aria-invalid={hasInvalidEmail || undefined}
            aria-describedby={statusMessageId}
            className="h-12 w-full rounded-2xl border border-border bg-surface-2 px-4 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/40"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block" htmlFor="contact-company">
          <span className="mb-2 block text-sm font-medium text-foreground">
            Company or organization
          </span>
          <input
            id="contact-company"
            name="company"
            value={form.company}
            onChange={(event) => handleChange("company", event.target.value)}
            autoComplete="organization"
            maxLength={120}
            aria-describedby={statusMessageId}
            className="h-12 w-full rounded-2xl border border-border bg-surface-2 px-4 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/40"
            placeholder="Optional"
          />
        </label>

        <label className="block" htmlFor="contact-project-type">
          <span className="mb-2 block text-sm font-medium text-foreground">Project type</span>
          <select
            id="contact-project-type"
            name="projectType"
            value={form.projectType}
            onChange={(event) => handleChange("projectType", event.target.value)}
            required
            aria-invalid={hasInvalidProjectType || undefined}
            aria-describedby={statusMessageId}
            className="h-12 w-full rounded-2xl border border-border bg-surface-2 px-4 text-sm text-foreground outline-none focus:border-accent/40"
          >
            <option value="">Select a project type</option>
            {projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block" htmlFor="contact-message">
        <span className="mb-2 block text-sm font-medium text-foreground">Project summary</span>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => handleChange("message", event.target.value)}
          autoComplete="off"
          required
          minLength={20}
          maxLength={2000}
          aria-invalid={hasInvalidMessage || undefined}
          aria-describedby={statusMessageId}
          className="w-full rounded-[24px] border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent/40"
          placeholder="Outline the goal, the current context, the timeline, and any constraints that matter."
        />
      </label>

      {error ? (
        <p id="contact-form-error" className="text-sm text-rose-400" aria-live="polite">
          {error}
        </p>
      ) : null}
      {status === "done" ? (
        <p id="contact-form-status" className="text-sm text-emerald-400" aria-live="polite">
          Your email client should open with a prepared draft. If it does not, contact me directly at{" "}
          {siteConfig.email}.
        </p>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Preparing inquiry..." : "Send inquiry"}
      </Button>
    </form>
  );
}
