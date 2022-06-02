import { render } from "@testing-library/react"

import PokemonCard from "../../src/components/pokemonCard/index"

describe("test header and navbar component", () => {
    it("should render header component", () => {
        const { queryAllByText } = render(
            <PokemonCard id={7} name="Squirtle" type="water" />
        )

        expect(queryAllByText("Squirtle").length).toBeGreaterThan(0)
        expect(queryAllByText("Squirtle").length).toBeGreaterThan(0)
    })
})
