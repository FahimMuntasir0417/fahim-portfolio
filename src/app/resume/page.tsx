import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Professional resume view with experience highlights, selected case studies, and structured technical capabilities."
};

export default function ResumePage() {
  return (
    <div className="py-16 sm:py-24">
      <Container className="max-w-5xl">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Resume"
            title={`${siteConfig.name} - ${siteConfig.role}`}
            description={`${siteConfig.location} | ${siteConfig.email}`}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className={buttonVariants({ variant: "primary" })}>
              Contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/projects" className={buttonVariants({ variant: "secondary" })}>
              View case studies
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <AnimatedSection delay={0.04}>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted">Location</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{siteConfig.location}</p>
            </GlassCard>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted">Availability</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{siteConfig.availability}</p>
            </GlassCard>
          </AnimatedSection>
          <AnimatedSection delay={0.12}>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted">Primary stack</p>
              <p className="mt-3 text-lg font-semibold text-foreground">Next.js, TypeScript, React</p>
            </GlassCard>
          </AnimatedSection>
        </div>

        <div className="mt-6 space-y-6">
          <AnimatedSection delay={0.14}>
            <GlassCard className="p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Professional summary</p>
              <p className="mt-5 text-sm leading-8 text-muted">{siteConfig.headline}</p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.18}>
            <GlassCard className="p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Education</p>
              <div className="mt-6 space-y-6">
                {education.map((item) => (
                  <div
                    key={`${item.institution}-${item.degree}`}
                    className="border-b border-white/8 pb-6 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-foreground">
                          {item.degree}
                        </h2>
                        <p className="mt-1 text-sm text-muted">
                          {item.institution}
                          {item.location ? ` · ${item.location}` : ""}
                        </p>
                      </div>
                      <p className="text-sm text-muted">{item.period}</p>
                    </div>
                    <p className="mt-4 text-sm leading-8 text-muted">{item.summary}</p>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.22}>
            <GlassCard className="p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Professional experience</p>
              <div className="mt-6 space-y-6">
                {experience.map((item) => (
                  <div key={item.title} className="border-b border-white/8 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-foreground">
                          {item.title}
                        </h2>
                        <p className="mt-1 text-sm text-muted">{item.company}</p>
                      </div>
                      <p className="text-sm text-muted">{item.period}</p>
                    </div>
                    <p className="mt-4 text-sm leading-8 text-muted">{item.summary}</p>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                      {item.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                        >
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.26}>
            <GlassCard className="p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Selected work</p>
              <div className="mt-6 space-y-6">
                {projects.map((project) => (
                  <div key={project.slug} className="border-b border-white/8 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-foreground">
                          {project.title}
                        </h2>
                        <p className="mt-1 text-sm text-muted">{project.category}</p>
                      </div>
                      <p className="text-sm text-muted">{project.year}</p>
                    </div>
                    <p className="mt-4 text-sm leading-8 text-muted">{project.summary}</p>
                    <p className="mt-3 text-sm text-muted">
                      <span className="font-medium text-foreground">Impact:</span> {project.impact}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GlassCard className="p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Technical capabilities</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h2 className="font-display text-xl font-semibold text-foreground">{group.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">{group.items.join(", ")}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
