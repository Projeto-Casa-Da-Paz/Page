"use client";

import { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';
import { CardMedia } from '@mui/material';

export default function Historia() {
    const [historia, setHistoria] = useState<any>(null);

    useEffect(() => {
        const fetchHistoriaData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/historias');
                const data = await response.json();
                setHistoria(data[0]);
            } catch (error) {
                console.error('Erro ao carregar dados da história', error);
            }
        };

        fetchHistoriaData();
    }, []);

    const formatDate = (date: string | number) => {
        const parsedDate = new Date(date);
        const day = String(parsedDate.getDate()).padStart(2, '0');
        const month = String(parsedDate.getMonth() + 1).padStart(2, '0');
        const year = parsedDate.getFullYear();

        return `${day}-${month}-${year}`;
    };

    return (

        <Container maxWidth="lg" sx={{ mt: 4 }}>

            {historia ? (
                <Paper
                    elevation={3}
                    sx={{
                        p: 4,
                        backgroundColor: '#f9f9f9',
                        borderRadius: 2
                    }}>

                    {historia.foto_capa && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>

                            <CardMedia
                                component="img"
                                height="400"
                                image={`http://127.0.0.1:8000/api/imagem/fotoscapas/${historia.foto_capa}`}
                                alt={historia.nome}
                                sx={{ objectFit: 'contain', borderRadius: '8px' }}
                            />
                        </Box>
                    )}

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            textAlign: 'center',
                            mb: 3
                        }}>
                        {historia.nome}
                    </Typography>

                    <Divider sx={{ mb: 2 }} />

                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        <strong>Ano de Fundação: </strong> {formatDate(historia.ano_fundacao)}
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        <strong>MISSÃO | VISÃO | VALORES: </strong>
                        {historia.MVV}
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        <strong>PRINCIPAIS MARCOS HISTÓRICOS: </strong>
                        {historia.PMH}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                        <strong>Nossa história: </strong>
                        {historia.texto_institucional}
                    </Typography>

                </Paper>
            ) : (
                <Typography variant="h6" align="center" sx={{ mt: 4 }}>
                    Carregando informações da história...
                </Typography>
            )}
        </Container>
    );
}
