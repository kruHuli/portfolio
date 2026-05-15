"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import kruhuliLogo from "@/content/kruhulilogo.png"

const dimensions = [
  { name: "Clarity",            score: 86.6 },
  { name: "Pacing",             score: 69.3 },
  { name: "Vocabulary",         score: 67.0 },
  { name: "Confidence",         score: 62.1 },
  { name: "Tone",               score: 56.3 },
  { name: "Disfluency Control", score: 48.6 },
  { name: "Storytelling",       score: 45.3 },
]

const coaches = [
  {
    name: "Marcus, MBA",
    role: "Executive Coach",
    color: "border-stone-800 bg-stone-900 text-white",
    tagColor: "bg-stone-700 text-stone-200",
    feedbacks: [
      { dim: "Vocabulary", score: 67.0, headline: "High-stakes communication demands lexical density; current patterns risk sounding repetitive or unrefined.", advice: "Systematically replace common discourse markers ('like,' 'just') with elevated, functional alternatives (e.g., 'specifically,' 'conversely'). For technical pitches, identify three core concepts discussed weekly and build a precise vocabulary around each." },
      { dim: "Confidence", score: 62.1, headline: "The constant hedging erodes perceived authority and conviction.", advice: "Drastically reduce weak qualifiers. Instead of qualifying a statement, frontload the conclusion to establish immediate certainty. Replace soft phrasing with declarative statements — drop 'I think' and lead with the point." },
      { dim: "Storytelling", score: 45.3, headline: "Your narrative lacks human anchors; it reads like an academic report, not a vision.", advice: "Anchor every significant outcome by naming at least two specific people and defining their definitive action. Replace abstract generalizations with concrete statements structured in past tense: 'Sarah closed the deal by...' not 'the team succeeded.'" },
    ],
  },
  {
    name: "Coach Riley",
    role: "Life & Performance Coach",
    color: "border-blue-400 bg-blue-50 text-blue-900",
    tagColor: "bg-blue-200 text-blue-800",
    feedbacks: [
      { dim: "Disfluency Control", score: 48.6, headline: "The pause is not empty — it's where your authority resides.", advice: "When you feel a filler rising, physically press your tongue against the roof of your mouth and breathe in deeply instead. This brief physical cue signals to your nervous system that there is nothing more urgent than what you are about to say." },
      { dim: "Confidence", score: 62.1, headline: "You are asking permission before you even exist in your statement.", advice: "Notice every time 'just,' 'I think,' or 'maybe' pops up and mentally pause. Instead of qualifying the thought, practice simply stating it as fact to yourself first: 'This is my view.' Then say it out loud." },
      { dim: "Tone", score: 56.3, headline: "Your voice is holding back your full emotional range.", advice: "Practice acknowledging the texture of what you're feeling. Instead of aiming for a steady tone, let your pitch and volume move in response to what you're communicating — the subtle ache, the genuine lift, the weight of a real observation." },
    ],
  },
  {
    name: 'Ted "Tape" Vargas',
    role: "Speech Mechanics Coach",
    color: "border-[#EA580C] bg-orange-50 text-orange-900",
    tagColor: "bg-orange-200 text-orange-800",
    feedbacks: [
      { dim: "Vocabulary", score: 67.0, headline: "You are collapsing your lexical potential into conversational filler.", advice: "Record yourself for 3 minutes on a technical topic. Transcribe it. Mark every 'like,' 'just,' and 'you know.' Then re-record the same content with those words replaced by a 1-second silence. Play them side by side." },
      { dim: "Pacing", score: 69.3, headline: "Your silence is working harder than your speech. We need rhythmic density.", advice: "Drill the 'Contrast Rule': every declarative statement must be followed by a pause of exactly one breath — no filler, no continuation. You hit consonants on inhalation. We need to rebuild your breath architecture from the ground up." },
      { dim: "Storytelling", score: 45.3, headline: "You're tracking time, but you aren't building action.", advice: "Stop narrating sequence. Start narrating stakes. For every story beat, ask: what was at risk? Replace 'and then I' with 'which meant that.' Force your narratives to carry consequence forward, not just chronology." },
    ],
  },
]

const stats = [
  { label: "Videos analyzed", value: "200+" },
  { label: "Words transcribed", value: "26,143" },
  { label: "Unique words", value: "2,253" },
  { label: "Fillers per minute", value: "5.1" },
  { label: "Avg speaking rate", value: "~120 WPM" },
  { label: "Years of recordings", value: "2021–2026" },
]

const stack = ["Python 3.11", "OpenAI Whisper", "Gemma 4 (local)", "wav2vec2", "HuggingFace", "LM Studio", "ffmpeg", "librosa", "VADER Sentiment", "Chart.js"]

function RadarChart() {
  const cx = 250, cy = 220, R = 150
  const n = dimensions.length
  const angle = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n
  const pt = (i: number, r: number) => ({
    x: cx + r * Math.cos(angle(i)),
    y: cy + r * Math.sin(angle(i)),
  })

  const rings = [0.25, 0.5, 0.75, 1]
  const toPoints = (level: number) =>
    dimensions.map((_, i) => { const p = pt(i, R * level); return `${p.x},${p.y}` }).join(" ")
  const dataPoints = dimensions.map((d, i) => {
    const p = pt(i, (d.score / 100) * R)
    return `${p.x},${p.y}`
  }).join(" ")
  const labelR = R + 36

  return (
    <svg viewBox="0 0 500 450" className="w-full max-w-md mx-auto">
      {rings.map((level) => (
        <polygon key={level} points={toPoints(level)} fill="none" stroke="#e7e5e4" strokeWidth={level === 1 ? 1.5 : 1} />
      ))}
      {dimensions.map((_, i) => {
        const tip = pt(i, R)
        return <line key={i} x1={cx} y1={cy} x2={tip.x} y2={tip.y} stroke="#d6d3d1" strokeWidth={1} />
      })}
      {rings.map((level) => {
        const p = pt(0, R * level)
        return (
          <text key={level} x={p.x + 6} y={p.y} fontSize={8} fill="#a8a29e" fontFamily="ui-monospace, monospace" fontWeight="600" dominantBaseline="middle">
            {Math.round(level * 100)}
          </text>
        )
      })}
      <polygon points={dataPoints} fill="#EA580C" fillOpacity={0.18} stroke="#EA580C" strokeWidth={2.5} strokeLinejoin="round" />
      {dimensions.map((d, i) => {
        const p = pt(i, (d.score / 100) * R)
        return <circle key={i} cx={p.x} cy={p.y} r={4.5} fill="#EA580C" stroke="white" strokeWidth={1.5} />
      })}
      {dimensions.map((d, i) => {
        const lp = pt(i, labelR)
        const anchor = lp.x > cx + 8 ? "start" : lp.x < cx - 8 ? "end" : "middle"
        const words = d.name.split(" ")
        return (
          <text key={i} x={lp.x} y={lp.y} textAnchor={anchor} fontSize={10} fontWeight="800" fill="#292524" fontFamily="ui-monospace, monospace">
            {words.length === 1
              ? <tspan dominantBaseline="middle">{words[0]}</tspan>
              : <><tspan x={lp.x} dy="-0.65em">{words[0]}</tspan><tspan x={lp.x} dy="1.3em">{words[1]}</tspan></>
            }
          </text>
        )
      })}
    </svg>
  )
}

function CoachCard({ coach }: { coach: typeof coaches[0] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`rounded-2xl border-2 ${coach.color} shadow-[5px_5px_0_0_#C2410C] overflow-hidden`}>
      <div className="px-6 py-5 flex items-start justify-between gap-4">
        <div>
          <p className={`inline-block text-[10px] font-black tracking-[0.12em] px-2.5 py-1 rounded-lg mb-2 ${coach.tagColor}`}>
            {coach.role.toUpperCase()}
          </p>
          <h3 className="font-display text-xl font-black">{coach.name}</h3>
        </div>
        <button
          onClick={() => setOpen(o => !o)}
          className="flex items-center gap-1.5 text-xs font-black opacity-60 hover:opacity-100 transition-opacity mt-1 shrink-0"
        >
          {open ? "collapse" : "read feedback"}
          <ChevronDown size={13} className="transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }} />
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-current border-opacity-10 divide-y-2 divide-current divide-opacity-10">
          {coach.feedbacks.map((fb) => (
            <div key={fb.dim} className="px-6 py-5">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-black tracking-[0.1em] px-2 py-0.5 rounded ${coach.tagColor}`}>{fb.dim}</span>
                <span className="font-mono text-sm font-black opacity-60">{fb.score.toFixed(0)}/100</span>
              </div>
              <p className="text-sm font-black leading-snug mb-2 italic">"{fb.headline}"</p>
              <p className="text-sm font-medium leading-6 opacity-80">{fb.advice}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function SpeakingAnalysisPage() {
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
          <Link href="/apps" className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-2 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100">
            ← Back to Apps
          </Link>
        </nav>

        {/* Hero */}
        <section className="mb-16 text-center">
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">AI Speech Coaching</p>
          <h1 className="font-display text-6xl font-black leading-none text-stone-900 md:text-7xl">
            Speaking Studio
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-stone-500">
            200+ of my own recordings. Transcribed with Whisper, analyzed with wav2vec2 emotion models, and roasted by three AI coaches with very different takes on what I need to fix.
          </p>
        </section>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border-2 border-[#EA580C] bg-white p-4 text-center shadow-[4px_4px_0_0_#C2410C]">
              <p className="font-display text-2xl font-black text-stone-900">{s.value}</p>
              <p className="mt-1 font-mono text-[10px] font-bold text-stone-400 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Score dashboard */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Performance Dashboard</p>
          <h2 className="font-display text-2xl font-black text-stone-900 mb-6">7-Dimension Speaker Score</h2>
          <RadarChart />
          <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
            {dimensions.map((d) => (
              <div key={d.name} className="flex items-center gap-2">
                <span className="font-mono text-sm font-black text-[#EA580C]">{d.score.toFixed(0)}</span>
                <span className="text-xs font-medium text-stone-600">{d.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs font-mono font-bold text-stone-400">
            Scores aggregated across 200+ recordings spanning 2021–2026. Personal transcript data kept private.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Pipeline</p>
          <h2 className="font-display text-2xl font-black text-stone-900 mb-6">How It Works</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { step: "01", title: "Ingest", desc: "200+ .mov recordings fed in. ffmpeg extracts audio, filenames encode the date." },
              { step: "02", title: "Transcribe", desc: "OpenAI Whisper transcribes with a custom prompt to preserve disfluencies — every 'um', 'like', 'you know' stays in." },
              { step: "03", title: "Analyze", desc: "wav2vec2 emotion model scores arousal, dominance, and valence per chunk. VADER handles NLP sentiment. Metrics computed across 7 dimensions." },
              { step: "04", title: "Coach", desc: "Three AI coach personas (Marcus, Riley, Ted) each score every dimension and deliver targeted drills via local Gemma 4." },
            ].map((s) => (
              <div key={s.step} className="rounded-xl border-2 border-orange-100 bg-orange-50 p-4">
                <p className="font-mono text-xs font-black text-[#EA580C] mb-2">{s.step}</p>
                <h3 className="font-display font-black text-stone-900 mb-1">{s.title}</h3>
                <p className="text-xs font-medium leading-5 text-stone-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coach feedback */}
        <div className="mb-10">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">The Coaches</p>
          <h2 className="font-display text-2xl font-black text-stone-900 mb-6">Three Coaches. Three Takes.</h2>
          <div className="space-y-5">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} coach={coach} />
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mb-10 rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] p-8">
          <p className="mb-2 font-mono text-xs font-black tracking-[0.12em] text-[#EA580C]">Tech Stack</p>
          <h2 className="font-display text-2xl font-black text-stone-900 mb-6">What's Under the Hood</h2>
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="rounded-lg border-2 border-blue-200 bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-blue-700">{s}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-3xl border-2 border-[#EA580C] bg-[#EA580C] p-8 text-center shadow-[6px_6px_0_0_#C2410C]">
          <h2 className="font-display text-3xl font-black text-white">Want to run it on your recordings?</h2>
          <p className="mt-3 text-sm font-medium text-white/80">
            Drop me a line. The pipeline runs locally — Whisper + Gemma 4 via LM Studio, no cloud costs once set up.
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
