"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import kruhuliLogo from "@/content/kruhulilogo.png"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "blog", href: "/blog" },
  { label: "experience", href: "#experience" },
]

const navPillShell =
  "inline-flex h-[44px] shrink-0 items-center justify-center px-5 rounded-xl border-2 transition-all duration-75 active:translate-y-[3px]"

function scrollTo(href: string) {
  if (href.startsWith("/")) {
    window.location.href = href
    return
  }

  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300",
          scrolled
            ? "py-3 bg-white border-b-[3px] border-[#EA580C] shadow-[0_4px_0px_0px_#C2410C]"
            : "py-5",
        )}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className={cn(
              navPillShell,
              "overflow-hidden select-none p-0",
              scrolled
                ? "border-[#C2410C] bg-[#EA580C] shadow-[0_4px_0px_0px_#9A3412] active:shadow-[0_1px_0px_0px_#9A3412]"
                : "border-white/80 bg-white shadow-[0_4px_0px_0px_rgba(255,255,255,0.4)] active:shadow-[0_1px_0px_0px_rgba(255,255,255,0.4)]",
            )}
            aria-label="Back to top"
          >
            <Image
              src={kruhuliLogo}
              alt="Kruhuli logo"
              width={1024}
              height={1024}
              className="h-[44px] w-[126px] object-cover"
              priority
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "text-sm font-semibold transition-colors duration-200 relative group",
                  scrolled
                    ? "text-stone-600 hover:text-stone-900"
                    : "text-white/80 hover:text-white",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left",
                    scrolled ? "bg-[#EA580C]" : "bg-white",
                  )}
                />
              </button>
            ))}

            <button
              onClick={() => scrollTo("#contact")}
              className={cn(
                navPillShell,
                "font-black text-sm leading-none",
                scrolled
                  ? "bg-[#EA580C] text-white border-[#C2410C] shadow-[0_4px_0px_0px_#9A3412] active:shadow-[0_1px_0px_0px_#9A3412]"
                  : "bg-white text-[#EA580C] border-white/80 shadow-[0_4px_0px_0px_rgba(255,255,255,0.4)] active:shadow-[0_1px_0px_0px_rgba(255,255,255,0.4)]",
              )}
            >
              contact
            </button>
          </div>

          <button
            className={cn(
              "md:hidden transition-colors p-1",
              scrolled ? "text-stone-600 hover:text-stone-900" : "text-white",
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-white border-b-[3px] border-[#EA580C] shadow-[0_4px_0px_0px_#C2410C] py-5 px-6"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setMobileOpen(false) }}
                  className="text-left text-stone-700 hover:text-stone-900 text-lg font-semibold py-3 px-2 rounded-xl hover:bg-orange-50 transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { scrollTo("#contact"); setMobileOpen(false) }}
                className="text-left mt-2 mx-2 px-5 py-3 bg-[#EA580C] text-white rounded-xl font-black border-2 border-[#C2410C] shadow-[0_4px_0px_0px_#9A3412] active:shadow-[0_1px_0px_0px_#9A3412] active:translate-y-[3px] transition-all duration-75"
              >
                contact →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
