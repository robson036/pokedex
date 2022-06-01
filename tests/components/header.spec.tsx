import { render } from "@testing-library/react"
import Header from "../../src/components/header/index"

describe("test header and navbar component", () => {
    it("should render header component", () => {
        const { queryAllByText } = render(<Header />)

        expect(queryAllByText("Home").length).toBeGreaterThan(0)
        expect(queryAllByText("Pokémons").length).toBeGreaterThan(0)
    })

    it("should render the search input component", () => {
        const { queryAllByPlaceholderText } = render(<Header />)

        expect(queryAllByPlaceholderText("Procurar").length).toBeGreaterThan(0)
    })

    it("should render the responsive icon", () => {
        const { getByTestId } = render(<Header />)

        expect(getByTestId("responsive-menu-button")).toBeTruthy()
    })
})
