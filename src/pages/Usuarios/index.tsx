import { Navigate, useNavigate } from "react-router-dom"
import { LayoutDashboard } from "../../components/LayoutDashboard"
import { useEffect, useState } from "react"
import { IToken } from "../../interfaces/token"
import { verificaTokenExpirado } from "../../services/token"
import { Loading } from "../../components/Loading"
import axios from "axios"

interface IUsers {
    id: number
    nome: string
    email: string
    permissoes: string
}

export default function Usuarios() {

    const navigate = useNavigate() //
    const [loading, setLoading] = useState(false) //estado
    const [dadosUsers, setdadosUsers] = useState<Array<IUsers>>([]) //estado

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

        console.log("Pode desfrutar do sistema :D")

        setLoading(true)
        axios.get('http://localhost:3001/users')

            .then((res) => {
                setdadosUsers(res.data)
                setLoading(false)
            })

            .catch((err) => {
                setLoading(false)
                setdadosUsers(err)
            })

    }, [])

    return (
        <>
            <Loading visible={loading} />
            <LayoutDashboard>
                <div
                    className="d-flex justify-content-between mt-3"
                >
                    <h1 className="h2">Users Salafrários</h1>
                    <button className="btn btn-success"
                        onClick={() => {
                            navigate('/usuarios/add')
                        }}
                    >
                        Add
                    </button>
                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        { /* <? > */}

                        {
                            dadosUsers.map((
                                usuario,
                                index
                            ) => {
                                return (
                                    <tr key={index} >
                                        <th scope="col">{usuario.id}</th>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-warning"
                                                type="submit"
                                                style={{
                                                    marginRight: 5
                                                }}
                                            >
                                                Editar
                                            </button>
                                            <button

                                                className="btn btn-danger"
                                                type="submit"
                                            >
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>

            </LayoutDashboard>
        </>
    )
}