import styled, { css } from "styled-components"
import colors from "../../styleguide/colors"
import fonts from "../../styleguide/fonts"

type Component = {
    pokemonType: string
}

interface IDictionary {
    [key: string]: string
}

const types: IDictionary = colors.pokemonType

export const CardContainer = styled.div`
    ${(props: Component) => css`
        width: 175px;
        border-radius: 8px;
        border: solid 1px ${types[props.pokemonType]};
        cursor: pointer;
        transition: all 0.5s;
        margin: 10px;

        @media only screen and (max-width: 1184px) {
            width: 100%;
            max-width: 147px;
        }
        &:hover {
            transform: scale(1.1);
        }
    `}
`

export const CardHeader = styled.div`
    ${(props: Component) => css`
        width: 100%;
        background-color: transparent;
        padding: 6px 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        & span {
            color: ${types[props.pokemonType]};
            font-size: ${fonts.size.md};
            line-height: 12px;
        }
    `}
`

export const ImageContainer = styled.div`
    width: 100%;
    padding: 0 20px;
`

export const PokemonImage = styled.img`
    width: 100%;
`

export const CardFooter = styled.div`
    ${(props: Component) => css`
        width: 100%;
        padding: 4px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${types[props.pokemonType]};
        border-bottom-left-radius: 7px;
        border-bottom-right-radius: 7px;

        & span {
            font-size: ${fonts.size.lg};
            color: ${colors.greyscale.white};
            &::first-letter {
                text-transform: capitalize;
            }
        }
    `}
`
