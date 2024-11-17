'use client'

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
        boxShadow: 1, // Sombra sutil no topo
      }}
    >
      <Container maxWidth="sm" sx={containerStyles}>

        <Box sx={linksContainerStyles}>

          <NextLink href="/" passHref legacyBehavior>

            <MuiLink
              color="inherit"
              underline="none"
              sx={{
                '&:hover': {
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease-in-out, color 0.2s ease',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Início
            </MuiLink>

          </NextLink>

          <NextLink href="/" passHref legacyBehavior>

            <MuiLink
              color="inherit"
              underline="none"
              sx={{
                '&:hover': {
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease-in-out, color 0.2s ease',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Como Ajudar
            </MuiLink>

          </NextLink>

          <NextLink href="/casa-da-paz/contato" passHref legacyBehavior>

            <MuiLink
              color="inherit"
              underline="none"
              sx={{
                '&:hover': {
                  color: 'white',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.2s ease-in-out, color 0.2s ease',
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Contato
            </MuiLink>

          </NextLink>

        </Box>

        <Typography variant="body2" sx={typographyStyles}>
          Casa da Paz - Todos os direitos reservados © | Desenvolvido em parceria com a Faculdade ALFA Umuarama {new Date().getFullYear()}
        </Typography>

        <Typography variant="body2" sx={{ ...typographyStyles, opacity: 0.7, fontSize: '0.875rem' }}>

          <MuiLink href="https://github.com/danielsz3" target="_blank" color="inherit" underline="hover" sx={{ marginRight: 2, marginLeft: 2 }}>
            Daniel Mesquita Oliveira RAº 14044
          </MuiLink>|

          <MuiLink href="https://github.com/devfelipegustavo" target="_blank" color="inherit" underline="hover" sx={{ marginRight: 2, marginLeft: 2 }}>
            Felipe Gustavo Ferreira Cruz RAº 13663
          </MuiLink> |

          <MuiLink href="https://github.com/JoaoGabryel" target="_blank" color="inherit" underline="hover" sx={{ marginRight: 2, marginLeft: 2 }}>
            João Gabryel Dos Santos Lima RAº 13459
          </MuiLink>

        </Typography>



      </Container>
    </Box>
  );
}
