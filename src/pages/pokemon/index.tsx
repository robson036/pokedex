import Header from "../../components/header"
import { useLocation, useNavigate } from "react-router-dom"
import { Column, Container, Row } from "../../components/gridSystem"

import PokemonTypeTag from "../../components/pokemonTypes"

import * as Styles from "./styles"

const Pokemon = () => {
    const navigate = useNavigate()
    const location: any = useLocation()

    const { pokemon } = location.state

    document.title = pokemon.name

    const orderTypes = pokemon.types.map((type: any) => {
        return type.type
    })

    return (
        <>
            <Header
                onSearch={(key) =>
                    navigate("/", {
                        state: {
                            searchParam: key
                        }
                    })
                }
            />

            <Container>
                <Row>
                    <Column tablet={6}>
                        <img
                            src={
                                pokemon.sprites.other["official-artwork"]
                                    .front_default
                            }
                        />
                    </Column>

                    <Column tablet={6}>
                        <Row>
                            <Column>
                                <Styles.PokemonName
                                    pokemonType={orderTypes[0].name}
                                >
                                    {pokemon.name}
                                </Styles.PokemonName>
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                {orderTypes.map((type: any, index: number) => (
                                    <PokemonTypeTag
                                        onClick={() => {}}
                                        key={index}
                                        pokemonType={type.name}
                                    />
                                ))}
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Styles.Label>{`Peso: ${
                                    pokemon.weight / 10
                                }Kg`}</Styles.Label>
                            </Column>
                            <Column>
                                <Styles.Label>{`Altura: ${
                                    pokemon.height / 10
                                }m`}</Styles.Label>
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                {pokemon.stats.map(
                                    (stat: any, index: number) => {
                                        return (
                                            <div key={index}>
                                                <Styles.StatLabel
                                                    pokemonType={
                                                        orderTypes[0].name
                                                    }
                                                >{`${stat.stat.name}: `}</Styles.StatLabel>
                                                <Styles.StatValue>
                                                    {`${stat.base_stat}%`}
                                                </Styles.StatValue>
                                            </div>
                                        )
                                    }
                                )}
                            </Column>
                        </Row>

                        <Row>
                            <Column>
                                <Styles.StatLabel
                                    pokemonType={orderTypes[0].name}
                                >{`Movimentos: `}</Styles.StatLabel>
                                <Styles.Label>
                                    {`${pokemon.moves.map(
                                        (move: any) => move.move.name
                                    )}`}
                                </Styles.Label>
                            </Column>
                        </Row>
                    </Column>
                </Row>
            </Container>
        </>
    )
}

export default Pokemon
