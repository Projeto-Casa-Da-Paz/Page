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
  CardActionArea,
  CardMedia
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

interface Galeria {
  id: number;
  nome: string;
  data: string;
  local: string;
  qtd_fotos: number;
  created_at: string;
  updated_at: string;
}

const EventCard = styled(Card)(({ theme }) => ({

  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.2)',
  },
}));

const GaleriaEventos = () => {
  const router = useRouter();
  const [galerias, setGalerias] = useState<Galeria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalerias = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/galerias');
        if (!response.ok) {
          throw new Error('Falha ao carregar os eventos');
        }
        const galeriasData = await response.json();
        setGalerias(galeriasData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar os eventos');
      } finally {
        setLoading(false);
      }
    };

    fetchGalerias();
  }, []);

  const handleEventClick = (galeriaId: number) => {
    router.push(`/eventos/galeria/${galeriaId}`);
  };

  if (loading) {
    return (

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '400px'
        }}>

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

      <Typography variant="h4" gutterBottom align="center" color="primary">
        Galerias de Eventos Promovidos
      </Typography>

      <Grid container spacing={3}>
        {galerias.map((galeria) => (
          <Grid item key={galeria.id} xs={12} sm={6} md={4}>
            <EventCard>

              <CardMedia
                component="img"
                height="180"
                image="/capa-albuns.jpg"
                alt="Capa da galeria"
                sx={{
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />

              <CardActionArea onClick={() => handleEventClick(galeria.id)}>
                <CardContent sx={{ padding: 3 }}>

                  <Typography variant="h6" component="h3" gutterBottom>
                    {galeria.nome}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Data: {new Date(galeria.data).toLocaleDateString()}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Local: {galeria.local}
                  </Typography>

                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    Ver todas as fotos ({galeria.qtd_fotos})
                  </Typography>

                </CardContent>
              </CardActionArea>
            </EventCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GaleriaEventos;
