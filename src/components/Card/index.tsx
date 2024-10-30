'use client'

import { Button, CardBody, TextButton, TextPromo, Title, TitlePreco, Image } from "./style"


export const Card = () => {
    return (

        <CardBody>
            <Image src={' '} alt="" />
            <Title>PenDrive</Title>
            <TitlePreco> 800,00 </TitlePreco>
            <TextPromo>200,00</TextPromo>
            <Button>
                <TextButton> Detalhes</TextButton>
            </Button>
        </CardBody>

    )
}
