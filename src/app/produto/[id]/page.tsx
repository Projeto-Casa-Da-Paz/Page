'use client'

import { Menu } from "@/components/Menu"

export default function Produto(

    { params }: { params: { id: string } }

) {
    return (
        <>
            <Menu />
            <h1>Produto {params.id} </h1>
        </>
    )
}
