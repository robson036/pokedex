import * as Styles from "./styles"

const NavItems = () => {
    return (
        <>
            <li>
                <Styles.NavLink href={"/"} isActive>
                    Home
                </Styles.NavLink>
            </li>
            <li>
                <Styles.NavLink href="#">Pokémons</Styles.NavLink>
            </li>
        </>
    )
}

export default NavItems
