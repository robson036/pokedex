import { useState } from "react"

import Logo from "../../assets/logo.svg"

import * as Styles from "./styles"

import NavItems from "./navItems"
import Search from "./search"

const Header = () => {
    const [isResponsiveMenuOpened, setIsResponsiveMenuOpened] = useState(false)

    return (
        <Styles.Container isResponsiveMenuOpen={isResponsiveMenuOpened}>
            <Styles.NavContainer>
                <Styles.Row>
                    <Styles.ResponsiveMenuButton
                        isActive={isResponsiveMenuOpened}
                        onClick={() =>
                            setIsResponsiveMenuOpened(!isResponsiveMenuOpened)
                        }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Styles.ResponsiveMenuButton>
                    <a href="/">
                        <Styles.Logo src={Logo} alt="Logo" width={120} />
                    </a>
                </Styles.Row>

                <Styles.Menu>
                    <Styles.Navigation>
                        <NavItems />
                    </Styles.Navigation>
                </Styles.Menu>

                <Styles.UserInteractionContainer>
                    <Styles.ButtonHolder>
                        <Search />
                    </Styles.ButtonHolder>
                </Styles.UserInteractionContainer>
            </Styles.NavContainer>

            <Styles.ResponsiveNavContainer
                isResponsiveMenuOpen={isResponsiveMenuOpened}
            >
                <Styles.ResponsiveNavigation>
                    <Styles.ResponsivNavMenu>
                        <NavItems />
                    </Styles.ResponsivNavMenu>
                </Styles.ResponsiveNavigation>

                <Styles.ResponsiveButtonHolder>
                    <Search />
                </Styles.ResponsiveButtonHolder>
            </Styles.ResponsiveNavContainer>
        </Styles.Container>
    )
}

export default Header
