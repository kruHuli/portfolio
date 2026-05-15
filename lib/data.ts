export type TimelineEvent = {
  id: string
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  category: "education" | "work" | "project" | "milestone"
}

export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string[]
  tech: string[]
  current?: boolean
}

export type DemoVideo = {
  id: string
  title: string
  description: string
  tags: string[]
  duration: string
  gradientFrom: string
  gradientTo: string
  featured?: boolean
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    year: "Mar 2026",
    title: "testingDarwin",
    subtitle: "Solo AI Project",
    description:
      "Built a Python LLM pipeline that analyzes corporate-style email and surfaces influence strategies — urgency, positive framing, scope minimization, blame-shifting. Engineered an evolutionary tuning loop (evaluate → elite selection → mutation) under a hard ~$1.50 prototype API budget.",
    tags: ["Python", "LLMs", "Prompt Engineering", "Evolutionary Tuning"],
    category: "project",
  },
  {
    id: "t2",
    year: "Oct 2025",
    title: "AI Engineer — AdvantageGEO",
    subtitle: "Employee #5 · First AI Hire",
    description:
      "Joined a 4-person founding team and turned a vision into a shipped product. Designed a 6-agent AI pipeline using Anthropic's MCP to automate GEO audits for SMB clients. Demo closed 3–5 paying customers. Delivered 17% visibility increase for an early client within 2 months.",
    tags: ["Multi-agent", "RAG", "MCP", "Python"],
    category: "work",
  },
  {
    id: "t3",
    year: "Sep 2025",
    title: "Axial Sports Analytics",
    subtitle: "ML Capstone · Team Lead",
    description:
      "Led a 3-person team building an end-to-end forecasting system for NBA player performance and MLB team outcomes using travel-distance and rest data. Owned the TCN+LSTM architecture — the LSTM layer captured sequential fatigue effects that improved R² by ~3% over the TCN-only baseline.",
    tags: ["PyTorch", "TCN", "LSTM", "Sports Analytics"],
    category: "project",
  },
  {
    id: "t4",
    year: "Jun 2024",
    title: "AI Product Analyst Intern — Eltropy",
    subtitle: "Santa Clara, CA",
    description:
      "Analyzed 50,000+ real customer conversations using NLP across production AI deployments. Documented 10+ pre-deployment bugs in JIRA. Authored an 8-step ethical AI framework adopted product-wide, and deployed GenAI-driven onboarding tooling with HR.",
    tags: ["NLP", "GenAI", "RAG", "Product Analytics"],
    category: "work",
  },
  {
    id: "t5",
    year: "2023",
    title: "Recreation Leadership Excellence Award",
    subtitle: "Rutgers University",
    description:
      "Awarded for leading a 50-person referee and supervisor team across 4 venues serving 10,000+ students. Built a 3-tier training curriculum and professional development tracker that drove a 43% expansion in sports offerings.",
    tags: ["Award", "Leadership", "Rutgers"],
    category: "milestone",
  },
  {
    id: "t6",
    year: "2024",
    title: "Master of Business and Science",
    subtitle: "Rutgers Professional Science Master's Program",
    description:
      "Analytics — AI and Analytics concentration. Bridging rigorous technical AI systems work with the business context to actually ship things that matter. Graduating May 2026.",
    tags: ["MBS", "AI & Analytics", "Rutgers"],
    category: "education",
  },
  {
    id: "t7",
    year: "Sep 2021",
    title: "Rutgers University — B.S.",
    subtitle: "Business Analytics & Information Technologies",
    description:
      "Rutgers Business School, Leadership Skills concentration. Started as student staff at Rutgers Recreation alongside coursework — four years of building, leading, and figuring it out.",
    tags: ["BS", "Business Analytics", "BAIT", "Rutgers"],
    category: "education",
  },
]

export const experiences: Experience[] = [
  {
    id: "e1",
    company: "AdvantageGEO",
    role: "AI Engineer",
    period: "Oct 2025 – Jan 2026",
    location: "Remote",
    description: [
      "Joined as employee #5 and first AI hire at a 4-person team; turned the founders' vision into a shipped product, with infrastructure and full-stack engineers later hired around what I built",
      "Designed and built a 6-agent AI pipeline using Anthropic's MCP with the OpenAI and Perplexity APIs (Python), coordinating agents in series and parallel to automate GEO audits for SMB clients with validation checkpoints between stages",
      "Built a proprietary RAG architecture grounding outputs in curated GEO optimization data to generate client-specific action plans, producing a 17% visibility increase for an early customer within 2 months",
      "Demo I built was used in sales pitches that closed 3–5 paying SMB customers; rapid-prototyped iterations in Cursor with version control via GitHub",
    ],
    tech: ["Python", "Anthropic MCP", "OpenAI API", "Perplexity API", "RAG", "Multi-agent", "Cursor", "GitHub"],
  },
  {
    id: "e2",
    company: "Eltropy Inc",
    role: "AI Product Analyst Intern",
    period: "Jun 2024 – Aug 2024",
    location: "Santa Clara, CA",
    description: [
      "Worked cross-functionally with engineering, product, support, and sales on production AI deployments; classified and analyzed 50,000+ real customer conversations using NLP to assess product performance and deliver Sankey reports",
      "Identified and documented 10+ pre-deployment bugs in JIRA, reducing post-release issues",
      "Authored an 8-step ethical AI framework incorporating RAG best practices, adopted product-wide to guide responsible GenAI interactions aligned with company values and industry standards",
      "Partnered with HR to deploy GenAI-driven onboarding tooling, acting as the bridge between AI product decisions and non-technical stakeholders",
    ],
    tech: ["NLP", "Python", "JIRA", "RAG", "GenAI", "Sankey Analysis"],
  },
  {
    id: "e3",
    company: "Rutgers Recreation",
    role: "Intramural Sports Graduate Intern",
    period: "Sep 2021 – May 2025",
    location: "New Brunswick, NJ",
    description: [
      "Led a 50-person referee and supervisor team across 4 venues, 6 nights a week, serving 10,000+ students; built a 3-tier training curriculum and professional development tracker used to drive supervisor promotion decisions",
      "Drove a 43% expansion in sports offerings; recipient of the Rutgers University Recreation Leadership Excellence Award, 2023",
    ],
    tech: ["Leadership", "Operations", "Program Design", "Training & Development"],
  },
]

export const demoVideos: DemoVideo[] = [
  {
    id: "v1",
    title: "testingDarwin: Evolutionary LLM Prompt Tuning",
    description:
      "Walkthrough of the pipeline that detects corporate influence strategies in email — and the evolutionary loop that self-improves under a $1.50 API budget.",
    tags: ["Python", "LLMs", "Prompt Engineering", "Evolutionary Tuning"],
    duration: "—:—",
    gradientFrom: "#1E1B4B",
    gradientTo: "#4C1D95",
    featured: true,
  },
  {
    id: "v2",
    title: "AdvantageGEO: Building a 6-Agent GEO Pipeline",
    description:
      "Architecture deep-dive on the multi-agent system built with Anthropic's MCP — RAG grounding, validation checkpoints, and how the demo closed paying customers.",
    tags: ["Multi-agent", "MCP", "RAG", "Python"],
    duration: "—:—",
    gradientFrom: "#EA580C",
    gradientTo: "#7C2D12",
  },
  {
    id: "v3",
    title: "Axial Sports: TCN+LSTM Fatigue Forecasting",
    description:
      "Predicting NBA and MLB outcomes from travel and rest data — why we added the LSTM layer, how it captured sequential fatigue, and the ~3% R² gain it bought us.",
    tags: ["PyTorch", "TCN", "LSTM", "Sports Analytics"],
    duration: "—:—",
    gradientFrom: "#0369A1",
    gradientTo: "#082F49",
  },
]
