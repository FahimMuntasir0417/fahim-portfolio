import { cn } from "@/lib/utils";
import { forwardRef, type HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement>;

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "surface-panel relative isolate rounded-[30px] shadow-card transition-all duration-300",
        className
      )}
      {...props}
    />
  );
});
