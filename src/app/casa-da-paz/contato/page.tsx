"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Contato() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contato
        </Typography>
        <Typography variant="body1" paragraph>
          Como contatar a Instituição Casa da Paz
        </Typography>
      </Paper>
    </Container>
  );
}
