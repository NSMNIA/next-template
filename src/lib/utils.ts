import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

import { spacing, text } from "../../custom-sizes"

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "font-size": Object.keys(text).map((key) => `text-${key}`),
      "space-x": Object.keys(spacing).map((key) => `space-x-${key}`),
      "space-y": Object.keys(spacing).map((key) => `space-y-${key}`),
      p: Object.keys(spacing).map((key) => `p-${key}`),
      py: Object.keys(spacing).map((key) => `py-${key}`),
      px: Object.keys(spacing).map((key) => `px-${key}`),
      pt: Object.keys(spacing).map((key) => `pt-${key}`),
      pr: Object.keys(spacing).map((key) => `pr-${key}`),
      pb: Object.keys(spacing).map((key) => `pb-${key}`),
      pl: Object.keys(spacing).map((key) => `pl-${key}`),
      m: Object.keys(spacing).map((key) => `m-${key}`),
      my: Object.keys(spacing).map((key) => `my-${key}`),
      mx: Object.keys(spacing).map((key) => `mx-${key}`),
      mt: Object.keys(spacing).map((key) => `mt-${key}`),
      mr: Object.keys(spacing).map((key) => `mr-${key}`),
      mb: Object.keys(spacing).map((key) => `mb-${key}`),
      ml: Object.keys(spacing).map((key) => `ml-${key}`),
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
