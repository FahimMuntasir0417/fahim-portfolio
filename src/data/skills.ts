export type SkillGroup = {
  title: string;
  description: string;
  focus: string;
  level: number;
  tone: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description: "High-quality product interfaces with careful state, layout, and performance decisions.",
    focus: "Interface systems",
    level: 94,
    tone: "103 232 249",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "ScrollTrigger"]
  },
  {
    title: "Backend",
    description: "Clean application logic, API design, and dependable service integrations.",
    focus: "APIs and product logic",
    level: 86,
    tone: "96 165 250",
    items: ["Node.js", "Express", "Prisma", "REST APIs", "Authentication flows"]
  },
  {
    title: "Database",
    description: "Practical data modeling for product delivery, reporting, and internal tools.",
    focus: "Modeling and queries",
    level: 80,
    tone: "52 211 153",
    items: ["PostgreSQL", "MongoDB", "Relational design", "Query optimization"]
  },
  {
    title: "Tools",
    description: "Developer experience and deployment habits that keep shipping smooth.",
    focus: "Delivery workflow",
    level: 88,
    tone: "244 114 182",
    items: ["Git", "Docker", "Vercel", "CI thinking", "Design systems"]
  },
  {
    title: "AI/ML",
    description: "Measured use of AI for product workflows, internal tooling, and user assistance.",
    focus: "Workflow assistance",
    level: 76,
    tone: "251 191 36",
    items: ["OpenAI APIs", "Prompt workflows", "Vector search basics", "Evaluation thinking"]
  }
];
