import api from "./api"

const apiCall = async (url: string) => {
    const response = await api.get(url)
    return response.data
}

export default apiCall
