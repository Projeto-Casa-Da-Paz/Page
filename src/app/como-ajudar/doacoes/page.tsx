"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Doacoes() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Doações
        </Typography>
        <Typography variant="body1" paragraph>
          Doações feitas para a Instituição Casa da paz
        </Typography>
      </Paper>
    </Container>
  );
}