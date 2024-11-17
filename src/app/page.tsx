"use client";

import Image from 'next/image';
import { Container, Typography, Paper, Box, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <Box textAlign="center" justifyContent="center" sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>

      <Box position="relative" width="100%" height="100vh" mb={3}>
        <Image
          src="/home-casa-da-paz.jpg"
          alt="Instituição Casa da Paz, em Umuarama, Paraná"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: '8px' }}
        />

        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{
            color: 'white',
            textAlign: 'center',
            padding: 2,
            maxWidth: '90%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adiciona fundo semitransparente
            borderRadius: '8px', // Adiciona borda arredondada ao fundo
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Casa da Paz
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            A Associação Assistencial e Promocional Casa da Paz é uma instituição sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
      </Box>
    </Box>
  );
}
