"use client";

import { useState, useEffect } from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2"; // Grid v2
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

interface RedeSocial {
  id: number;
  tipo: string;
  nome: string;
  url: string;
  icon: any;
  color: string;
}

const RedesSociais = () => {
  const [redes, setRedes] = useState<RedeSocial[]>([
    {
      id: 1,
      tipo: "Facebook",
      nome: "Casa da Paz",
      url: "casadapaz_umuarama",
      icon: FacebookIcon,
      color: "#1877F2"
    },
    {
      id: 2,
      tipo: "Instagram",
      nome: "Casa da Paz - Bazar",
      url: "casadapaz_umuarama",
      icon: InstagramIcon,
      color: "#E4405F"
    },
    {
      id: 3,
      tipo: "Twitter",
      nome: "Casa da Paz - Fanclub",
      url: "casadapaz_umuarama",
      icon: TwitterIcon,
      color: "#1DA1F2"
    }
  ]);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Nossas Redes Sociais
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {redes.map((rede: RedeSocial) => {
            const Icon = rede.icon;
            return (
              <Grid display="flex" justifyContent="center" alignItems="center" key={rede.id} sx={{ gap: 5 }} size={{ md: 4, sm: 12, xs: 4 }}>
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 2,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    }
                  }}
                >
                  <Box
                    component="a"
                    href={`https://${rede.tipo.toLowerCase()}.com/${rede.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 80,
                        color: 'text.primary',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: rede.color
                        }
                      }}
                    />
                    <Typography variant="h6" component="h2">
                      {rede.nome}
                    </Typography>
                    <Typography color="textSecondary">
                      @{rede.url}
                    </Typography>
                  </Box>
                </CardContent>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default RedesSociais;