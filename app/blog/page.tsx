import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import kruhuliLogo from "@/content/kruhulilogo.png"
import { blogPosts } from "@/lib/blog-posts"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFF7ED] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-16 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex h-[44px] shrink-0 items-center justify-center overflow-hidden rounded-xl border-2 border-[#C2410C] bg-[#EA580C] p-0 shadow-[0_4px_0px_0px_#9A3412] transition-all duration-75 active:translate-y-[3px] active:shadow-[0_1px_0px_0px_#9A3412]"
            aria-label="Back home"
          >
            <Image
              src={kruhuliLogo}
              alt="Kruhuli logo"
              width={1024}
              height={1024}
              className="h-[44px] w-[126px] object-cover"
              priority
            />
          </Link>
          <Link
            href="/#about"
            className="rounded-xl border-2 border-[#EA580C] bg-white px-4 py-2 text-sm font-black text-[#EA580C] transition-colors hover:bg-orange-100"
          >
            Back home
          </Link>
        </nav>

        <section className="mb-14 text-center">
          <p className="mb-4 font-mono text-xs font-black tracking-[0.2em] text-[#EA580C]">
            more of my thoughts
          </p>
          <h1 className="font-display text-5xl font-black leading-none text-stone-900 md:text-7xl">
            blog
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm font-medium leading-relaxed text-stone-500 md:text-base">
            Essays, ramblings, weird observations, and everything else I&apos;m thinking through in public.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noreferrer"
              className={[
                "group overflow-hidden rounded-3xl border-2 border-[#EA580C] bg-white shadow-[6px_6px_0_0_#C2410C] transition-all duration-150",
                "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#C2410C]",
                index === 0 ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className={index === 0 ? "relative h-72 overflow-hidden md:h-[28rem]" : "relative h-64 overflow-hidden"}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${post.image})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-lg border-2 border-white/70 bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#EA580C]">
                  {post.date}
                </span>
              </div>

              <div className="border-t-2 border-[#EA580C] p-6">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h2 className="font-display text-2xl font-black leading-tight text-stone-900">
                    {post.title}
                  </h2>
                  <ArrowUpRight className="mt-1 flex-shrink-0 text-[#EA580C]" size={20} />
                </div>
                <p className="text-sm font-medium leading-relaxed text-stone-600">
                  {post.description}
                </p>
              </div>
            </a>
          ))}
        </section>
      </div>
    </main>
  )
}
