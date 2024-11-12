// GaleriaEventos.tsx
"use client";
import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
  Button,
  CardActionArea
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

interface Galeria {
  id: number;
  nome: string;
  data: string;
  local: string;
  fotos: string[];
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

  // Dados de exemplo com múltiplas fotos por evento
  const eventos: Galeria[] = [
    {
      id: 1,
      nome: "Evento Casa da Paz",
      data: "2024-03-15",
      local: "Casa da Paz",
      fotos: [
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
      ]
    },
    {
      id: 2,
      nome: "Campanha Solidária",
      data: "2024-03-20",
      local: "Centro Comunitário",
      fotos: [
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
        '/imagens/casa-da-paz-home.jpg',
      ]
    },
    // Adicione mais eventos conforme necessário
  ];

  const handleEventClick = (eventoId: number) => {
    router.push(`/eventos/galeria/${eventoId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Galeria de Eventos
      </Typography>

      <Grid container spacing={3}>
        {eventos.map((evento) => (
          <Grid item key={evento.id} xs={12} sm={6} md={4}>
            <EventCard>
              <CardActionArea onClick={() => handleEventClick(evento.id)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={evento.fotos[0]} // Usa a primeira foto como capa
                  alt={evento.nome}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {evento.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data: {new Date(evento.data).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Local: {evento.local}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
                    Ver todas as fotos ({evento.fotos.length})
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
