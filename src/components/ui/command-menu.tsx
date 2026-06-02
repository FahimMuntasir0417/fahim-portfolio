"use client";
import { useRouter } from "next/navigation";
import {
  Command,
  ExternalLink,
  FileText,
  FolderKanban,
  Home,
  Layers3,
  Mail,
  UserRound,
  X
} from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type CommandMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type CommandItem = {
  label: string;
  href: string;
  icon: typeof Home;
  description: string;
  external?: boolean;
};

const commands: CommandItem[] = [
  {
    label: "Home",
    href: "/",
    icon: Home,
    description: "Go back to the landing page."
  },
  {
    label: "About",
    href: "/about",
    icon: UserRound,
    description: "Read background, principles, and process."
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
    description: "Browse case studies and featured work."
  },
  {
    label: "Skills",
    href: "/#skills",
    icon: Layers3,
    description: "Jump to the visual skills map."
  },
  {
    label: "Contact",
    href: "/contact",
    icon: Mail,
    description: "Open the contact page and inquiry form."
  },
  {
    label: "Resume",
    href: siteConfig.resumeHref,
    icon: FileText,
    description: "Open and download the resume.",
    external: true
  },
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: ExternalLink,
    description: "Open the GitHub profile.",
    external: true
  }
];

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setQuery("");
    }

    onOpenChange(nextOpen);
  };
  const handleHotkeys = useEffectEvent((event: KeyboardEvent) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      handleOpenChange(!open);
    }

    if (event.key === "Escape") {
      handleOpenChange(false);
    }
  });

  useEffect(() => {
    window.addEventListener("keydown", handleHotkeys);
    return () => window.removeEventListener("keydown", handleHotkeys);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  const filtered = commands.filter((item) => {
    const haystack = `${item.label} ${item.description}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-black/55 px-4 pt-24 backdrop-blur-md">
      <div className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10]/95 shadow-card">
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <Command className="h-4 w-4 text-accent" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, links, and quick actions..."
            className="h-11 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
          />
          <button
            type="button"
            aria-label="Close command menu"
            className="rounded-full p-2 text-muted hover:bg-white/5 hover:text-foreground"
            onClick={() => handleOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="max-h-[420px] overflow-y-auto p-3">
          {filtered.length ? (
            filtered.map((item) => {
              const Icon = item.icon;

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 flex items-start gap-4 rounded-2xl border border-transparent px-4 py-3 hover:border-white/10 hover:bg-white/[0.03]"
                    onClick={() => handleOpenChange(false)}
                  >
                    <span className="mt-1 rounded-2xl bg-accent-soft p-2 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-foreground">{item.label}</span>
                      <span className="mt-1 block text-sm text-muted">{item.description}</span>
                    </span>
                    <ExternalLink className="mt-1 h-4 w-4 text-muted" />
                  </a>
                );
              }

              return (
                <button
                  key={item.label}
                  type="button"
                  className="mb-2 flex w-full items-start gap-4 rounded-2xl border border-transparent px-4 py-3 text-left hover:border-white/10 hover:bg-white/[0.03]"
                  onClick={() => {
                    router.push(item.href);
                    handleOpenChange(false);
                  }}
                >
                  <span className="mt-1 rounded-2xl bg-accent-soft p-2 text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">{item.label}</span>
                    <span className="mt-1 block text-sm text-muted">{item.description}</span>
                  </span>
                </button>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-white/10 px-4 py-8 text-center text-sm text-muted">
              No matching commands. Try projects, contact, or resume.
            </div>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-muted">
          <p>Press Enter on an item to navigate.</p>
          <p className="inline-flex items-center gap-2">
            <span className="rounded-md border border-white/10 px-1.5 py-0.5">Ctrl</span>
            <span className="rounded-md border border-white/10 px-1.5 py-0.5">K</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function CommandHint({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={cn(
        "hidden items-center gap-2 rounded-full border border-border bg-surface-2 px-3 py-2 text-xs text-muted hover:border-accent/25 hover:bg-accent-soft hover:text-foreground sm:inline-flex",
        className
      )}
      onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
    >
      <Command className="h-3.5 w-3.5" />
      Quick nav
      <span className="rounded-md border border-border px-1.5 py-0.5 text-[10px]">Ctrl K</span>
    </button>
  );
}
