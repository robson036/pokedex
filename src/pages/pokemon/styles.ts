import styled, { css } from "styled-components"
import fonts from "../../styleguide/fonts"
import colors from "../../styleguide/colors"

type Component = {
    pokemonType: string
}

interface IDictionary {
    [key: string]: string
}

const types: IDictionary = colors.pokemonType

export const PokemonName = styled.h2`
    ${(props: Component) => css`
        color: ${types[props.pokemonType]};
        text-transform: capitalize;
    `}
`

export const Label = styled.span`
    font-size: ${fonts.size.lg};
    color: ${colors.greyscale.mediumGray};
`

export const StatLabel = styled.span`
    ${(props: Component) => css`
        color: ${types[props.pokemonType]};
        text-transform: uppercase;
        font-size: ${fonts.size.lg};
        font-weight: ${fonts.weight.bold};
    `}
`

export const StatValue = styled.span`
    color: ${colors.greyscale.mediumGray};
    text-transform: uppercase;
    font-size: ${fonts.size.lg};
`
