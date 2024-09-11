import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { IToken } from "../../../interfaces/token"
import { verificaTokenExpirado } from "../../../services/token"
import { LayoutDashboard } from "../../../components/LayoutDashboard"
import { useForm } from "react-hook-form"
import { Loading } from "../../../components/Loading"

interface IForm {
    nome: string
    email: string
    permissao: string
    senha: string
}

export default function GerenciarUsuarios() {

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

        console.log("Pode desfrutar do sistema :D")

    }, [])


    return (
        <>
            <LayoutDashboard>

                <h2>Usuários</h2>

                <form
                    className="row g-3 needs-validation mb-3"
                    noValidate
                    style={{
                        alignItems: 'center'
                    }}
                >

                    <div className="col-md-12" >
                        <label
                            htmlFor="nome"
                            className="form-label"
                        >
                            Nome
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="DeadPool é o Jesus Da Marvel"
                            id="nome"
                            required
                            {...register('nome', {
                                required: 'Campo nome é Obrigatório'
                            })}
                        />
                        <div className="invalid-feedback">

                            {errors.nome && errors.nome.message}

                        </div>
                    </div>

                    <div className="col-md-12">
                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </LayoutDashboard>
        </>
    )
}