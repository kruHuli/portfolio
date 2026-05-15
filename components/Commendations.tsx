"use client"

import { motion } from "framer-motion"
import ScatteredIconBg, { Medal, Trophy } from "@/components/ScatteredIconBg"

type Item =
  | { type: "quote"; name: string; title: string; date: string; text: string }
  | { type: "image"; src: string; alt: string }

const ITEMS: Item[] = [
  {
    type: "quote",
    name: "Blake Summerfield",
    title: "Manager, Business Intelligence & Analytics · Philadelphia Phillies",
    date: "Nov 2024",
    text: "Kruthik partnered with us at the Phillies as a team lead on an extensive research and analysis project examining our retail data. He is an effective leader and gifted analyst. His team produced actionable insights in a condensed timeframe as a result of his management. Kruthik's own analysis stood out amongst the group. He would be an asset to any organization's analytics/data team. I would be happy to speak to anyone personally to further endorse his skillset.",
  },
  { type: "image", src: "/awards/rec-leadership-award.jpeg", alt: "Rutgers Recreation Leadership Excellence Award ceremony" },
  { type: "image", src: "/awards/team-lead-certificate.png", alt: "Team Lead Certificate of Achievement" },
  { type: "image", src: "/awards/mun-ceremony.jpeg", alt: "Model UN award ceremony" },
  { type: "image", src: "/awards/phillies-externship.png", alt: "Philadelphia Phillies Externship Certificate" },
  { type: "image", src: "/awards/basketball-trophy.jpeg", alt: "Basketball runner-up trophy" },
  { type: "image", src: "/awards/vtu-youth-festival.jpeg", alt: "VTU Youth Festival certificate" },
]

function QuoteCard({ item }: { item: Extract<Item, { type: "quote" }> }) {
  return (
    <div className="w-[420px] h-[340px] flex-shrink-0 rounded-2xl border-2 border-[#EA580C] bg-white shadow-[5px_5px_0px_0px_#C2410C] p-6 flex flex-col gap-4">
      <p className="text-[12px] font-medium text-stone-600 leading-relaxed italic flex-1">
        &ldquo;{item.text}&rdquo;
      </p>
      <div className="border-t-2 border-orange-100 pt-4">
        <p className="font-display font-black text-stone-900 text-sm">{item.name}</p>
        <p className="text-[11px] text-[#EA580C] font-bold mt-0.5">{item.title}</p>
        <p className="text-[11px] text-stone-400 font-mono font-bold mt-0.5">{item.date}</p>
      </div>
    </div>
  )
}

function ImageCard({ item }: { item: Extract<Item, { type: "image" }> }) {
  return (
    <div className="w-[300px] h-[340px] flex-shrink-0 rounded-2xl border-2 border-[#EA580C] shadow-[5px_5px_0px_0px_#C2410C] overflow-hidden bg-white flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-contain"
      />
    </div>
  )
}


function renderItem(item: Item, key: string) {
  if (item.type === "quote") return <QuoteCard key={key} item={item} />
  return <ImageCard key={key} item={item} />
}

export default function Commendations() {
  return (
    <section id="commendations" className="relative py-28 bg-[#DBEAFE] overflow-hidden">
      <ScatteredIconBg icons={[Medal, Trophy]} iconColor="#1E40AF" dotColor="rgba(30,58,138,0.9)" />
      <div className="relative z-10 max-w-4xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#EA580C] text-xs font-mono tracking-[0.08em] mb-4 font-black">
            What Others Have Said
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-stone-900">
            Commendations & Awards
          </h2>
          <p className="mt-4 text-stone-500 max-w-sm mx-auto text-sm leading-relaxed font-medium">
            Receipts from the rooms I've been in.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex overflow-hidden">
        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#DBEAFE] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#DBEAFE] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {[...ITEMS, ...ITEMS].map((item, i) =>
            renderItem(item, `${i}`)
          )}
        </motion.div>
      </div>
    </section>
  )
}
