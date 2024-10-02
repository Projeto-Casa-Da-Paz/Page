import React from 'react';
import { Button, TextField, Box, Card, CardContent, AppBar, Toolbar, Typography, Alert } from '@mui/material';
import { useForm } from 'react-hook-form'
import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material'

export default function ExampleMui() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Casa da Paz
          </Typography>
        </Toolbar>
      </AppBar>
      <Card sx={{ maxWidth: 400, margin: 'auto', padding: 2, marginTop: 4 }}>
        <CardContent>
          {/* <Typography variant="h5" component="div" gutterBottom>

            {success && (
              <Alert severity="success" sx={{ marginBottom: 2 }}>
                Mensagem enviada com sucesso!
              </Alert>
            )}
            {error && (
              <Alert severity="error" sx={{ marginBottom: 2 }}>
                Erro ao enviar mensagem. Tente novamente!
              </Alert>
            )}

          </Typography> */}
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <TextField
              label="Seu Nome"
              variant="outlined"
              {...register('nome', { required: true })}
              error={!!errors.nome}
              helperText={errors.nome ? 'Este campo é obrigatório' : ''}
            />
            <TextField
              label="Seu Email"
              variant="outlined"
              {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
              error={!!errors.email}
              helperText={errors.email ? 'Este campo é obrigatório e deve ser um e-mail válido' : ''}
            />
            <TextField
              label="Sua Mensagem"
              variant="outlined"
              multiline
              rows={4}
              {...register('mensagem', { required: true })}
              error={!!errors.mensagem}
              helperText={errors.mensagem ? 'Este campo é obrigatório' : ''}
            />
            <Button variant="contained" color="primary" type="submit">
              Enviar
            </Button>
          </Box>
        </CardContent>
      </Card>
      <footer style={{ textAlign: 'center', padding: 20, backgroundColor: '#f0f0f0', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>&copy; 2023 Casa da Paz</p>
        <p>
          <a href="/sobre-nos" style={{ textDecoration: 'none', color: '#333' }}>Sobre Nós</a> |
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
            <FacebookOutlined sx={{ fontSize: 24, marginRight: 1 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
            <Instagram sx={{ fontSize: 24, marginRight: 1 }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
            <YouTube sx={{ fontSize: 24, marginRight: 1 }} />
          </a>
        </p>
      </footer>
    </div>
  );
}