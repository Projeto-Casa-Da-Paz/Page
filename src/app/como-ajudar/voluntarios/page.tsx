"use client";

import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Grid,
  Snackbar,
  Alert,
  Divider
} from '@mui/material';

interface IVoluntario {
  nome: string;
  email: string;
  telefone: string;
  data_nascimento: string;
}

interface IErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  data_nascimento?: string;
}

const defaultVoluntario: IVoluntario = {
  nome: '',
  email: '',
  telefone: '',
  data_nascimento: ''
};

export default function Voluntarios() {
  const [formData, setFormData] = useState<IVoluntario>(defaultVoluntario);
  const [errors, setErrors] = useState<IErrors>({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const validateForm = () => {
    const newErrors: IErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Por favor, informe seu nome';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Por favor, informe um email válido';
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Por favor, informe seu telefone';
    }

    if (!formData.data_nascimento) {
      newErrors.data_nascimento = 'Por favor, informe sua data de nascimento';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/voluntarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error('Erro ao realizar cadastro');
        }

        const data = await response.json();
        console.log('Cadastro realizado:', data);

        setSnackbar({
          open: true,
          message: 'Cadastro realizado com sucesso! Em breve entraremos em contato.',
          severity: 'success'
        });

        setFormData(defaultVoluntario);
      } catch (error) {
        console.error('Erro:', error);
        setSnackbar({
          open: true,
          message: 'Erro ao realizar cadastro. Por favor, tente novamente.',
          severity: 'error'
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCloseSnackbar = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
          Seja um Voluntário
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

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
          Preencha seus dados para participar
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Seu Nome Completo"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                error={!!errors.nome}
                helperText={errors.nome}
                required
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Seu E-mail"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                required
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Seu Telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                error={!!errors.telefone}
                helperText={errors.telefone}
                required
                placeholder="(00) 00000-0000"
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Data de Nascimento"
                name="data_nascimento"
                type="date"
                value={formData.data_nascimento}
                onChange={handleChange}
                error={!!errors.data_nascimento}
                helperText={errors.data_nascimento}
                InputLabelProps={{
                  shrink: true,
                }}
                required
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 2,
                  px: 6,
                  py: 1.5,
                  borderRadius: 2,
                  fontSize: '1.1rem'
                }}
              >
                Quero ser Voluntário
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Após o cadastro, nossa equipe entrará em contato para fornecer mais informações
            sobre as oportunidades de voluntariado disponíveis.
          </Typography>
        </Box>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}