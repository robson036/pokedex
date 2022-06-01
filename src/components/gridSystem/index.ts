import styled from "styled-components"

type Column = {
    mobile?: 12
    tablet?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    desktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const getWidthGrid = (value: number) => {
    if (!value) return

    let width = (value / 12) * 100
    return `width: ${width}%`
}

export const Container = styled.div`
    max-width: 1216px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    box-sizing: border-box;

    &:before,
    &:after {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }
`

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;

    &:before,
    &:after {
        content: " ";
        display: table;
    }

    &:after {
        clear: both;
    }
`

export const Column = styled.div`
    float: left;
    padding: 0.25rem;
    min-height: 1px;
    box-sizing: border-box;
    width: 100%;

    @media only screen and (max-width: 768px) {
        ${(props: Column) => props.mobile && getWidthGrid(props.mobile)}
    }

    @media only screen and (min-width: 768px) {
        ${(props: Column) => props.tablet && getWidthGrid(props.tablet)}
    }

    @media only screen and (min-width: 1216px) {
        ${(props: Column) => props.desktop && getWidthGrid(props.desktop)}
    }
`
