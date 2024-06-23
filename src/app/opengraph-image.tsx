import * as React from "react"
import { ImageResponse } from "next/og"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export const runtime = "nodejs"

export const alt = siteConfig.name

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          gap: 40,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            opacity: 0.08,
            backgroundImage:
              "linear-gradient( #fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, #000 1px)",
            backgroundSize: "20px 20px",
            width: "100%",
            height: "100%",
          }}
        />
        <Icons.logo height={200} />
        <h1
          style={{
            fontWeight: "800",
            fontSize: 80,
          }}
        >
          {siteConfig.name}
        </h1>
      </div>
    ),
    {
      ...size,
    }
  )
}
