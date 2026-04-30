import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/layout/container";
import { JsonLd } from "@/components/seo/json-ld";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { getProjectBySlug, projects } from "@/data/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

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
          alt: `${project.title} preview`
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

  const liveProjectLink = project.links.find((link) =>
    link.label.toLowerCase().includes("live")
  );
  const githubRepositoryLink = project.links.find((link) =>
    link.label.toLowerCase().includes("github")
  );

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

              <div className="mt-6 rounded-[24px] border border-white/8 bg-surface-3 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Brief description</p>
                <p className="mt-3 text-sm leading-8 text-muted">{project.summary}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.map((link) => {
                  const isGithub = link.label.toLowerCase().includes("github");
                  const Icon = isGithub ? Github : ExternalLink;

                  return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: isGithub ? "secondary" : "primary"
                    })}
                  >
                    {link.label}
                    <Icon className="ml-2 h-4 w-4" />
                  </a>
                  );
                })}
              </div>
              <p className="mt-4 text-sm leading-7 text-muted">{project.accessNote}</p>
            </div>

            <GlassCard className="overflow-hidden p-4">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={1200}
                height={840}
                className="h-auto w-full rounded-[24px] object-cover"
                priority
              />
            </GlassCard>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 0.06}>
              <GlassCard className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-muted">{metric.label}</p>
                <p className="mt-3 font-display text-3xl font-semibold text-foreground">{metric.value}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <AnimatedSection>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Engagement summary</p>
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm text-muted">Main technology stack used</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-muted"
                      >
                        <Code2 className="h-3.5 w-3.5 text-accent" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {liveProjectLink ? (
                  <div>
                    <p className="text-sm text-muted">Live project link</p>
                    <a
                      href={liveProjectLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center text-lg font-semibold text-foreground hover:text-accent"
                    >
                      {liveProjectLink.href}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                ) : null}
                {githubRepositoryLink ? (
                  <div>
                    <p className="text-sm text-muted">GitHub repository link</p>
                    <a
                      href={githubRepositoryLink.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center text-lg font-semibold text-foreground hover:text-accent"
                    >
                      {githubRepositoryLink.href}
                      <Github className="ml-2 h-4 w-4" />
                    </a>
                    <p className="mt-2 text-sm leading-7 text-muted">
                      Repository links can be replaced or hidden when a client project is private.
                    </p>
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
        <JsonLd data={projectJsonLd} />
      </Container>
    </div>
  );
}
