"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Galeria() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Galeria
        </Typography>
        <Typography variant="body1" paragraph>
          Galeria de fotos da instituição e eventos
        </Typography>
      </Paper>
    </Container>
  );
}
