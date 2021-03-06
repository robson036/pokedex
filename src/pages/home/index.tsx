import { useEffect, useState } from "react"
import Header from "../../components/header"
import * as Styles from "./styles"

import PokemonTypeTag from "../../components/pokemonTypes"
import { Column, Container, Row } from "../../components/gridSystem"

import PokemonCard from "../../components/pokemonCard"
import { useLocation, useNavigate } from "react-router-dom"
import apiCall from "../../services/api.service"

import { IPokemon, PokemonType } from "../../services/types"

const Home = () => {
    const location: any = useLocation()

    const searchParam = location.state ? location.state.searchParam : ""

    const [isLoading, setIsLoading] = useState(false)

    const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>([
        { name: "", url: "" }
    ])
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [pagination, setPagination] = useState({
        count: 0,
        next: "",
        previous: ""
    })

    const orderPokemonByType = (list: any) => {
        return list.map((item: any) => {
            return {
                name: item.pokemon.name,
                url: item.pokemon.url
            }
        })
    }

    async function fetchPokemonList(url = "", searchBy = "") {
        setIsLoading(true)
        const pokemonListResult = await apiCall(url)

        const list =
            searchBy === "type"
                ? orderPokemonByType(pokemonListResult.pokemon)
                : searchBy === "key"
                ? [pokemonListResult]
                : pokemonListResult.results

        setPokemonList(list)
        setPagination({
            ...pagination,
            count: pokemonListResult.count,
            next: pokemonListResult.next,
            previous: pokemonListResult.previous
        })

        setIsLoading(false)
    }

    useEffect(() => {
        if (searchParam) {
            fetchPokemonList(`/pokemon/${searchParam}`, "key")
            return
        }
        const getPokemonList = async () => {
            const typeList = await apiCall("/type")
            setPokemonTypes(typeList.results)
            await fetchPokemonList("https://pokeapi.co/api/v2/pokemon")
        }
        getPokemonList()
    }, [])

    return (
        <Styles.Container>
            <Header
                onSearch={(key) => fetchPokemonList(`/pokemon/${key}`, "key")}
            />

            <Container>
                <Row>
                    <Column>
                        {pokemonTypes.map((type, index) => (
                            <PokemonTypeTag
                                key={index}
                                pokemonType={type.name}
                                onClick={() =>
                                    fetchPokemonList(
                                        `/type/${type.name}`,
                                        "type"
                                    )
                                }
                            />
                        ))}
                    </Column>
                </Row>
            </Container>

            <Container>
                {pagination.count && (
                    <Styles.PaginationRow>
                        <Styles.PaginationCountSpan>{`Total de itens: ${pagination.count}`}</Styles.PaginationCountSpan>
                        <Styles.ButtonPagination
                            onClick={() =>
                                fetchPokemonList(pagination.previous)
                            }
                        >
                            Anterior
                        </Styles.ButtonPagination>
                        <Styles.ButtonPagination
                            onClick={() => fetchPokemonList(pagination.next)}
                        >
                            Pr??xima
                        </Styles.ButtonPagination>
                    </Styles.PaginationRow>
                )}
                <Row>
                    <Column>
                        <Styles.ListContainer>
                            {!isLoading &&
                                pokemonList.length &&
                                pokemonList.map((pokemon, index) => (
                                    <PokemonCard
                                        name={pokemon.name}
                                        key={index}
                                    />
                                ))}
                        </Styles.ListContainer>
                    </Column>
                </Row>
            </Container>
        </Styles.Container>
    )
}

export default Home
