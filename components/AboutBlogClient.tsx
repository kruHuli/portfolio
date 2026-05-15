"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ScatteredIconBg, { OpenBook, Laptop, Brain } from "@/components/ScatteredIconBg"

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-black text-stone-900">
          {part.slice(2, -2)}
        </strong>
      )
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={index} className="text-stone-500">
          {part.slice(1, -1)}
        </em>
      )
    }

    return part
  })
}

function renderMarkdownBlock(block: string, key: string, applyLowercase = false) {
  const trimmed = block.trim()
  if (!trimmed) return null

  if (trimmed === "---") {
    return <hr key={key} className="my-8 border-t-2 border-orange-100" />
  }

  if (trimmed.startsWith("# ")) {
    return (
      <h3 key={key} className="font-display text-3xl font-black leading-tight text-stone-900 sm:text-4xl">
        {trimmed.slice(2)}
      </h3>
    )
  }

  if (trimmed.startsWith("## ")) {
    return (
      <h4 key={key} className={`pt-4 font-display text-xl font-black leading-tight text-[#EA580C] sm:text-2xl${applyLowercase ? " lowercase" : ""}`}>
        {trimmed.slice(3)}
      </h4>
    )
  }

  return (
    <p key={key} className={`text-sm font-medium leading-7 text-stone-600 sm:text-base${applyLowercase ? " lowercase" : ""}`}>
      {renderInlineMarkdown(trimmed.replace(/\n/g, " "))}
    </p>
  )
}

function getLongVersionSplitIndex(blocks: string[]) {
  let sectionCount = 0

  for (let index = 0; index < blocks.length; index += 1) {
    if (blocks[index].trim().startsWith("## ")) sectionCount += 1
    if (sectionCount === 2) return index
  }

  return blocks.length
}

function MarkdownContent({ markdown }: { markdown: string }) {
  const [longVersionOpen, setLongVersionOpen] = useState(false)
  const blocks = markdown
    .split(/\n{2,}/)
    .filter((block) => block.trim())
    .filter((block) => !block.trim().startsWith("# "))
  const splitIndex = getLongVersionSplitIndex(blocks)
  const shortBlocks = blocks.slice(0, splitIndex)
  const longBlocks = blocks.slice(splitIndex)

  return (
    <div>
      <div className="space-y-5">
        {shortBlocks.map((block, index) => renderMarkdownBlock(block, `short-${index}`, false))}
      </div>

      {longBlocks.length > 0 && (
        <div className="mt-8 border-t-2 border-orange-100 pt-6">
          <button
            type="button"
            onClick={() => setLongVersionOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#EA580C] bg-orange-100 px-4 py-2 text-sm font-black text-[#EA580C] transition-all duration-150 hover:bg-orange-200"
            aria-expanded={longVersionOpen}
          >
            {longVersionOpen ? "Hide the Full Story" : "Read the Full Story"}
            <span
              className="text-base leading-none transition-transform duration-200"
              style={{ transform: longVersionOpen ? "rotate(45deg)" : "rotate(0deg)" }}
            >
              +
            </span>
          </button>

          {longVersionOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden"
            >
              <div className="space-y-5 pt-6">
                {longBlocks.map((block, index) => renderMarkdownBlock(block, `long-${index}`, false))}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}


export default function AboutBlogClient({ markdown }: { markdown: string }) {
  return (
    <section id="about" className="relative bg-[#FFF7ED] px-6 py-28">
      <ScatteredIconBg icons={[OpenBook, Laptop, Brain]} iconColor="#92400E" dotColor="rgba(120,60,0,0.9)" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            About Me
          </p>
          <h2 className="font-display text-4xl font-black text-stone-900 md:text-5xl">
            I Turn Ambiguity Into Useful Systems
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-medium leading-relaxed text-stone-500">
            A quick read on how I work, what I build, and why I&apos;m useful in messy rooms.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border-2 border-[#EA580C] bg-white shadow-[7px_7px_0_0_#C2410C]"
        >
          <div className="border-b-2 border-[#EA580C] px-6 py-5 sm:px-8">
            <span className="inline-flex rounded-lg border-2 border-orange-300 bg-orange-100 px-3 py-1 text-[11px] font-black tracking-[0.12em] text-orange-700">
              Snapshot
            </span>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <MarkdownContent markdown={markdown} />
          </div>
        </motion.article>
      </div>
    </section>
  )
}
