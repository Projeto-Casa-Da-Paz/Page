import {
    Routes,
    Route,
    BrowserRouter

} from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

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

            </Routes>

        </BrowserRouter>
    )

}