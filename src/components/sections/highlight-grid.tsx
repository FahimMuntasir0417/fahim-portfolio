import { BrainCircuit, Layers3, LayoutGrid, Rocket, ShieldCheck, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

type HighlightCard = {
  title: string;
  body: string;
  meta: string;
  icon: typeof LayoutGrid;
  className?: string;
  accentClass: string;
};

const cards: HighlightCard[] = [
  {
    title: "Who I am",
    body: siteConfig.shortBio,
    meta: "Thoughtful systems over noisy trends",
    icon: LayoutGrid,
    className: "lg:col-span-2",
    accentClass:
      "bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.16),transparent_34%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]"
  },
  {
    title: "What I build",
    body: "Scalable web applications, business websites, internal dashboards, and decision-ready case studies.",
    meta: `${projects.length} flagship project stories`,
    icon: Rocket,
    accentClass: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),transparent_36%)]"
  },
  {
    title: "How I work",
    body: "I start from product priorities, then shape layout, states, and architecture around the real workflow.",
    meta: "Product-first engineering",
    icon: ShieldCheck,
    accentClass: "bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_34%)]"
  },
  {
    title: "Current focus",
    body: "AI-assisted workflows, support tooling, and interfaces that make complex systems easier to operate.",
    meta: "Useful AI, not decorative AI",
    icon: BrainCircuit,
    className: "lg:col-span-2",
    accentClass:
      "bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.16),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.1),transparent_28%)]"
  },
  {
    title: "Toolkit depth",
    body: "Frontend, backend, deployment, and a practical understanding of performance and accessibility.",
    meta: `${skillGroups.length} structured skill groups`,
    icon: Layers3,
    accentClass: "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_34%)]"
  },
  {
    title: "What you get",
    body: "Strong content framing, cleaner UI systems, and a calmer product experience for end users.",
    meta: siteConfig.location,
    icon: Zap,
    accentClass: "bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_34%)]"
  }
];

export function HighlightGrid() {
  return (
    <section className="py-24">
      <Container>
        <AnimatedSection className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Highlights"
            title="A portfolio homepage structured like a professional product presentation."
            description="The grid below explains the working style behind the visuals: clear content framing, deliberate systems, and interfaces that stay readable as they grow."
          />

          <div className="rounded-[26px] border border-white/8 bg-surface-3 px-5 py-4 shadow-soft lg:max-w-sm">
            <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Positioning</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Built to communicate credibility, clarity, and execution quality from the first screen.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <AnimatedSection key={card.title} delay={index * 0.06} className={card.className}>
                <GlassCard className="group h-full overflow-hidden p-0 hover:-translate-y-1 hover:border-accent/20 hover:shadow-glow">
                  <div className={cn("absolute inset-0 opacity-90", card.accentClass)} />
                  <div className="relative flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-7 text-muted sm:text-base">
                      {card.body}
                    </p>
                    <p className="mt-6 text-xs uppercase tracking-[0.22em] text-accent">
                      {card.meta}
                    </p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
