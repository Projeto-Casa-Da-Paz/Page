"use client";

export default function Dinamico(
    { params }: { params: { id: string } }
) {

    return (
        <h1>
            Prêmios Dinâmicos {params.id}
        </h1>
    )
}
