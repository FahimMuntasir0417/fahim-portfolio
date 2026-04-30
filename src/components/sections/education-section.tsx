import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-28 py-24">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Education"
            title="Educational qualification with the technical foundation behind the work."
            description="This section highlights education above HSC, academic focus areas, and the practical programming habits that support full-stack project delivery."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-5 lg:grid-cols-2" data-gsap-stagger>
          {education.map((item, index) => (
            <AnimatedSection key={`${item.institution}-${item.degree}`} delay={index * 0.07} data-gsap-item>
              <GlassCard className="h-full overflow-hidden p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.1),transparent_34%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-foreground">
                        {item.degree}
                      </h3>
                      <p className="mt-2 text-sm text-muted">
                        {item.institution}
                        {item.location ? ` - ${item.location}` : ""}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/8 bg-surface-3 p-3 text-accent">
                      <GraduationCap className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-8 text-muted">{item.summary}</p>

                  <div className="mt-6 grid gap-3">
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
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}

