"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import kruhuliLogo from "@/content/kruhulilogo.png"

export default function SevisDashboardPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const div = containerRef.current
    if (!div) return

    const viz = div.querySelector("object") as HTMLObjectElement | null
    if (!viz) return

    // Replicates the sizing logic from the original Tableau embed snippet
    if (div.offsetWidth > 800) {
      viz.style.width = "100%"
      viz.style.height = div.offsetWidth * 0.75 + "px"
    } else if (div.offsetWidth > 500) {
      viz.style.width = "100%"
      viz.style.height = div.offsetWidth * 0.75 + "px"
    } else {
      viz.style.width = "100%"
      viz.style.height = "977px"
    }

    const script = document.createElement("script")
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js"
    viz.parentNode!.insertBefore(script, viz)

    return () => { script.remove() }
  }, [])

  return (
    <main className="min-h-screen bg-[#FFF7ED] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-12 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-[44px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[#C2410C] bg-[#EA580C] p-0 shadow-[0_4px_0px_0px_#9A3412] transition-all duration-75 active:translate-y-[3px] active:shadow-[0_1px_0px_0px_#9A3412]"
            aria-label="Back home"
          >
            <Image src={kruhuliLogo} alt="Kruhuli logo" width={1024} height={1024} className="h-[44px] w-[126px] object-cover" priority />
          </Link>
          <Link
            href="/apps"
            className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-2 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100"
          >
            ← Back to Projects
          </Link>
        </nav>

        <section className="mb-10 text-center">
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            Data Visualization
          </p>
          <h1 className="font-display text-5xl font-black leading-none text-stone-900 md:text-6xl">
            SEVIS Data Dashboard
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-stone-500 md:text-base">
            Interactive Tableau dashboard exploring international student enrollment data across institutions, visa categories, and demographics.
          </p>
        </section>

        <div className="rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] overflow-hidden">
          <div ref={containerRef} id="viz1778883665822" style={{ position: "relative" }}>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <a href="#"><img alt="Sevis Data Dashboard" src="https://public.tableau.com/static/images/Se/SevisDataDashboard/SevisDataDashboard/1_rss.png" style={{ border: "none" }} /></a>
            </noscript>
            <object className="tableauViz" style={{ display: "none" }}>
              <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
              <param name="embed_code_version" value="3" />
              <param name="site_root" value="" />
              <param name="name" value="SevisDataDashboard/SevisDataDashboard" />
              <param name="tabs" value="no" />
              <param name="toolbar" value="yes" />
              <param name="static_image" value="https://public.tableau.com/static/images/Se/SevisDataDashboard/SevisDataDashboard/1.png" />
              <param name="animate_transition" value="yes" />
              <param name="display_static_image" value="yes" />
              <param name="display_spinner" value="yes" />
              <param name="display_overlay" value="yes" />
              <param name="display_count" value="yes" />
              <param name="language" value="en-US" />
            </object>
          </div>
        </div>
      </div>
    </main>
  )
}
