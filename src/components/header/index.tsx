import { useState } from "react"

import Logo from "../../assets/logo.png"

import * as Styles from "./styles"

import NavItems from "./navItems"
import Search from "./search"

type Props = {
    onSearch: (key: string) => void
}

const Header = (props: Props) => {
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
                        data-testid="responsive-menu-button"
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
                        <Search onSearch={props.onSearch} />
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
                    <Search onSearch={props.onSearch} />
                </Styles.ResponsiveButtonHolder>
            </Styles.ResponsiveNavContainer>
        </Styles.Container>
    )
}

export default Header
