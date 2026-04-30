"use client";

import type { HTMLAttributes } from "react";
import { useRef } from "react";
import { gsap, registerGsapPlugins, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = HTMLAttributes<HTMLDivElement> & {
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();

      if (!sectionRef.current) {
        return;
      }

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            once: true
          }
        }
      );
    },
    { scope: sectionRef, dependencies: [delay], revertOnUpdate: true }
  );

  return (
    <div ref={sectionRef} className={cn(className)} {...props}>
      {children}
    </div>
  );
}
