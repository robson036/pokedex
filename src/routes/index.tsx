import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "../pages/home"
import Pokemon from "../pages/pokemon"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Pokemon />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
