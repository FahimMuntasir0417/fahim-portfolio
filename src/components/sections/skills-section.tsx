"use client";

import {
  BrainCircuit,
  CheckCircle2,
  Code2,
  Database,
  Gauge,
  Layers3,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon
} from "lucide-react";
import type { CSSProperties } from "react";
import { useRef } from "react";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Database,
  Tools: Wrench,
  "AI/ML": BrainCircuit
};

const skillIcons: Record<string, LucideIcon> = {
  "Next.js": Code2,
  React: Sparkles,
  TypeScript: Code2,
  "Tailwind CSS": Layers3,
  GSAP: Gauge,
  ScrollTrigger: Sparkles,
  "Node.js": Server,
  Express: Server,
  Prisma: Database,
  "REST APIs": Gauge,
  "Authentication flows": CheckCircle2,
  PostgreSQL: Database,
  MongoDB: Database,
  "Relational design": Layers3,
  "Query optimization": Gauge,
  Git: Wrench,
  Docker: Wrench,
  Vercel: Sparkles,
  "CI thinking": CheckCircle2,
  "Design systems": Layers3,
  "OpenAI APIs": BrainCircuit,
  "Prompt workflows": Sparkles,
  "Vector search basics": Gauge,
  "Evaluation thinking": CheckCircle2
};

const totalSkillCount = skillGroups.reduce((total, group) => total + group.items.length, 0);
const averageDepth = Math.round(
  skillGroups.reduce((total, group) => total + group.level, 0) / skillGroups.length
);

function getGaugeStyle(tone: string, level: number): CSSProperties {
  return {
    background: `conic-gradient(rgb(${tone}) ${level}%, rgb(var(--border) / 0.14) 0)`
  };
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!sectionRef.current) {
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set("[data-skill-card], [data-skill-meter], [data-skill-chip]", {
          opacity: 1,
          scale: 1,
          scaleX: 1,
          y: 0
        });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true
        }
      });

      timeline
        .fromTo(
          "[data-skill-card]",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.72, stagger: 0.08 }
        )
        .fromTo(
          "[data-skill-meter]",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.86, stagger: 0.07 },
          "-=0.46"
        )
        .fromTo(
          "[data-skill-chip]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.42, stagger: 0.025 },
          "-=0.42"
        );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="skills" className="scroll-mt-28 py-24">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Skills"
            title="A visual map of the stack I use to design, build, and ship polished web products."
            description="Skills are grouped by delivery role, making the frontend, backend, data, AI, and tooling strengths easy to scan at a glance."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <AnimatedSection>
            <GlassCard data-skill-card className="h-full overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.12),transparent_30%),linear-gradient(180deg,transparent,rgba(255,255,255,0.03))]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-accent">
                  <Layers3 className="h-3.5 w-3.5" />
                  Capability map
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground">
                  Categorized strengths with a quick read on where each skill group fits.
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  The chart below keeps the portfolio practical: core technologies, adjacent
                  workflow skills, and delivery tools are presented as a system instead of a flat
                  keyword list.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  {[
                    { label: "Skill groups", value: skillGroups.length },
                    { label: "Mapped tools", value: totalSkillCount },
                    { label: "Avg. depth", value: `${averageDepth}%` }
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[22px] border border-white/8 bg-white/[0.04] px-4 py-4"
                    >
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                        {stat.label}
                      </p>
                      <p className="mt-2 font-display text-2xl font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-5">
                  {skillGroups.map((group) => {
                    const Icon = groupIcons[group.title] ?? Gauge;

                    return (
                      <div key={group.title}>
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <div className="flex min-w-0 items-center gap-3">
                            <span
                              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]"
                              style={{ color: `rgb(${group.tone})` }}
                            >
                              <Icon className="h-4 w-4" />
                            </span>
                            <div className="min-w-0">
                              <p className="truncate text-sm font-semibold text-foreground">
                                {group.title}
                              </p>
                              <p className="truncate text-xs text-muted">{group.focus}</p>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-foreground">
                            {group.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full"
                            data-skill-meter
                            style={{
                              width: `${group.level}%`,
                              background: `linear-gradient(90deg, rgb(${group.tone} / 0.42), rgb(${group.tone}))`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <div className="grid gap-5 lg:grid-cols-2">
            {skillGroups.map((group, index) => (
              <AnimatedSection key={group.title} delay={index * 0.06}>
                <GlassCard
                  data-skill-card
                  data-gsap-hover
                  data-cursor="hover"
                  className="group h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-accent/20 hover:shadow-glow"
                >
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      background: `radial-gradient(circle at top right, rgb(${group.tone} / 0.16), transparent 36%)`
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <p
                          className="text-xs uppercase tracking-[0.22em]"
                          style={{ color: `rgb(${group.tone})` }}
                        >
                          {group.title}
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                          {group.focus}
                        </h3>
                      </div>
                      <div
                        className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full p-1"
                        style={getGaugeStyle(group.tone, group.level)}
                        aria-label={`${group.title} depth ${group.level}%`}
                      >
                        <div className="grid h-full w-full place-items-center rounded-full bg-surface">
                          <span className="text-sm font-semibold text-foreground">
                            {group.level}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-muted">{group.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => {
                        const SkillIcon = skillIcons[item] ?? CheckCircle2;

                        return (
                          <span
                            key={item}
                            data-skill-chip
                            className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-black/10 px-3 py-2 text-sm text-muted"
                          >
                            <SkillIcon
                              className="h-3.5 w-3.5"
                              style={{ color: `rgb(${group.tone})` }}
                            />
                            {item}
                          </span>
                        );
                      })}
                    </div>

                    <div className="mt-6 flex items-center justify-between rounded-[22px] border border-white/8 bg-white/[0.04] px-4 py-3">
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted">
                        <Sparkles className="h-3.5 w-3.5" />
                        Toolkit
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {group.items.length} skills
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
