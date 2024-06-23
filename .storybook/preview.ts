import type { Preview } from "@storybook/react"

import { FontSans } from "../src/lib/fonts"

import "../src/styles/globals.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      document.body.classList.add("font-sans", FontSans.variable)
      return Story()
    },
  ],
}

export default preview
