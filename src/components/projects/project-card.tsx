"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { TechLogo } from "@/components/ui/tech-logo";
import type { Project } from "@/data/projects";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      const card = cardRef.current;

      if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const image = card.querySelector<HTMLElement>("[data-project-image]");
      const icon = card.querySelector<HTMLElement>("[data-project-icon]");

      const handlePointerEnter = () => {
        gsap.to(card, { y: -6, scale: 1.01, duration: 0.28, ease: "power3.out" });
        gsap.to(image, { scale: 1.045, duration: 0.48, ease: "power3.out" });
        gsap.to(icon, { x: 3, y: -3, duration: 0.28, ease: "power3.out" });
      };

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        gsap.to(card, {
          rotateX: y * -3,
          rotateY: x * 3,
          transformPerspective: 900,
          duration: 0.32,
          ease: "power3.out"
        });
      };

      const handlePointerLeave = () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 0.34,
          ease: "power3.out"
        });
        gsap.to(image, { scale: 1, duration: 0.42, ease: "power3.out" });
        gsap.to(icon, { x: 0, y: 0, duration: 0.28, ease: "power3.out" });
      };

      card.addEventListener("pointerenter", handlePointerEnter);
      card.addEventListener("pointermove", handlePointerMove);
      card.addEventListener("pointerleave", handlePointerLeave);

      return () => {
        card.removeEventListener("pointerenter", handlePointerEnter);
        card.removeEventListener("pointermove", handlePointerMove);
        card.removeEventListener("pointerleave", handlePointerLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <GlassCard
      ref={cardRef}
      data-gsap-hover="off"
      data-cursor="hover"
      className={cn(
        "group flex h-full flex-col overflow-hidden p-0",
        "hover:-translate-y-1 hover:border-accent/20 hover:shadow-glow",
        className
      )}
    >
      <div className="relative overflow-hidden border-b border-white/8 bg-[#07111f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.16),transparent_36%),linear-gradient(180deg,transparent,rgba(7,17,31,0.2))]" />
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={1200}
          height={840}
          data-project-image
          className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.category}</Badge>
          <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-200">
            {project.year}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-200 backdrop-blur"
            >
              <TechLogo name={item} className="h-5 w-5 border-white/20 p-1" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{project.summary}</p>
          </div>
          <span
            data-project-icon
            className="hidden rounded-full border border-white/8 bg-surface-3 p-3 text-accent sm:inline-flex"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <div className="mt-5 space-y-3 text-sm text-muted">
          <p>
            <span className="font-medium text-foreground">Problem:</span> {project.problem}
          </p>
          <p>
            <span className="font-medium text-foreground">Solution:</span> {project.solution}
          </p>
          <p>
            <span className="font-medium text-foreground">Impact:</span> {project.impact}
          </p>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/6 bg-surface-3 px-4 py-4 text-sm leading-7 text-muted">
          <p>
            <span className="font-medium text-foreground">Audience:</span> {project.audience}
          </p>
          <p className="mt-2">
            <span className="font-medium text-foreground">Access:</span> {project.accessNote}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-muted"
            >
              <TechLogo name={item} className="h-5 w-5 border-white/10 p-1" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/6 bg-black/10 px-4 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">{metric.label}</p>
              <p className="mt-2 text-lg font-semibold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href={`/projects/${project.slug}`} className={buttonVariants({ variant: "primary" })}>
            View More / Details
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </GlassCard>
  );
}
