import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import khIcon from "@/app/icon.png"

const GithubLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.695.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LIVE_URL = "https://arena.kruthikhulisandra.com"
const REPO_URL = "https://github.com/kruHuli/promptgym"

const steps = [
  {
    n: "01",
    kicker: "BRIEF",
    title: "A messy, real brief",
    body: "Every challenge is a garbled meeting transcript — conflicting requirements, half-remembered thresholds, people dropping off the call. You dig out what actually has to get built.",
    tags: ["Ambiguous specs", "Implied requirements", "Timed"],
  },
  {
    n: "02",
    kicker: "BUILD",
    title: "Prompt a coding agent",
    body: "You don't write the code — you direct a GPT-4o build agent through a three-column IDE. It writes files and runs commands in a live sandbox; a preview iframe renders the app as it takes shape.",
    tags: ["Agentic loop", "Live sandbox", "WebSocket stream"],
  },
  {
    n: "03",
    kicker: "JUDGE",
    title: "A judge LLM grades you",
    body: "On submit, a judge model scores the build across requirements, correctness, code quality, taste, and prompting skill — plus deterministic token-cost and speed percentiles.",
    tags: ["5-axis rubric", "Cost percentile", "Transcript-graded"],
  },
]

const stack = [
  { label: "FastAPI", category: "Backend" },
  { label: "React + Vite", category: "Frontend" },
  { label: "GPT-4o", category: "Agent + Judge" },
  { label: "WebSockets", category: "Live stream" },
  { label: "subprocess sandbox", category: "Execution" },
  { label: "Fly.io", category: "Deploy" },
]

export default function PromptGymPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Nav */}
        <nav className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-[44px] w-[44px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-stone-200 bg-white p-1 shadow-[0_4px_0px_0px_#d6d3d1] transition-all duration-75 active:translate-y-[3px] active:shadow-[0_1px_0px_0px_#d6d3d1]"
            aria-label="Back home"
          >
            <Image src={khIcon} alt="KH logo" width={44} height={44} className="h-full w-full object-contain" priority />
          </Link>
          <Link
            href="/apps"
            className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-2 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100"
          >
            Back to Projects
          </Link>
        </nav>

        {/* Hero */}
        <section className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            FastAPI · React · GPT-5.6 Sol · Fly.io
          </p>
          <h1 className="font-display text-6xl font-black leading-none text-stone-900 md:text-7xl">
            PromptGym
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-stone-500">
            A timed arena for AI-assisted building. You get a messy brief and a coding agent —
            prompt it to ship a working app before the clock runs out, then a judge LLM grades
            the result and your prompting.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#EA580C] bg-[#EA580C] px-6 py-3 text-sm font-black text-white shadow-[0_4px_0_0_#C2410C] transition-all duration-75 hover:bg-orange-600 active:translate-y-[3px] active:shadow-none"
            >
              Enter the arena
              <ArrowUpRight size={15} />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-300 bg-white px-6 py-3 text-sm font-black text-stone-700 shadow-[0_4px_0_0_#d6d3d1] transition-all duration-75 hover:bg-stone-50 active:translate-y-[3px] active:shadow-none"
            >
              <GithubLogo className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </section>

        {/* How it works */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8 md:p-10">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">How It Works</p>
          <h2 className="mb-10 font-display text-3xl font-black text-stone-900">Brief in. Graded build out.</h2>

          <div className="flex flex-col items-stretch gap-4 md:flex-row md:gap-0">
            {steps.map((s, i) => (
              <div key={s.n} className="flex w-full flex-col md:flex-1">
                <div className="flex h-full flex-col rounded-2xl border-2 border-orange-200 bg-orange-50 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#EA580C] bg-[#EA580C] font-mono text-sm font-black text-white">
                    {s.n}
                  </div>
                  <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-[#EA580C]">{s.kicker}</p>
                  <h3 className="mb-3 font-display text-xl font-black text-stone-900">{s.title}</h3>
                  <p className="text-sm font-medium leading-6 text-stone-600">{s.body}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-md border border-orange-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-orange-600">{t}</span>
                    ))}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden items-center justify-center px-2 text-2xl font-black text-[#EA580C] md:flex">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mb-10 rounded-3xl border-2 border-stone-200 bg-white p-8 md:p-10">
          <p className="mb-6 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Stack</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {stack.map((s) => (
              <div key={s.label} className="rounded-xl border-2 border-orange-100 bg-orange-50 px-4 py-3">
                <p className="font-display text-base font-black text-stone-900">{s.label}</p>
                <p className="font-mono text-[10px] font-bold tracking-[0.1em] text-orange-500">{s.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border-2 border-[#EA580C] bg-[#EA580C] p-8 text-center shadow-[6px_6px_0_0_#C2410C]">
          <h2 className="font-display text-3xl font-black text-white">The clock&apos;s already running.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-white/80">
            Pick a challenge, out-prompt the timer, and see how the judge scores you.
          </p>
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl border-2 border-white/80 bg-white px-6 py-3 text-sm font-black text-[#EA580C] shadow-[0_4px_0_0_rgba(154,52,18,0.4)] transition-all duration-75 hover:bg-orange-50 active:translate-y-[3px] active:shadow-none"
          >
            Enter the arena
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </main>
  )
}
