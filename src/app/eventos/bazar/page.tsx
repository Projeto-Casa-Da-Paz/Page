"use client";

import { useState, useEffect } from 'react';
import {
  Container, Typography, Box, Paper
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

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
    <Container maxWidth="lg" sx={{ maxWidth: '100vh', mt: 0, mb: 4 }}>
      {bazar ? (
        <>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 4
          }}>
            <Image
              src='/hoje.jpg'	
              // src={`/imagens/${bazar.foto}`}
              alt="Logo Casa da Paz"
              width={300}
              height={150}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>

          <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
            Bazar Beneficente Casa da Paz
          </Typography>

          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Contribua para a nossa causa e ajude a transformar vidas!
            </Typography>
            <Typography variant="body1" paragraph>
              O Bazar Beneficente da Casa da Paz oferece uma oportunidade única de contribuir com a nossa instituição, ajudando diretamente a nossa missão de apoio a quem precisa. Ao participar, você estará ajudando a financiar nossas atividades e projetos.
            </Typography>
            <Typography variant="body1" paragraph>
              Além disso, ao realizar sua doação ou compra, você poderá interagir diretamente com nossa equipe via WhatsApp para tirar dúvidas ou fazer ajustes.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Local:</strong> {bazar.localidade}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Contato:</strong> {bazar.contato}
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            justifyContent: 'center',
            my: 4
          }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
              <Typography variant="h6" gutterBottom align="center">
                Faça sua contribuição via WhatsApp
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <QRCodeSVG
                  value={`https://wa.me/${bazar.contato}`}
                  level="H"
                />
              </Box>

              <Typography variant="body1" align="center">
                <strong>WhatsApp:</strong> {bazar.contato}
              </Typography>
            </Paper>
          </Box>
        </>
      ) : (
        <Typography variant="h6" align="center">
          Carregando informações do bazar...
        </Typography>
      )}
    </Container>
  );
}
