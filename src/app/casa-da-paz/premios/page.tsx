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

interface Premio {
  id: number;
  nome: string;
  categoria: string;
  data_recebimento: string;
  imagem: string;
}

const PremioCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const PremiosCertificados = () => {
  const [premios, setPremios] = useState<Premio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPremios = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/premios');
        if (!response.ok) {
          throw new Error('Erro ao carregar os prêmios');
        }
        const data = await response.json();
        setPremios(data);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ocorreu um erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPremios();
  }, []);

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
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Prêmios e Certificados
      </Typography>

      <Grid container spacing={3}>
        {premios.map((premio) => (
          <Grid item key={premio.id} xs={12} sm={6} md={4}>
            <PremioCard>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"

                  // Route::get('/imagem/{dirname}/{filename}', [ImagemController::class, 'showImage']);

                  image={`http://127.0.0.1:8000/api/imagem/premios/${premio.imagem}`}
                  alt={premio.nome}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {premio.nome}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Categoria: {premio.categoria}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Data de Recebimento: {new Date(premio.data_recebimento).toLocaleDateString('pt-BR')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </PremioCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PremiosCertificados;