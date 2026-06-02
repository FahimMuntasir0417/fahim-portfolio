import Link from "next/link";
import { Github, Globe2, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { navigation, siteConfig, socialLinks } from "@/lib/site";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  X: Globe2
} as const;

const footerLinks = [
  ...socialLinks.map((link) => ({
    href: link.href,
    label: link.label
  })),
  { href: `mailto:${siteConfig.email}`, label: "Email" }
] as const;

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="py-16">
      <Container>
        <div className="surface-panel rounded-[36px] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.55fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-[linear-gradient(135deg,rgba(103,232,249,0.12),rgba(251,191,36,0.08))] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-accent">
                Portfolio
              </div>
              <p className="mt-5 font-display text-3xl font-semibold text-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                {siteConfig.shortBio} Based in {siteConfig.location}. {siteConfig.responseTime}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted">
                {siteConfig.availability}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Explore</p>
              <div className="mt-4 flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Connect</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {footerLinks.map((link) => {
                  const Icon =
                    link.label === "GitHub"
                      ? iconMap.GitHub
                      : link.label === "LinkedIn"
                        ? iconMap.LinkedIn
                        : link.label === "X"
                          ? iconMap.X
                        : iconMap.Email;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-3 px-4 py-2 text-sm text-muted hover:border-accent/25 hover:bg-accent-soft hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <p>
              © {year} {siteConfig.name}. Built for stronger first impressions.
            </p>
            <p>Clear structure, calmer UI, and product-style presentation.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
