import * as React from "react"
import { ImageResponse } from "next/og"

import { Icons } from "@/components/icons"

export const runtime = "nodejs"

export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icons.logo height={"100%"} />
      </div>
    ),
    {
      ...size,
    }
  )
}
