/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react"

import { Modal } from "@/components/modal"

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

const staticText = {
  title: "This is the title",
  description: "This is the description",
  trigger: "Open Modal",
  content:
    "Here should be a form or something else, but for now it's just a text",
}

describe("Modal", () => {
  it("renders modal and opens", async () => {
    const { baseElement } = render(
      <Modal
        title={staticText.title}
        description={staticText.description}
        trigger={<button>{staticText.trigger}</button>}
      >
        <p>{staticText.content}</p>
      </Modal>
    )

    const button = screen.getByText(staticText.trigger)
    await button.click()

    const title = screen.getByText(staticText.title)
    const description = screen.getByText(staticText.description)

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()

    expect(baseElement).toMatchSnapshot()
  })
})

it("renders snapshot modal unchanged", () => {
  const { container } = render(
    <Modal
      title={staticText.title}
      description={staticText.description}
      trigger={<button>{staticText.trigger}</button>}
    >
      <p>{staticText.content}</p>
    </Modal>
  )
  expect(container).toMatchSnapshot()
})
