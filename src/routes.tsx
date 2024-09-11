import {
    Routes,
    Route,
    BrowserRouter

} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Produto from "./pages/Produto"
import PageExemplo from "./pages/PageExemplo"
import Usuarios from "./pages/Usuarios"
import GerenciarUsuarios from "./pages/Usuarios/Gerenciar"

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
                    path="/produto/:id"
                    element={
                        <Produto />
                    }
                />

                <Route
                    path="/usuarios"
                    element={<Usuarios />}
                />
                
                <Route
                    path="/usuarios/:id"
                    element={<GerenciarUsuarios />}
                />















                <Route
                    path='/example'
                    element={
                        <PageExemplo />
                    }
                />

            </Routes>

        </BrowserRouter>
    )

}