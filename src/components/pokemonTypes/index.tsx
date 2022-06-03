import * as Styles from "./styles"

type Props = {
    pokemonType: string
    onClick: () => void
}

export const PokemonTypeTag = (props: Props) => {
    return (
        <Styles.PokemonTypeTag
            pokemonType={props.pokemonType}
            onClick={props.onClick}
        >
            {props.pokemonType}
        </Styles.PokemonTypeTag>
    )
}

export default PokemonTypeTag
