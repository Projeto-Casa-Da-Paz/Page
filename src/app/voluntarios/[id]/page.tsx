"use client"

export default function Dinamico(
    { params }: { params: { id: string } }
) {

    console.log("vamos amanha na casa da paz")

    return (
        <h1>Voluntarios {params.id}</h1>
    )
}