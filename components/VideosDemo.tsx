"use client"

import { motion } from "framer-motion"
import { Play, Clock, Tag } from "lucide-react"
import { demoVideos, type DemoVideo } from "@/lib/data"
import { cn } from "@/lib/utils"

function VideoCard({ video, index }: { video: DemoVideo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className={cn(
        "group relative rounded-2xl border-2 border-[#EA580C] bg-white overflow-hidden",
        "shadow-[5px_5px_0px_0px_#C2410C] hover:shadow-[7px_7px_0px_0px_#C2410C]",
        "hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150",
        video.featured && "md:col-span-2",
      )}
    >
      {/* Thumbnail */}
      <div
        className={cn(
          "relative overflow-hidden",
          video.featured ? "h-64 md:h-80" : "h-48",
        )}
      >
        {/* Gradient placeholder thumbnail */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${video.gradientFrom} 0%, ${video.gradientTo} 100%)`,
          }}
        />

        {/* Grid texture on thumbnail */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white border-[3px] border-white/80 group-hover:scale-110 transition-all duration-200"
            style={{ boxShadow: `0 4px 0px 0px rgba(0,0,0,0.25)` }}
          >
            <Play size={22} fill="#EA580C" className="text-[#EA580C] ml-1" />
          </div>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/60 text-white text-xs font-mono font-bold">
          <Clock size={10} />
          {video.duration}
        </div>

        {/* Featured label */}
        {video.featured && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white border-2 border-[#EA580C] text-[#EA580C] text-xs font-black shadow-[2px_2px_0px_0px_#C2410C]">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 border-t-2 border-[#EA580C]">
        <h3 className="font-display font-bold text-stone-900 text-sm leading-snug mb-2">
          {video.title}
        </h3>
        <p className="text-xs text-stone-500 leading-relaxed mb-4 font-medium">{video.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {video.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-lg border-2 border-blue-200 text-blue-700 bg-blue-50 font-bold"
            >
              <Tag size={8} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function VideosDemo() {
  return (
    <section id="demos" className="py-28 px-6 bg-[#DBEAFE]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-[#EA580C] text-xs font-mono tracking-[0.2em] uppercase mb-4 font-black">
            Show, don&apos;t tell
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-stone-900">
            Videos &amp; Demos
          </h2>
          <p className="mt-4 text-stone-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
            Walkthroughs, talks, and live demos. The work, in motion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoVideos.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-stone-400 text-xs mt-10 font-mono font-bold"
        >
          — Replace with real YouTube embed URLs in{" "}
          <code className="text-[#EA580C]">lib/data.ts</code> —
        </motion.p>
      </div>
    </section>
  )
}
