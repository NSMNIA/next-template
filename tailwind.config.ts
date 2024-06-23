import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const MIN_WIDTH = 320
const MAX_WIDTH = 1240
const MIN_SCALE = 1.2
const MAX_SCALE = 1.333
const MIN_BASE_SIZE = 16
const MAX_BASE_SIZE = 20

const MIN_FONT = {
  xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
  p: Math.round(MIN_BASE_SIZE / 4) / 4,
  h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
  h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
}
const MAX_FONT = {
  xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
  p: Math.round(MAX_BASE_SIZE / 4) / 4,
  h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
  h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
}
const SLOPE = {
  xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
  xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
  sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
  p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
  h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
  h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
  h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
  h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
  h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
}
const INTERCEPT = {
  xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
  xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
  sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
  p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
  h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
  h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
  h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
  h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
  h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
}
const text = {
  xxs: `clamp(${Math.min(MIN_FONT.xxs)}rem, calc(${INTERCEPT.xxs}rem + ${
    Math.round(10000 * SLOPE.xxs) / 100
  }vw), ${Math.max(MAX_FONT.xxs)}rem)`,
  xs: `clamp(${Math.min(MIN_FONT.xs)}rem, calc(${INTERCEPT.xs}rem + ${
    Math.round(10000 * SLOPE.xs) / 100
  }vw), ${Math.max(MAX_FONT.xs)}rem)`,
  sm: `clamp(${Math.min(MIN_FONT.sm)}rem, calc(${INTERCEPT.sm}rem + ${
    Math.round(10000 * SLOPE.sm) / 100
  }vw), ${Math.max(MAX_FONT.sm)}rem)`,
  p: `clamp(${Math.min(MIN_FONT.p)}rem, calc(${INTERCEPT.p}rem + ${Math.round(10000 * SLOPE.p) / 100}vw), ${Math.max(
    MAX_FONT.p
  )}rem)`,
  h5: `clamp(${Math.min(MIN_FONT.h5)}rem, calc(${INTERCEPT.h5}rem + ${
    Math.round(10000 * SLOPE.h5) / 100
  }vw), ${Math.max(MAX_FONT.h5)}rem)`,
  h4: `clamp(${Math.min(MIN_FONT.h4)}rem, calc(${INTERCEPT.h4}rem + ${
    Math.round(10000 * SLOPE.h4) / 100
  }vw), ${Math.max(MAX_FONT.h4)}rem)`,
  h3: `clamp(${Math.min(MIN_FONT.h3)}rem, calc(${INTERCEPT.h3}rem + ${
    Math.round(10000 * SLOPE.h3) / 100
  }vw), ${Math.max(MAX_FONT.h3)}rem)`,
  h2: `clamp(${Math.min(MIN_FONT.h2)}rem, calc(${INTERCEPT.h2}rem + ${
    Math.round(10000 * SLOPE.h2) / 100
  }vw), ${Math.max(MAX_FONT.h2)}rem)`,
  h1: `clamp(${Math.min(MIN_FONT.h1)}rem, calc(${INTERCEPT.h1}rem + ${
    Math.round(10000 * SLOPE.h1) / 100
  }vw), ${Math.max(MAX_FONT.h1)}rem)`,
}

const MULT = {
  xxxs: 0.25,
  xxs: 0.5,
  xs: 0.75,
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 3,
  xxl: 4,
  xxxl: 6,
  xxxxl: 8,
}
const MIN_SPACE = {
  xxxs: MULT.xxxs * MIN_BASE_SIZE,
  xxs: MULT.xxs * MIN_BASE_SIZE,
  xs: MULT.xs * MIN_BASE_SIZE,
  sm: MULT.sm * MIN_BASE_SIZE,
  md: MULT.md * MIN_BASE_SIZE,
  lg: MULT.lg * MIN_BASE_SIZE,
  xl: MULT.xl * MIN_BASE_SIZE,
  xxl: MULT.xxl * MIN_BASE_SIZE,
  xxxl: MULT.xxxl * MIN_BASE_SIZE,
  xxxxl: MULT.xxxxl * MIN_BASE_SIZE,
}
const MAX_SPACE = {
  xxxs: MULT.xxxs * MAX_BASE_SIZE,
  xxs: MULT.xxs * MAX_BASE_SIZE,
  xs: MULT.xs * MAX_BASE_SIZE,
  sm: MULT.sm * MAX_BASE_SIZE,
  md: MULT.md * MAX_BASE_SIZE,
  lg: MULT.lg * MAX_BASE_SIZE,
  xl: MULT.xl * MAX_BASE_SIZE,
  xxl: MULT.xxl * MAX_BASE_SIZE,
  xxxl: MULT.xxxl * MAX_BASE_SIZE,
  xxxxl: MULT.xxxxl * MAX_BASE_SIZE,
}
const SLOPE_SPACE = {
  xxxs: (MAX_SPACE.xxxs - MIN_SPACE.xxxs) / (MAX_WIDTH - MIN_WIDTH),
  xxs: (MAX_SPACE.xxs - MIN_SPACE.xxs) / (MAX_WIDTH - MIN_WIDTH),
  xs: (MAX_SPACE.xs - MIN_SPACE.xs) / (MAX_WIDTH - MIN_WIDTH),
  sm: (MAX_SPACE.sm - MIN_SPACE.sm) / (MAX_WIDTH - MIN_WIDTH),
  md: (MAX_SPACE.md - MIN_SPACE.md) / (MAX_WIDTH - MIN_WIDTH),
  lg: (MAX_SPACE.lg - MIN_SPACE.lg) / (MAX_WIDTH - MIN_WIDTH),
  xl: (MAX_SPACE.xl - MIN_SPACE.xl) / (MAX_WIDTH - MIN_WIDTH),
  xxl: (MAX_SPACE.xxl - MIN_SPACE.xxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxl: (MAX_SPACE.xxxl - MIN_SPACE.xxxl) / (MAX_WIDTH - MIN_WIDTH),
  xxxxl: (MAX_SPACE.xxxxl - MIN_SPACE.xxxxl) / (MAX_WIDTH - MIN_WIDTH),
}
const INTERCEPT_SPACE = {
  xxxs: Math.round(4 * (MIN_SPACE.xxxs - SLOPE_SPACE.xxxs * MIN_WIDTH)) / 4,
  xxs: Math.round(4 * (MIN_SPACE.xxs - SLOPE_SPACE.xxs * MIN_WIDTH)) / 4,
  xs: Math.round(4 * (MIN_SPACE.xs - SLOPE_SPACE.xs * MIN_WIDTH)) / 4,
  sm: Math.round(4 * (MIN_SPACE.sm - SLOPE_SPACE.sm * MIN_WIDTH)) / 4,
  md: Math.round(4 * (MIN_SPACE.md - SLOPE_SPACE.md * MIN_WIDTH)) / 4,
  lg: Math.round(4 * (MIN_SPACE.lg - SLOPE_SPACE.lg * MIN_WIDTH)) / 4,
  xl: Math.round(4 * (MIN_SPACE.xl - SLOPE_SPACE.xl * MIN_WIDTH)) / 4,
  xxl: Math.round(4 * (MIN_SPACE.xxl - SLOPE_SPACE.xxl * MIN_WIDTH)) / 4,
  xxxl: Math.round(4 * (MIN_SPACE.xxxl - SLOPE_SPACE.xxxl * MIN_WIDTH)) / 4,
  xxxxl: Math.round(4 * (MIN_SPACE.xxxxl - SLOPE_SPACE.xxxxl * MIN_WIDTH)) / 4,
}
const spacing = {
  xxxs: `clamp(${MIN_SPACE.xxxs}px, calc(${INTERCEPT_SPACE.xxxs}px - ${
    Math.round(10000 * SLOPE_SPACE.xxxs) / 100
  }vw), ${MAX_SPACE.xxxs}px)`,
  xxs: `clamp(${MIN_SPACE.xxs}px, calc(${INTERCEPT_SPACE.xxs}px - ${Math.round(10000 * SLOPE_SPACE.xxs) / 100}vw), ${
    MAX_SPACE.xxs
  }px)`,
  xs: `clamp(${MIN_SPACE.xs}px, calc(${INTERCEPT_SPACE.xs}px - ${Math.round(10000 * SLOPE_SPACE.xs) / 100}vw), ${
    MAX_SPACE.xs
  }px)`,
  sm: `clamp(${MIN_SPACE.sm}px, calc(${INTERCEPT_SPACE.sm}px - ${Math.round(10000 * SLOPE_SPACE.sm) / 100}vw), ${
    MAX_SPACE.sm
  }px)`,
  md: `clamp(${MIN_SPACE.md}px, calc(${INTERCEPT_SPACE.md}px - ${Math.round(10000 * SLOPE_SPACE.md) / 100}vw), ${
    MAX_SPACE.md
  }px)`,
  lg: `clamp(${MIN_SPACE.lg}px, calc(${INTERCEPT_SPACE.lg}px - ${Math.round(10000 * SLOPE_SPACE.lg) / 100}vw), ${
    MAX_SPACE.lg
  }px)`,
  xl: `clamp(${MIN_SPACE.xl}px, calc(${INTERCEPT_SPACE.xl}px - ${Math.round(10000 * SLOPE_SPACE.xl) / 100}vw), ${
    MAX_SPACE.xl
  }px)`,
  xxl: `clamp(${MIN_SPACE.xxl}px, calc(${INTERCEPT_SPACE.xxl}px - ${Math.round(10000 * SLOPE_SPACE.xxl) / 100}vw), ${
    MAX_SPACE.xxl
  }px)`,
  xxxl: `clamp(${MIN_SPACE.xxxl}px, calc(${INTERCEPT_SPACE.xxxl}px - ${
    Math.round(10000 * SLOPE_SPACE.xxxl) / 100
  }vw), ${MAX_SPACE.xxxl}px)`,
  xxxxl: `clamp(${MIN_SPACE.xxxxl}px, calc(${INTERCEPT_SPACE.xxxxl}px - ${
    Math.round(10000 * SLOPE_SPACE.xxxxl) / 100
  }vw), ${MAX_SPACE.xxxxl}px)`,
}

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        h1: [
          text.h1,
          {
            lineHeight: "90%",
          },
        ],
        h2: [
          text.h2,
          {
            lineHeight: "1.15",
          },
        ],
        h3: [
          text.h3,
          {
            lineHeight: "1.15",
          },
        ],
        h4: [
          text.h4,
          {
            lineHeight: "1.15",
          },
        ],
        h5: [
          text.h5,
          {
            lineHeight: "1.15",
          },
        ],
        p: [
          text.p,
          {
            lineHeight: "1.15",
          },
        ],
        sm: [
          text.sm,
          {
            lineHeight: "1.15",
          },
        ],
        xs: [
          text.xs,
          {
            lineHeight: "1.15",
          },
        ],
        xxs: [
          text.xxs,
          {
            lineHeight: "1.15",
          },
        ],
      },
      spacing,
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
