import { useEffect, useState } from "react"
import * as Styles from "./styles"

type CardProps = {
    name: string
}

import apiCall from "../../services/api.service"

import { IPokemon } from "../../services/types"
import { useNavigate } from "react-router-dom"

const PokemonCard = (props: CardProps) => {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState<IPokemon>({
        id: 0,
        name: "",
        types: [
            {
                slot: 0,
                type: {
                    name: "",
                    url: ""
                }
            }
        ],
        sprites: {
            other: {
                "official-artwork": {
                    front_default: ""
                }
            }
        }
    })

    useEffect(() => {
        async function getPokemon() {
            const pokemonById = await apiCall(
                `/pokemon/${props.name.toLowerCase()}`
            )
            setPokemon(pokemonById)
        }
        getPokemon()
    }, [])

    return (
        <Styles.CardContainer
            pokemonType={pokemon.types[0].type.name}
            onClick={() =>
                navigate("/pokemon", {
                    state: {
                        pokemon: pokemon
                    }
                })
            }
        >
            <Styles.CardHeader pokemonType={pokemon.types[0].type.name}>
                <span>{`#${pokemon?.id}`}</span>
            </Styles.CardHeader>
            <Styles.ImageContainer>
                <Styles.PokemonImage
                    src={
                        pokemon.sprites.other["official-artwork"]
                            .front_default || pokemon.sprites.front_default
                    }
                    alt=""
                />
            </Styles.ImageContainer>

            <Styles.CardFooter pokemonType={pokemon.types[0].type.name}>
                <span>{props.name}</span>
            </Styles.CardFooter>
        </Styles.CardContainer>
    )
}

export default PokemonCard
