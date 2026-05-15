import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import kruhuliLogo from "@/content/kruhulilogo.png"

export const metadata: Metadata = {
  title: "Actual Wrapped 2021-2025 | Kruthik Hulisandra",
  description:
    "Five years of personal Spotify data: 55k plays analysed for theme patterns, skip behaviour, and a machine-learning skip predictor.",
}

const topArtists = [
  { name: "yetep", plays: 2070 },
  { name: "Big Sean", plays: 1345 },
  { name: "ILLENIUM", plays: 1189 },
  { name: "Pritam", plays: 1181 },
  { name: "Arijit Singh", plays: 1160 },
]

const stats = [
  { value: "55,392", label: "total plays" },
  { value: "3+ years", label: "of data" },
  { value: "9,594", label: "2024 songs enriched" },
  { value: "#1", label: "yetep, top artist" },
]

const charts: { src: string; alt: string; caption: string }[] = [
  {
    src: "/spotify-charts/theme-dist.png",
    alt: "Theme distribution histogram",
    caption: "Radar of theme share across 2024 plays. Romantic dominates at 28.9%, nearly double the next closest theme (Empowered at 17.4%).",
  },
  {
    src: "/spotify-charts/theme-energy.png",
    alt: "Theme × energy chart",
    caption: "Themes ranked by average audio energy. Euphoric and Empowered sit at the top; Peaceful at the bottom.",
  },
  {
    src: "/spotify-charts/skip-by-theme.png",
    alt: "Skip count by theme",
    caption: "Skip rate by theme. Romantic songs get skipped the most in absolute numbers, but they also get played the most.",
  },
  {
    src: "/spotify-charts/shap.png",
    alt: "SHAP feature importance",
    caption: "SHAP values from the XGBoost skip predictor. Daily average energy and language (is_english) are the dominant drivers.",
  },
]

export default function SpotifyWrappedPage() {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      {/* Nav */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b-2 border-[#EA580C] bg-[#FFF7ED] px-6 py-3">
        <Link
          href="/"
          className="inline-flex h-[40px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[#C2410C] bg-[#EA580C] p-0 shadow-[0_3px_0px_0px_#9A3412] transition-all duration-75 active:translate-y-[2px] active:shadow-[0_1px_0px_0px_#9A3412]"
          aria-label="Back home"
        >
          <Image
            src={kruhuliLogo}
            alt="Kruhuli logo"
            width={1024}
            height={1024}
            className="h-[40px] w-[114px] object-cover"
            priority
          />
        </Link>
        <Link
          href="/apps"
          className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-1.5 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100"
        >
          ← All projects
        </Link>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-14">

        {/* Hero */}
        <section className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            DATA ANALYSIS · MACHINE LEARNING
          </p>
          <h1 className="font-display text-5xl font-black leading-none text-stone-900 md:text-7xl">
            Actual Wrapped
          </h1>
          <p className="font-display text-2xl font-black text-stone-400 md:text-3xl">2021 – 2025</p>
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-stone-600 md:text-base">
            Spotify gives you a cute annual recap. I downloaded five years of raw
            play-by-play data and actually looked at it: themes, energy, skip
            patterns, and a model that predicts whether I&apos;ll skip a song before
            it ends.
          </p>
        </section>

        {/* Stats row */}
        <section className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl border-2 border-[#EA580C] bg-white p-5 text-center shadow-[4px_4px_0_0_#C2410C]"
            >
              <div className="font-display text-2xl font-black text-stone-900 md:text-3xl">
                {value}
              </div>
              <div className="mt-1 font-mono text-[11px] font-bold tracking-wider text-stone-400">
                {label}
              </div>
            </div>
          ))}
        </section>

        {/* Top artists */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-2xl font-black text-stone-900">
            Top artists, all time
          </h2>
          <div className="space-y-3">
            {topArtists.map(({ name, plays }, i) => (
              <div
                key={name}
                className="flex items-center gap-4 rounded-2xl border-2 border-orange-200 bg-white px-5 py-3 shadow-[3px_3px_0_0_#FDBA74]"
              >
                <span className="w-6 font-mono text-sm font-black text-orange-400">
                  {i + 1}
                </span>
                <span className="flex-1 font-display text-lg font-black text-stone-900">
                  {name}
                </span>
                <span className="font-mono text-sm font-bold text-stone-400">
                  {plays.toLocaleString()} plays
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-2xl font-black text-stone-900">
            What the data showed
          </h2>
          <div className="space-y-10">
            {charts.map(({ src, alt, caption }) => (
              <figure
                key={src}
                className="overflow-hidden rounded-3xl border-2 border-[#EA580C] shadow-[6px_6px_0_0_#C2410C]"
              >
                <div className="bg-white p-4">
                  <Image
                    src={src}
                    alt={alt}
                    width={1200}
                    height={600}
                    className="w-full rounded-xl object-contain"
                    unoptimized
                  />
                </div>
                <figcaption className="border-t-2 border-orange-200 bg-orange-50 px-5 py-3 font-mono text-xs font-bold text-stone-500">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ML result callout */}
        <section className="mb-16 rounded-3xl border-2 border-[#EA580C] bg-white p-8 shadow-[6px_6px_0_0_#C2410C]">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.15em] text-[#EA580C]">
            MODEL RESULT
          </p>
          <h2 className="mb-4 font-display text-2xl font-black text-stone-900">
            Can you predict a skip?
          </h2>
          <p className="text-sm font-medium leading-relaxed text-stone-600 md:text-base">
            Short answer: kind of. An RF + XGBoost soft-voting ensemble lands around
            70–75% accuracy without data leakage. The two features that matter most
            are <strong>daily average energy</strong> (your mood that day) and{" "}
            <strong>whether the song is in English</strong>. Genre alone is basically
            useless. Including <code className="rounded bg-orange-100 px-1 font-mono text-xs text-orange-800">ms_played</code>{" "}
            inflates accuracy to 92%, but that&apos;s cheating since play-time is
            downstream of the skip decision itself.
          </p>
        </section>

        {/* Run it yourself */}
        <section className="rounded-3xl border-2 border-dashed border-[#EA580C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.15em] text-[#EA580C]">
            TRY IT ON YOUR OWN DATA
          </p>
          <h2 className="mb-4 font-display text-2xl font-black text-stone-900">
            Get your Spotify history
          </h2>
          <ol className="space-y-2 text-sm font-medium leading-relaxed text-stone-600 md:text-base">
            <li>
              <span className="mr-2 font-black text-[#EA580C]">1.</span>
              Go to{" "}
              <span className="font-mono text-xs font-bold text-stone-700">
                spotify.com/account/privacy
              </span>{" "}
              → request your <strong>Extended Streaming History</strong> (takes a few days).
            </li>
            <li>
              <span className="mr-2 font-black text-[#EA580C]">2.</span>
              Drop the JSON files into the notebook and run it top to bottom.
            </li>
            <li>
              <span className="mr-2 font-black text-[#EA580C]">3.</span>
              The 2024 enrichment (energy / theme / language) requires a separate
              audio-features API call. Details in the notebook.
            </li>
          </ol>
        </section>

      </div>

      <footer className="border-t-2 border-[#EA580C] px-6 py-6 text-center">
        <p className="font-mono text-xs font-bold text-stone-400">
          Built with Python · pandas · scikit-learn · XGBoost · LightGBM · SHAP · Plotly
        </p>
      </footer>
    </div>
  )
}
