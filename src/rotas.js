/* eslint-disable import/no-anonymous-default-export */
import {Route, BrowserRouter, Routes } from "react-router-dom"
import ConteudoLogado from "./components/ConteudoLogado"
import Navigation from "./components/Navigation"
import { Registro } from "./pages/Registro"
import { SignIn } from "./pages/SignIn"


export default () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/conteudo-logadogado" element={<ConteudoLogado />} />
            <Route  path="/navigation" element={<Navigation />} />
        </Routes>
        </BrowserRouter>
    )
}