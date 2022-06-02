import { useEffect, useState } from "react"
import Header from "../../components/header"
import * as Styles from "./styles"

import PokemonTypeTag from "../../components/pokemonTypes"
import { Column, Container, Row } from "../../components/gridSystem"

import PokemonCard from "../../components/pokemonCard"

import apiCall from "../../services/api.service"

import { IPokemon, PokemonType } from "../../services/types"

const Home = () => {
    const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([
        { name: "", url: "" }
    ])
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [pagination, setPagination] = useState({
        count: 0,
        next: "",
        previous: ""
    })

    async function fetchPokemonList(url = "") {
        const pokemonListResult = await apiCall(url)
        setPokemonList(pokemonListResult.results)
        setPagination({
            ...pagination,
            count: pokemonListResult.count,
            next: pokemonListResult.next,
            previous: pokemonListResult.previous
        })
    }

    useEffect(() => {
        const getPokemonList = async () => {
            const typeList = await apiCall("/type")
            setPokemonTypes(typeList.results)
            await fetchPokemonList("https://pokeapi.co/api/v2/pokemon")
        }
        getPokemonList()
    }, [])

    return (
        <Styles.Container>
            <Header />

            <Container>
                <Row>
                    <Column>
                        {pokemonTypes.map((type, index) => (
                            <PokemonTypeTag
                                key={index}
                                pokemonType={type.name}
                            />
                        ))}
                    </Column>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Column>
                        <Styles.ListContainer>
                            {pokemonList.map((pokemon, index) => (
                                <PokemonCard name={pokemon.name} key={index} />
                            ))}
                        </Styles.ListContainer>
                    </Column>
                </Row>
            </Container>
        </Styles.Container>
    )
}

export default Home
