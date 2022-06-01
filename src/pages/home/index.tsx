import { useEffect, useState } from "react"
import Header from "../../components/header"
import * as Styles from "./styles"

import PokemonTypeTag from "../../components/pokemonTypes"
import { Column, Container, Row } from "../../components/gridSystem"

import typesService from "../../services/types.service"

const Home = () => {
    const [pokemonTypes, setPokemonTypes] = useState([
        {
            name: "",
            url: ""
        }
    ])

    useEffect(() => {
        const getTypes = async () => {
            const res = await typesService.getPokemonTypes()
            if (!res.results) return

            setPokemonTypes(res.results)
        }

        getTypes()
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
        </Styles.Container>
    )
}

export default Home
