"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Layers3, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { SectionHeader } from "@/components/ui/section-header";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";
import { siteConfig } from "@/lib/site";

const brandSignals = [
  "Product-minded engineering",
  "Clean interface systems",
  "Reliable delivery habits"
] as const;

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!sectionRef.current) {
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        gsap.set("[data-about-reveal], [data-about-image]", { opacity: 1, y: 0, yPercent: 0 });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          once: true
        }
      });

      timeline
        .fromTo(
          "[data-about-reveal]",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.72, stagger: 0.08 }
        )
        .fromTo(
          "[data-about-image]",
          { opacity: 0, y: 36, scale: 0.985 },
          { opacity: 1, y: 0, scale: 1, duration: 0.82 },
          "-=0.42"
        );

      gsap.to("[data-about-image]", {
        yPercent: -7,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      gsap.to("[data-about-copy]", {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="scroll-mt-28 py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div data-about-image className="relative">
            <GlassCard className="overflow-hidden p-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_28%)]" />
              <div className="relative rounded-[28px] bg-[#07111f]/90 p-3">
                <ProfilePhoto
                  className="aspect-[4/5] rounded-[24px] border border-white/10 shadow-card"
                  sizes="(min-width: 1280px) 380px, (min-width: 768px) 42vw, 86vw"
                />
              </div>
            </GlassCard>

            <div
              data-gsap-hover
              data-cursor="hover"
              className="absolute -bottom-5 left-5 hidden rounded-[24px] border border-white/10 bg-[#07111f]/85 px-5 py-4 shadow-card backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-2xl bg-accent-soft p-3 text-accent">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Brand position</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">Clear systems, real outcomes</p>
                </div>
              </div>
            </div>
          </div>

          <div data-about-copy>
            <div data-about-reveal>
              <SectionHeader
                eyebrow="About"
                title="A full-stack profile shaped around clarity, craft, and dependable product delivery."
                description={`${siteConfig.shortBio} My work pairs strong interface judgment with practical engineering decisions, so the final product feels polished and remains maintainable.`}
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3" data-gsap-stagger>
              {brandSignals.map((signal) => (
                <div
                  key={signal}
                  data-about-reveal
                  data-gsap-item
                  data-gsap-hover
                  className="rounded-[24px] border border-white/8 bg-surface-3 p-5 shadow-soft"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                    <BadgeCheck className="h-4 w-4" />
                  </span>
                  <p className="mt-4 text-sm font-medium leading-6 text-foreground">{signal}</p>
                </div>
              ))}
            </div>

            <GlassCard data-about-reveal className="mt-6 overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.1),transparent_34%)]" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <span className="rounded-2xl bg-accent-soft p-3 text-accent">
                    <Layers3 className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      About me beyond the stack.
                    </h3>
                    <p className="mt-4 text-sm leading-8 text-muted">
                      {siteConfig.aboutMe.journey}
                    </p>
                    <p className="mt-4 text-sm leading-8 text-muted">
                      {siteConfig.aboutMe.enjoy}
                    </p>
                    <p className="mt-4 text-sm leading-8 text-muted">
                      {siteConfig.aboutMe.personality}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/about" className={buttonVariants({ variant: "primary" })}>
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link href="/resume" className={buttonVariants({ variant: "secondary" })}>
                    Resume
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  );
}
