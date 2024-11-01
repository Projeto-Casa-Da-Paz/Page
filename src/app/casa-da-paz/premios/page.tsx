"use client";

import { Grid3x3 } from '@mui/icons-material';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const PremiosCertificados = () => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardContent>
        <Typography variant="h4" component="div">
          Prêmios e Certificados
        </Typography>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              Prêmio 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição do prêmio 1
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              Prêmio 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição do prêmio 2
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" color="text.secondary">
              Prêmio 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Descrição do prêmio 2
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PremiosCertificados;