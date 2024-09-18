import {
    Routes,
    Route,
    BrowserRouter

} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import GerenciarPremios from "./pages/Premios/Gerenciar"
import Premios from "./pages/Premios"

export const Rotas = () => {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <Dashboard />
                    }
                />

                <Route
                    path="/premios"
                    element={
                        <Premios />
                    }
                />

                <Route
                    path="/premios/:id"
                    element={<GerenciarPremios />}
                />

            </Routes>

        </BrowserRouter >
    )

}