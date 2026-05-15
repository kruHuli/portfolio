"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const GithubLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .322.216.695.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const LinkedInLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
)

const SubstackLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812h21.08V24L12 18.11 1.46 24V10.812zM22.54 0H1.46v2.836h21.08V0z" />
  </svg>
)

const GmailLogo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
)

const SOCIAL = [
  { label: "GitHub", Icon: GithubLogo, href: "https://github.com/kruHuli" },
  { label: "LinkedIn", Icon: LinkedInLogo, href: "https://www.linkedin.com/in/kruthik-hulisandra/" },
  { label: "Substack", Icon: SubstackLogo, href: "https://substack.com/@itskrutak" },
  { label: "Gmail", Icon: GmailLogo, href: "mailto:kruhuliwork@gmail.com" },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#EA580C] px-6 py-14 border-t-[3px] border-[#C2410C]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h2 className="font-display text-3xl font-black lowercase tracking-[0.08em] text-black sm:text-4xl">
            contact
          </h2>

          {/* Logo + tagline */}
          <div className="text-center">
            <div className="whitespace-nowrap text-[clamp(1.35rem,4vw,2rem)] leading-none tracking-wide text-white">
              <span className="font-signature">Kruthik BS Hulisandra</span>{" "}
              <span style={{ fontFamily: '"Times New Roman", Times, serif' }}>MBS, BS</span>
            </div>
            <p className="text-white/60 text-xs font-mono font-bold">
              a no BS kinda guy.
            </p>
          </div>

          {/* Socials */}
          <div className="mt-2 flex items-center justify-center gap-3">
            {SOCIAL.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-white/40 text-white transition-all duration-200 hover:bg-white/15 hover:border-white/70"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#EA580C] font-black text-xs border-2 border-white/80 shadow-[0_4px_0px_0px_rgba(154,52,18,0.4)] active:shadow-[0_1px_0px_0px_rgba(154,52,18,0.4)] active:translate-y-[3px] transition-all duration-75"
          >
            back to top
            <ArrowUp size={12} />
          </button>
        </motion.div>

        <div className="mt-10 pt-6 border-t-2 border-white/20 flex flex-col items-center justify-center gap-3 text-white/50 text-xs font-mono font-bold">
          <p>© {new Date().getFullYear()} Kruthik BS Hulisandra</p>
          <p>built with next.js · tailwind · framer motion</p>
        </div>
      </div>
    </footer>
  )
}
