import type * as React from "react"
import type { Metadata, Viewport } from "next"

export type Icon = React.SVGProps<SVGSVGElement>

export type SiteConfig = {
  name: string
  description: string
  url: URL
  openGraph?: Omit<Metadata["openGraph"], "images">
  twitter?: Omit<Metadata["twitter"], "images">
  publisher?: Metadata["publisher"]
  themeColor?: Viewport["themeColor"]
  authors?: Metadata["authors"]
}
