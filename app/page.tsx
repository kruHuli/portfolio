import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import AboutBlog from "@/components/AboutBlog"
import Experience from "@/components/Experience"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutBlog />
        <Experience />
      </main>
      <Footer />
    </>
  )
}
