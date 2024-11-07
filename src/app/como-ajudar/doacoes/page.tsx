"use client";

import {
  Container, Typography, Box, Paper, Divider
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';

export default function Doacoes() {
  const dadosDoacao = {
    nome: "Associação Assistencial e Promocional Casa da Paz",
    pix: "05.509.404/0001-29",
    banco: {
      nome: "SICOOB",
      codigo: "756",
      agencia: "4379",
      conta: "4586-1",
      cnpj: "05.509.404/0001-29"
    }
  };

  return (
    <Container maxWidth="lg" sx={{ maxWidth: '100vh', mt: 0, mb: 4 }}>

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
            <QRCodeSVG
              value={dadosDoacao.pix}
              size={200}
              level="H"
            />
          </Box>

          <Typography variant="body1" align="center">
            <strong>Chave PIX:</strong> {dadosDoacao.pix}
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
              <strong>Banco:</strong> {dadosDoacao.banco.nome} ({dadosDoacao.banco.codigo})
            </Typography>
            <Typography variant="body1">
              <strong>Agência:</strong> {dadosDoacao.banco.agencia}
            </Typography>
            <Typography variant="body1">
              <strong>Conta Corrente:</strong> {dadosDoacao.banco.conta}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1">
              <strong>Titular:</strong> {dadosDoacao.nome}
            </Typography>
            <Typography variant="body1">
              <strong>CNPJ:</strong> {dadosDoacao.banco.cnpj}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}