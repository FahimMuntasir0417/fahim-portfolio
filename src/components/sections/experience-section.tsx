import { experience } from "@/data/experience";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";

export function ExperienceSection() {
  return (
    <section className="py-24">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Journey"
            title="Experience framed around scope, ownership, and delivery outcomes."
            description="Professional credibility comes from clear responsibilities, strong execution, and well-documented results, regardless of whether the work came through freelance, independent, or product-led engagements."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <AnimatedSection>
            <GlassCard className="h-full p-6 sm:sticky sm:top-28 sm:p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Work style</p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
                Independent, product-minded, and focused on clarity under real constraints.
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {siteConfig.shortBio} The emphasis is on ownership, usability, and delivery quality
                supported by concrete work, clear responsibilities, and measurable impact.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-[24px] border border-white/8 bg-surface-3 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Timeline</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">2022 - Present</p>
                </div>
                <div className="rounded-[24px] border border-white/8 bg-surface-3 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">Tracks</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    {experience.length} focused experience blocks
                  </p>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <div className="relative space-y-5 pl-0 md:pl-8">
            <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0 md:block" />
            {experience.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.08} className="relative">
                <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border border-accent/30 bg-background md:block" />
                <GlassCard className="overflow-hidden p-6 md:ml-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.08),transparent_36%)]" />
                  <div className="relative">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-accent">
                          {item.period}
                        </p>
                        <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted">{item.company}</p>
                      </div>
                      <p className="max-w-xl text-sm leading-7 text-muted">{item.summary}</p>
                    </div>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
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
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
