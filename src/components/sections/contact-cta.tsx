"use client";

import Link from "next/link";
import { ArrowRight, Github, Globe2, Linkedin, Mail, Phone } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/contact-form";
import { GlassCard } from "@/components/ui/glass-card";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";
import { siteConfig, socialLinks } from "@/lib/site";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Phone,
  X: Globe2
} as const;

const links = [
  { label: "Email", href: `mailto:${siteConfig.email}`, display: siteConfig.email },
  { label: "Phone", href: siteConfig.phoneHref, display: siteConfig.phone },
  ...socialLinks.map((link) => ({
    label: link.label,
    href: link.href,
    display: link.display
  }))
];

export function ContactCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!sectionRef.current) {
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set("[data-contact-reveal]", { opacity: 1, y: 0 });
        return;
      }

      gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 76%",
          once: true
        }
      }).fromTo(
        "[data-contact-reveal]",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.72, stagger: 0.08 }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="contact" className="scroll-mt-28 py-24">
      <Container>
          <GlassCard className="overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_28%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div
                  data-contact-reveal
                  className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent"
                >
                  Contact
                </div>
                <h2 data-contact-reveal className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
                  Build something clear, credible, and ready for real users from the first release.
                </h2>
                <p data-contact-reveal className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  Whether you need a business website, a product interface, or a full-stack web
                  application, I can help shape the structure and deliver the implementation.
                </p>

                <div data-contact-reveal className="mt-6 flex flex-wrap gap-2">
                  {siteConfig.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.16em] text-muted"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div data-contact-reveal className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className={buttonVariants({ variant: "primary", size: "lg" })}>
                    Start a conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href={siteConfig.resumeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "secondary", size: "lg" })}
                  >
                    View resume
                  </a>
                </div>

                <p data-contact-reveal className="mt-4 text-sm text-muted">{siteConfig.responseTime}</p>
              </div>

              <div data-contact-reveal className="rounded-[28px] border border-white/8 bg-black/10 p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-accent">Project inquiry</p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Send a concise first message with goals, scope, and timeline. The form submits
                  directly through the portfolio contact API.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>

              <div data-contact-reveal className="grid gap-3 lg:col-span-2 lg:grid-cols-3">
                {links.map((link) => {
                  const Icon =
                    link.label === "GitHub"
                      ? iconMap.GitHub
                      : link.label === "LinkedIn"
                        ? iconMap.LinkedIn
                        : link.label === "X"
                          ? iconMap.X
                          : link.label === "Phone"
                            ? iconMap.Phone
                          : iconMap.Email;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      data-cursor="hover"
                      className="rounded-[24px] border border-white/8 bg-black/10 px-5 py-4 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-accent-soft"
                    >
                      <div className="flex items-center gap-4">
                        <span className="rounded-2xl bg-accent-soft p-3 text-accent">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-foreground">{link.label}</p>
                          <p className="text-sm text-muted">{link.display}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </GlassCard>
      </Container>
    </section>
  );
}
