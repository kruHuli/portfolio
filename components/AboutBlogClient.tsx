"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"

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

function renderMarkdownBlock(block: string, key: string) {
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
      <h4 key={key} className="pt-4 font-display text-xl font-black lowercase leading-tight text-[#EA580C] sm:text-2xl">
        {trimmed.slice(3)}
      </h4>
    )
  }

  return (
    <p key={key} className="text-sm font-medium lowercase leading-7 text-stone-600 sm:text-base">
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
        {shortBlocks.map((block, index) => renderMarkdownBlock(block, `short-${index}`))}
      </div>

      {longBlocks.length > 0 && (
        <div className="mt-8 border-t-2 border-orange-100 pt-6">
          <button
            type="button"
            onClick={() => setLongVersionOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#EA580C] bg-orange-100 px-4 py-2 text-sm font-black text-[#EA580C] transition-all duration-150 hover:bg-orange-200"
            aria-expanded={longVersionOpen}
          >
            {longVersionOpen ? "hide the full story" : "read the full story"}
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
                {longBlocks.map((block, index) => renderMarkdownBlock(block, `long-${index}`))}
              </div>
            </motion.div>
          )}
        </div>
      )}
    </div>
  )
}

function MoreThoughts() {
  return (
    <div className="mt-6 flex justify-center">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 rounded-xl border-2 border-[#EA580C] bg-[#EA580C] px-5 py-3 text-sm font-black text-white shadow-[0_5px_0_0_#9A3412] transition-all duration-75 hover:bg-[#F97316] active:translate-y-[3px] active:shadow-[0_2px_0_0_#9A3412]"
      >
        read more of my thoughts
        <span className="text-base leading-none">→</span>
      </Link>
    </div>
  )
}

export default function AboutBlogClient({ markdown }: { markdown: string }) {
  return (
    <section id="about" className="bg-[#FFF7ED] px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C] lowercase">
            about me
          </p>
          <h2 className="font-display text-4xl font-black lowercase text-stone-900 md:text-5xl">
            i turn ambiguity into useful systems
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm font-medium lowercase leading-relaxed text-stone-500">
            a quick read on how i work, what i build, and why i&apos;m useful in messy rooms.
          </p>
          <MoreThoughts />
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border-2 border-[#EA580C] bg-white shadow-[7px_7px_0_0_#C2410C]"
        >
          <div className="border-b-2 border-[#EA580C] px-6 py-5 sm:px-8">
            <span className="inline-flex rounded-lg border-2 border-orange-300 bg-orange-100 px-3 py-1 text-[11px] font-black lowercase tracking-[0.12em] text-orange-700">
              snapshot
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
