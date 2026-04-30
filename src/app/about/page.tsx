import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
  Wrench
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { SectionHeader } from "@/components/ui/section-header";
import { TechLogo } from "@/components/ui/tech-logo";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/lib/site";

const principles = [
  {
    title: "Clarity and structure",
    description:
      "Interfaces should communicate hierarchy quickly, reduce friction, and keep the next action obvious.",
    icon: BadgeCheck
  },
  {
    title: "Systems thinking",
    description:
      "Reusable patterns create consistency, improve maintainability, and support growth without visual drift.",
    icon: Blocks
  },
  {
    title: "Delivery discipline",
    description:
      "Strong implementation means balancing speed, quality, performance, and readability throughout the build.",
    icon: Wrench
  },
  {
    title: "Professional standards",
    description:
      "Accessibility, responsive behavior, and operational clarity are baseline expectations, not optional extras.",
    icon: ShieldCheck
  }
] as const;

const engagementFocus = [
  {
    title: "Product platforms and SaaS",
    description:
      "Interfaces where information hierarchy, workflow clarity, and scalable component systems matter."
  },
  {
    title: "Internal tools and dashboards",
    description:
      "Operational products that need better signal, clearer actions, and dependable day-to-day usability."
  },
  {
    title: "Business and marketing websites",
    description:
      "Websites that need stronger positioning, cleaner presentation, and a more credible first impression."
  }
] as const;

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, working principles, delivery standards, and technical capabilities for full-stack product work."
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="About"
            title="A professional profile built around product thinking, engineering discipline, and clear execution."
            description={`${siteConfig.shortBio} I focus on work that needs strong structure, measured design decisions, and implementation quality that holds up in production.`}
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <AnimatedSection delay={0.08}>
            <GlassCard className="h-full p-8">
              <div className="grid gap-6 md:grid-cols-[0.72fr_1.28fr]">
                <ProfilePhoto
                  className="aspect-[4/5] rounded-[30px] border border-white/10 bg-white/5 shadow-card"
                  sizes="(min-width: 1280px) 280px, (min-width: 768px) 220px, 75vw"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">Professional profile</p>
                  <p className="mt-4 text-sm leading-8 text-muted">{siteConfig.aboutMe.journey}</p>
                  <p className="mt-5 text-sm leading-8 text-muted">{siteConfig.aboutMe.enjoy}</p>
                  <p className="mt-5 text-sm leading-8 text-muted">
                    {siteConfig.aboutMe.personality}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/projects" className={buttonVariants({ variant: "primary" })}>
                      View case studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <Link href="/contact" className={buttonVariants({ variant: "secondary" })}>
                      Discuss a project
                    </Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <GlassCard className="h-full p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Engagement focus</p>
              <div className="mt-5 space-y-4">
                {engagementFocus.map((item) => (
                  <div key={item.title} className="rounded-[24px] border border-white/6 bg-black/10 p-5">
                    <p className="font-display text-xl font-semibold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-white/6 bg-surface-3 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Working style</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Best suited to teams that value thoughtful planning, professional communication,
                  and delivery that balances product outcomes with engineering reliability.
                </p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Programming journey",
              description: siteConfig.aboutMe.journey
            },
            {
              title: "Work I enjoy",
              description: siteConfig.aboutMe.enjoy
            },
            {
              title: "Outside programming",
              description: siteConfig.aboutMe.personality
            }
          ].map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.06}>
              <GlassCard className="h-full p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">{item.title}</p>
                <p className="mt-4 text-sm leading-8 text-muted">{item.description}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <AnimatedSection key={item.title} delay={index * 0.06}>
                <GlassCard className="h-full p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <AnimatedSection>
            <GlassCard className="h-full p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Core capabilities</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
                A structured technical toolkit aligned to product delivery.
              </h2>
              <p className="mt-4 text-sm leading-8 text-muted">
                The tools matter less than how they are applied. I use the stack to support product
                clarity, operational reliability, and maintainable implementation across the full
                delivery lifecycle.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[24px] border border-white/8 bg-surface-3 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Location</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{siteConfig.location}</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-surface-3 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Availability</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">{siteConfig.availability}</p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <div className="grid gap-5">
            {skillGroups.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.05}>
                <GlassCard className="p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">{group.title}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                        {group.description}
                      </h3>
                    </div>
                    <div className="flex max-w-xl flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-sm text-muted"
                        >
                          <TechLogo name={item} className="h-5 w-5 border-white/10 p-1" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Education"
              title="Academic background that supports the technical foundation."
              description="Education is presented with the above-HSC qualification, institution context, study focus, and the practical technical foundation it supports."
            />
          </AnimatedSection>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {education.map((item, index) => (
              <AnimatedSection
                key={`${item.institution}-${item.degree}`}
                delay={index * 0.07}
              >
                <GlassCard className="h-full p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/8 bg-surface-3 p-3 text-accent">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    {item.institution}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-muted">{item.summary}</p>
                  <div className="mt-5 grid gap-3">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-white/6 bg-black/10 px-4 py-3 text-sm text-muted"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <AnimatedSection>
            <SectionHeader
              eyebrow="Experience"
              title="Professional experience framed around scope, ownership, and outcomes."
              description="Independent, freelance, and product-driven work can be highly credible when the business context, responsibilities, and delivery results are explained clearly."
            />
          </AnimatedSection>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {experience.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.07}>
                <GlassCard className="h-full p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">{item.period}</p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/8 bg-surface-3 p-3 text-accent">
                      <BriefcaseBusiness className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">{item.company}</p>
                  <p className="mt-5 text-sm leading-7 text-muted">{item.summary}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
