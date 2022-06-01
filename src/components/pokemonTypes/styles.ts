import styled, { css } from "styled-components"
import colors from "../../styleguide/colors"

type Component = {
    pokemonType: string
}

interface IDictionary {
    [key: string]: string
}

const types: IDictionary = colors.pokemonType

export const PokemonTypeTag = styled.button`
    ${(props: Component) => css`
        padding: 4px 8px;
        border-radius: 10px;
        border: none;
        outline: none;
        cursor: pointer;
        color: ${colors.greyscale.white};
        background-color: ${types[props.pokemonType]};
        margin: 0.3125rem;

        &:hover {
            opacity: 0.8;
        }
    `}
`
