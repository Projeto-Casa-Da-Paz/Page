"use client"
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLinkExtended, RightContainer } from "./styles"
import { useEffect, useState } from "react"
import axios from "axios"

interface ICategoria {
    id: number;
    nome: string;
}

export const Menu = () => {

    const [categorias, setCategorias] = useState<Array<ICategoria>>([])

    useEffect(() => {
        axios.get('http://localhost:3001/categorias')
            .then((resposta) => {
                setCategorias(resposta.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <NavbarContainer>
                <NavbarInnerContainer>
                    <LeftContainer>

                    </LeftContainer>

                    <RightContainer>

                        {/* Como Fazer linkagem para a página desejada */}
                        {/* { </NavbarLinkExtended>
                            {
                            categorias.map((categoria) => (
                                <NavbarLinkExtended
                                    key={categoria.id}
                                    href={'/categoria/' + categoria.id}
                                >
                                    {categoria.nome}
                                </NavbarLinkExtended>
                            ))
                        } */}

                        <NavbarLinkExtended href={'/'}>
                            Início
                        </NavbarLinkExtended>

                        <NavbarLinkExtended href={'/'}>
                            Sobre Nós
                        </NavbarLinkExtended>

                        <NavbarLinkExtended href={'/'}>
                            Como Ajudar
                        </NavbarLinkExtended>

                        <NavbarLinkExtended href={'/'}>
                            Eventos
                        </NavbarLinkExtended>

                        <NavbarLinkExtended href={'/'}>
                            A Casa Da Paz
                        </NavbarLinkExtended>

                    </RightContainer>

                </NavbarInnerContainer>

            </NavbarContainer>

        </>
    )
}
