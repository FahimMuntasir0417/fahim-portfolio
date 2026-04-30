import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <AnimatedSection className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Case-study driven work that explains the problem, the delivery, and the outcome."
            description="Each project page is structured to show business context, implementation choices, and measurable outcomes in a way that is easier for recruiters, clients, and product teams to evaluate."
          />
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="rounded-[24px] border border-white/8 bg-surface-3 px-4 py-3 text-sm leading-6 text-muted shadow-soft lg:max-w-sm">
              <span className="block text-[11px] uppercase tracking-[0.2em] text-accent">
                Selected work
              </span>
              <span className="mt-2 block">
                {featuredProjects.length} featured case studies across fintech, AI operations, and
                brand-led website work.
              </span>
            </div>
            <Link href="/projects" className={buttonVariants({ variant: "secondary" })}>
              View all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 xl:grid-cols-3" data-gsap-stagger>
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.08} data-gsap-item>
              <ProjectCard project={project} className="h-full" />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
