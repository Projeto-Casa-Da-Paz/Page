import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { IToken } from '../../interfaces/token'

//Exemplo enterder undefined ou null
let Pessoa = {
    nome: "Junior",
    email: null,
    // idade: undefined
}

interface IProps {
    children: ReactNode
    token?: IToken | null
}

export const LayoutDashboard = (props: IProps) => {
    return (
        <>

            <header
                className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0"
            >
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3"
                    href="#">
                    Sistema Autenticação
                </a>
                <button
                    className="navbar-toggler position-absolute d-md-none collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="w-100"></div>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <Link
                            className="nav-link px-3"
                            to="/">
                            Sair
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
                    >
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link`}
                                        to={'/dashboard'}
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link`}
                                        to={'/usuarios'}
                                    >
                                        Users
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </nav>


                    <main
                        className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                    >
                        {props.children}
                    </main>

                </div>
            </div>
        </>
    )
}