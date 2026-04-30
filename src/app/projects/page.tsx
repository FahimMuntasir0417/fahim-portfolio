import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse case studies covering web applications, internal tools, AI-assisted workflows, and product-focused engineering."
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <AnimatedSection className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work presented as structured, decision-focused case studies."
            description="Each project page covers the business context, implementation approach, technical decisions, and delivery outcome. The aim is to show judgment, ownership, and execution quality rather than screenshots alone."
          />
          <div className="rounded-[24px] border border-white/8 bg-surface-3 px-5 py-4 shadow-soft lg:max-w-sm">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent">Project set</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              {projects.length} documented projects across product platforms, internal tools, and
              business-facing web experiences.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 xl:grid-cols-2" data-gsap-stagger>
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.08} data-gsap-item>
              <ProjectCard project={project} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </div>
  );
}
