"use client";

import {
  BadgeCheck,
  Code2,
  Layers3,
  Sparkles,
  type LucideIcon
} from "lucide-react";
import { useRef } from "react";
import { skillGroups } from "@/data/skills";
import { Container } from "@/components/layout/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { TechLogo } from "@/components/ui/tech-logo";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const groupIcons: Record<string, LucideIcon> = {
  Core: Code2,
  Proficient: BadgeCheck,
  "Familiar With": Sparkles
};

const totalSkillCount = skillGroups.reduce((total, group) => total + group.items.length, 0);

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={cn(
        "scroll-mt-28 py-24 opacity-0 transition duration-700 ease-out motion-reduce:opacity-100",
        isInView ? "translate-y-0 opacity-100" : "translate-y-8"
      )}
    >
      <Container>
        <SectionHeader
          eyebrow="Skills"
          title="A practical skill map grouped by confidence, not subjective percentage scores."
          description="The stack is organized as Core, Proficient, and Familiar With so technical reviewers can scan the signal without interpreting arbitrary self-ratings."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <GlassCard className="h-full overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.1),transparent_30%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-accent">
                <Layers3 className="h-3.5 w-3.5" />
                Capability map
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground">
                Skills presented as credible working categories.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                This layout avoids numeric claims and separates primary product engineering tools
                from adjacent libraries, animation tools, and workflow experiments.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {[
                  { label: "Skill groups", value: skillGroups.length },
                  { label: "Mapped tools", value: totalSkillCount }
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-white/8 bg-white/70 px-4 py-4 dark:bg-white/[0.04]"
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
            </div>
          </GlassCard>

          <div className="grid gap-5 lg:grid-cols-2">
            {skillGroups.map((group, index) => (
              <GlassCard
                key={group.title}
                data-cursor="hover"
                className="group h-full overflow-hidden p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/20 hover:shadow-glow"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background: `radial-gradient(circle at top right, rgb(${group.tone} / 0.14), transparent 36%)`
                  }}
                />
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <span
                      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/70 dark:bg-white/[0.05]"
                      style={{ color: `rgb(${group.tone})` }}
                    >
                      {(() => {
                        const Icon = groupIcons[group.title] ?? Code2;
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-xs uppercase tracking-[0.22em]"
                        style={{ color: `rgb(${group.tone})` }}
                      >
                        {group.title}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">
                        {group.focus}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-muted">{group.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/75 px-3 py-2 text-sm text-muted transition duration-200 hover:scale-[1.03] hover:border-accent/25 hover:bg-accent-soft hover:text-foreground dark:bg-black/10"
                      >
                        <TechLogo name={item} className="h-6 w-6" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
