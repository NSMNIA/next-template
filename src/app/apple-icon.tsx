import React from "react"
import { ImageResponse } from "next/og"

import { Icons } from "@/components/icons"

export const runtime = "nodejs"

export const size = {
  width: 180,
  height: 180,
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
          backgroundColor: "white",
        }}
      >
        <Icons.logo height={"79%"} />
      </div>
    ),
    {
      ...size,
    }
  )
}
