import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "default" | "sm" | "lg" | "icon";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-white/10 bg-[linear-gradient(135deg,rgba(103,232,249,0.96),rgba(251,191,36,0.9))] text-slate-950 shadow-glow hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(56,189,248,0.22)] dark:text-slate-950",
  secondary:
    "surface-panel text-foreground shadow-soft hover:-translate-y-0.5 hover:border-accent/30 hover:bg-surface-3",
  ghost:
    "text-foreground hover:bg-accent-soft hover:text-foreground",
  outline:
    "border border-border bg-transparent text-foreground hover:border-accent/30 hover:bg-accent-soft"
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "h-11 px-5 text-sm font-medium",
  sm: "h-9 px-4 text-sm font-medium",
  lg: "h-12 px-6 text-sm font-medium",
  icon: "h-10 w-10"
};

export function buttonVariants({
  variant = "primary",
  size = "default",
  className
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full tracking-[0.01em] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variantClasses[variant],
    sizeClasses[size],
    className
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      type={type}
      {...props}
    />
  );
}
