import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

export default function Dashboard() {
    
    const navigate = useNavigate()
    const logout = useLogout()

    // Inicio, Update State, Destruir
    useEffect(() => {
        
        let lsStorage = localStorage.getItem('americanos.token')

        let token: IToken | null = null

        if (typeof lsStorage === 'string') {
            token = JSON.parse(lsStorage)
        }

        
        if (!token || verificaTokenExpirado(token.accessToken)) {

            navigate("/")
        }        

    }, [])

    return(
        <LayoutDashboard onLogout={logout}>
            <h1>Gráficos</h1>
        </LayoutDashboard>
    )
}
