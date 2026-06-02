export type SkillGroup = {
  title: string;
  description: string;
  focus: string;
  tone: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    description:
      "Technologies I use most often when building production-style full-stack web applications.",
    focus: "Primary product stack",
    tone: "103 232 249",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "Authentication flows"
    ]
  },
  {
    title: "Proficient",
    description:
      "Tools I can apply confidently across backend features, data modeling, deployment, and delivery workflows.",
    focus: "Implementation support",
    tone: "96 165 250",
    items: [
      "Express",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Vercel",
      "Relational design",
      "Query optimization"
    ]
  },
  {
    title: "Familiar With",
    description:
      "Adjacent tools and techniques I have used or explored, but would not position as my primary engineering signal.",
    focus: "Adjacent capabilities",
    tone: "251 191 36",
    items: [
      "Docker",
      "CI thinking",
      "Design systems",
      "OpenAI APIs",
      "Prompt workflows",
      "Vector search basics",
      "Evaluation thinking",
      "GSAP",
      "ScrollTrigger"
    ]
  }
];
