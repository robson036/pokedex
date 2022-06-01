export type PokemonType = {
    name: string
    url: string
}

export interface IPokemonTypesResponse {
    count: number
    next: number
    previous: number
    results: PokemonType[]
}
