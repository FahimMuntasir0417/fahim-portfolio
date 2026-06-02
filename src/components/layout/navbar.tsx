"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Command, Menu, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { CommandMenu } from "@/components/ui/command-menu";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenCommandMenu = () => {
      setIsCommandOpen(true);
    };

    window.addEventListener("open-command-menu", handleOpenCommandMenu);
    return () => window.removeEventListener("open-command-menu", handleOpenCommandMenu);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 pt-4 transition-all duration-300 sm:pt-6",
          isScrolled && "pt-3"
        )}
      >
        <Container>
          <div
            className={cn(
              "surface-panel flex items-center justify-between gap-4 rounded-[30px] px-4 py-3 shadow-card transition-all duration-300 sm:px-5",
              isScrolled && "bg-background/70 backdrop-blur-2xl"
            )}
          >
            <div className="flex min-w-0 items-center gap-3">
              <Link href="/" className="flex min-w-0 items-center gap-3">
                <div className="relative">
                  <ProfilePhoto
                    className="h-11 w-11 rounded-full ring-1 ring-white/15"
                    sizes="44px"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-emerald-400" />
                </div>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {siteConfig.name}
                  </span>
                  <span className="block truncate text-xs text-muted">{siteConfig.role}</span>
                </span>
              </Link>
              <span className="hidden items-center gap-2 rounded-full border border-accent/20 bg-[linear-gradient(135deg,rgba(103,232,249,0.12),rgba(251,191,36,0.08))] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-accent xl:inline-flex">
                <Sparkles className="h-3.5 w-3.5" />
                Available
              </span>
            </div>

            <nav className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const active =
                  item.href === "/projects"
                    ? pathname.startsWith("/projects")
                    : pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-foreground",
                      active && "bg-white/8 text-foreground shadow-soft"
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full bg-transparent transition-colors",
                        active && "bg-accent"
                      )}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <button
                type="button"
                onClick={() => setIsCommandOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-3 px-3 py-2 text-xs text-muted hover:border-accent/25 hover:bg-accent-soft hover:text-foreground"
              >
                <Command className="h-3.5 w-3.5" />
                Quick nav
                <span className="rounded-md border border-border px-1.5 py-0.5 text-[10px]">
                  Ctrl K
                </span>
              </button>
              <ThemeToggle />
              <a
                href={siteConfig.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "primary", size: "sm" })}
              >
                Resume
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle navigation"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-3 text-foreground"
                onClick={() => setIsMenuOpen((value) => !value)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {isMenuOpen ? (
            <div className="surface-panel mt-3 rounded-[28px] p-4 shadow-card lg:hidden">
              <div className="rounded-[24px] border border-white/8 bg-surface-3 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">Open to work</p>
                <p className="mt-3 text-sm leading-6 text-muted">{siteConfig.availabilityDetail}</p>
              </div>

              <nav className="mt-4 flex flex-col gap-1">
                {navigation.map((item) => {
                  const active =
                    item.href === "/projects"
                      ? pathname.startsWith("/projects")
                      : pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-sm text-muted hover:bg-accent-soft hover:text-foreground",
                        active && "bg-white/8 text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="rounded-2xl border border-border bg-surface-3 px-4 py-3 text-left text-sm text-foreground"
                  onClick={() => {
                    setIsCommandOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Quick nav
                </button>
                <a
                  href={siteConfig.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(103,232,249,0.96),rgba(251,191,36,0.9))] px-4 py-3 text-sm font-medium text-slate-950"
                >
                  Resume
                </a>
              </div>
            </div>
          ) : null}
        </Container>
      </header>
      <CommandMenu open={isCommandOpen} onOpenChange={setIsCommandOpen} />
    </>
  );
}
