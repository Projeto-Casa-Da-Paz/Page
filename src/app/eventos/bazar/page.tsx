"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Bazar() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Bazar
        </Typography>
        <Typography variant="body1" paragraph>
          Bazar da Casa da Paz
        </Typography>
      </Paper>
    </Container>
  );
}
