type SocialPlatform = "github" | "linkedin" | "x";

const socialLabels: Record<SocialPlatform, string> = {
  github: "GitHub",
  linkedin: "LinkedIn",
  x: "X",
};

const placeholderPatterns = [/your name/i, /example\.com/i, /yourusername/i];

export const siteConfig = {
  name: "Md Fahim Muntasir",
  role: "Full-Stack Developer",
  resumeHref: "/resume",
  location: "Jeshore, Bangladesh",
  email: "fahimmuntasirbejoy@gmail.com",
  url: "https://example.com",
  language: "en",
  locale: "en_US",
  profileImage: {
    src: "/images/profile-photo.png",
    alt: "Profile portrait",
    objectPosition: "center 18%",
  },
  headline:
    "Full-Stack Engineer delivering scalable web applications, polished user interfaces, and workflow-focused digital products.",
  description:
    "Professional portfolio focused on full-stack engineering, modern web applications, internal tools, and product-focused frontend delivery.",
  availability:
    "Available for selected freelance, contract, and remote full-time roles.",
  availabilityDetail:
    "Best suited to projects that need stronger product structure, clearer UI systems, and dependable delivery from planning through launch.",
  responseTime: "Typically responds within 1 to 2 business days.",
  intro:
    "I design and deliver production-ready web experiences that stay fast, maintainable, and easy to understand as they grow.",
  shortBio:
    "I turn product goals into clear systems, well-structured interfaces, and measurable delivery outcomes.",
  aboutMe: {
    journey:
      "My programming journey started with curiosity about how websites were built, then grew into a deeper interest in turning messy ideas into useful digital products. I moved from learning layout and JavaScript fundamentals into building full-stack applications with React, Next.js, APIs, databases, and deployment workflows.",
    enjoy:
      "The work I enjoy most sits between product thinking and implementation: planning clear user flows, designing polished interfaces, structuring reusable components, and solving the engineering details that make an application feel fast, dependable, and easy to use.",
    personality:
      "Outside of programming, I like staying curious through design inspiration, sports, and creative hobbies like sketching interface ideas or exploring visual systems. I bring that same mix of discipline and creativity into my work: calm problem solving, attention to detail, and a preference for simple solutions that hold up.",
  },
  services: [
    "Web application engineering",
    "Internal tools and dashboards",
    "Marketing and company websites",
    "AI-assisted workflow features",
  ],
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    x: "https://x.com/yourusername",
  },
  stats: [
    { label: "Selected case studies", value: "03" },
    { label: "Primary stack", value: "Next.js + TypeScript" },
    { label: "Current focus", value: "AI-enabled workflows" },
  ],
  keywords: [
    "full-stack engineer portfolio",
    "software engineer portfolio",
    "Next.js case studies",
    "TypeScript web engineer",
    "product-focused frontend engineering",
  ],
} as const;

export function isPlaceholderValue(value: string) {
  return placeholderPatterns.some((pattern) => pattern.test(value));
}

export function formatExternalLink(href: string) {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export const socialLinks = (
  Object.entries(siteConfig.socials) as [SocialPlatform, string][]
)
  .filter(([, href]) => href.trim().length > 0)
  .map(([platform, href]) => ({
    platform,
    label: socialLabels[platform],
    href,
    display: formatExternalLink(href),
  }));

export const publicSameAsLinks = socialLinks
  .filter((link) => !isPlaceholderValue(link.href))
  .map((link) => link.href);

export const siteStatus = {
  hasConfiguredIdentity: !isPlaceholderValue(siteConfig.name),
  hasConfiguredEmail: !isPlaceholderValue(siteConfig.email),
  hasConfiguredUrl: !isPlaceholderValue(siteConfig.url),
  isIndexable:
    !isPlaceholderValue(siteConfig.name) && !isPlaceholderValue(siteConfig.url),
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
] as const;
