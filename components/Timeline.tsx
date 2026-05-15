"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Briefcase, GraduationCap, Star, Zap } from "lucide-react"
import { timelineEvents, type TimelineEvent } from "@/lib/data"
import { cn } from "@/lib/utils"

const CATEGORY = {
  work: {
    Icon: Briefcase,
    dot: "bg-[#EA580C]",
    ring: "ring-[#EA580C]/30",
    badge: "border-orange-300 text-orange-700 bg-orange-100",
    icon: "text-[#EA580C] bg-orange-100",
  },
  education: {
    Icon: GraduationCap,
    dot: "bg-sky-500",
    ring: "ring-sky-500/30",
    badge: "border-sky-300 text-sky-700 bg-sky-100",
    icon: "text-sky-600 bg-sky-100",
  },
  milestone: {
    Icon: Star,
    dot: "bg-amber-500",
    ring: "ring-amber-500/30",
    badge: "border-amber-300 text-amber-700 bg-amber-100",
    icon: "text-amber-600 bg-amber-100",
  },
  project: {
    Icon: Zap,
    dot: "bg-emerald-500",
    ring: "ring-emerald-500/30",
    badge: "border-emerald-300 text-emerald-700 bg-emerald-100",
    icon: "text-emerald-600 bg-emerald-100",
  },
}

function Card({ event }: { event: TimelineEvent }) {
  const [open, setOpen] = useState(false)
  const cfg = CATEGORY[event.category]

  return (
    <button
      onClick={() => setOpen(!open)}
      className={cn(
        "w-full text-left p-5 rounded-2xl border-2 bg-white transition-all duration-150 group",
        open
          ? "border-[#EA580C] shadow-[6px_6px_0px_0px_#C2410C] -translate-x-0.5 -translate-y-0.5"
          : "border-[#EA580C] shadow-[5px_5px_0px_0px_#C2410C] hover:shadow-[7px_7px_0px_0px_#C2410C] hover:-translate-x-0.5 hover:-translate-y-0.5",
      )}
    >
      <div className="flex items-start gap-3">
        <span className={cn("mt-0.5 p-2 rounded-xl flex-shrink-0", cfg.icon)}>
          <cfg.Icon size={13} />
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[11px] text-stone-400 mb-1 tracking-wider font-bold">
            {event.year}
          </p>
          <h3 className="font-display font-bold text-stone-900 text-sm leading-snug">
            {event.title}
          </h3>
          <p className="text-xs text-stone-500 mt-0.5 font-medium">{event.subtitle}</p>
        </div>
        <ChevronDown
          size={13}
          className={cn(
            "mt-1 flex-shrink-0 text-stone-400 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 mt-4 border-t-2 border-stone-100">
              <p className="text-xs text-stone-600 leading-relaxed text-left">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "text-[11px] px-2.5 py-0.5 rounded-full border-2 font-bold",
                      cfg.badge,
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-28 px-6 bg-[#DBEAFE]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <p className="text-[#EA580C] text-xs font-mono tracking-[0.2em] uppercase mb-4 font-black">
            The story so far
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-stone-900">
            Timeline
          </h2>
          <p className="mt-4 text-stone-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
            Career, education, and the moments worth marking. Click any entry to read more.
          </p>
        </motion.div>

        {/* Mobile layout */}
        <div className="md:hidden relative pl-6">
          <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#EA580C]/30 rounded-full" />
          <div className="flex flex-col gap-5">
            {timelineEvents.map((event, i) => {
              const cfg = CATEGORY[event.category]
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative"
                >
                  <div
                    className={cn(
                      "absolute -left-[25px] top-6 w-3 h-3 rounded-full ring-[4px] ring-[#DBEAFE]",
                      cfg.dot,
                    )}
                  />
                  <Card event={event} />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Desktop alternating layout */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 -translate-x-px top-6 bottom-6 w-[3px] bg-[#EA580C]/25 rounded-full" />

          <div className="flex flex-col gap-7">
            {timelineEvents.map((event, i) => {
              const cfg = CATEGORY[event.category]
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative flex items-start"
                >
                  <div className="w-1/2 pr-10">
                    {isLeft && <Card event={event} />}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-5 z-10">
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full ring-[5px] ring-[#DBEAFE]",
                        cfg.dot,
                      )}
                    />
                  </div>

                  <div className="w-1/2 pl-10">
                    {!isLeft && <Card event={event} />}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
