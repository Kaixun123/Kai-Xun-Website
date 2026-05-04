import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Barlow_Condensed, Lora, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Juay Kai Xun — Cloud & AI Engineer",
  description: "Building the future with cloud intelligence. Scalable architectures, AI-powered infrastructure, and modern DevOps.",
  generator: "kaixun.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${barlowCondensed.variable} ${lora.variable} ${ibmPlexMono.variable}`}
        style={{ fontFamily: "var(--font-lora), Georgia, serif" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
