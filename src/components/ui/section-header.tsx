import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-5 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-[linear-gradient(135deg,rgba(103,232,249,0.12),rgba(251,191,36,0.08))] px-4 py-2",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-accent">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
