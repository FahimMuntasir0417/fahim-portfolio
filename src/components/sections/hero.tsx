"use client";

import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  FileText,
  Mail,
  MapPin,
  Sparkles,
  TerminalSquare
} from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CommandHint } from "@/components/ui/command-menu";
import { GlassCard } from "@/components/ui/glass-card";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";
import { siteConfig } from "@/lib/site";

const terminalLines = [
  "$ shaping product-grade interfaces",
  "> framing case studies that read clearly",
  "> building AI-assisted workflow surfaces",
  "> keeping code lean, scalable, and maintainable"
];

const focusPoints = [
  "Product-minded structure and clear content framing",
  "Professional UI systems with responsive polish",
  "Fast, accessible builds that stay maintainable"
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!heroRef.current) {
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set(
          "[data-hero-kicker], [data-hero-title-line], [data-hero-copy], [data-hero-actions], [data-hero-card], [data-hero-stat], [data-hero-visual]",
          { opacity: 1, y: 0, yPercent: 0 }
        );
        return;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .fromTo("[data-hero-kicker]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.55 })
        .fromTo(
          "[data-hero-title-line]",
          { opacity: 0, yPercent: 112 },
          { opacity: 1, yPercent: 0, duration: 0.86, stagger: 0.11 },
          "-=0.2"
        )
        .fromTo(
          "[data-hero-copy]",
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.62, stagger: 0.08 },
          "-=0.34"
        )
        .fromTo(
          "[data-hero-card]",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.58, stagger: 0.07 },
          "-=0.28"
        )
        .fromTo(
          "[data-hero-actions]",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.58, stagger: 0.08 },
          "-=0.28"
        )
        .fromTo(
          "[data-hero-stat]",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.52, stagger: 0.07 },
          "-=0.24"
        )
        .fromTo(
          "[data-hero-visual]",
          { opacity: 0, y: 34, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.82 },
          "-=0.56"
        );

      gsap.to("[data-hero-float]", {
        y: -14,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.34
      });
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.14),transparent_46%)]" />
      <div
        data-hero-float
        className="absolute left-[7%] top-24 h-16 w-16 rounded-[24px] border border-white/10 bg-white/[0.04] shadow-soft"
      />
      <div
        data-hero-float
        className="absolute right-[10%] top-32 hidden h-24 w-24 rounded-full border border-accent/20 bg-accent-soft blur-[1px] lg:block"
      />
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="max-w-3xl">
              <div data-hero-kicker className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-xs font-semibold text-accent">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  {siteConfig.role}
                </span>
                <Badge tone="accent">{siteConfig.availability}</Badge>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-3 px-4 py-2 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {siteConfig.location}
                </span>
              </div>

              <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-balance text-foreground sm:text-6xl lg:text-[5.25rem] lg:leading-[0.96]">
                <span className="block overflow-hidden pb-1">
                  <span data-hero-title-line className="block">
                    Full-stack web products
                  </span>
                </span>
                <span className="mt-2 block overflow-hidden pb-1">
                  <span data-hero-title-line className="text-highlight block">
                    with clearer structure and stronger professional presentation.
                  </span>
                </span>
              </h1>

              <p data-hero-copy className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                {siteConfig.intro} I focus on interfaces that communicate the product clearly and
                still feel reliable once the system has real users and real scope.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    data-hero-card
                    data-gsap-hover
                    data-cursor="hover"
                    className="flex items-start gap-3 rounded-[24px] border border-white/8 bg-white/[0.04] px-4 py-4 shadow-soft"
                  >
                    <span className="mt-0.5 rounded-full bg-accent-soft p-2 text-accent">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-6 text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  data-hero-actions
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  View projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  data-hero-actions
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Contact me
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href={siteConfig.resumeHref}
                  data-hero-actions
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  View / Download resume
                  <Download className="ml-2 h-4 w-4" />
                </Link>
                <span data-hero-actions>
                  <CommandHint />
                </span>
              </div>

              <p data-hero-copy className="mt-4 text-sm text-muted">
                {siteConfig.responseTime}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {siteConfig.stats.map((stat) => (
                  <div
                    key={stat.label}
                    data-hero-stat
                    data-gsap-hover
                    className="rounded-[26px] border border-white/8 bg-surface-3 p-4 shadow-soft"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                      {stat.label}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-hero-visual className="relative hero-glow">
            <div className="relative" data-gsap-parallax="10">
              <GlassCard className="overflow-hidden p-6 sm:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.12),transparent_26%)]" />
                <div className="relative grid gap-6 md:grid-cols-[0.82fr_1.18fr]">
                  <div className="space-y-4">
                    <div className="rounded-[32px] bg-[linear-gradient(160deg,rgba(103,232,249,0.35),rgba(255,255,255,0.04),rgba(251,191,36,0.18))] p-[1px]">
                      <div className="rounded-[31px] bg-[#081120]/90 p-3">
                        <ProfilePhoto
                          className="aspect-[4/5] rounded-[28px] border border-white/10 shadow-card"
                          priority
                          sizes="(min-width: 1280px) 280px, (min-width: 768px) 220px, 80vw"
                        />
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.22em] text-accent">
                        Preferred engagements
                      </p>
                      <p className="mt-3 text-base font-semibold leading-7 text-foreground">
                        Product teams, founders, and companies that need cleaner structure, better
                        usability, and a stronger first impression.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-accent">
                          Professional designation
                        </p>
                        <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                          {siteConfig.role} focused on useful, polished web products.
                        </h2>
                      </div>
                      <span className="hidden rounded-full border border-accent/20 bg-accent-soft p-3 text-accent sm:block">
                        <FileText className="h-5 w-5" />
                      </span>
                    </div>

                    <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                      {siteConfig.availabilityDetail}
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[22px] border border-white/8 bg-[#07111f]/80 px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">Focus</p>
                        <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                          Next.js, dashboards, business websites, and AI workflow UX.
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-white/8 bg-[#07111f]/80 px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">Delivery</p>
                        <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                          Clear systems, responsive polish, accessible states, and lighter bundles.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[24px] border border-white/8 bg-[#07111f]/85 p-5">
                      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted">
                        <TerminalSquare className="h-4 w-4 text-accent" />
                        Current workflow
                      </div>
                      <div className="space-y-3 font-mono text-sm text-slate-300">
                        {terminalLines.map((line, index) => (
                          <p key={line}>
                            <span className="mr-3 text-accent">0{index + 1}</span>
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {siteConfig.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-[0.16em] text-muted"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>

              <div data-hero-float className="absolute -right-3 top-8 hidden rounded-[24px] border border-white/10 bg-[#07111f]/80 px-4 py-3 shadow-card backdrop-blur-xl xl:block">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Now shipping</p>
                <p className="mt-2 text-sm font-medium text-foreground">Professional digital products</p>
              </div>

              <div data-hero-float className="absolute -bottom-6 left-6 hidden rounded-[24px] border border-white/8 bg-[#07111f]/80 px-4 py-3 shadow-card backdrop-blur-xl lg:flex lg:items-center lg:gap-3">
                <BriefcaseBusiness className="h-4 w-4 text-accent" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Currently building
                  </p>
                  <p className="text-sm font-medium text-foreground">AI-assisted ops dashboard</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
