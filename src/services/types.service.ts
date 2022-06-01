import api from "./api"
import { IPokemonTypesResponse } from "./types"

export default {
    getPokemonTypes: async (): Promise<IPokemonTypesResponse> => {
        return await (
            await api.get("/type")
        ).data
    }
}
