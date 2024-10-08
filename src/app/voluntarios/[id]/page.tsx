"use client";

export default function Dinamico(
    { params }: { params: { id: string } }
) {

    console.log("Jesus da Marvel")

    return (
        <h1>
            Voluntários {params.id}
        </h1>
    )
}
