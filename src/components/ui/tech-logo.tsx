import Image from "next/image";
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
  "Next.js 16": {
    src: `${deviconBase}/nextjs/nextjs-original.svg`,
    bgClass: "bg-white",
    imgClass: "h-4 w-4"
  },
  "Next.js App Router": {
    src: `${deviconBase}/nextjs/nextjs-original.svg`,
    bgClass: "bg-white",
    imgClass: "h-4 w-4"
  },
  React: {
    src: `${deviconBase}/react/react-original.svg`
  },
  "React 19": {
    src: `${deviconBase}/react/react-original.svg`
  },
  TypeScript: {
    src: `${deviconBase}/typescript/typescript-original.svg`
  },
  "Tailwind CSS": {
    src: `${deviconBase}/tailwindcss/tailwindcss-original.svg`
  },
  "Tailwind CSS 4": {
    src: `${deviconBase}/tailwindcss/tailwindcss-original.svg`
  },
  "TanStack Query": {
    src: "https://cdn.simpleicons.org/reactquery/FF4154",
    bgClass: "bg-white"
  },
  "TanStack Form": {
    src: "https://cdn.simpleicons.org/reactquery/FF4154",
    bgClass: "bg-white"
  },
  Zustand: {
    src: "https://cdn.simpleicons.org/react/61DAFB",
    bgClass: "bg-[#07111f]"
  },
  "React Hook Form": {
    src: "https://cdn.simpleicons.org/reacthookform/EC5990",
    bgClass: "bg-white"
  },
  Zod: {
    src: "https://cdn.simpleicons.org/zod/3E67B1",
    bgClass: "bg-white"
  },
  Axios: {
    src: "https://cdn.simpleicons.org/axios/5A29E4",
    bgClass: "bg-white"
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
  "Express.js": {
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
  "Gemini API": {
    src: "https://cdn.simpleicons.org/googlegemini/8E75B9",
    bgClass: "bg-white"
  },
  JWT: {
    src: "https://cdn.simpleicons.org/jsonwebtokens/000000",
    bgClass: "bg-white"
  },
  Nodemailer: {
    src: "https://cdn.simpleicons.org/maildotru/005FF9",
    bgClass: "bg-white"
  },
  Pino: {
    src: "https://cdn.simpleicons.org/pino/F7DF1E",
    bgClass: "bg-[#07111f]"
  },
  PNPM: {
    src: "https://cdn.simpleicons.org/pnpm/F69220",
    bgClass: "bg-white"
  },
  Bun: {
    src: "https://cdn.simpleicons.org/bun/000000",
    bgClass: "bg-white"
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
        <Image
          src={logo.src}
          alt={`${name} logo`}
          width={20}
          height={20}
          loading="lazy"
          unoptimized
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
