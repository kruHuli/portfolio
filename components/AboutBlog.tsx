import { readFileSync } from "node:fs"
import path from "node:path"
import AboutBlogClient from "@/components/AboutBlogClient"

export default function AboutBlog() {
  const contentDirectory = path.join(process.cwd(), "content")
  const professional = readFileSync(path.join(contentDirectory, "about-professional.md"), "utf8")

  return <AboutBlogClient markdown={professional} />
}
