"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";

export function SiteBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!backgroundRef.current) {
        return;
      }

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reducedMotion) {
        return;
      }

      gsap.to("[data-bg-drift]", {
        x: 28,
        y: -24,
        duration: 7.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.42
      });

      gsap.to("[data-bg-grid]", {
        x: 72,
        y: 72,
        duration: 22,
        ease: "none",
        repeat: -1
      });

      gsap.to("[data-bg-rail]", {
        xPercent: 125,
        opacity: 0.42,
        duration: 8.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1.15
      });

      gsap.to("[data-bg-panel]", {
        rotate: 4,
        y: -18,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.8
      });

      if (isHomePage) {
        gsap.to("[data-home-motion]", {
          y: -26,
          opacity: 0.5,
          duration: 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.35
        });
      }
    },
    { scope: backgroundRef, dependencies: [isHomePage], revertOnUpdate: true }
  );

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_30%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.06),transparent_26%)]" />
      <div data-bg-drift className="absolute left-[4%] top-12 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div data-bg-drift className="absolute right-[6%] top-24 h-[24rem] w-[24rem] rounded-full bg-accent-2/10 blur-3xl" />
      <div data-bg-drift className="absolute bottom-[-10rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div
        data-bg-grid
        className="absolute inset-[-72px] bg-grid opacity-[0.055] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
      />
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)] opacity-40" />

      <div
        data-bg-rail
        className="absolute left-[-28%] top-[18%] h-px w-[42%] bg-[linear-gradient(90deg,transparent,rgba(103,232,249,0.7),transparent)] opacity-25"
      />
      <div
        data-bg-rail
        className="absolute left-[-34%] top-[58%] h-px w-[48%] bg-[linear-gradient(90deg,transparent,rgba(251,191,36,0.56),transparent)] opacity-20"
      />

      <div
        data-bg-panel
        className="absolute right-[8%] top-[42%] hidden h-36 w-36 rounded-[34px] border border-white/8 bg-white/[0.025] shadow-soft md:block"
      />
      <div
        data-bg-panel
        className="absolute left-[10%] top-[72%] hidden h-28 w-44 rotate-[-8deg] rounded-[28px] border border-accent/10 bg-accent-soft/20 md:block"
      />

      {isHomePage ? (
        <>
          <div
            data-home-motion
            className="absolute left-[15%] top-[28%] h-12 w-24 rounded-[20px] border border-white/10 bg-white/[0.025] opacity-30"
          />
          <div
            data-home-motion
            className="absolute right-[18%] top-[66%] h-16 w-16 rotate-45 rounded-[18px] border border-accent/15 bg-accent-soft/25 opacity-30"
          />
          <div
            data-home-motion
            className="absolute right-[32%] top-[22%] h-1 w-24 rounded-full bg-[linear-gradient(90deg,transparent,rgb(var(--accent-2)/0.68),transparent)] opacity-30"
          />
        </>
      ) : null}
    </div>
  );
}
