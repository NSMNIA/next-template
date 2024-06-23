import type { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

const siteName = env.NEXT_PUBLIC_SITE_NAME || "Next.js template"
const description =
  env.NEXT_PUBLIC_SITE_DESCRIPTION || "A template for Next.js projects"
const url = new URL(env.NEXT_PUBLIC_URL || "http://localhost:3000")

export const siteConfig: SiteConfig = {
  name: siteName,
  description,
  url,
  publisher: "NSMNIA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
  },
  twitter: {
    card: "summary_large_image",
  },
  themeColor: "#000000",
  authors: [
    {
      name: "NSMNIA",
      url: "https://github.com/NSMNIA/",
    },
  ],
}
