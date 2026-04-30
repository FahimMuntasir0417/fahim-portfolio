import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/layout/container";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ContactForm } from "@/components/ui/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig, socialLinks } from "@/lib/site";

const contactPoints = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail
  },
  ...socialLinks
    .filter((link) => link.label === "GitHub" || link.label === "LinkedIn")
    .map((link) => ({
      label: link.label,
      value: link.display,
      href: link.href,
      icon: link.label === "GitHub" ? Github : Linkedin
    })),
  {
    label: "Location",
    value: siteConfig.location,
    href: "#",
    icon: MapPin
  }
] as const;

const intakePoints = [
  "Project goals and expected outcome",
  "Current product stage or delivery context",
  "Relevant timeline, scope, and constraints"
] as const;

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for web application engineering, internal tools, product interfaces, and business website delivery."
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <AnimatedSection>
          <SectionHeader
            eyebrow="Contact"
            title="A professional contact flow with clear expectations and low-friction outreach."
            description="Use this page to share what you are building, the business goal behind it, and the delivery context. The aim is to make the first conversation efficient, relevant, and actionable."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <AnimatedSection delay={0.06}>
            <GlassCard className="h-full p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Contact details</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
                Share the business objective, the scope, and the delivery timeline.
              </h2>
              <p className="mt-5 text-sm leading-8 text-muted">
                I am most effective on projects that need clearer product structure, stronger
                interface quality, and implementation decisions grounded in real delivery
                constraints.
              </p>

              <div className="mt-6 rounded-[24px] border border-white/8 bg-surface-3 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Useful first-message details</p>
                <div className="mt-4 space-y-3">
                  {intakePoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/6 bg-black/10 px-4 py-3 text-sm text-muted"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                {contactPoints.map((item) => {
                  const Icon = item.icon;
                  const isLink = item.href !== "#";

                  return isLink ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="rounded-[24px] border border-white/8 bg-black/10 px-5 py-4 hover:border-accent/20 hover:bg-accent-soft"
                    >
                      <div className="flex items-center gap-4">
                        <span className="rounded-2xl bg-accent-soft p-3 text-accent">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted">{item.value}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="rounded-[24px] border border-white/8 bg-black/10 px-5 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <span className="rounded-2xl bg-accent-soft p-3 text-accent">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <GlassCard className="p-8">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Inquiry form</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground">
                Keep the first message concise, outcome-focused, and relevant.
              </h2>
              <p className="mt-5 text-sm leading-8 text-muted">
                The current form opens your mail client with a structured draft message. In a live
                production setup, the same UI can be connected to a transactional email service or
                a dedicated API endpoint.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </Container>
    </div>
  );
}
