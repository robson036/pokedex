import styled from "styled-components"
import colors from "../../styleguide/colors"
import fonts from "../../styleguide/fonts"

export const Container = styled.div`
    width: 100%;
    background-color: ${colors.greyscale.background};
`

export const H1 = styled.h1`
    color: ${colors.greyscale.darkGrey};
    font-size: ${fonts.size.xl};
    font-weight: ${fonts.weight.regular};
    text-align: center;
`
