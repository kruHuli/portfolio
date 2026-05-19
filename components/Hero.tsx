"use client"

import { motion } from "framer-motion"

// ── SVG icons (emoji-style: filled, minimal, bold) ────────────────────────────

const Basketball = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-40 -40 80 80" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <circle r="33" strokeWidth="3" fill="currentColor" fillOpacity="0.22" />
    <path d="M-33,0 Q0,-20 33,0" strokeWidth="2.5" />
    <path d="M-33,0 Q0,20 33,0" strokeWidth="2.5" />
    <line x1="0" y1="-33" x2="0" y2="33" strokeWidth="2.5" />
  </svg>
)

const SoccerBall = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-40 -40 80 80" fill="none" className={className} stroke="currentColor">
    <circle r="33" strokeWidth="3" fill="currentColor" fillOpacity="0.22" />
    <polygon points="0,-15 14,-5 9,12 -9,12 -14,-5" fill="currentColor" fillOpacity="0.65" stroke="none" />
  </svg>
)

const GolfFlag = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-28 -44 56 68" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <line x1="2" y1="-38" x2="2" y2="18" strokeWidth="3.5" />
    <path d="M2,-38 L28,-27 L2,-16 Z" fill="currentColor" stroke="none" />
    <ellipse cx="2" cy="20" rx="22" ry="5.5" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
    <ellipse cx="2" cy="18" rx="7" ry="2.5" fill="currentColor" stroke="none" />
  </svg>
)

const LacrosseStick = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-30 -76 60 116" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    {/* Shaft */}
    <line x1="0" y1="0" x2="-14" y2="38" strokeWidth="5" />
    {/* Mushroom head — narrow throat, wide shoulders, domed top */}
    <path
      d="M-5,0 C-22,-8 -28,-28 -24,-50 Q-18,-70 0,-72 Q18,-70 24,-50 C28,-28 22,-8 5,0 Z"
      fill="currentColor" fillOpacity="0.22" strokeWidth="3"
    />
    {/* Mesh strings */}
    <line x1="-20" y1="-22" x2="20" y2="-22" strokeWidth="1.8" strokeOpacity="0.5" />
    <line x1="-24" y1="-42" x2="24" y2="-42" strokeWidth="1.8" strokeOpacity="0.5" />
    <line x1="0" y1="-4" x2="0" y2="-70" strokeWidth="1.8" strokeOpacity="0.5" />
    {/* Ball sitting in the pocket */}
    <circle cx="0" cy="-28" r="8" fill="currentColor" fillOpacity="0.75" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

const RobotHead = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-34 -44 68 66" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <line x1="0" y1="-44" x2="0" y2="-28" strokeWidth="3" />
    <circle cx="0" cy="-36" r="5" fill="currentColor" stroke="none" />
    <rect x="-28" y="-26" width="56" height="46" rx="10" fill="currentColor" fillOpacity="0.22" strokeWidth="3" />
    <circle cx="-10" cy="-9" r="7" fill="currentColor" stroke="none" />
    <circle cx="10" cy="-9" r="7" fill="currentColor" stroke="none" />
    <path d="M-13,8 Q0,19 13,8" fill="none" strokeWidth="3" />
  </svg>
)

const OpenBook = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-36 -28 72 52" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <path d="M1,-20 Q-16,-22 -30,-18 L-32,20 Q-16,24 1,20 Z" fill="currentColor" fillOpacity="0.22" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M-1,-20 Q16,-22 30,-18 L32,20 Q16,24 -1,20 Z" fill="currentColor" fillOpacity="0.22" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="0" y1="-22" x2="0" y2="22" strokeWidth="3.5" />
    <line x1="-24" y1="-6" x2="-4" y2="-7" strokeWidth="2" strokeOpacity="0.5" />
    <line x1="-24" y1="4"  x2="-4" y2="3"  strokeWidth="2" strokeOpacity="0.5" />
    <line x1="4"   y1="-7" x2="24" y2="-6" strokeWidth="2" strokeOpacity="0.5" />
    <line x1="4"   y1="3"  x2="24" y2="4"  strokeWidth="2" strokeOpacity="0.5" />
  </svg>
)

const Laptop = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-40 -30 80 56" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <rect x="-32" y="-26" width="64" height="42" rx="5" fill="currentColor" fillOpacity="0.22" strokeWidth="3" />
    <rect x="-38" y="18" width="76" height="8" rx="4" fill="currentColor" fillOpacity="0.3" strokeWidth="2.5" />
    <polyline points="-16,-8 -24,0 -16,8" strokeWidth="3" />
    <line x1="4" y1="-10" x2="-4" y2="10" strokeWidth="3" />
    <polyline points="16,-8 24,0 16,8" strokeWidth="3" />
  </svg>
)

const Medal = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-36 -44 72 86" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-22,-40 L-6,-40 L5,-9 L-12,-6 Z" fill="currentColor" fillOpacity="0.18" strokeWidth="3" />
    <path d="M22,-40 L6,-40 L-5,-9 L12,-6 Z" fill="currentColor" fillOpacity="0.18" strokeWidth="3" />
    <circle cy="13" r="25" fill="currentColor" fillOpacity="0.24" strokeWidth="3" />
    <path d="M0,-1 L5,9 L16,10 L8,18 L10,30 L0,24 L-10,30 L-8,18 L-16,10 L-5,9 Z" fill="currentColor" fillOpacity="0.68" stroke="none" />
  </svg>
)

const Trophy = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-42 -42 84 84" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-22,-32 H22 V-10 C22,8 12,18 0,18 C-12,18 -22,8 -22,-10 Z" fill="currentColor" fillOpacity="0.24" strokeWidth="3" />
    <path d="M-22,-24 H-34 C-34,-7 -26,2 -16,2" strokeWidth="3" />
    <path d="M22,-24 H34 C34,-7 26,2 16,2" strokeWidth="3" />
    <line x1="0" y1="18" x2="0" y2="30" strokeWidth="4" />
    <rect x="-18" y="30" width="36" height="8" rx="4" fill="currentColor" fillOpacity="0.24" strokeWidth="3" />
    <path d="M-8,-16 H8" strokeWidth="3" strokeOpacity="0.6" />
  </svg>
)

const Brain = ({ className = "" }: { className?: string }) => (
  <svg viewBox="-44 -38 88 76" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path
      d="M-5,-25 C-15,-38 -34,-28 -31,-12 C-43,-6 -36,14 -22,12 C-20,27 0,29 0,13 L0,-20 C-1,-22 -3,-24 -5,-25 Z"
      fill="currentColor" fillOpacity="0.22" strokeWidth="3"
    />
    <path
      d="M5,-25 C15,-38 34,-28 31,-12 C43,-6 36,14 22,12 C20,27 0,29 0,13 L0,-20 C1,-22 3,-24 5,-25 Z"
      fill="currentColor" fillOpacity="0.22" strokeWidth="3"
    />
    <path d="M-19,-18 C-8,-18 -9,-7 -18,-6" strokeWidth="2.5" strokeOpacity="0.58" />
    <path d="M19,-18 C8,-18 9,-7 18,-6" strokeWidth="2.5" strokeOpacity="0.58" />
    <path d="M-21,5 C-10,2 -7,11 -14,17" strokeWidth="2.5" strokeOpacity="0.58" />
    <path d="M21,5 C10,2 7,11 14,17" strokeWidth="2.5" strokeOpacity="0.58" />
  </svg>
)

// ── background placement data ──────────────────────────────────────────────────

type P = { t: number; s: React.CSSProperties; r: number; w: number; o: number }

// t = icon type index, s = CSS position, r = rotation deg, w = size px, o = opacity
const BG: P[] = [
  // ── top band ──
  { t: 3, s: { left: "2%",   top: "2%"  }, r: 28,  w: 88, o: 0.38 },
  { t: 7, s: { left: "9%",   top: "9%"  }, r: -8,  w: 58, o: 0.26 },
  { t: 0, s: { left: "16%",  top: "4%"  }, r: -12, w: 68, o: 0.36 },
  { t: 2, s: { left: "35%",  top: "2%"  }, r: 6,   w: 56, o: 0.34 },
  { t: 9, s: { left: "44%",  top: "9%"  }, r: -10, w: 64, o: 0.24 },
  { t: 1, s: { left: "54%",  top: "3%"  }, r: -8,  w: 66, o: 0.36 },
  { t: 4, s: { right: "13%", top: "2%"  }, r: 10,  w: 72, o: 0.37 },
  { t: 5, s: { right: "1%",  top: "4%"  }, r: -18, w: 68, o: 0.35 },
  { t: 8, s: { right: "29%", top: "7%"  }, r: 12,  w: 70, o: 0.32 },

  // ── second row ──
  { t: 6, s: { left: "2%",   top: "21%" }, r: 8,   w: 66, o: 0.34 },
  { t: 3, s: { left: "17%",  top: "19%" }, r: -35, w: 84, o: 0.32 },
  { t: 7, s: { left: "31%",  top: "20%" }, r: -10, w: 64, o: 0.31 },
  { t: 5, s: { left: "45%",  top: "22%" }, r: 14,  w: 56, o: 0.24 },
  { t: 0, s: { right: "15%", top: "20%" }, r: 15,  w: 66, o: 0.33 },
  { t: 8, s: { right: "27%", top: "26%" }, r: -9,  w: 62, o: 0.25 },
  { t: 2, s: { right: "2%",  top: "22%" }, r: -5,  w: 58, o: 0.34 },

  // ── left & right columns (middle zone) ──
  { t: 1, s: { left: "1%",   top: "42%" }, r: 12,  w: 64, o: 0.32 },
  { t: 0, s: { left: "6%",   top: "33%" }, r: -16, w: 58, o: 0.23 },
  { t: 5, s: { left: "2%",   top: "62%" }, r: -20, w: 68, o: 0.33 },
  { t: 9, s: { left: "10%",  top: "55%" }, r: 8,   w: 78, o: 0.24 },
  { t: 7, s: { left: "19%",  top: "39%" }, r: 18,  w: 54, o: 0.18 },
  { t: 6, s: { right: "2%",  top: "40%" }, r: -8,  w: 64, o: 0.33 },
  { t: 2, s: { right: "8%",  top: "32%" }, r: 15,  w: 52, o: 0.24 },
  { t: 3, s: { right: "1%",  top: "58%" }, r: 30,  w: 88, o: 0.31 },
  { t: 8, s: { right: "10%", top: "52%" }, r: -12, w: 66, o: 0.26 },
  { t: 4, s: { right: "20%", top: "38%" }, r: 11,  w: 60, o: 0.18 },

  // ── fourth row ──
  { t: 4, s: { left: "2%",   top: "78%" }, r: -6,  w: 70, o: 0.35 },
  { t: 2, s: { left: "17%",  top: "80%" }, r: -8,  w: 56, o: 0.34 },
  { t: 8, s: { left: "26%",  top: "86%" }, r: 13,  w: 58, o: 0.26 },
  { t: 0, s: { left: "36%",  top: "79%" }, r: 18,  w: 68, o: 0.36 },
  { t: 9, s: { left: "51%",  top: "83%" }, r: -12, w: 62, o: 0.23 },
  { t: 7, s: { right: "33%", top: "77%" }, r: 6,   w: 62, o: 0.33 },
  { t: 6, s: { right: "16%", top: "80%" }, r: -5,  w: 62, o: 0.34 },
  { t: 1, s: { right: "2%",  top: "78%" }, r: 12,  w: 66, o: 0.35 },

  // ── bottom band ──
  { t: 5, s: { left: "3%",   bottom: "3%" }, r: 15,  w: 68, o: 0.37 },
  { t: 3, s: { left: "19%",  bottom: "2%" }, r: -28, w: 82, o: 0.36 },
  { t: 2, s: { left: "40%",  bottom: "3%" }, r: -5,  w: 56, o: 0.34 },
  { t: 7, s: { left: "57%",  bottom: "3%" }, r: 18,  w: 58, o: 0.27 },
  { t: 4, s: { right: "17%", bottom: "2%" }, r: 8,   w: 72, o: 0.36 },
  { t: 9, s: { right: "9%",  bottom: "10%" }, r: -7,  w: 62, o: 0.24 },
  { t: 0, s: { right: "2%",  bottom: "3%" }, r: -15, w: 68, o: 0.37 },

  // ── inner fill (behind text, lower opacity) ──
  { t: 3, s: { left: "26%",  top: "14%" }, r: -20, w: 76, o: 0.16 },
  { t: 1, s: { right: "24%", top: "16%" }, r: 8,   w: 62, o: 0.14 },
  { t: 9, s: { left: "43%",  top: "17%" }, r: -5,  w: 70, o: 0.12 },
  { t: 8, s: { left: "32%",  top: "57%" }, r: 10,  w: 58, o: 0.1 },
  { t: 7, s: { right: "34%", top: "58%" }, r: -14, w: 52, o: 0.1 },
  { t: 6, s: { left: "22%",  top: "68%" }, r: 5,   w: 60, o: 0.15 },
  { t: 5, s: { right: "22%", top: "66%" }, r: -12, w: 66, o: 0.14 },
  { t: 0, s: { left: "14%",  top: "44%" }, r: 20,  w: 64, o: 0.13 },
  { t: 2, s: { right: "14%", top: "46%" }, r: -8,  w: 54, o: 0.13 },
]

const ICONS = [Basketball, SoccerBall, GolfFlag, LacrosseStick, RobotHead, OpenBook, Laptop, Medal, Trophy, Brain]

type NewsItem = {
  label: string
  href?: string
}

const heroNewsItems: NewsItem[] = [
  { label: "I JUST GRADUATED 🎓 🍾" },
  { label: "Open to opportunities as a forward deployed AI engineer" },
  { label: "I hate getting rejection emails so I make AI read them for me — new project live", href: "/apps" },
]

// ── Hero ──────────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#EA580C]"
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Scattered sport / hobby icons */}
      {BG.map(({ t, s, r, w, o }, i) => {
        const Icon = ICONS[t]
        return (
          <div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{
              ...s,
              transform: `rotate(${r}deg)`,
              opacity: o * 0.72,
              width: w,
              height: w,
              color: "#FFFFFF",
            }}
          >
            <Icon className="w-full h-full" />
          </div>
        )
      })}

      {/* Radial vignette — softens icons toward the text center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 60% at 50% 50%, transparent 30%, rgba(234,88,12,0.65) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto w-full">
        {/* Breaking news ticker */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 mx-auto flex max-w-3xl overflow-hidden rounded-full border-2 border-white/45 bg-white/15 text-white shadow-[0_5px_0_0_rgba(154,52,18,0.28)] backdrop-blur-sm"
          aria-label="breaking news updates"
        >
          <span className="shrink-0 border-r-2 border-white/35 bg-white px-4 py-2 text-xs font-black tracking-[0.18em] text-[#EA580C]">
            🚨 BREAKING
          </span>
          <div className="relative flex min-w-0 flex-1 overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-8 whitespace-nowrap py-2 pl-6 pr-8 text-sm font-semibold"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 36.29, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].flatMap(() => heroNewsItems).map((item, index) => (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-8">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-orange-100 hover:decoration-white"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display leading-[0.9] tracking-tight"
        >
          <span
            className="block text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)", fontWeight: 900 }}
          >
            KRUTHIK B.S.
          </span>
          <span
            className="block text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 8.5rem)", fontWeight: 900 }}
          >
            HULISANDRA
          </span>
          <span
            className="block text-white/80 mt-2"
            style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: "clamp(1.2rem, 4vw, 3.4rem)", fontWeight: 900, letterSpacing: "0.08em" }}
          >
            MBS, BS
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-7 text-white/90 font-sans font-medium italic"
          style={{ fontSize: "clamp(1.05rem, 2.4vw, 1.75rem)" }}
        >
          {"(yea i did the degree for the name)"}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => {
              window.location.href = "/apps"
            }}
            className="px-8 py-3.5 bg-white text-[#EA580C] font-black rounded-xl text-sm border-2 border-white/80 shadow-[0_5px_0px_0px_rgba(154,52,18,0.5)] active:shadow-[0_2px_0px_0px_rgba(154,52,18,0.5)] active:translate-y-[3px] hover:bg-orange-50 transition-all duration-75"
          >
            projects
          </button>
          <button
            onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 border-2 border-white/50 text-white font-bold rounded-xl text-sm hover:bg-white/10 transition-all duration-200"
          >
            experience →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
