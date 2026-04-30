import Link from "next/link";
import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export default function NotFound() {
  return (
    <div className="py-24">
      <Container className="max-w-3xl">
        <GlassCard className="p-10 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-foreground">
            This page does not exist.
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted">
            The route may have changed, or the project page you were looking for has not been added yet.
          </p>
          <div className="mt-8">
            <Link href="/" className={buttonVariants({ variant: "primary" })}>
              Return home
            </Link>
          </div>
        </GlassCard>
      </Container>
    </div>
  );
}

