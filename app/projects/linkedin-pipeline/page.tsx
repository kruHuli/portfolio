import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import khIcon from "@/app/icon.png"

const GithubLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.695.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const stack = [
  { label: "Python", category: "Language" },
  { label: "Flask", category: "Framework" },
  { label: "GPT-4o", category: "AI" },
  { label: "PubMed / NCBI API", category: "Data" },
  { label: "OpenHost", category: "Infrastructure" },
  { label: "Darwinian Evolver", category: "Prompt Engineering" },
]

const voiceRules = [
  "No em dashes",
  "No hashtags",
  "No emojis",
  "No bullet points",
  "Max 200 words",
  "Open macro, zoom personal",
  "End punchy",
  "No hallucinated names",
]

export default function LinkedInPipelinePage() {
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
            PubMed · GPT-4o · Flask · OpenHost
          </p>
          <h1 className="font-display text-6xl font-black leading-none text-stone-900 md:text-7xl">
            LinkedIn Pipeline
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-stone-500">
            Search for anything. This looks up actual peer-reviewed research from PubMed — not summaries,
            not blog posts, not vibes. Type a topic and get real studies back.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://linkedin-pipeline.kruthik.selfhost.imbue.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-[#EA580C] bg-[#EA580C] px-6 py-3 text-sm font-black text-white shadow-[0_4px_0_0_#C2410C] transition-all duration-75 hover:bg-orange-600 active:translate-y-[3px] active:shadow-none"
            >
              Launch App
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://github.com/kruHuli/pubmdScanner"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-stone-300 bg-white px-6 py-3 text-sm font-black text-stone-700 shadow-[0_4px_0_0_#d6d3d1] transition-all duration-75 hover:bg-stone-50 active:translate-y-[3px] active:shadow-none"
            >
              <GithubLogo className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </section>

        {/* Pipeline */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8 md:p-10">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">How It Works</p>
          <h2 className="mb-10 font-display text-3xl font-black text-stone-900">One URL. Three posts. Done.</h2>

          <div className="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0">

            {/* Step 1 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 md:flex-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#EA580C] bg-[#EA580C] font-mono text-sm font-black text-white">
                01
              </div>
              <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-[#EA580C]">FETCH</p>
              <h3 className="mb-3 font-display text-xl font-black text-stone-900">PubMed</h3>
              <p className="text-sm font-medium leading-6 text-stone-600">
                Paste any PubMed URL. The NCBI E-utilities API fetches the full paper — title, abstract, authors, year. No scraping, no login.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["NCBI API", "PMID extraction", "Full abstract", "Zero scraping"].map((t) => (
                  <span key={t} className="rounded-md border border-orange-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-orange-600">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center px-3 text-2xl font-black text-[#EA580C]">
              <span className="hidden md:block">›</span>
              <span className="block md:hidden">↓</span>
            </div>

            {/* Step 2 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 md:flex-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-blue-600 bg-blue-600 font-mono text-sm font-black text-white">
                02
              </div>
              <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-blue-600">GENERATE</p>
              <h3 className="mb-3 font-display text-xl font-black text-stone-900">GPT-4o</h3>
              <p className="text-sm font-medium leading-6 text-stone-600">
                The research is passed to GPT-4o with a voice-matched system prompt — extracted from my own writing and evolved over 20 iterations. Three posts come back, each with a different angle.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Voice extraction", "20-iter evolution", "Few-shot examples", "3 angles"].map((t) => (
                  <span key={t} className="rounded-md border border-blue-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-blue-600">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center px-3 text-2xl font-black text-[#EA580C]">
              <span className="hidden md:block">›</span>
              <span className="block md:hidden">↓</span>
            </div>

            {/* Step 3 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-green-200 bg-green-50 p-6 md:flex-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-green-700 bg-green-700 font-mono text-sm font-black text-white">
                03
              </div>
              <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-green-700">REVIEW</p>
              <h3 className="mb-3 font-display text-xl font-black text-stone-900">Human Gate</h3>
              <p className="text-sm font-medium leading-6 text-stone-600">
                Posts are shown in the app for review. Nothing goes out automatically. Copy what you want, ignore what you don&apos;t. Drafts are saved to disk.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Manual approval", "Copy to clipboard", "Saved to disk", "No auto-post"].map((t) => (
                  <span key={t} className="rounded-md border border-green-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-green-600">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Voice rules */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Voice Constraints</p>
          <h2 className="mb-2 font-display text-2xl font-black text-stone-900">Hard rules baked into the prompt</h2>
          <p className="mb-6 text-sm font-medium text-stone-500">
            The voice wasn&apos;t prompted with adjectives. It was extracted from a 7,000-word paper I wrote, run through a Darwinian evolver, and locked down with explicit rules.
          </p>
          <div className="flex flex-wrap gap-2">
            {voiceRules.map((r) => (
              <span key={r} className="rounded-lg border-2 border-orange-200 bg-orange-50 px-3 py-1.5 font-mono text-xs font-bold text-orange-700">
                {r}
              </span>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Tech Stack</p>
          <h2 className="mb-6 font-display text-2xl font-black text-stone-900">What it runs on</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s.label} className="rounded-lg border-2 border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700">
                {s.label}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border-2 border-[#EA580C] bg-[#EA580C] p-8 text-center shadow-[6px_6px_0_0_#C2410C]">
          <h2 className="font-display text-3xl font-black text-white">It&apos;s live. Go use it.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-white/80">
            Paste any PubMed URL. Get Mon/Wed/Fri posts back in under 20 seconds.
          </p>
          <a
            href="https://linkedin-pipeline.kruthik.selfhost.imbue.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl border-2 border-white/80 bg-white px-6 py-3 text-sm font-black text-[#EA580C] shadow-[0_4px_0_0_rgba(154,52,18,0.4)] transition-all duration-75 hover:bg-orange-50 active:translate-y-[3px] active:shadow-none"
          >
            Launch App
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </main>
  )
}
