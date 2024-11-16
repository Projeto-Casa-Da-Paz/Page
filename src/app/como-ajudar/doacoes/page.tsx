"use client";

import {
  Container, Typography, Box, Paper, Divider
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Doacoes() {
  const [dadosDoacao, setDadosDoacao] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDadosDoacao() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/doacoes');
        // Verifica se o retorno é um array ou um objeto
        const data = Array.isArray(response.data) ? response.data[0] : response.data;
        setDadosDoacao(data); // Ajuste conforme o formato retornado
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDadosDoacao();
  }, []);

  if (loading) {
    return <Typography align="center" sx={{ mt: 4 }}>Carregando...</Typography>;
  }

  if (!dadosDoacao) {
    return <Typography align="center" sx={{ mt: 4, color: 'red' }}>Erro ao carregar dados da doação.</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
      <Box sx={{
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

      <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
        Seja um Doador
      </Typography>

      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Faça a diferença na vida de muitas pessoas!
        </Typography>
        <Typography variant="body1" paragraph>
          A Instituição Casa da Paz precisa de pessoas como você, que desejam
          contribuir para um mundo melhor. Junte-se a nós nessa missão!
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
            Faça sua doação via PIX
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Image
              src="/qrcodepix.png"
              alt="QR CODE PIX"
              width={200}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </Box>

          <Typography variant="body1" align="center">
            <strong>Chave PIX:</strong> {dadosDoacao.chave_pix}
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
          <Typography variant="h6" gutterBottom align="center">
            Dados Bancários
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            mt: 2
          }}>
            <Typography variant="body1">
              <strong>Banco:</strong> {dadosDoacao.banco}
            </Typography>
            <Typography variant="body1">
              <strong>Agência:</strong> {dadosDoacao.agencia}
            </Typography>
            <Typography variant="body1">
              <strong>Conta Corrente:</strong> {dadosDoacao.conta_corrente}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1">
              <strong>Titular:</strong> {dadosDoacao.titular}
            </Typography>
            <Typography variant="body1">
              <strong>CNPJ:</strong> {dadosDoacao.cnpj}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}
