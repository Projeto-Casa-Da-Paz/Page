"use client";

import Image from 'next/image';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (

    <Box textAlign="center" justifyContent="center" sx={{ p: 3 }} >
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 2 }}>
        Bem-vindo à Casa da Paz
      </Typography>

      <Box position="relative" width="100%" height={{ xs: '300px', md: '450px' }} mb={3}>
        <Image
          src="/imagens/casa-da-paz-home.jpg"
          alt="Home Casa da Paz"
          fill
          style={{ objectFit: 'cover', borderRadius: '8px' }}
        />
      </Box>

      <Typography variant="body1">
        A Associação Assistencial e Promocional Casa da Paz é uma instituição sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
      </Typography>

      <Box justifyContent="center" sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/como-ajudar/doacoes')}
          sx={{ mt: 2 }}
        >
          Faça uma Doação
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/como-ajudar/voluntarios')}
          sx={{ mt: 2 }}
        >
          Seja um voluntário
        </Button>
      </Box>
    </Box>
  );
}
