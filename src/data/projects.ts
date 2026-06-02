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

// export const projects: Project[] = [
//   {
//     slug: "atlas-finance",
//     title: "Atlas Finance",
//     category: "Fintech dashboard",
//     summary:
//       "A performance-focused financial operations workspace for teams managing reporting, cash flow, and approvals.",
//     overview:
//       "Atlas Finance turns a spreadsheet-heavy workflow into a clean operations dashboard with role-aware actions, structured reporting, and a strong information hierarchy.",
//     problem:
//       "Finance teams were juggling fragmented spreadsheets, slow internal tools, and unclear approval visibility. Critical updates were easy to miss, and routine reporting took too long.",
//     solution:
//       "I designed a modular dashboard in Next.js with a bento-style overview, approval queues, reporting snapshots, and account-level drilldowns so teams could move from monitoring to action in one flow.",
//     impact:
//       "The interface reduced dashboard clutter, clarified the daily priority list, and created a stronger foundation for faster monthly close workflows and more confident approvals.",
//     role: "Product design + full-stack implementation",
//     timeline: "8 weeks",
//     scope: "Strategy, UX architecture, interface design, frontend implementation, and data modeling.",
//     audience: "Finance operators, approvers, and internal stakeholders managing reporting and cash flow.",
//     deliverables: [
//       "Operations dashboard information architecture",
//       "Approval queue and reporting UI system",
//       "Responsive account-level drilldown views"
//     ],
//     accessNote: "Private product build. Live walkthrough available during project discussions.",
//     stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
//     metrics: [
//       { label: "Report view time", value: "-38%" },
//       { label: "Approval steps unified", value: "5 flows" },
//       { label: "Largest contentful paint", value: "1.6s" }
//     ],
//     image: "/images/projects/atlas.svg",
//     year: "2026",
//     featured: true,
//     links: [
//       { label: "Live project", href: "https://example.com/atlas-finance" },
//       { label: "GitHub repository", href: "https://github.com/yourusername/atlas-finance" }
//     ],
//     challengePoints: [
//       "Design an information-dense dashboard without making it visually noisy.",
//       "Surface urgent tasks fast while preserving deeper reporting access.",
//       "Keep large account tables snappy across common laptop sizes."
//     ],
//     implementationPoints: [
//       "Built a server-first shell with card-based summaries and sticky actions for the highest-value tasks.",
//       "Split the dashboard into reusable overview, approvals, and analytics modules to keep the UI coherent as features expanded.",
//       "Used careful spacing, progressive disclosure, and restrained visual treatment so the app felt clear rather than crowded."
//     ],
//     resultsPoints: [
//       "Created a calmer daily workflow for finance operators who needed fast signal over raw data volume.",
//       "Improved the perceived quality of the product through stronger layout rhythm and more deliberate states.",
//       "Established a reusable design system foundation for future internal tools."
//     ],
//     nextSteps: [
//       "Add CSV import pipelines and audit history.",
//       "Introduce scenario modeling for forecast planning.",
//       "Connect stakeholder summaries to scheduled email reports."
//     ]
//   },
//   {
//     slug: "pulse-ops",
//     title: "Pulse Ops",
//     category: "AI support workspace",
//     summary:
//       "An internal operations panel that blends ticket triage, AI-assisted summaries, and service health monitoring into one surface.",
//     overview:
//       "Pulse Ops helps support and operations teams handle higher ticket volume with clearer queue management, AI-generated context, and a single workspace for action.",
//     problem:
//       "Support teams were switching between incident dashboards, customer threads, and manual summaries. The result was slower handoff quality and wasted time reconstructing context.",
//     solution:
//       "I created a unified console with queue filters, incident summaries, uptime panels, and AI-assisted ticket briefings so agents could understand a case before opening every source system.",
//     impact:
//       "The product reduced repeated context gathering, improved escalation quality, and gave leadership a cleaner view of operational health.",
//     role: "UX architecture + frontend systems",
//     timeline: "6 weeks",
//     scope: "Workflow design, interface systems, AI-assisted content design, and frontend architecture.",
//     audience: "Support operators, incident responders, and team leads monitoring queue health.",
//     deliverables: [
//       "Unified support workspace architecture",
//       "AI-assisted incident summary patterns",
//       "Queue visibility and operational health surfaces"
//     ],
//     accessNote: "Internal operations tool. Demo access is private, but the case study covers the workflow decisions in detail.",
//     stack: ["Next.js", "React", "OpenAI APIs", "Node.js", "Tailwind CSS"],
//     metrics: [
//       { label: "Triage time", value: "-29%" },
//       { label: "Summary generation", value: "<8s" },
//       { label: "Queue visibility", value: "+1 shared view" }
//     ],
//     image: "/images/projects/pulse.svg",
//     year: "2026",
//     featured: true,
//     links: [
//       { label: "Live project", href: "https://example.com/pulse-ops" },
//       { label: "GitHub repository", href: "https://github.com/yourusername/pulse-ops" }
//     ],
//     challengePoints: [
//       "Make AI assistance useful without turning the workflow into a novelty feature.",
//       "Keep sensitive operational data organized and legible in a dark UI.",
//       "Balance incident awareness with individual ticket focus."
//     ],
//     implementationPoints: [
//       "Structured the experience around three jobs: scan, understand, and act.",
//       "Used compact status cards, event timelines, and expandable summaries to reduce visual overload.",
//       "Designed the interface so AI output supported operator judgment instead of replacing it."
//     ],
//     resultsPoints: [
//       "Sharper handoffs between frontline support and operations leads.",
//       "Clearer prioritization during peak support windows.",
//       "A more credible path for responsible AI assistance in internal tools."
//     ],
//     nextSteps: [
//       "Add analytics for recurring incident themes.",
//       "Expand prompt controls per queue type.",
//       "Support post-incident review exports."
//     ]
//   },
//   {
//     slug: "orbit-studio",
//     title: "Orbit Studio",
//     category: "Agency portfolio platform",
//     summary:
//       "A case-study driven site for a product studio showcasing work, process, and inquiry capture with a strong editorial presentation.",
//     overview:
//       "Orbit Studio positions a small team like a serious product partner by pairing strong typography, narrative project pages, and conversion-focused inquiry flows.",
//     problem:
//       "The studio had strong project outcomes but an inconsistent web presence. Their previous site undersold process, craft, and technical range.",
//     solution:
//       "I redesigned the site as a narrative-first portfolio with modular case-study pages, structured content sections, and visual framing that emphasized both craft and outcomes.",
//     impact:
//       "The refreshed site improved positioning, clarified the studio offer, and turned project storytelling into a stronger lead-generation asset.",
//     role: "Design direction + website engineering",
//     timeline: "5 weeks",
//     scope: "Brand direction, content structuring, responsive frontend engineering, and performance tuning.",
//     audience: "Potential clients, collaborators, and recruiters evaluating studio credibility.",
//     deliverables: [
//       "Narrative project case-study framework",
//       "Editorial marketing site design system",
//       "Inquiry flow and performance-focused implementation"
//     ],
//     accessNote: "Public-style marketing build. Full deployment can be shared selectively in conversations.",
//     stack: ["Next.js", "TypeScript", "MDX", "Framer Motion", "Vercel"],
//     metrics: [
//       { label: "Qualified inquiries", value: "+41%" },
//       { label: "Average session length", value: "+2.1x" },
//       { label: "Core web vitals", value: "Pass" }
//     ],
//     image: "/images/projects/orbit.svg",
//     year: "2025",
//     featured: true,
//     links: [
//       { label: "Live project", href: "https://example.com/orbit-studio" },
//       { label: "GitHub repository", href: "https://github.com/yourusername/orbit-studio" }
//     ],
//     challengePoints: [
//       "Differentiate the brand without drifting into trend-heavy visuals.",
//       "Tell project stories clearly enough for both clients and recruiters.",
//       "Keep the site lightweight while still feeling highly considered."
//     ],
//     implementationPoints: [
//       "Built a reusable case-study framework with clear sections for challenge, approach, stack, and outcomes.",
//       "Used large display type, constrained copy width, and subtle motion to create a confident editorial rhythm.",
//       "Kept the codebase modular so new case studies could be added quickly."
//     ],
//     resultsPoints: [
//       "Stronger trust signals during the first visit.",
//       "Better conversion from visitors who wanted proof of execution quality.",
//       "A design direction that felt current without appearing overdesigned or repetitive."
//     ],
//     nextSteps: [
//       "Expand the journal section for behind-the-scenes technical writing.",
//       "Add richer SEO metadata per case study.",
//       "Publish performance snapshots for each launch."
//     ]
//   }
// ];

export const projects: Project[] = [
  {
    slug: "ecospark-frontend",
    title: "EcoSpark",
    category: "Sustainability innovation platform",
    summary:
      "A role-based sustainability platform where users can discover eco ideas, manage campaigns, access premium innovation content, and collaborate around environmental solutions.",
    overview:
      "EcoSpark Frontend is the client-side application for a sustainability innovation platform. It supports public discovery, authenticated dashboards, idea moderation, campaign workflows, community interaction, and paid access to premium ideas.",
    problem:
      "Sustainability-focused communities often lack a structured digital platform where members, contributors, and admins can manage eco ideas, campaigns, collaboration, and paid knowledge access in one consistent workflow.",
    solution:
      "I built a modern frontend architecture using Next.js, React, TypeScript, TanStack Query, TanStack Form, Zod, Axios, and Tailwind CSS. The application separates public discovery from authenticated workspace flows and connects with a backend API for role-based platform features.",
    impact:
      "The project creates a scalable frontend foundation for sustainability communities, improving idea discovery, campaign visibility, role-based access, and user interaction across the platform.",
    role: "Frontend architecture + full-stack integration",
    timeline: "Recent project",
    scope:
      "Frontend architecture, responsive UI implementation, API integration, form validation, role-based user flows, and deployment.",
    audience:
      "Eco-conscious users, sustainability contributors, campaign organizers, moderators, admins, and users interested in premium innovation ideas.",
    deliverables: [
      "Public sustainability discovery interface",
      "Authenticated role-based frontend workspace",
      "Campaign, idea, moderation, and community UI flows",
    ],
    accessNote:
      "Public GitHub repository with deployed frontend and connected backend API.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "TanStack Query",
      "TanStack Form",
      "Zod",
      "Axios",
    ],
    metrics: [
      { label: "Frontend commits", value: "43" },
      { label: "Role-based flows", value: "Multiple" },
      { label: "Deployment", value: "Vercel" },
    ],
    image: "/images/projects/eco.png",
    year: "2026",
    featured: true,
    links: [
      {
        label: "Live project",
        href: "https://eco-spark-frontend.vercel.app",
      },
      {
        label: "GitHub repository",
        href: "https://github.com/FahimMuntasir0417/EcoSpark-Frontend",
      },
      {
        label: "Backend repository",
        href: "https://github.com/FahimMuntasir0417/EcoSpark-Hub",
      },
    ],
    challengePoints: [
      "Design a frontend that supports both public browsing and authenticated role-based workflows.",
      "Keep complex sustainability features organized without overwhelming the user experience.",
      "Integrate multiple API-driven flows while maintaining type safety and predictable frontend state.",
    ],
    implementationPoints: [
      "Built the frontend with a modern Next.js and TypeScript stack for maintainability and scalability.",
      "Used TanStack Query for structured server-state management and Axios for API communication.",
      "Added schema-based validation with Zod and TanStack Form to keep user input reliable across complex forms.",
      "Structured the UI around clear feature areas such as ideas, campaigns, community flows, moderation, and paid access.",
    ],
    resultsPoints: [
      "Delivered a production-ready frontend connected to a live backend API.",
      "Created a cleaner user journey for discovering, submitting, managing, and interacting with sustainability ideas.",
      "Established a strong foundation for expanding the platform with more community and monetization features.",
    ],
    nextSteps: [
      "Improve dashboard analytics for platform admins and campaign organizers.",
      "Add stronger loading, empty, and error states across all API-driven pages.",
      "Enhance SEO metadata and public idea detail pages for better discoverability.",
      "Add automated frontend tests for critical user flows.",
    ],
  },
  // {
  //   slug: "foodnest-client",
  //   title: "FoodNest",
  //   category: "Food ordering platform",
  //   summary:
  //     "A modern food ordering frontend that helps users browse food items, explore restaurant-style experiences, and interact with a clean client-side ordering flow.",
  //   overview:
  //     "FoodNest Client is the frontend application for a food-focused web platform. It is structured as a modern Next.js project with reusable components, app-level configuration, and a scalable frontend setup.",
  //   problem:
  //     "Food ordering interfaces need to present products clearly, support fast browsing, and keep the user journey simple from discovery to action. A weak frontend can make food discovery feel cluttered and slow.",
  //   solution:
  //     "I built a Next.js client application with TypeScript-oriented project structure, Tailwind styling, reusable UI components, and deployment-ready configuration. The frontend focuses on clean product presentation and a responsive user experience.",
  //   impact:
  //     "The project demonstrates practical frontend engineering for a real-world food platform, including component structure, routing-ready architecture, responsive layouts, and production deployment preparation.",
  //   role: "Frontend implementation + UI engineering",
  //   timeline: "Recent project",
  //   scope:
  //     "Frontend development, reusable component setup, responsive layout implementation, styling system, and deployment preparation.",
  //   audience:
  //     "Food platform users, restaurant customers, and admins or operators managing a food-ordering experience.",
  //   deliverables: [
  //     "Responsive food platform frontend",
  //     "Reusable UI component structure",
  //     "Deployment-ready Next.js client application",
  //   ],
  //   accessNote:
  //     "Public GitHub repository. Backend repository is available separately as FoodNest-Server.",
  //   stack: [
  //     "Next.js",
  //     "TypeScript",
  //     "React",
  //     "Tailwind CSS",
  //     "PNPM",
  //     "Bun",
  //     "Vercel",
  //   ],
  //   metrics: [
  //     { label: "Frontend commits", value: "24" },
  //     { label: "Repository type", value: "Client" },
  //     { label: "Deployment ready", value: "Yes" },
  //   ],
  //   image: "/images/projects/food.png",
  //   year: "2026",
  //   featured: true,
  //   links: [
  //     {
  //       label: "Live project",
  //       href: "https://foodnest-nu.vercel.app",
  //     },
  //     {
  //       label: "GitHub repository",
  //       href: "https://github.com/FahimMuntasir0417/FoodNest-Client",
  //     },
  //     {
  //       label: "Backend repository",
  //       href: "https://github.com/FahimMuntasir0417/FoodNest-Server",
  //     },
  //   ],
  //   challengePoints: [
  //     "Create a clean food platform interface that feels simple and easy to browse.",
  //     "Keep the frontend structure scalable enough for future ordering, cart, and dashboard features.",
  //     "Prepare the project for production deployment while keeping the codebase organized.",
  //   ],
  //   implementationPoints: [
  //     "Set up the project with Next.js configuration, Tailwind styling, and reusable component patterns.",
  //     "Organized the source code under a scalable `src` structure for maintainable frontend development.",
  //     "Used modern package tooling with PNPM and Bun lockfiles to support efficient dependency management.",
  //     "Prepared the app for deployment with production build configuration and Vercel-friendly structure.",
  //   ],
  //   resultsPoints: [
  //     "Created a strong frontend foundation for a food ordering platform.",
  //     "Improved portfolio value by demonstrating a practical client-side product build.",
  //     "Separated the client and server responsibilities across dedicated repositories.",
  //   ],
  //   nextSteps: [
  //     "Add full cart and checkout flow if not already completed.",
  //     "Improve product filtering, search, and category-based browsing.",
  //     "Add loading skeletons, error states, and empty states for API-driven pages.",
  //     "Write a stronger README with screenshots, live URL, features, and setup instructions.",
  //   ],
  // },
  {
    slug: "skillsync-ai",
    title: "SkillSync AI",
    category: "AI-powered learning management platform",
    summary:
      "A full-stack AI learning management platform that connects course discovery, role-based dashboards, progress tracking, support, notifications, and practical AI learning workflows.",
    overview:
      "SkillSync AI is a production-style LMS and AI learning assistant built with a modern frontend and scalable backend architecture. The platform supports students, instructors, and admins through course discovery, enrollments, assignments, reviews, support tickets, notifications, instructor promotion requests, analytics, and Gemini-powered AI tools.",
    problem:
      "Learners often depend on disconnected tools for courses, progress tracking, assignments, feedback, support, and AI planning. This creates friction because learning goals, course activity, feedback, and career guidance are not connected in one coherent system.",
    solution:
      "I built a full-stack platform with a Next.js frontend and a modular Express backend. The frontend delivers a polished SaaS-style experience with role-aware dashboards, validated forms, server-state management, and structured AI result rendering. The backend provides secure APIs for LMS workflows, JWT authentication, RBAC, Prisma/PostgreSQL data modeling, transactional email, notifications, analytics, and real Gemini AI integrations.",
    impact:
      "The project demonstrates end-to-end product engineering: a real AI-enabled learning platform with user roles, secure backend architecture, connected LMS workflows, production-ready UI states, and AI features that support practical learning decisions instead of acting as decorative demo buttons.",
    role: "Full-stack architecture + AI product engineering",
    timeline: "Recent project",
    scope:
      "Product architecture, frontend implementation, backend API design, database modeling, authentication, role-based access control, AI integration, dashboard workflows, validation, deployment, and documentation.",
    audience:
      "Students, instructors, admins, online learning platforms, career-focused learners, and teams building AI-assisted education products.",
    deliverables: [
      "AI-powered LMS frontend with public pages and protected dashboards",
      "Modular backend API with authentication, RBAC, Prisma, PostgreSQL, and LMS domains",
      "Practical AI workflows for roadmaps, skill gaps, project recommendations, chat, summaries, feedback, and blog generation",
    ],
    accessNote:
      "Public GitHub repositories with deployed frontend and backend. Demo credentials are available in the project README for student, instructor, and admin roles.",
    stack: [
      "Next.js App Router",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Gemini API",
      "Nodemailer",
      "Pino",
      "Bun",
      "Vercel",
    ],
    metrics: [
      { label: "Frontend commits", value: "16" },
      { label: "Backend commits", value: "25" },
      { label: "User roles", value: "3" },
    ],
    image: "/images/projects/skillsync-ai.png",
    year: "2026",
    featured: true,
    links: [
      {
        label: "Live project",
        href: "https://skill-sync-ai-frontend.vercel.app/",
      },
      {
        label: "Frontend repository",
        href: "https://github.com/FahimMuntasir0417/SkillSync-AI-Frontend",
      },
      {
        label: "Backend repository",
        href: "https://github.com/FahimMuntasir0417/SkillSync-AI-Backend",
      },
      {
        label: "Backend live API",
        href: "https://skill-sync-ai-backend.vercel.app/",
      },
    ],
    challengePoints: [
      "Design a learning platform where AI tools support real learner decisions instead of feeling like isolated demo features.",
      "Create separate but consistent workflows for students, instructors, and admins while keeping the user experience understandable.",
      "Build backend permissions that combine role-based access with ownership checks for sensitive LMS resources.",
      "Connect many product areas—courses, enrollments, assignments, reviews, support, notifications, analytics, and AI logs—without creating a tangled codebase.",
    ],
    implementationPoints: [
      "Built the frontend with Next.js App Router, TypeScript, Tailwind CSS, TanStack Query, Zustand, React Hook Form, and Zod for a responsive, typed, and validated SaaS-style experience.",
      "Structured the frontend around public pages, auth flows, protected dashboards, reusable UI primitives, API helpers, and domain-focused feature modules.",
      "Implemented AI workspaces for roadmap generation, skill-gap analysis, project recommendations, AI chat, course summaries, smart recommendations, assignment feedback, and blog generation.",
      "Built the backend with TypeScript, Express, Prisma, PostgreSQL, JWT authentication, role guards, Zod validation, centralized error handling, pagination helpers, and standardized API responses.",
      "Integrated Gemini-powered AI services with request validation, structured responses, rate limiting, failure handling, and AI request history for admin visibility.",
      "Added platform workflows for course management, enrollments, lesson progress, assignments, submissions, reviews, support tickets, notifications, and instructor promotion requests.",
    ],
    resultsPoints: [
      "Delivered a full-stack AI LMS that feels closer to a real product than a simple CRUD portfolio app.",
      "Created a stronger learning journey by connecting course discovery, progress, assignments, feedback, support, and AI guidance in one platform.",
      "Demonstrated production-grade engineering signals including modular architecture, authentication, RBAC, validation, logging, environment-based configuration, and deployment-ready setup.",
      "Built portfolio evidence for both frontend product quality and backend system design capability.",
    ],
    nextSteps: [
      "Add automated frontend and backend tests for critical auth, enrollment, payment-like, and AI workflows.",
      "Add stronger observability with request tracing, AI usage metrics, error dashboards, and uptime monitoring.",
      "Improve admin analytics with cohort progress, course performance, AI usage, support health, and instructor quality metrics.",
      "Move uploaded assets to cloud storage such as S3 or Cloudinary for production scalability.",
      "Introduce background jobs for email delivery, AI processing, notification fanout, and scheduled reports.",
      "Add billing or subscription support if the platform evolves into a commercial AI learning SaaS.",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
