import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "accent" | "neutral";
};

export function Badge({
  className,
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase",
        tone === "accent"
          ? "border-accent/20 bg-[linear-gradient(135deg,rgba(103,232,249,0.12),rgba(251,191,36,0.12))] text-accent"
          : "border-border bg-surface-3 text-muted",
        className
      )}
      {...props}
    />
  );
}
