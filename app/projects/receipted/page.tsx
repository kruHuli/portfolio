import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import kruhuliLogo from "@/content/kruhulilogo.png"

const features = [
  {
    eyebrow: "Job Seeker Flow",
    title: "Write stories, not bullet points",
    description: "You describe what you actually did. Receipted's AI extracts individual claims from your stories, verifies each one against real sources, and converts them into a scored evidence profile.",
  },
  {
    eyebrow: "Verification Engine",
    title: "Every claim gets a receipt",
    description: "Claims are verified via You.com's search API and scored on confidence (0–1). Each skill carries a status: verified, unverified, or suspicious — no more self-reported fluff.",
  },
  {
    eyebrow: "Recruiter Flow",
    title: "Paste a JD, rank candidates instantly",
    description: "Recruiters paste a job description, the system extracts required skills, ranks all candidates by verified match strength, and drafts personalized outreach emails via Composio Gmail.",
  },
  {
    eyebrow: "Trust Score",
    title: "Receipt Strength: 0–100",
    description: "A composite score built from evidence strength (70%), skill diversity bonus (20%), and inflation penalties. Profiles earn a High / Medium / Low trust rating that recruiters can actually rely on.",
  },
]

const stack = [
  { label: "FastAPI", category: "Backend" },
  { label: "Python 3.11", category: "Backend" },
  { label: "Neo4j 5.x", category: "Database" },
  { label: "OpenAI", category: "AI" },
  { label: "You.com API", category: "Verification" },
  { label: "Composio", category: "Email" },
  { label: "Docker Compose", category: "Infra" },
  { label: "Pydantic", category: "Backend" },
]

const graphNodes = [
  { label: "Person", color: "bg-orange-100 border-orange-300 text-orange-800" },
  { label: "Story", color: "bg-blue-100 border-blue-300 text-blue-800" },
  { label: "Claim", color: "bg-amber-100 border-amber-300 text-amber-800" },
  { label: "Skill", color: "bg-green-100 border-green-300 text-green-800" },
  { label: "ProposedSkill", color: "bg-stone-100 border-stone-300 text-stone-700" },
]

export default function ReceiptedPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Nav */}
        <nav className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-[44px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[#C2410C] bg-[#EA580C] p-0 shadow-[0_4px_0px_0px_#9A3412] transition-all duration-75 active:translate-y-[3px] active:shadow-[0_1px_0px_0px_#9A3412]"
            aria-label="Back home"
          >
            <Image src={kruhuliLogo} alt="Kruhuli logo" width={1024} height={1024} className="h-[44px] w-[126px] object-cover" priority />
          </Link>
          <Link
            href="/apps"
            className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-2 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100"
          >
            ← Back to Apps
          </Link>
        </nav>

        {/* Hero */}
        <section className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            Evidence-First Hiring
          </p>
          <h1 className="font-display text-6xl font-black leading-none text-stone-900 md:text-7xl">
            Receipted
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-stone-500">
            Resumes are self-reported. Receipted replaces them with verified evidence — every skill claim backed by real proof, extracted from your stories and scored by AI.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-300 bg-white px-5 py-2.5 text-sm font-black text-stone-500">
              Backend demo coming soon
            </span>
          </div>
        </section>

        {/* Core idea card */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8 md:p-10">
          <p className="mb-3 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">The Problem</p>
          <h2 className="font-display text-3xl font-black text-stone-900 md:text-4xl">
            Resumes are vibes. Receipted is proof.
          </h2>
          <p className="mt-4 text-sm font-medium leading-7 text-stone-600 md:text-base">
            Anyone can write "led cross-functional teams" or "drove 40% growth." Receipted forces the question: <strong className="text-stone-900">where's the receipt?</strong> You write the story of what you actually did. The system extracts the claims, verifies them against external sources, and publishes a trust-scored profile recruiters can actually evaluate in under 2 minutes.
          </p>
        </div>

        {/* Features grid */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border-2 border-[#EA580C] bg-white p-6 shadow-[5px_5px_0_0_#C2410C]">
              <span className="mb-4 inline-block rounded-lg border-2 border-orange-300 bg-orange-100 px-3 py-1 text-[11px] font-black tracking-[0.12em] text-orange-700">
                {f.eyebrow}
              </span>
              <h3 className="font-display text-xl font-black text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-stone-600">{f.description}</p>
            </div>
          ))}
        </section>

        {/* Graph model */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-3 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Architecture</p>
          <h2 className="font-display text-2xl font-black text-stone-900 mb-6">Graph Data Model</h2>
          <div className="flex flex-wrap items-center gap-2 font-mono text-sm font-bold">
            {graphNodes.map((node, i) => (
              <span key={node.label} className="flex items-center gap-2">
                <span className={`rounded-lg border-2 px-3 py-1.5 ${node.color}`}>{node.label}</span>
                {i < graphNodes.length - 1 && <span className="text-stone-400">→</span>}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium leading-6 text-stone-500">
            Each <strong className="text-stone-800">Claim</strong> node stores verification status, confidence score (0–1), source citations, and a context tag — Operations, Leadership, Risk, Budget, Data, or Customer Service. The graph model makes it trivial to query "which candidates have verified leadership claims with confidence above 0.8."
          </p>
        </div>

        {/* Stack */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-3 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Tech Stack</p>
          <h2 className="font-display text-2xl font-black text-stone-900 mb-6">What It's Built On</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s.label} className="rounded-lg border-2 border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700">
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="rounded-3xl border-2 border-[#EA580C] bg-[#EA580C] p-8 text-center shadow-[6px_6px_0_0_#C2410C]">
          <h2 className="font-display text-3xl font-black text-white">Want to see it run?</h2>
          <p className="mt-3 text-sm font-medium text-white/80">
            Backend runs on FastAPI + Neo4j via Docker Compose. Drop me a line and I'll spin up a live demo.
          </p>
          <a
            href="mailto:kruhuliwork@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-white/80 bg-white px-6 py-3 text-sm font-black text-[#EA580C] shadow-[0_4px_0_0_rgba(154,52,18,0.4)] transition-all duration-75 hover:bg-orange-50 active:translate-y-[3px] active:shadow-none"
          >
            Get in touch <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </main>
  )
}
