"use client";

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Alert,
  CardActionArea
} from '@mui/material';

import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface RedeSocial {
  id: number;
  instituicao_id: number;
  tipo: string;
  nome: string;
  url: string;
  created_at: string | null;
  updated_at: string | null;
}

interface Endereco {
  id: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  local: string;
  created_at: string | null;
  updated_at: string | null;
}

const SocialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const iconMapping = {
  Facebook: { icon: FacebookIcon, color: "#1877F2" },
  Instagram: { icon: InstagramIcon, color: "#E4405F" },
  Twitter: { icon: TwitterIcon, color: "#1DA1F2" },
  Whatsapp: { icon: WhatsAppIcon, color: "#25D366" },
  WhatsappBazar: { icon: WhatsAppIcon, color: "#25D366" },
  Sede: { icon: LocationOnIcon, color: "#000" },
  SedeBazar: { icon: LocationOnIcon, color: "#000" },
} as const;

const RedesSociais = () => {
  const [redes, setRedes] = useState<RedeSocial[]>([]);
  const [addresses, setAddresses] = useState<Endereco[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const redesResponse = await fetch(`${API_BASE_URL}/instituicoes/1/redes-sociais/`);
        const addressesResponse = await fetch(`${API_BASE_URL}/instituicoes/1/enderecos`);

        if (!redesResponse.ok || !addressesResponse.ok) {
          throw new Error('Erro ao carregar os dados');
        }

        setRedes(await redesResponse.json());
        setAddresses(await addressesResponse.json());
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar os dados');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_BASE_URL]);

  const getSocialUrl = (rede: RedeSocial) => {
    if (rede.url.startsWith('http')) return rede.url;
    const mappings = {
      Instagram: `https://instagram.com/${rede.url.replace('@', '')}`,
      Facebook: `https://facebook.com/${rede.url.replace('@', '')}`,
      Whatsapp: `https://wa.me/${rede.url.replace(/[^0-9]/g, '')}`,
    };
    return mappings[rede.tipo as keyof typeof mappings] || rede.url;
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return <Container sx={{ py: 4 }}><Alert severity="error">{error}</Alert></Container>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {redes.map((rede) => {
          const { icon: Icon, color } = iconMapping[rede.tipo as keyof typeof iconMapping] || {};
          if (!Icon) return null;

          return (
            <Grid item key={rede.id} xs={12} sm={6} md={4}>
              <SocialCard sx={{ backgroundColor: `${color}10` }}>
                <CardActionArea
                  href={getSocialUrl(rede)}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ height: '100%' }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Icon
                      sx={{
                        fontSize: 80,
                        color,
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.1)' },
                      }}
                    />
                    <Typography variant="h6" component="h2" gutterBottom>
                      {rede.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {rede.url}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </SocialCard>
            </Grid>
          );
        })}

        {addresses.map((address) => (
          <Grid item key={address.id} xs={12} sm={6} md={4}>
            <SocialCard sx={{ backgroundColor: '#F0F0F0' }}>

              <CardActionArea
                href={`https://www.google.com/maps?q=
                  ${address.logradouro}, 
                  ${address.numero}, 
                  ${address.bairro}, 
                  ${address.cidade}, 
                  ${address.estado}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <LocationOnIcon sx={{ fontSize: 80, color: '#000', mb: 2 }} />

                  <Typography variant="h6" component="h2" gutterBottom>
                    {address.local}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {`${address.logradouro}, 
                    ${address.numero} - 
                    ${address.bairro}, 
                    ${address.cidade}/
                    ${address.estado}`}
                  </Typography>

                </CardContent>
              </CardActionArea>
            </SocialCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RedesSociais;
