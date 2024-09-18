import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IToken } from "../../../interfaces/token"
import { verificaTokenExpirado } from "../../../services/token"
import { LayoutDashboard } from "../../../components/LayoutDashboard"
import { useForm } from "react-hook-form"
import { Loading } from "../../../components/Loading"
import { useLogout } from "../../../hooks/useLogout"

interface IForm {
    nome: string
    categoria: string
    data_recebimento: string
    imagem: string
}

export default function GerenciarPremios() {

    const logout = useLogout()

    const {
        register,
        handleSubmit,
        formState: { errors }

    } = useForm<IForm>()

    const navigate = useNavigate()

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


    return (
        <>
            <LayoutDashboard onLogout={logout}>

                <h2>Prêmios</h2>

            </LayoutDashboard>
        </>
    )
}