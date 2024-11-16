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
                <Paper elevation={3} sx={{ p: 4 }}>
                    {historia.foto_capa && (
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                            <img
                                src={`http://127.0.0.1:8000/api/imagem/fotoscapas/${historia.foto_capa}`}
                                alt={historia.nome}
                                width={600}
                                height={400}
                            />

                        </Box>
                    )}

                    <Typography variant="body1" paragraph>
                        <strong>Ano de Fundação: </strong> {formatDate(historia.ano_fundacao)}
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>MISSÃO | VISÃO | VALORES : </strong> {historia.MVV}
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>PRINCIPAIS MARCOS HISTÓRICOS: </strong> {historia.PMH}
                    </Typography>

                    <Typography variant="body1" paragraph>
                        <strong>Nossa história: </strong>
                        {historia.texto_institucional}
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
