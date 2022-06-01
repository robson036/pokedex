import * as Styles from "./styles"

type Props = {
    pokemonType: string
}

export const PokemonTypeTag = (props: Props) => {
    return (
        <Styles.PokemonTypeTag pokemonType={props.pokemonType}>
            {props.pokemonType}
        </Styles.PokemonTypeTag>
    )
}

export default PokemonTypeTag
