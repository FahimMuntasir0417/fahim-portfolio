import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Globe2,
  ServerCog
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { TechLogo } from "@/components/ui/tech-logo";
import { getProjectBySlug, projects, type ProjectLink } from "@/data/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProjectLinkIcon(link: ProjectLink) {
  const label = link.label.toLowerCase();
  const href = link.href.toLowerCase();

  if (label.includes("backend") || label.includes("server")) {
    return ServerCog;
  }

  if (label.includes("github") || label.includes("repository") || href.includes("github.com")) {
    return Github;
  }

  if (label.includes("live") || label.includes("demo")) {
    return Globe2;
  }

  return ExternalLink;
}

function getProjectLinkVariant(link: ProjectLink) {
  const label = link.label.toLowerCase();

  if (label.includes("live") || label.includes("demo")) {
    return "primary" as const;
  }

  if (label.includes("backend") || label.includes("server")) {
    return "outline" as const;
  }

  return "secondary" as const;
}

function getPreferredProjectLink(projectLinks: ProjectLink[], type: "live" | "github") {
  if (type === "live") {
    return projectLinks.find((link) => {
      const label = link.label.toLowerCase();
      return label.includes("live") || label.includes("demo");
    });
  }

  return projectLinks.find((link) => {
    const label = link.label.toLowerCase();
    const href = link.href.toLowerCase();
    return (
      href.includes("github.com") &&
      !label.includes("backend") &&
      !label.includes("server")
    );
  }) || projectLinks.find((link) => link.href.toLowerCase().includes("github.com"));
}

function getTechStackGroups(stack: string[]) {
  const groups = [
    {
      title: "Frontend libs",
      description: "Core rendering, styling, validation, and interface building blocks.",
      match: ["next", "react", "typescript", "tailwind", "form", "zod"],
      items: [] as string[]
    },
    {
      title: "State management",
      description: "Tools used to coordinate server data, local state, and async UI flows.",
      match: ["tanstack query", "zustand", "axios"],
      items: [] as string[]
    },
    {
      title: "Backend/API",
      description: "API, authentication, database, AI, and backend integration technologies.",
      match: [
        "node",
        "express",
        "prisma",
        "postgres",
        "jwt",
        "api",
        "nodemailer",
        "pino"
      ],
      items: [] as string[]
    },
    {
      title: "Deployment",
      description: "Package tooling and deployment platform used to ship the project.",
      match: ["vercel", "pnpm", "bun"],
      items: [] as string[]
    }
  ];

  stack.forEach((item) => {
    const normalized = item.toLowerCase();
    const group = groups.find((candidate) =>
      candidate.match.some((keyword) => normalized.includes(keyword))
    );

    if (group) {
      group.items.push(item);
    } else {
      groups[0].items.push(item);
    }
  });

  return groups.filter((group) => group.items.length > 0);
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: absoluteUrl(`/projects/${project.slug}`),
      type: "article",
      images: [
        {
          url: absoluteUrl(project.image),
          alt: `${project.title} case study screenshot showing the ${project.category.toLowerCase()} interface`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      images: [absoluteUrl(project.image)]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectLinks = project.links.map((link) => ({
    ...link,
    Icon: getProjectLinkIcon(link),
    variant: getProjectLinkVariant(link)
  }));
  const liveLink = getPreferredProjectLink(project.links, "live");
  const githubLink = getPreferredProjectLink(project.links, "github");
  const keyMetrics = [...project.metrics, { label: "Case study year", value: project.year }].slice(
    0,
    4
  );
  const techStackGroups = getTechStackGroups(project.stack);
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: `${project.title} case study`,
    name: project.title,
    description: project.summary,
    image: absoluteUrl(project.image),
    url: absoluteUrl(`/projects/${project.slug}`),
    author: {
      "@type": "Person",
      name: siteConfig.name
    },
    inLanguage: siteConfig.language,
    genre: project.category,
    about: [project.audience, project.scope, ...project.stack]
  };

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <Link href="/projects" className={buttonVariants({ variant: "ghost", className: "mb-6" })}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                {project.category}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{project.overview}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                {liveLink ? (
                  <a
                    href={liveLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "primary", size: "lg" })}
                  >
                    View Live
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                ) : null}
                {githubLink ? (
                  <a
                    href={githubLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "secondary", size: "lg" })}
                  >
                    View on GitHub
                    <Github className="ml-2 h-4 w-4" />
                  </a>
                ) : null}
              </div>

              <div className="mt-6 rounded-[24px] border border-white/8 bg-surface-3 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Brief description</p>
                <p className="mt-3 text-sm leading-8 text-muted">{project.summary}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {projectLinks.map((link) => {
                  const Icon = link.Icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${link.label}`}
                      className={buttonVariants({
                        variant: link.variant
                      })}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {link.label}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  );
                })}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{project.accessNote}</p>
            </div>

            <GlassCard className="overflow-hidden p-4">
              <Image
                src={project.image}
                alt={`${project.title} case study screenshot showing the ${project.category.toLowerCase()} interface`}
                width={1200}
                height={840}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </GlassCard>
          </div>
        </AnimatedSection>

        <div className="mt-10 rounded-[28px] border border-white/8 bg-[#06101d]/90 p-4 shadow-card">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 0.06}>
              <div className="h-full rounded-[22px] border border-white/8 bg-white/[0.03] px-5 py-5">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">{metric.label}</p>
                <p className="mt-3 font-display text-3xl font-semibold text-foreground">{metric.value}</p>
              </div>
            </AnimatedSection>
          ))}
          </div>
        </div>

        <AnimatedSection delay={0.04} className="mt-10">
          <GlassCard className="p-8">
            <SectionHeader
              eyebrow="Tech stack deep-dive"
              title="Grouped by the role each tool played in the build."
              description="The stack is organized by implementation responsibility so the technical choices are easier to scan than a flat logo list."
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-4">
              {techStackGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[24px] border border-white/8 bg-black/10 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">{group.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
                  <div className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/6 bg-surface-3 px-3 py-3 text-sm text-foreground"
                      >
                        <TechLogo name={item} className="h-8 w-8 border-white/10 p-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <AnimatedSection>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Engagement summary</p>
              <div className="mt-6 space-y-6">
                {projectLinks.length > 0 ? (
                  <div>
                    <p className="text-sm text-muted">Project links</p>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {projectLinks.map((link) => {
                        const Icon = link.Icon;

                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${link.label}`}
                            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm text-muted transition hover:border-accent/25 hover:bg-accent-soft hover:text-foreground"
                          >
                            <span className="flex min-w-0 items-center gap-3">
                              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/8 bg-surface-2 text-accent">
                                <Icon className="h-4 w-4" />
                              </span>
                              <span className="font-semibold text-foreground">{link.label}</span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
                <div>
                  <p className="text-sm text-muted">Role</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Timeline</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{project.timeline}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Year</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Scope</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{project.scope}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Audience</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{project.audience}</p>
                </div>
                <div>
                  <p className="text-sm text-muted">Deliverables</p>
                  <div className="mt-3 space-y-3">
                    {project.deliverables.map((deliverable) => (
                      <div
                        key={deliverable}
                        className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                      >
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.04}>
              <GlassCard className="p-8">
                <SectionHeader title="Challenges faced while developing the project" />
                <p className="mt-6 text-sm leading-8 text-muted">{project.problem}</p>
                <div className="mt-6 space-y-3">
                  {project.challengePoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              <GlassCard className="p-8">
                <SectionHeader title="Solution and implementation" />
                <p className="mt-6 text-sm leading-8 text-muted">{project.solution}</p>
                <div className="mt-6 space-y-3">
                  {project.implementationPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <GlassCard className="p-8">
                <SectionHeader title="Challenges and learnings" />
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">What was hard</p>
                    <div className="mt-4 space-y-3">
                      {project.challengePoints.slice(0, 3).map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">What I learned</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "Placeholder: Add a specific learning about architecture, routing, or API integration from this project.",
                        "Placeholder: Add a specific learning about UI states, responsive behavior, or user workflow clarity.",
                        "Placeholder: Add a specific learning about deployment, debugging, or future maintainability."
                      ].map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <GlassCard className="p-8">
                <SectionHeader title="Potential improvements and future plans" />
                <p className="mt-6 text-sm leading-8 text-muted">{project.impact}</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">Results</p>
                    <div className="mt-4 space-y-3">
                      {project.resultsPoints.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent">
                      What I would improve next
                    </p>
                    <div className="mt-4 space-y-3">
                      {project.nextSteps.map((point) => (
                        <div
                          key={point}
                          className="rounded-2xl border border-white/6 bg-black/10 px-4 py-4 text-sm leading-7 text-muted"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={0.08} className="mt-12">
          <div className="grid gap-4 md:grid-cols-2">
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="group rounded-[28px] border border-white/8 bg-black/10 p-6 transition hover:border-accent/25 hover:bg-accent-soft"
              >
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                  Previous project
                </span>
                <span className="mt-3 block font-display text-2xl font-semibold text-foreground">
                  {previousProject.title}
                </span>
              </Link>
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-black/10 p-6 opacity-60">
                <span className="text-sm text-muted">No previous project</span>
              </div>
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group rounded-[28px] border border-white/8 bg-black/10 p-6 text-left transition hover:border-accent/25 hover:bg-accent-soft md:text-right"
              >
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  Next project
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
                <span className="mt-3 block font-display text-2xl font-semibold text-foreground">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div className="rounded-[28px] border border-white/8 bg-black/10 p-6 opacity-60 md:text-right">
                <span className="text-sm text-muted">No next project</span>
              </div>
            )}
          </div>
        </AnimatedSection>
        <JsonLd data={projectJsonLd} />
      </Container>
    </div>
  );
}
