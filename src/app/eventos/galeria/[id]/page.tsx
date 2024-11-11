// EventoDetalhe.tsx
"use client";
import React, { useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    Box,
    IconButton,
    Card,
    Modal,
    Button
} from '@mui/material';
import { ArrowBack, Close } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface EventoDetalheProps {
    params: {
        id: string;
    };
}

const EventoDetalhe = ({ params }: EventoDetalheProps) => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Simula busca do evento pelo ID
    const evento = {
        id: parseInt(params.id),
        nome: "Evento Casa da Paz",
        data: "2024-03-15",
        local: "Casa da Paz",
        descricao: "Descrição detalhada do evento...",
        fotos: [
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            // Adicione mais fotos conforme necessário
        ]
    };

    const handleImageClick = (foto: string) => {
        setSelectedImage(foto);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Cabeçalho */}
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <IconButton
                    onClick={() => router.back()}
                    sx={{ mr: 2 }}
                    aria-label="voltar"
                >
                    <ArrowBack />
                </IconButton>
                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {evento.nome}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {new Date(evento.data).toLocaleDateString()} - {evento.local}
                    </Typography>
                </Box>
            </Box>

            {/* Descrição do Evento */}
            <Typography variant="body1" sx={{ mb: 4 }}>
                {evento.descricao}
            </Typography>

            {/* Grid de Fotos */}
            <Grid container spacing={2}>
                {evento.fotos.map((foto, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onClick={() => handleImageClick(foto)}
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    opacity: 0.9,
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.2s'
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={foto}
                                alt={`Foto ${index + 1} do ${evento.nome}`}
                                sx={{
                                    width: '100%',
                                    height: 250,
                                    objectFit: 'cover',
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Modal para visualização em tamanho grande */}
            <Modal
                open={Boolean(selectedImage)}
                onClose={() => setSelectedImage(null)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{
                    position: 'relative',
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                }}>
                    <IconButton
                        onClick={() => setSelectedImage(null)}
                        sx={{
                            position: 'absolute',
                            right: -20,
                            top: -20,
                            backgroundColor: 'white',
                            '&:hover': {
                                backgroundColor: 'white',
                            }
                        }}
                    >
                        <Close />
                    </IconButton>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Foto em tamanho grande"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                            }}
                        />
                    )}
                </Box>
            </Modal>
        </Container>
    );
};

export default EventoDetalhe;