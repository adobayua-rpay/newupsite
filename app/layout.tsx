import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import IntercomProvider from "@/components/intercom-provider"
import PostHogProvider from "@/components/posthog-provider"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panaptico — The Implementation Runtime for Enterprise IT Projects",
  description:
    "Panaptico is the AI-native implementation runtime for enterprise IT projects. Plan, govern, and execute system rollouts, migrations, and deployments with a live system of record — from discovery through go-live and beyond.",
  keywords: [
    "enterprise implementation management",
    "IT project implementation",
    "system rollout management",
    "IT migration planning",
    "enterprise deployment management",
    "implementation runtime",
    "IT change management software",
    "enterprise rollout governance",
    "system discovery",
    "go-live readiness",
    "implementation system of record",
    "IT project planning software",
  ],
  metadataBase: new URL("https://panaptico.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panaptico.com",
    siteName: "Panaptico",
    title: "Panaptico — The Implementation Runtime for Enterprise IT Projects",
    description:
      "AI-native software that connects to your live IT environment, discovers what exists, and governs the full implementation lifecycle — rollouts, migrations, deployments, and change management.",
    images: [
      {
        url: "/hero-bg.gif",
        width: 1200,
        height: 630,
        alt: "Panaptico — Implementation Runtime for Enterprise IT Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panaptico — The Implementation Runtime for Enterprise IT Projects",
    description:
      "AI-native software that connects to your live IT environment, discovers what exists, and governs the full implementation lifecycle.",
    images: ["/hero-bg.gif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
o.onload=function(){window.trackingFunctions.onLoad({appId:"695fe3556a64ea0011d724ed"})},
document.head.appendChild(o)}initApollo();`,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
        <IntercomProvider />
      </body>
    </html>
  )
}
