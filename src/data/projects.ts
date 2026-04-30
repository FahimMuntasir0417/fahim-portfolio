export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  role: string;
  timeline: string;
  scope: string;
  audience: string;
  deliverables: string[];
  accessNote: string;
  stack: string[];
  metrics: ProjectMetric[];
  image: string;
  year: string;
  featured: boolean;
  links: ProjectLink[];
  challengePoints: string[];
  implementationPoints: string[];
  resultsPoints: string[];
  nextSteps: string[];
};

export const projects: Project[] = [
  {
    slug: "atlas-finance",
    title: "Atlas Finance",
    category: "Fintech dashboard",
    summary:
      "A performance-focused financial operations workspace for teams managing reporting, cash flow, and approvals.",
    overview:
      "Atlas Finance turns a spreadsheet-heavy workflow into a clean operations dashboard with role-aware actions, structured reporting, and a strong information hierarchy.",
    problem:
      "Finance teams were juggling fragmented spreadsheets, slow internal tools, and unclear approval visibility. Critical updates were easy to miss, and routine reporting took too long.",
    solution:
      "I designed a modular dashboard in Next.js with a bento-style overview, approval queues, reporting snapshots, and account-level drilldowns so teams could move from monitoring to action in one flow.",
    impact:
      "The interface reduced dashboard clutter, clarified the daily priority list, and created a stronger foundation for faster monthly close workflows and more confident approvals.",
    role: "Product design + full-stack implementation",
    timeline: "8 weeks",
    scope: "Strategy, UX architecture, interface design, frontend implementation, and data modeling.",
    audience: "Finance operators, approvers, and internal stakeholders managing reporting and cash flow.",
    deliverables: [
      "Operations dashboard information architecture",
      "Approval queue and reporting UI system",
      "Responsive account-level drilldown views"
    ],
    accessNote: "Private product build. Live walkthrough available during project discussions.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    metrics: [
      { label: "Report view time", value: "-38%" },
      { label: "Approval steps unified", value: "5 flows" },
      { label: "Largest contentful paint", value: "1.6s" }
    ],
    image: "/images/projects/atlas.svg",
    year: "2026",
    featured: true,
    links: [
      { label: "Live project", href: "https://example.com/atlas-finance" },
      { label: "GitHub repository", href: "https://github.com/yourusername/atlas-finance" }
    ],
    challengePoints: [
      "Design an information-dense dashboard without making it visually noisy.",
      "Surface urgent tasks fast while preserving deeper reporting access.",
      "Keep large account tables snappy across common laptop sizes."
    ],
    implementationPoints: [
      "Built a server-first shell with card-based summaries and sticky actions for the highest-value tasks.",
      "Split the dashboard into reusable overview, approvals, and analytics modules to keep the UI coherent as features expanded.",
      "Used careful spacing, progressive disclosure, and restrained visual treatment so the app felt clear rather than crowded."
    ],
    resultsPoints: [
      "Created a calmer daily workflow for finance operators who needed fast signal over raw data volume.",
      "Improved the perceived quality of the product through stronger layout rhythm and more deliberate states.",
      "Established a reusable design system foundation for future internal tools."
    ],
    nextSteps: [
      "Add CSV import pipelines and audit history.",
      "Introduce scenario modeling for forecast planning.",
      "Connect stakeholder summaries to scheduled email reports."
    ]
  },
  {
    slug: "pulse-ops",
    title: "Pulse Ops",
    category: "AI support workspace",
    summary:
      "An internal operations panel that blends ticket triage, AI-assisted summaries, and service health monitoring into one surface.",
    overview:
      "Pulse Ops helps support and operations teams handle higher ticket volume with clearer queue management, AI-generated context, and a single workspace for action.",
    problem:
      "Support teams were switching between incident dashboards, customer threads, and manual summaries. The result was slower handoff quality and wasted time reconstructing context.",
    solution:
      "I created a unified console with queue filters, incident summaries, uptime panels, and AI-assisted ticket briefings so agents could understand a case before opening every source system.",
    impact:
      "The product reduced repeated context gathering, improved escalation quality, and gave leadership a cleaner view of operational health.",
    role: "UX architecture + frontend systems",
    timeline: "6 weeks",
    scope: "Workflow design, interface systems, AI-assisted content design, and frontend architecture.",
    audience: "Support operators, incident responders, and team leads monitoring queue health.",
    deliverables: [
      "Unified support workspace architecture",
      "AI-assisted incident summary patterns",
      "Queue visibility and operational health surfaces"
    ],
    accessNote: "Internal operations tool. Demo access is private, but the case study covers the workflow decisions in detail.",
    stack: ["Next.js", "React", "OpenAI APIs", "Node.js", "Tailwind CSS"],
    metrics: [
      { label: "Triage time", value: "-29%" },
      { label: "Summary generation", value: "<8s" },
      { label: "Queue visibility", value: "+1 shared view" }
    ],
    image: "/images/projects/pulse.svg",
    year: "2026",
    featured: true,
    links: [
      { label: "Live project", href: "https://example.com/pulse-ops" },
      { label: "GitHub repository", href: "https://github.com/yourusername/pulse-ops" }
    ],
    challengePoints: [
      "Make AI assistance useful without turning the workflow into a novelty feature.",
      "Keep sensitive operational data organized and legible in a dark UI.",
      "Balance incident awareness with individual ticket focus."
    ],
    implementationPoints: [
      "Structured the experience around three jobs: scan, understand, and act.",
      "Used compact status cards, event timelines, and expandable summaries to reduce visual overload.",
      "Designed the interface so AI output supported operator judgment instead of replacing it."
    ],
    resultsPoints: [
      "Sharper handoffs between frontline support and operations leads.",
      "Clearer prioritization during peak support windows.",
      "A more credible path for responsible AI assistance in internal tools."
    ],
    nextSteps: [
      "Add analytics for recurring incident themes.",
      "Expand prompt controls per queue type.",
      "Support post-incident review exports."
    ]
  },
  {
    slug: "orbit-studio",
    title: "Orbit Studio",
    category: "Agency portfolio platform",
    summary:
      "A case-study driven site for a product studio showcasing work, process, and inquiry capture with a strong editorial presentation.",
    overview:
      "Orbit Studio positions a small team like a serious product partner by pairing strong typography, narrative project pages, and conversion-focused inquiry flows.",
    problem:
      "The studio had strong project outcomes but an inconsistent web presence. Their previous site undersold process, craft, and technical range.",
    solution:
      "I redesigned the site as a narrative-first portfolio with modular case-study pages, structured content sections, and visual framing that emphasized both craft and outcomes.",
    impact:
      "The refreshed site improved positioning, clarified the studio offer, and turned project storytelling into a stronger lead-generation asset.",
    role: "Design direction + website engineering",
    timeline: "5 weeks",
    scope: "Brand direction, content structuring, responsive frontend engineering, and performance tuning.",
    audience: "Potential clients, collaborators, and recruiters evaluating studio credibility.",
    deliverables: [
      "Narrative project case-study framework",
      "Editorial marketing site design system",
      "Inquiry flow and performance-focused implementation"
    ],
    accessNote: "Public-style marketing build. Full deployment can be shared selectively in conversations.",
    stack: ["Next.js", "TypeScript", "MDX", "Framer Motion", "Vercel"],
    metrics: [
      { label: "Qualified inquiries", value: "+41%" },
      { label: "Average session length", value: "+2.1x" },
      { label: "Core web vitals", value: "Pass" }
    ],
    image: "/images/projects/orbit.svg",
    year: "2025",
    featured: true,
    links: [
      { label: "Live project", href: "https://example.com/orbit-studio" },
      { label: "GitHub repository", href: "https://github.com/yourusername/orbit-studio" }
    ],
    challengePoints: [
      "Differentiate the brand without drifting into trend-heavy visuals.",
      "Tell project stories clearly enough for both clients and recruiters.",
      "Keep the site lightweight while still feeling highly considered."
    ],
    implementationPoints: [
      "Built a reusable case-study framework with clear sections for challenge, approach, stack, and outcomes.",
      "Used large display type, constrained copy width, and subtle motion to create a confident editorial rhythm.",
      "Kept the codebase modular so new case studies could be added quickly."
    ],
    resultsPoints: [
      "Stronger trust signals during the first visit.",
      "Better conversion from visitors who wanted proof of execution quality.",
      "A design direction that felt current without appearing overdesigned or repetitive."
    ],
    nextSteps: [
      "Expand the journal section for behind-the-scenes technical writing.",
      "Add richer SEO metadata per case study.",
      "Publish performance snapshots for each launch."
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
