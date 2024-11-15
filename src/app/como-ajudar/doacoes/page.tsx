"use client";

import { useState } from 'react';
import {
  Container, Typography, Box, Paper, Divider, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Grid
} from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import Image from 'next/image';
import axios from 'axios';

export default function Doacoes() {
  const [openModal, setOpenModal] = useState(false);
  const [confirmationData, setConfirmationData] = useState({
    nome: '',
    email: '',
    valor: '',
    comprovante: null
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChangeConfirmation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setConfirmationData({
      ...confirmationData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append('nome', confirmationData.nome);
    formData.append('email', confirmationData.email);
    formData.append('valor', confirmationData.valor);
    
    if (confirmationData.comprovante) {
      formData.append('comprovante', confirmationData.comprovante);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/doacoes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      if (response.status === 200) {
        alert('Doação registrada com sucesso!');
        setOpenModal(false); // Fecha o modal
      }
    } catch (error) {
      console.error('Erro ao enviar doação', error);
      alert('Ocorreu um erro ao enviar a doação.');
    }
  };

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
    <Container maxWidth="lg" sx={{ maxWidth: '100%', mt: 0, mb: 4 }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: 4
      }}>
        <Image
          src="/logo-casa-da-paz.png"
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

      <Grid container spacing={3} sx={{ my: 4 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
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
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
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
        </Grid>
      </Grid>

      {/* Botão para Confirmar a Doação 
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Confirmar Doação
        </Button>
      </Box> */}

      {/* Modal de Confirmação 
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Confirmar Doação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Insira seus dados e, se desejar, anexe o comprovante de doação.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            name="nome"
            fullWidth
            value={confirmationData.nome}
            onChange={handleChangeConfirmation}
          />
          <TextField
            margin="dense"
            label="E-mail"
            name="email"
            type="email"
            fullWidth
            value={confirmationData.email}
            onChange={handleChangeConfirmation}
          />
          <TextField
            margin="dense"
            label="Valor da Doação"
            name="valor"
            type="number"
            fullWidth
            value={confirmationData.valor}
            onChange={handleChangeConfirmation}
          />
          <TextField
            margin="dense"
            label="Comprovante (opcional)"
            name="comprovante"
            type="file"
            fullWidth
            onChange={handleChangeConfirmation}
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">Cancelar</Button>
          <Button onClick={handleSubmit} color="primary">Enviar Confirmação</Button>
        </DialogActions>
      </Dialog> */}
    </Container>
  );
}
