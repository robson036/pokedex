import styled, { css } from "styled-components"
import colors from "../../styleguide/colors"

import fonts from "../../styleguide/fonts"

const size = {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
}

type ComponentProps = {
    isActive?: boolean
    isResponsiveMenuOpen?: boolean
}

export const Container = styled.div`
    width: 100%;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0px;
    left: 0;
    transition: all 0.5s;

    @media (max-width: ${size.sm}) {
        padding: 8px 16px;
        height: ${({ isResponsiveMenuOpen }: ComponentProps) =>
            isResponsiveMenuOpen ? "100vh" : "72px"};
    }

    @media (min-width: ${size.sm}) {
        padding: 32px 68px;
        height: ${({ isResponsiveMenuOpen }: ComponentProps) =>
            isResponsiveMenuOpen ? "100vh" : "119px"};
    }

    @media (max-width: ${size.xl}) {
        transition: all 0.5s;
        justify-content: flex-start;
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    gap: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
    width: 1200px;

    @media (max-width: ${size.xl}) {
        width: 100%;
    }

    height: 56px;
`

export const Logo = styled.img``

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0px;
    flex: none;
    order: 1;
    flex-grow: 1;

    width: 698px;
    height: 56px;

    @media (max-width: ${size.xl}) {
        display: none;
    }
`

export const Navigation = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    margin: 0;
    width: 100%;

    & li {
        padding: 16px;
        cursor: pointer;
    }
`

export const NavLink = styled.a`
    ${(props: ComponentProps) => css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: ${() =>
            props.isActive ? "#0075BE" : colors.greyscale.mediumGray};
        opacity: 0.8;
        text-decoration: none;
    `}
`

export const UserInteractionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    gap: 16px;
    flex: none;
    order: 2;
    flex-grow: 0;
    height: 56px;

    @media (max-width: ${size.sm}) {
        width: auto;
    }
`

export const ButtonHolder = styled.div`
    @media (max-width: ${size.sm}) {
        display: none;
    }
`

export const ResponsiveMenuButton = styled.button`
    ${(props: ComponentProps) => css`
        width: 32px;
        height: 32px;
        display: none;
        background-size: cover;
        background-color: transparent;
        border: none;
        outline: none;
        margin-right: 24px;
        cursor: pointer;
        position: relative;

        @media (max-width: ${size.xl}) {
            display: block;
        }

        & span {
            background-color: #0075be;
            padding: 2px 15px;
            position: absolute;
            left: 0;
            transition: linear 0.2s;
            background-color: ${colors.greyscale.mediumGray};

            &:nth-child(1) {
                top: 1px;
            }

            &:nth-child(2) {
                top: 10px;
            }
            &:nth-child(3) {
                top: 20px;
            }

            ${props.isActive &&
            `
              &:nth-child(1) {
                transform: rotate(45deg) translateY(13px);
            }

            &:nth-child(2) {
                display: none;
            }

            &:nth-child(3) {
                transform: rotate(-45deg) translateY(-13px);
            }
            `}
        }
    `}
`

export const ResponsiveNavContainer = styled.div`
    width: 100%;
    display: none;
    height: 100%;

    @media (max-width: ${size.xl}) {
        display: ${({ isResponsiveMenuOpen }: ComponentProps) =>
            isResponsiveMenuOpen ? "block" : "none"};
    }
`

export const ResponsiveNavigation = styled.div`
    width: 100%;
    display: none;
    height: 80%;
    backdrop-filter: blur(10px);

    @media (max-width: ${size.xl}) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const ResponsivNavMenu = styled.ul`
    display: inline-block;
    list-style-type: none;
    margin-right: -4px;
    padding: 10px;
    text-align: center;

    & li {
        padding: 16px;
        cursor: pointer;
    }
`

export const ResponsiveButtonHolder = styled.div`
    width: 100%;
    display: none;
    height: 20%;

    @media (max-width: ${size.sm}) {
        display: block;
    }
`

export const InputSearch = styled.input`
    width: 100%;
    padding: 8px;
    border: solid 1px ${colors.greyscale.mediumGray};
    background-color: ${colors.greyscale.white};
    font-size: ${fonts.size.sm};
    border-radius: 8px;
    position: relative;
    text-align: center;

    &::placeholder {
        color: ${colors.greyscale.mediumGray};
    }

    &:focus {
        border: none;
        outline: solid 1px ${colors.greyscale.mediumGray};
    }
`
