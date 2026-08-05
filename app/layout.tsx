import type { Metadata } from "next"
import { Poppins, Inter, Geist_Mono, Big_Shoulders_Stencil, Great_Vibes } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const logoFont = Big_Shoulders_Stencil({
  variable: "--font-logo-display",
  subsets: ["latin"],
  weight: "900",
})

const signatureFont = Great_Vibes({
  variable: "--font-signature-display",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Kruthik B.S. Hulisandra — Portfolio",
  description: "Engineering, product, and strategy.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${geistMono.variable} ${logoFont.variable} ${signatureFont.variable}`}
    >
      <body className="bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
