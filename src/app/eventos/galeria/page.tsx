"use client";
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  CircularProgress,
  Alert,
  CardActionArea
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

interface Foto {
  id: number;
  id_galeria: number;
  nome: string;
  file: string;
  created_at: string;
  updated_at: string;
}

const EventCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
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

        const capas: Record<number, string> = {};
        for (const galeria of galeriasData) {
          try {
            const fotosResponse = await fetch(`http://127.0.0.1:8000/api/galerias/${galeria.id}/fotos`);
            if (fotosResponse.ok) {
              const fotosData = await fotosResponse.json();
              if (fotosData && fotosData.length > 0) {
                capas[galeria.id] = fotosData[0].file;
              }
            }
          } catch (error) {
            console.error(`Erro ao buscar fotos da galeria ${galeria.id}:`, error);
          }
        }
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
        {galerias.map((galeria) => (
          <Grid item key={galeria.id} xs={12} sm={6} md={4}>
            <EventCard>
              <CardActionArea onClick={() => handleEventClick(galeria.id)}>
                <CardContent>
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
