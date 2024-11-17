"use client"
import {
    LeftContainer,
    NavbarContainer,
    NavbarInnerContainer,
    NavbarLinkExtended,
    RightContainer
} from "./styles"

export const Menu = () => {

    return (
        <NavbarContainer>
            <NavbarInnerContainer>
                <LeftContainer>

                </LeftContainer>

                <RightContainer>
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
    )
}
