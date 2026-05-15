import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import kruhuliLogo from "@/content/kruhulilogo.png"

const GithubLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.695.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const apps = [
  {
    title: "Speaking Studio",
    eyebrow: "AI Speech Coaching",
    description: "I fed 200+ of my own recordings into a pipeline — Whisper transcription, wav2vec2 emotion analysis, and three AI coaches scoring me across 7 dimensions. The results are uncomfortable.",
    status: "view project",
    href: "/projects/speaking-analysis",
  },
  {
    title: "Receipted",
    eyebrow: "Evidence-First Hiring",
    description: "Replaces resumes with verified proof. Write your stories, AI extracts and verifies every skill claim, recruiters get a trust-scored profile they can actually rely on.",
    status: "view project",
    href: "/projects/receipted",
  },
  {
    title: "Actual Wrapped 2021–2025",
    eyebrow: "Data Analysis · ML",
    description: "Five years of personal Spotify data: theme distributions, skip-energy correlations, and a gradient-boosted skip predictor with SHAP explainability.",
    status: "view notebook",
    href: "/projects/spotify-wrapped",
  },
  {
    title: "SEVIS Data Dashboard",
    eyebrow: "Data Visualization",
    description: "Interactive Tableau dashboard exploring international student enrollment data across institutions, visa categories, and demographics.",
    status: "view dashboard",
    href: "/projects/sevis-dashboard",
  },
]

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-[44px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[#C2410C] bg-[#EA580C] p-0 shadow-[0_4px_0px_0px_#9A3412] transition-all duration-75 active:translate-y-[3px] active:shadow-[0_1px_0px_0px_#9A3412]"
            aria-label="Back home"
          >
            <Image
              src={kruhuliLogo}
              alt="Kruhuli logo"
              width={1024}
              height={1024}
              className="h-[44px] w-[126px] object-cover"
              priority
            />
          </Link>
          <Link
            href="/"
            className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-2 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100"
          >
            Back home
          </Link>
        </nav>

        <section className="mb-14 text-center">
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            My Projects
          </p>
          <h1 className="font-display text-5xl font-black leading-none text-stone-900 md:text-7xl">
            My Projects
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-stone-500 md:text-base">
            A working drawer for projects, prototypes, and repos. The links can get swapped in as each repo is ready.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {apps.map((app) => {
            const CardWrapper = app.href
              ? ({ children }: { children: React.ReactNode }) => (
                  <Link href={app.href!} className="block">
                    {children}
                  </Link>
                )
              : ({ children }: { children: React.ReactNode }) => <>{children}</>
            return (
              <CardWrapper key={app.title}>
                <article
                  className="group rounded-3xl border-2 border-[#EA580C] bg-white p-6 shadow-[6px_6px_0_0_#C2410C] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#C2410C]"
                >
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <span className="rounded-lg border-2 border-orange-300 bg-orange-100 px-3 py-1 text-[11px] font-black tracking-[0.12em] text-orange-700">
                      {app.eyebrow}
                    </span>
                    <GithubLogo className="h-5 w-5 text-[#EA580C]" />
                  </div>

                  <div className="mb-8">
                    <h2 className="font-display text-3xl font-black leading-tight text-stone-900">
                      {app.title}
                    </h2>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-stone-600 md:text-base">
                      {app.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t-2 border-orange-100 pt-5">
                    <span className="font-mono text-xs font-black tracking-[0.12em] text-stone-400">
                      {app.status}
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-black text-[#EA580C]">
                      {app.href ? "View project" : "View soon"}
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </article>
              </CardWrapper>
            )
          })}
        </section>
      </div>
    </main>
  )
}
