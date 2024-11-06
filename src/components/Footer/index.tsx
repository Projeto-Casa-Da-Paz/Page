// src/components/Footer.tsx

import React from 'react';
import { Box, Container, Typography, Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import { footerStyles, containerStyles, typographyStyles, linksContainerStyles } from './FooterStyles';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        ...footerStyles,
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="lg" sx={containerStyles}>
        <Typography variant="body1" sx={typographyStyles}>
          Casa da Paz - Todos os direitos reservados © |
          Desenvolvido em parceria com a Faculdade ALFA Umuarama {new Date().getFullYear()}
        </Typography>
        <Box sx={linksContainerStyles}>
          <NextLink href="/" passHref legacyBehavior>
            <MuiLink color="inherit" underline="hover">
              Home
            </MuiLink>
          </NextLink>
          <NextLink href="/" passHref legacyBehavior>
            <MuiLink color="inherit" underline="hover">
              Como Ajudar
            </MuiLink>
          </NextLink>
          <NextLink href="/casa-da-paz/contato" passHref legacyBehavior>
            <MuiLink color="inherit" underline="hover">
              Contato
            </MuiLink>
          </NextLink>
        </Box>
      </Container>
    </Box>
  );
}