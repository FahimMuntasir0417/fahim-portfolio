/* eslint-disable @next/next/no-img-element */
import {
  Bot,
  Braces,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Palette,
  SearchCode,
  ShieldCheck,
  Workflow
} from "lucide-react";
import { cn } from "@/lib/utils";

type LogoAsset = {
  src: string;
  bgClass?: string;
  imgClass?: string;
};

type TechLogoProps = {
  name: string;
  className?: string;
};

const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const logoAssets: Record<string, LogoAsset> = {
  "Next.js": {
    src: `${deviconBase}/nextjs/nextjs-original.svg`,
    bgClass: "bg-white",
    imgClass: "h-4 w-4"
  },
  React: {
    src: `${deviconBase}/react/react-original.svg`
  },
  TypeScript: {
    src: `${deviconBase}/typescript/typescript-original.svg`
  },
  "Tailwind CSS": {
    src: `${deviconBase}/tailwindcss/tailwindcss-original.svg`
  },
  GSAP: {
    src: "https://cdn.simpleicons.org/greensock/88CE02",
    bgClass: "bg-[#07111f]"
  },
  ScrollTrigger: {
    src: "https://cdn.simpleicons.org/greensock/88CE02",
    bgClass: "bg-[#07111f]"
  },
  "Node.js": {
    src: `${deviconBase}/nodejs/nodejs-original.svg`
  },
  Express: {
    src: `${deviconBase}/express/express-original.svg`,
    bgClass: "bg-white"
  },
  Prisma: {
    src: `${deviconBase}/prisma/prisma-original.svg`,
    bgClass: "bg-white"
  },
  PostgreSQL: {
    src: `${deviconBase}/postgresql/postgresql-original.svg`
  },
  MongoDB: {
    src: `${deviconBase}/mongodb/mongodb-original.svg`
  },
  Git: {
    src: `${deviconBase}/git/git-original.svg`
  },
  Docker: {
    src: `${deviconBase}/docker/docker-original.svg`
  },
  Vercel: {
    src: "https://cdn.simpleicons.org/vercel/000000",
    bgClass: "bg-white"
  },
  "OpenAI APIs": {
    src: "https://cdn.simpleicons.org/openai/ffffff",
    bgClass: "bg-[#07111f]"
  },
  MDX: {
    src: "https://cdn.simpleicons.org/mdx/ffffff",
    bgClass: "bg-[#07111f]"
  },
  "Framer Motion": {
    src: "https://cdn.simpleicons.org/framer/0055FF",
    bgClass: "bg-white"
  }
};

const fallbackIcons = {
  api: Workflow,
  auth: ShieldCheck,
  code: Code2,
  design: Palette,
  evaluation: CheckCircle2,
  prompt: Bot,
  query: SearchCode,
  system: CircuitBoard,
  types: Braces
} as const;

function FallbackTechIcon({ name }: { name: string }) {
  const normalized = name.toLowerCase();

  if (normalized.includes("api")) return <fallbackIcons.api className="h-3.5 w-3.5" />;
  if (normalized.includes("auth")) return <fallbackIcons.auth className="h-3.5 w-3.5" />;
  if (normalized.includes("design")) return <fallbackIcons.design className="h-3.5 w-3.5" />;
  if (normalized.includes("evaluation") || normalized.includes("ci")) {
    return <fallbackIcons.evaluation className="h-3.5 w-3.5" />;
  }
  if (normalized.includes("prompt") || normalized.includes("ai")) {
    return <fallbackIcons.prompt className="h-3.5 w-3.5" />;
  }
  if (normalized.includes("query") || normalized.includes("search")) {
    return <fallbackIcons.query className="h-3.5 w-3.5" />;
  }
  if (normalized.includes("relational") || normalized.includes("system")) {
    return <fallbackIcons.system className="h-3.5 w-3.5" />;
  }
  if (normalized.includes("type")) return <fallbackIcons.types className="h-3.5 w-3.5" />;

  return <fallbackIcons.code className="h-3.5 w-3.5" />;
}

export function TechLogo({ name, className }: TechLogoProps) {
  const logo = logoAssets[name];

  if (logo) {
    return (
      <span
        className={cn(
          "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white p-1.5 shadow-soft",
          logo.bgClass,
          className
        )}
        title={name}
        aria-hidden="true"
      >
        <img
          src={logo.src}
          alt=""
          loading="lazy"
          decoding="async"
          className={cn("h-5 w-5 object-contain", logo.imgClass)}
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent-soft text-accent",
        className
      )}
      title={name}
      aria-hidden="true"
    >
      <FallbackTechIcon name={name} />
    </span>
  );
}
