"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bem-vindo à Casa da Paz
        </Typography>
        <Typography variant="body1" paragraph>
          Conteúdo da página inicial...
        </Typography>
      </Paper>
    </Container>
  );
}