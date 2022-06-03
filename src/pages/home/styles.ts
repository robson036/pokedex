import styled from "styled-components"
import { Row } from "../../components/gridSystem"
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

export const ListContainer = styled.div`
    width: 100%;
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const PaginationRow = styled(Row)`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const PaginationCountSpan = styled.span`
    font-size: ${fonts.size.md};
    margin-right: 4px;
    color: #0075be;
`

export const ButtonPagination = styled.button`
    padding: 8px 15px;
    background-color: transparent;
    border: solid 1px #0075be;
    border-radius: 10px;
    outline: none;
    color: #0075be;
    font-size: ${fonts.size.md};
    margin: 0 4px 0;
`
