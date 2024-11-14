"use client";

import { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import Image from 'next/image';

export default function Historia() {
    const [historia, setHistoria] = useState<any>(null);

    useEffect(() => {
        const fetchHistoriaData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/historias');
                const data = await response.json();
                setHistoria(data[0]);  // Supondo que o primeiro item da lista seja o desejado
            } catch (error) {
                console.error('Erro ao carregar dados da história', error);
            }
        };

        fetchHistoriaData();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            {historia ? (
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {historia.titulo}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {historia.texto_institucional}
                    </Typography>
                    {historia.foto_capa && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                            <Image
                                src={`/imagens/${historia.foto_capa}`}
                                alt="Foto de Capa"
                                width={600}
                                height={300}
                                style={{ objectFit: 'cover' }}
                            />
                        </Box>
                    )}
                    <Typography variant="body1" paragraph>
                        <strong>Ano de Fundação:</strong> {historia.ano_fundacao}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>MVV:</strong> {historia.MVV}
                    </Typography>
                    <Typography variant="body1" paragraph>
                        <strong>PMH:</strong> {historia.PMH}
                    </Typography>
                </Paper>
            ) : (
                <Typography variant="h6" align="center">
                    Carregando informações da história...
                </Typography>
            )}
        </Container>
    );
}
