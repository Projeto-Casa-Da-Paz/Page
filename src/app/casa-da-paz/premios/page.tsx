"use client";

import { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Grid from "@mui/material/Grid2"; // Grid v2

interface Premio {
  id: number;
  nome: string;
  categoria: string;
  data_recebimento: string;
  imagem: string;
}

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
        const data = await response.json() as Premio[];
        setPremios(data);
      } catch (error) {
        // Tratamento adequado do erro com type narrowing
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

  if (loading) return <Typography>Carregando...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={2} sx={{ mt: 4 }} >
        <Typography variant="h3" component="h1" gutterBottom>
          Premios e Certificados
        </Typography>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {premios.map((premio: Premio) => (
            <Grid display="flex" justifyContent="center" alignItems="center" key={premio.id} sx={{ gap: 5 }} size={{ md: 4, sm: 12, xs: 4 }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2, textAlign: 'center' }} >
                <img
                  src={"http://127.0.0.1:8000/api/imagem/" + premio.imagem}
                  alt={premio.nome}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '200px',
                    objectFit: 'contain'
                  }}
                />
                <Typography variant="h6" component="h2">
                  {premio.nome}
                </Typography>
                <Typography color="textSecondary">
                  Categoria: {premio.categoria}
                </Typography>
                <Typography variant="body2">
                  Data de Recebimento: {new Date(premio.data_recebimento).toLocaleDateString('pt-BR')}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Box>

    </>
  );
};

export default PremiosCertificados;