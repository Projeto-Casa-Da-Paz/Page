// src/components/Footer.tsx

import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { footerStyles, containerStyles, typographyStyles, linksContainerStyles } from './FooterStyles';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        ...footerStyles,
        position: 'relative', // Alterado para relativo
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={containerStyles}>
        <Typography variant="body1" sx={typographyStyles}>
          Casa da Paz - Todos os direitos reservados © {new Date().getFullYear()}
        </Typography>
        <Box sx={linksContainerStyles}>
          <Link href="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link href="/sobre" color="inherit" underline="hover">
            Sobre Nós
          </Link>
          <Link href="/como-ajudar" color="inherit" underline="hover">
            Como Ajudar
          </Link>
          <Link href="/eventos" color="inherit" underline="hover">
            Eventos
          </Link>
          <Link href="/casa-da-paz" color="inherit" underline="hover">
            A Casa da Paz
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
