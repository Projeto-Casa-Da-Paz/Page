"use client";

import { useState, useEffect } from 'react';
import {
  Container, Typography, Box, Paper, Divider, Button
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import { LocationOn, WhatsApp } from '@mui/icons-material';

export default function BazarBeneficente() {
  const [bazar, setBazar] = useState<any>(null);

  useEffect(() => {
    const fetchBazarData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/bazares');
        const data = await response.json();
        setBazar(data[0]);
      } catch (error) {
        console.error('Erro ao carregar dados do bazar', error);
      }
    };

    fetchBazarData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {bazar ? (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4
            }}>
            <Image
              src="/imagens/logo-casa-da-paz.png"
              alt="Logo Casa da Paz"
              width={300}
              height={150}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>

          <Typography
            variant="h3"
            component="h1"
            gutterBottom align="center"
            color="primary">
            Bazar Beneficente Casa da Paz
          </Typography>

          <Box sx={{ textAlign: 'center', mb: 4 }}>

            <Typography variant="h6" gutterBottom>
              Contribua para nossa causa e ajude a transformar vidas!
            </Typography>

            <Typography variant="body1" paragraph>
              O Bazar é uma oportunidade de participar diretamente da nossa missão de apoio a crianças e famílias carentes. Cada contribuição é um passo para um futuro melhor.
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>Local:</strong> {bazar.localidade}
            </Typography>

            <Typography variant="body1" paragraph>
              <strong>Contato:</strong> {bazar.contato}
            </Typography>

          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            <Box
              sx={{
                p: 4,
                maxWidth: 400,
                width: '100%',
                textAlign: 'center'
              }}>

              <WhatsApp color="success" sx={{ fontSize: 40, mb: 2 }} />

              <Typography variant="h6" gutterBottom>
                Contribua via WhatsApp
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  mb: 2
                }}>

                <QRCodeSVG
                  value={`https://wa.me/${bazar.contato}`}
                  level="H"
                  size={150}
                />
              </Box>

              <Typography variant="body1">
                <strong>WhatsApp:</strong> {bazar.contato}
              </Typography>

              <Button
                variant="contained"
                color="success"
                sx={{ mt: 2 }}
                onClick={() => window.open(`https://wa.me/${bazar.contato}`, '_blank')}
              >
                Fale Conosco
              </Button>
            </Box>

            <Box sx={{ p: 4, maxWidth: 400, width: '100%', textAlign: 'center' }}>

              <LocationOn color="primary" sx={{ fontSize: 40, mb: 2 }} />

              <Typography variant="h6" gutterBottom>
                Visite-nos no local
              </Typography>

              <Typography variant="body1">
                <strong>Endereço:</strong> {bazar.localidade}
              </Typography>

              <Button
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
                onClick={() => window.open(`https://maps.google.com?q=${bazar.localidade}`, '_blank')}
              >
                Ver no Google Maps
              </Button>
            </Box>

          </Box>
        </>
      ) : (
        <Typography variant="h6" align="center" color="textSecondary">
          Carregando informações do bazar...
        </Typography>
      )}
    </Container>
  );
}
