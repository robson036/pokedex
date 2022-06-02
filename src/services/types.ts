export type PokemonType = {
    name: string
    url: string
}

export interface IPokemonTypesResponse {
    count?: number
    next?: number
    previous?: number
    results: PokemonType[]
}

export interface IPokemon {
    id: number
    name: string
    sprites: {
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    }
    types: {
        slot: number
        type: PokemonType
    }[]
    height?: number
    weight?: number
}
