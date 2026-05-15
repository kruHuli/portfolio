import React from "react"

type IconProps = { className?: string }

export const Basketball = ({ className = "" }: IconProps) => (
  <svg viewBox="-40 -40 80 80" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <circle r="33" strokeWidth="3" fill="currentColor" fillOpacity="0.22" />
    <path d="M-33,0 Q0,-20 33,0" strokeWidth="2.5" />
    <path d="M-33,0 Q0,20 33,0" strokeWidth="2.5" />
    <line x1="0" y1="-33" x2="0" y2="33" strokeWidth="2.5" />
  </svg>
)

export const SoccerBall = ({ className = "" }: IconProps) => (
  <svg viewBox="-40 -40 80 80" fill="none" className={className} stroke="currentColor">
    <circle r="33" strokeWidth="3" fill="currentColor" fillOpacity="0.22" />
    <polygon points="0,-15 14,-5 9,12 -9,12 -14,-5" fill="currentColor" fillOpacity="0.65" stroke="none" />
  </svg>
)

export const GolfFlag = ({ className = "" }: IconProps) => (
  <svg viewBox="-28 -44 56 68" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <line x1="2" y1="-38" x2="2" y2="18" strokeWidth="3.5" />
    <path d="M2,-38 L28,-27 L2,-16 Z" fill="currentColor" stroke="none" />
    <ellipse cx="2" cy="20" rx="22" ry="5.5" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
    <ellipse cx="2" cy="18" rx="7" ry="2.5" fill="currentColor" stroke="none" />
  </svg>
)

export const LacrosseStick = ({ className = "" }: IconProps) => (
  <svg viewBox="-30 -76 60 116" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <line x1="0" y1="0" x2="-14" y2="38" strokeWidth="5" />
    <path
      d="M-5,0 C-22,-8 -28,-28 -24,-50 Q-18,-70 0,-72 Q18,-70 24,-50 C28,-28 22,-8 5,0 Z"
      fill="currentColor" fillOpacity="0.22" strokeWidth="3"
    />
    <line x1="-20" y1="-22" x2="20" y2="-22" strokeWidth="1.8" strokeOpacity="0.5" />
    <line x1="-24" y1="-42" x2="24" y2="-42" strokeWidth="1.8" strokeOpacity="0.5" />
    <line x1="0" y1="-4" x2="0" y2="-70" strokeWidth="1.8" strokeOpacity="0.5" />
    <circle cx="0" cy="-28" r="8" fill="currentColor" fillOpacity="0.75" stroke="currentColor" strokeWidth="1.5" />
  </svg>
)

export const RobotHead = ({ className = "" }: IconProps) => (
  <svg viewBox="-34 -44 68 66" fill="none" className={className} stroke="currentColor" strokeLinecap="round">
    <line x1="0" y1="-44" x2="0" y2="-28" strokeWidth="3" />
    <circle cx="0" cy="-36" r="5" fill="currentColor" stroke="none" />
    <rect x="-28" y="-26" width="56" height="46" rx="10" fill="currentColor" fillOpacity="0.22" strokeWidth="3" />
    <circle cx="-10" cy="-9" r="7" fill="currentColor" stroke="none" />
    <circle cx="10" cy="-9" r="7" fill="currentColor" stroke="none" />
    <path d="M-13,8 Q0,19 13,8" fill="none" strokeWidth="3" />
  </svg>
)

export const OpenBook = ({ className = "" }: IconProps) => (
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

export const Laptop = ({ className = "" }: IconProps) => (
  <svg viewBox="-40 -30 80 56" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <rect x="-32" y="-26" width="64" height="42" rx="5" fill="currentColor" fillOpacity="0.22" strokeWidth="3" />
    <rect x="-38" y="18" width="76" height="8" rx="4" fill="currentColor" fillOpacity="0.3" strokeWidth="2.5" />
    <polyline points="-16,-8 -24,0 -16,8" strokeWidth="3" />
    <line x1="4" y1="-10" x2="-4" y2="10" strokeWidth="3" />
    <polyline points="16,-8 24,0 16,8" strokeWidth="3" />
  </svg>
)

export const Medal = ({ className = "" }: IconProps) => (
  <svg viewBox="-36 -44 72 86" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-22,-40 L-6,-40 L5,-9 L-12,-6 Z" fill="currentColor" fillOpacity="0.18" strokeWidth="3" />
    <path d="M22,-40 L6,-40 L-5,-9 L12,-6 Z" fill="currentColor" fillOpacity="0.18" strokeWidth="3" />
    <circle cy="13" r="25" fill="currentColor" fillOpacity="0.24" strokeWidth="3" />
    <path d="M0,-1 L5,9 L16,10 L8,18 L10,30 L0,24 L-10,30 L-8,18 L-16,10 L-5,9 Z" fill="currentColor" fillOpacity="0.68" stroke="none" />
  </svg>
)

export const Trophy = ({ className = "" }: IconProps) => (
  <svg viewBox="-42 -42 84 84" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    <path d="M-22,-32 H22 V-10 C22,8 12,18 0,18 C-12,18 -22,8 -22,-10 Z" fill="currentColor" fillOpacity="0.24" strokeWidth="3" />
    <path d="M-22,-24 H-34 C-34,-7 -26,2 -16,2" strokeWidth="3" />
    <path d="M22,-24 H34 C34,-7 26,2 16,2" strokeWidth="3" />
    <line x1="0" y1="18" x2="0" y2="30" strokeWidth="4" />
    <rect x="-18" y="30" width="36" height="8" rx="4" fill="currentColor" fillOpacity="0.24" strokeWidth="3" />
    <path d="M-8,-16 H8" strokeWidth="3" strokeOpacity="0.6" />
  </svg>
)

export const Brain = ({ className = "" }: IconProps) => (
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

export const Cricket = ({ className = "" }: IconProps) => (
  <svg viewBox="-35 -55 70 75" fill="none" className={className} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Bat blade */}
    <path d="M-7,-48 L7,-48 L11,8 L-11,8 Z" fill="currentColor" fillOpacity="0.22" strokeWidth="2.5" />
    {/* Handle */}
    <rect x="-3.5" y="8" width="7" height="16" rx="2" fill="currentColor" fillOpacity="0.4" strokeWidth="2" />
    <line x1="-3.5" y1="13" x2="3.5" y2="13" strokeWidth="1.5" strokeOpacity="0.5" />
    <line x1="-3.5" y1="18" x2="3.5" y2="18" strokeWidth="1.5" strokeOpacity="0.5" />
    {/* Ball */}
    <circle cx="22" cy="-18" r="11" fill="currentColor" fillOpacity="0.22" strokeWidth="2.5" />
    <path d="M16,-24 Q22,-17 16,-12" strokeWidth="1.5" strokeOpacity="0.6" />
    <path d="M28,-24 Q22,-17 28,-12" strokeWidth="1.5" strokeOpacity="0.6" />
  </svg>
)

type P = { t: number; s: React.CSSProperties; r: number; w: number; o: number }

const BG: P[] = [
  // top band
  { t: 0, s: { left: "3%",   top: "5%"    }, r: -12, w: 68, o: 0.18 },
  { t: 1, s: { left: "15%",  top: "3%"    }, r: 8,   w: 56, o: 0.15 },
  { t: 2, s: { left: "36%",  top: "4%"    }, r: -6,  w: 60, o: 0.16 },
  { t: 3, s: { left: "55%",  top: "2%"    }, r: 14,  w: 64, o: 0.14 },
  { t: 4, s: { right: "14%", top: "3%"    }, r: -10, w: 70, o: 0.17 },
  { t: 5, s: { right: "2%",  top: "5%"    }, r: 18,  w: 64, o: 0.18 },
  // left column
  { t: 6, s: { left: "1%",   top: "30%"   }, r: -8,  w: 62, o: 0.16 },
  { t: 7, s: { left: "3%",   top: "58%"   }, r: 25,  w: 76, o: 0.15 },
  // right column
  { t: 8, s: { right: "2%",  top: "28%"   }, r: -15, w: 66, o: 0.17 },
  { t: 9, s: { right: "1%",  top: "58%"   }, r: 12,  w: 60, o: 0.14 },
  // bottom band
  { t: 0, s: { left: "4%",   bottom: "4%" }, r: -5,  w: 64, o: 0.18 },
  { t: 1, s: { left: "20%",  bottom: "3%" }, r: 20,  w: 58, o: 0.16 },
  { t: 2, s: { left: "42%",  bottom: "5%" }, r: -14, w: 66, o: 0.15 },
  { t: 3, s: { right: "22%", bottom: "3%" }, r: 8,   w: 68, o: 0.17 },
  { t: 4, s: { right: "6%",  bottom: "4%" }, r: -8,  w: 60, o: 0.14 },
  { t: 5, s: { left: "62%",  bottom: "3%" }, r: 12,  w: 54, o: 0.16 },
  // interior fill (lower opacity)
  { t: 6, s: { left: "28%",  top: "30%"   }, r: -20, w: 72, o: 0.09 },
  { t: 7, s: { right: "28%", top: "35%"   }, r: 10,  w: 58, o: 0.08 },
  { t: 8, s: { left: "18%",  top: "60%"   }, r: 15,  w: 64, o: 0.08 },
  { t: 9, s: { right: "18%", top: "58%"   }, r: -12, w: 70, o: 0.09 },
  { t: 0, s: { left: "45%",  top: "45%"   }, r: 6,   w: 56, o: 0.07 },
  { t: 1, s: { right: "42%", top: "20%"   }, r: -8,  w: 52, o: 0.07 },
]

// Denser layout — used for Experience. Extra t=10/21/32 entries map to Cricket (index 10 of 11).
const BG_DENSE: P[] = [
  // top band
  { t: 0,  s: { left: "2%",   top: "2%"    }, r: -12, w: 72, o: 0.20 },
  { t: 10, s: { left: "12%",  top: "4%"    }, r: 18,  w: 80, o: 0.19 },
  { t: 2,  s: { left: "24%",  top: "2%"    }, r: -6,  w: 62, o: 0.17 },
  { t: 21, s: { left: "40%",  top: "3%"    }, r: -22, w: 86, o: 0.20 },
  { t: 4,  s: { left: "57%",  top: "2%"    }, r: 10,  w: 68, o: 0.18 },
  { t: 10, s: { right: "18%", top: "4%"    }, r: 30,  w: 76, o: 0.17 },
  { t: 6,  s: { right: "4%",  top: "2%"    }, r: -8,  w: 66, o: 0.19 },
  // second row
  { t: 7,  s: { left: "1%",   top: "16%"   }, r: 8,   w: 70, o: 0.16 },
  { t: 32, s: { left: "14%",  top: "18%"   }, r: -30, w: 82, o: 0.18 },
  { t: 3,  s: { left: "30%",  top: "16%"   }, r: 14,  w: 60, o: 0.14 },
  { t: 21, s: { left: "48%",  top: "18%"   }, r: 6,   w: 78, o: 0.17 },
  { t: 9,  s: { right: "26%", top: "17%"   }, r: -11, w: 64, o: 0.15 },
  { t: 10, s: { right: "8%",  top: "15%"   }, r: -25, w: 84, o: 0.19 },
  // left column
  { t: 5,  s: { left: "1%",   top: "33%"   }, r: -10, w: 66, o: 0.17 },
  { t: 10, s: { left: "2%",   top: "50%"   }, r: 35,  w: 88, o: 0.20 },
  { t: 1,  s: { left: "1%",   top: "68%"   }, r: -5,  w: 64, o: 0.16 },
  { t: 32, s: { left: "10%",  top: "42%"   }, r: 15,  w: 70, o: 0.12 },
  // right column
  { t: 8,  s: { right: "1%",  top: "33%"   }, r: 12,  w: 68, o: 0.17 },
  { t: 21, s: { right: "2%",  top: "50%"   }, r: -28, w: 84, o: 0.19 },
  { t: 3,  s: { right: "1%",  top: "68%"   }, r: 8,   w: 62, o: 0.16 },
  { t: 10, s: { right: "11%", top: "42%"   }, r: -15, w: 72, o: 0.13 },
  // interior fill
  { t: 10, s: { left: "22%",  top: "32%"   }, r: -18, w: 78, o: 0.10 },
  { t: 0,  s: { left: "38%",  top: "28%"   }, r: 8,   w: 58, o: 0.08 },
  { t: 21, s: { right: "24%", top: "30%"   }, r: 20,  w: 80, o: 0.10 },
  { t: 5,  s: { left: "26%",  top: "52%"   }, r: -10, w: 62, o: 0.08 },
  { t: 10, s: { left: "44%",  top: "48%"   }, r: 12,  w: 76, o: 0.10 },
  { t: 7,  s: { right: "26%", top: "55%"   }, r: -8,  w: 56, o: 0.07 },
  { t: 32, s: { left: "32%",  top: "70%"   }, r: 25,  w: 82, o: 0.10 },
  { t: 2,  s: { right: "32%", top: "68%"   }, r: -12, w: 60, o: 0.08 },
  // bottom band
  { t: 10, s: { left: "3%",   bottom: "3%" }, r: 20,  w: 84, o: 0.20 },
  { t: 4,  s: { left: "18%",  bottom: "2%" }, r: -8,  w: 66, o: 0.17 },
  { t: 21, s: { left: "36%",  bottom: "4%" }, r: 14,  w: 80, o: 0.19 },
  { t: 6,  s: { left: "54%",  bottom: "2%" }, r: -5,  w: 62, o: 0.16 },
  { t: 10, s: { right: "18%", bottom: "3%" }, r: -32, w: 86, o: 0.20 },
  { t: 8,  s: { right: "3%",  bottom: "4%" }, r: 10,  w: 68, o: 0.18 },
]

type Props = {
  icons: React.ComponentType<{ className?: string }>[]
  iconColor: string
  dotColor?: string
  dense?: boolean
}

export default function ScatteredIconBg({ icons, iconColor, dotColor = "rgba(0,0,0,0.9)", dense = false }: Props) {
  const items = dense ? BG_DENSE : BG
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      {items.map(({ t, s, r, w, o }, i) => {
        const Icon = icons[t % icons.length]
        return (
          <div
            key={i}
            className="absolute"
            style={{ ...s, transform: `rotate(${r}deg)`, opacity: o, width: w, height: w, color: iconColor }}
          >
            <Icon className="w-full h-full" />
          </div>
        )
      })}
    </div>
  )
}
