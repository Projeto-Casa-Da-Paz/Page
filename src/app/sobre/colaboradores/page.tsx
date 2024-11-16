"use client";

import { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import Image from "next/image";

interface Colaborador {
    id: number;
    nome: string;
    profissao: string;
    classificacao: string;
    foto: string;
    created_at: string;
    updated_at: string;
}

export default function Parcerias() {
    const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);

    useEffect(() => {
        const fetchColaboradoresData = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/api/colaboradores");
                const data = await response.json();
                setColaboradores(data);
            } catch (error) {
                console.error("Erro ao carregar colaboradores", error);
            }
        };

        fetchColaboradoresData();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            {colaboradores.length > 0 ? (
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="body1" paragraph>
                        Conheça nossos Colaboradores
                    </Typography>

                    <Grid container spacing={3}>
                        {colaboradores.map((colaborador) => (
                            <Grid item xs={12} sm={6} md={4} key={colaborador.id}>
                                <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>

                                    <img
                                        src={`http://127.0.0.1:8000/api/imagem/${colaborador.foto}`}
                                        alt={colaborador.nome}
                                        style={{ width: "100%", height: "auto" }}
                                    />

                                    <Typography variant="h6" sx={{ mt: 2 }}>
                                        {colaborador.nome}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Profissão: {colaborador.profissao}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Classificação: {colaborador.classificacao}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Desde: {new Date(colaborador.created_at).toLocaleDateString()}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            ) : (
                <Typography variant="h6" align="center">
                    Carregando colaboradores...
                </Typography>
            )}
        </Container>
    );
}
