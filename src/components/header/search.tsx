import { useState } from "react"
import { InputSearch } from "./styles"

type Props = {
    onSearch: (param: string) => void
}

const Search = (props: Props) => {
    const [param, setParam] = useState("")
    return (
        <InputSearch
            placeholder="Procurar"
            value={param}
            onChange={(event) => setParam(event.target.value)}
            onKeyDown={(key) => {
                if (key.key === "Enter") props.onSearch(param)
            }}
        />
    )
}

export default Search
