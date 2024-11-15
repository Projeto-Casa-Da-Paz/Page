"use client";

import Image from 'next/image';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (

    <Box textAlign="center" justifyContent="center" sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>

      <Box position="relative" width="100%" height={{ xs: '300px', md: '450px' }} mb={3}>
        <Image
          src="/home-casa-da-paz.jpg"
          alt="Instituição Casa da Paz, em Umuarama, Paraná"
          width={1200} // largura padrão para desktop
          height={600} // altura proporcional
          layout="responsive"
          style={{ borderRadius: '8px' }}

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
          aria-label="Ir para página de doações"
        >
          Faça uma Doação
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/como-ajudar/voluntarios')}
          sx={{ mt: 2 }}
          aria-label="Ir para página de voluntários"
        >
          Seja um voluntário
        </Button>

      </Box>
    </Box>
  );
}
