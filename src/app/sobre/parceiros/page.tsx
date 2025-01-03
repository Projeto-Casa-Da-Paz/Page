"use client";

import { useState, useEffect } from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';
import Image from 'next/image';

export default function Parcerias() {
    const [parceiros, setParceiros] = useState<any[]>([]);

    useEffect(() => {
        const fetchParceirosData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/parceiros');
                const data = await response.json();
                setParceiros(data);  // Armazena todos os parceiros
            } catch (error) {
                console.error('Erro ao carregar parceiros', error);
            }
        };

        fetchParceirosData();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>

            {parceiros.length > 0 ? (

                <Paper elevation={3} sx={{ p: 4 }}>

                    <Grid container spacing={3}>

                        {parceiros.map((parceiro) => (

                            <Grid item xs={12} sm={6} md={4} key={parceiro.id}>

                                <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>

                                    <img
                                        src={`http://127.0.0.1:8000/api/imagem/${parceiro.imagem}`}
                                        alt={parceiro.nome}
                                        style={{ width: "100%", height: "auto" }}
                                    />

                                    <Typography variant="h6" sx={{ mt: 2 }}>
                                        {parceiro.nome}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary">
                                        Classificação: {parceiro.classificacao}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary">
                                        Data de Início: {new Date(parceiro.data_inicio).toLocaleDateString()}
                                    </Typography>

                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            ) : (

                <Typography variant="h6" align="center">
                    Carregando parceiros...
                </Typography>
            )}
        </Container>
    );
}
