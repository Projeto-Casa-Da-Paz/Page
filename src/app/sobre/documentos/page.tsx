"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Documentos() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Documentos
        </Typography>
        <Typography variant="body1" paragraph>
          Documentos Casa da Paz
        </Typography>
      </Paper>
    </Container>
  );
}
