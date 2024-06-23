import type { Meta, StoryObj } from "@storybook/react"

import { Modal } from "./modal"

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    trigger: <button>Open modal</button>,
    title: "Dit is een test",
    children: (
      <>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          iste architecto placeat maxime corporis optio, cum repudiandae,
          quisquam officia sapiente exercitationem quae nam amet, similique
          dolor at doloremque deleniti debitis obcaecati rem tenetur fuga libero
          accusamus. Distinctio porro dolor officia?
        </p>
      </>
    ),
  },
}
