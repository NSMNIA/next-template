import type { Metadata, Viewport } from "next"

import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import { FontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
}

const title = {
  template: `%s — ${siteConfig.name}`,
  default: siteConfig.name,
}

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  title,
  description: siteConfig.description,
  openGraph: {
    ...siteConfig.openGraph,
    title,
    description: siteConfig.description,
  },
  twitter: {
    ...siteConfig.twitter,
    title,
    description: siteConfig.description,
  },
  publisher: siteConfig.publisher,
  authors: siteConfig.authors,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased", FontSans.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
