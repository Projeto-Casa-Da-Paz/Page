"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Voluntarios() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Voluntários
        </Typography>
        <Typography variant="body1" paragraph>
          Voluntários que ajudam a Instiuição Casa da paz
        </Typography>
      </Paper>
    </Container>
  );
}
