"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, registerGsapPlugins, ScrollTrigger, useGSAP } from "@/lib/gsap";

function prefersReducedMotion() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!loaderRef.current || !lineRef.current) {
        return;
      }

      if (prefersReducedMotion()) {
        gsap.set(loaderRef.current, { display: "none" });
        return;
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          gsap.set(loaderRef.current, { display: "none" });
        }
      });

      timeline
        .fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.8 }
        )
        .to(loaderRef.current, { yPercent: -100, duration: 0.72 }, "-=0.18");
    },
    { scope: loaderRef }
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[120] grid place-items-center bg-[#050a14] text-slate-100"
      aria-hidden="true"
    >
      <div className="min-w-[min(22rem,82vw)]">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-accent">
          Loading portfolio
        </p>
        <div className="mt-5 h-px overflow-hidden rounded-full bg-white/10">
          <div
            ref={lineRef}
            className="h-full rounded-full bg-[linear-gradient(90deg,rgb(var(--accent)),rgb(var(--accent-2)))]"
          />
        </div>
      </div>
    </div>
  );
}

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = prefersReducedMotion();

    if (!finePointer || reducedMotion || !cursorRef.current || !followerRef.current) {
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");

    const cursorX = gsap.quickTo(cursorRef.current, "x", { duration: 0.16, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursorRef.current, "y", { duration: 0.16, ease: "power3.out" });
    const followerX = gsap.quickTo(followerRef.current, "x", {
      duration: 0.36,
      ease: "power3.out"
    });
    const followerY = gsap.quickTo(followerRef.current, "y", {
      duration: 0.36,
      ease: "power3.out"
    });

    const handlePointerMove = (event: PointerEvent) => {
      cursorX(event.clientX);
      cursorY(event.clientY);
      followerX(event.clientX);
      followerY(event.clientY);
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest(
        "a, button, [data-cursor='hover'], input, select, textarea"
      );

      if (!target) {
        return;
      }

      gsap.to(cursorRef.current, { scale: 0.72, opacity: 0.75, duration: 0.22 });
      gsap.to(followerRef.current, { scale: 1.75, opacity: 0.28, duration: 0.22 });
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest(
        "a, button, [data-cursor='hover'], input, select, textarea"
      );

      if (!target) {
        return;
      }

      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.22 });
      gsap.to(followerRef.current, { scale: 1, opacity: 0.18, duration: 0.22 });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[110] hidden mix-blend-difference md:block">
      <div
        ref={followerRef}
        className="fixed left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 opacity-20"
      />
      <div
        ref={cursorRef}
        className="fixed left-0 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
    </div>
  );
}

function GlobalGsapEffects() {
  const pathname = usePathname();

  useGSAP(() => {
    registerGsapPlugins();

    if (prefersReducedMotion()) {
      return;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]").forEach((group) => {
        const items = gsap.utils.toArray<HTMLElement>("[data-gsap-item]", group);

        if (!items.length) {
          return;
        }

        gsap.fromTo(
          items,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.78,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]").forEach((element) => {
        const amount = Number(element.dataset.gsapParallax || 18);

        gsap.fromTo(
          element,
          { yPercent: amount * -0.35 },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });
    });

    const handlePointerOver = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "a, button, [data-gsap-hover]"
      );

      if (!target || target.hasAttribute("disabled") || target.dataset.gsapHover === "off") {
        return;
      }

      gsap.to(target, { y: -2, scale: 1.01, duration: 0.22, ease: "power3.out" });
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "a, button, [data-gsap-hover]"
      );

      if (!target || target.hasAttribute("disabled") || target.dataset.gsapHover === "off") {
        return;
      }

      gsap.to(target, { y: 0, scale: 1, duration: 0.24, ease: "power3.out" });
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      context.revert();
      ScrollTrigger.refresh();
    };
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}

export function MotionLayer() {
  return (
    <>
      <PageLoader />
      <CustomCursor />
      <GlobalGsapEffects />
    </>
  );
}
