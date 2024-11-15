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
  Sede: { icon: LocationOnIcon, color: "#black" },
  SedeBazar: { icon: LocationOnIcon, color: "#black" },
} as const;

const RedesSociais = () => {
  const [redes, setRedes] = useState<RedeSocial[]>([]);
  const [addresses, setAddresses] = useState<Endereco[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api';

  useEffect(() => {
    const fetchRedesSociais = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/instituicoes/1/redes-sociais/`);
        if (!response.ok) {
          throw new Error(`Falha ao carregar as redes sociais: ${response.status}`);
        }
        const data = await response.json();
        setRedes(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar as redes sociais');
      } finally {
        setLoading(false);
      }
    };

    fetchRedesSociais();
  }, [API_BASE_URL]);

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/instituicoes/1/enderecos`);
        if (!response.ok) {
          throw new Error(`Falha ao carregar os endereços: ${response.status}`);
        }
        const data = await response.json();
        setAddresses(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAddressData();
  }, [API_BASE_URL]);

  const getSocialUrl = (rede: RedeSocial) => {
    if (rede.url.startsWith('http')) {
      return rede.url;
    }
    switch (rede.tipo) {
      case 'Instagram':
        return `https://instagram.com/${rede.url.replace('@', '')}`;
      case 'Facebook':
        return `https://facebook.com/${rede.url.replace('@', '')}`;
      case 'Whatsapp':
        return `https://wa.me/${rede.url.replace(/[^0-9]/g, '')}`;
      case 'WhatsappBazar':
        return `https://wa.me/${rede.url.replace(/[^0-9]/g, '')}`;
      default:
        return rede.url;
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {redes.map((rede) => {
          const { icon: Icon, color } = iconMapping[rede.tipo as keyof typeof iconMapping] || {};
          if (!Icon) return null;

          return (
            <Grid item key={rede.id} xs={12} sm={6} md={4}>
              <SocialCard>
                <CardActionArea
                  href={getSocialUrl(rede)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                      padding: 3,
                    }}
                  >
                    <Icon
                      sx={{
                        fontSize: 80,
                        color: 'text.primary',
                        transition: 'color 0.3s ease',
                        '&:hover': { color },
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
            <SocialCard>
              <CardActionArea
                href={`https://www.google.com/maps?q=${address.logradouro},${address.numero},${address.bairro},${address.cidade},${address.estado}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    padding: 3,
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      fontSize: 80,
                      color: iconMapping['Sede'].color,
                    }}
                  />
                  <Typography variant="h6" component="h2" gutterBottom>
                    {address.local}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${address.logradouro}, ${address.numero} - ${address.bairro}, ${address.cidade}/${address.estado}`}
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
