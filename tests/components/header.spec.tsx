import { render } from "@testing-library/react"
import Header from "../../src/components/header/index"

describe("test header and navbar component", () => {
    it("should render header component", () => {
        const { queryAllByText } = render(<Header />)

        expect(queryAllByText("Home").length).toBeGreaterThan(0)
    })
})
