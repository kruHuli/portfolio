import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import khIcon from "@/app/icon.png"

const GithubLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.695.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const extractedFields = [
  { label: "Company", color: "border-orange-300 bg-orange-50 text-orange-800" },
  { label: "Role", color: "border-orange-300 bg-orange-50 text-orange-800" },
  { label: "Application Status", color: "border-blue-300 bg-blue-50 text-blue-800" },
  { label: "Priority Level", color: "border-red-300 bg-red-50 text-red-800" },
  { label: "Next Step", color: "border-green-300 bg-green-50 text-green-800" },
  { label: "Follow-Up Date", color: "border-green-300 bg-green-50 text-green-800" },
  { label: "Contact", color: "border-purple-300 bg-purple-50 text-purple-800" },
  { label: "Referral Source", color: "border-purple-300 bg-purple-50 text-purple-800" },
  { label: "Notes", color: "border-stone-300 bg-stone-50 text-stone-700" },
]

const stack = [
  { label: "Python", category: "Language" },
  { label: "GPT-4o", category: "AI" },
  { label: "Gmail API", category: "Integration" },
  { label: "Notion API", category: "Integration" },
  { label: "OAuth2", category: "Auth" },
  { label: "python-dotenv", category: "Config" },
]

export default function Gmail2NotionPage() {
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
            Gmail · GPT-4o · Notion
          </p>
          <h1 className="font-display text-6xl font-black leading-none text-stone-900 md:text-7xl">
            gmail2notion
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-stone-500">
            I hate getting rejection emails so I make AI read them for me. This script scans your inbox, extracts structured job data with GPT-4o, and keeps a Notion tracker up to date automatically.
          </p>
        </section>

        {/* Pipeline infographic */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8 md:p-10">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">How It Works</p>
          <h2 className="mb-10 font-display text-3xl font-black text-stone-900">Three steps. Zero manual logging.</h2>

          <div className="flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0">

            {/* Step 1 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-orange-200 bg-orange-50 p-6 md:flex-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#EA580C] bg-[#EA580C] font-mono text-sm font-black text-white">
                01
              </div>
              <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-[#EA580C]">FETCH</p>
              <h3 className="mb-3 font-display text-xl font-black text-stone-900">Gmail</h3>
              <p className="text-sm font-medium leading-6 text-stone-600">
                Authenticates via OAuth2 and searches your inbox for job-related subjects: applications, offers, interviews, rejections. Scans the last 7 days by default, configurable.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["OAuth2", "Gmail API", "Keyword filter", "Date window"].map((t) => (
                  <span key={t} className="rounded-md border border-orange-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-orange-600">{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-3 text-2xl font-black text-[#EA580C]">
              <span className="hidden md:block">›</span>
              <span className="block md:hidden">↓</span>
            </div>

            {/* Step 2 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-blue-200 bg-blue-50 p-6 md:flex-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-blue-600 bg-blue-600 font-mono text-sm font-black text-white">
                02
              </div>
              <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-blue-600">EXTRACT</p>
              <h3 className="mb-3 font-display text-xl font-black text-stone-900">GPT-4o</h3>
              <p className="text-sm font-medium leading-6 text-stone-600">
                Each email body is passed to GPT-4o with a structured prompt. It returns clean JSON with every relevant field or flags the email as not job-related and skips it.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Structured JSON", "Relevance filter", "9 fields extracted", "No hallucination guardrails"].map((t) => (
                  <span key={t} className="rounded-md border border-blue-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-blue-600">{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center px-3 text-2xl font-black text-[#EA580C]">
              <span className="hidden md:block">›</span>
              <span className="block md:hidden">↓</span>
            </div>

            {/* Step 3 */}
            <div className="flex w-full flex-col rounded-2xl border-2 border-green-200 bg-green-50 p-6 md:flex-1">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border-2 border-green-700 bg-green-700 font-mono text-sm font-black text-white">
                03
              </div>
              <p className="mb-1 font-mono text-[10px] font-black tracking-[0.15em] text-green-700">LOG</p>
              <h3 className="mb-3 font-display text-xl font-black text-stone-900">Notion</h3>
              <p className="text-sm font-medium leading-6 text-stone-600">
                Searches the database for an existing row matching the company. Updates it if found, creates a new row if not. Idempotent, so running it twice never creates duplicates.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Notion API", "Upsert logic", "Idempotent", "Timestamped notes"].map((t) => (
                  <span key={t} className="rounded-md border border-green-200 bg-white px-2 py-0.5 font-mono text-[10px] font-bold text-green-700">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* What gets extracted */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Extraction Output</p>
          <h2 className="mb-6 font-display text-2xl font-black text-stone-900">Every field GPT-4o pulls out</h2>
          <div className="flex flex-wrap gap-2">
            {extractedFields.map((f) => (
              <span key={f.label} className={`rounded-lg border-2 px-3 py-1.5 font-mono text-xs font-bold ${f.color}`}>
                {f.label}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm font-medium leading-6 text-stone-500">
            If an email is not job-related, GPT-4o returns <code className="rounded bg-stone-100 px-1.5 py-0.5 font-mono text-xs text-stone-700">is_job_related: false</code> and the script skips it entirely. No noise in your tracker.
          </p>
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
          <h2 className="font-display text-3xl font-black text-white">Set it up in 10 minutes.</h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium text-white/80">
            Clone the repo, drop in your Gmail credentials and Notion API key, and run it. The README walks through every step.
          </p>
          <a
            href="https://github.com/kruHuli/JobTracker"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-xl border-2 border-white/80 bg-white px-6 py-3 text-sm font-black text-[#EA580C] shadow-[0_4px_0_0_rgba(154,52,18,0.4)] transition-all duration-75 hover:bg-orange-50 active:translate-y-[3px] active:shadow-none"
          >
            <GithubLogo className="h-4 w-4" />
            Try it yourself
            <ArrowUpRight size={15} />
          </a>
        </div>

      </div>
    </main>
  )
}
