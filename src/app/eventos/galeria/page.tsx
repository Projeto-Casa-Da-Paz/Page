"use client";

import { useState, useEffect } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CircularProgress } from "@mui/material";
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
}

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:3001/fotos');
        if (!response.ok) {
          throw new Error('Falha ao carregar as fotos');
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError('Erro ao carregar as fotos. Por favor, tente novamente mais tarde.');
        console.error('Erro:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign="center">
        Galeria de Fotos
      </Typography>

      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '300px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  cursor: 'pointer',
                  boxShadow: 6
                }
              }}
            >
              <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                  priority={photo.id <= 4} // Carrega as primeiras 4 imagens com prioridade
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotoGallery;