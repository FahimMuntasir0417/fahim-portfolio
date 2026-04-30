export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  summary: string;
  outcomes: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Independent Product Builder",
    company: "Client and self-initiated work",
    period: "2024 - Present",
    summary:
      "Building production-style web products that combine strong interface systems, API design, and clear product positioning.",
    outcomes: [
      "Shipped polished Next.js experiences with clear business and product framing.",
      "Focused on maintainable UI systems instead of one-off page assembly.",
      "Used performance, accessibility, and content clarity as baseline quality signals."
    ]
  },
  {
    title: "Freelance Frontend Engineer",
    company: "Selected collaborations",
    period: "2022 - 2024",
    summary:
      "Partnered with founders and small teams to turn rough product ideas into credible interfaces and usable internal tools.",
    outcomes: [
      "Translated ambiguous requirements into structured interfaces and reusable components.",
      "Improved delivery speed by organizing features around modular sections and shared patterns.",
      "Balanced visual polish with engineering pragmatism on tight timelines."
    ]
  },
  {
    title: "AI Workflow Exploration",
    company: "Ongoing learning and prototyping",
    period: "2023 - Present",
    summary:
      "Exploring where AI adds genuine value in software products without degrading trust, clarity, or operator control.",
    outcomes: [
      "Built prototypes around summarization, support operations, and content assistance.",
      "Framed AI as a workflow accelerator rather than a cosmetic feature.",
      "Studied prompt quality, guardrails, and evaluation as product design problems."
    ]
  }
];
