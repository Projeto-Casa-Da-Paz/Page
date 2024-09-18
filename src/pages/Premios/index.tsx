import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LayoutDashboard } from "../../components/LayoutDashboard"
import { IToken } from "../../interfaces/token"
import { verificaTokenExpirado } from "../../services/token"
import { useLogout } from "../../hooks/useLogout"

export default function Dashboard() {
    
    const navigate = useNavigate()
    const logout = useLogout()

    useEffect(() => {

        let lsStorage = localStorage.getItem('americanos.token');
        let token: IToken | null = null

        if (typeof lsStorage === 'string') {
            token = JSON.parse(lsStorage)
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate("/")
        }

        console.log("Pode desfrutar do sistema :D");
    }, [navigate])

    return (

        <LayoutDashboard onLogout={logout}>
            <h1>Prêmios</h1>
        </LayoutDashboard>
    )
}