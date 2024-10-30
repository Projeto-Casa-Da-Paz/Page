'use client'

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`

  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  border-top: 1px solid #e9ecef;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #6c757d;
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <Link href="/privacidade">Política de Privacidade</Link>
                <Link href="/termos">Termos de Serviço</Link>
                <Link href="/contato">Contato</Link>
            </FooterLinks>
            <FooterText>© 2024 Casa Da Paz. Todos os direitos reservados.</FooterText>
        </FooterContainer>
    );
};
