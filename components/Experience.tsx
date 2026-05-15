"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, ArrowUpRight } from "lucide-react"
import { experiences } from "@/lib/data"
import { cn } from "@/lib/utils"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#DBEAFE]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-[#EA580C] text-xs font-mono tracking-[0.2em] mb-4 font-black">
            Where I&apos;ve Been
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-stone-900">
            Experience
          </h2>
          <p className="mt-4 text-stone-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
            where i&apos;ve worked, what i built, and a few things i&apos;m actually proud of.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className={cn(
                "group relative rounded-2xl border-2 bg-white transition-all duration-150",
                "border-[#EA580C] shadow-[5px_5px_0px_0px_#C2410C]",
                "hover:shadow-[7px_7px_0px_0px_#C2410C] hover:-translate-x-0.5 hover:-translate-y-0.5",
              )}
            >
              <div className="px-7 py-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-display font-black text-stone-900 text-base leading-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-lg bg-orange-100 border-2 border-orange-300 text-orange-700 font-black">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[#EA580C] font-black text-sm">{exp.company}</p>
                  </div>

                  <div className="flex flex-col gap-1 sm:items-end text-xs text-stone-500 font-mono font-bold flex-shrink-0">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={11} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2.5 mb-5">
                  {exp.description.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed font-medium">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#EA580C] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-3 py-1 rounded-lg border-2 border-blue-200 text-blue-700 bg-blue-50 font-mono font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight size={16} className="text-[#EA580C]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#EA580C] text-white font-black text-sm border-2 border-[#C2410C] shadow-[0_5px_0px_0px_#9A3412] active:shadow-[0_2px_0px_0px_#9A3412] active:translate-y-[3px] hover:bg-[#F97316] transition-all duration-75"
          >
            Download full résumé
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
