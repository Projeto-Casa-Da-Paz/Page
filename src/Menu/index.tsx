'use client'

import Link from "next/link";
import { LeftContainer, NavbarContainer, NavbarInnerContainer, NavbarLinkExtended, RightContainer } from "./styles";
import { useEffect, useState } from "react";
// import axios from "axios";

interface ICategoria {
    id: number;
    nome: string;
}

export const Menu = () => {

    const [categorias, setCategorias] =
        useState<Array<ICategoria>>([])

    useEffect(() => {
        // axios.get('http://localhost:3001/categorias')
        //     .then((resposta) => {
        //         console.log(resposta.data)

        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }, [])

    return (
        <NavbarContainer>

            <NavbarInnerContainer>
                <LeftContainer>

                    <NavbarLinkExtended
                        href='/'>Americanos
                        {/* ícone */}
                    </NavbarLinkExtended>

                    <NavbarLinkExtended
                        href='/'>Home
                    </NavbarLinkExtended>

                    {
                        categorias.map((categoria) => (

                            <NavbarLinkExtended
                                key={categoria.id}
                                href={'/categoria/' + categoria.id}
                            >
                                {categoria.nome}
                            </NavbarLinkExtended>
                        ))
                    }

                </LeftContainer>

                <RightContainer>

                </RightContainer>

            </NavbarInnerContainer>

        </NavbarContainer >
    )
}
