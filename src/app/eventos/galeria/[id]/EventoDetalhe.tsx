// src/app/eventos/galeria/[id]/EventoDetalhe.tsx
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
    Fade,
} from '@mui/material';
import { ArrowBack, Close, ArrowForward, ArrowBackIos } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface EventoDetalheProps {
    id: string;
}

const EventoDetalhe = ({ id }: EventoDetalheProps) => {
    const router = useRouter();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Dados do evento (exemplo)
    const evento = {
        id: parseInt(id),
        nome: "Evento Casa da Paz",
        data: "2024-03-15",
        local: "Casa da Paz",
        descricao: "Descrição detalhada do evento...",
        fotos: [
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
            '/imagens/casa-da-paz-home.jpg',
        ]
    };

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    const handleNextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % evento.fotos.length);
        }
    };

    const handlePreviousImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + evento.fotos.length) % evento.fotos.length);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => router.back()} sx={{ mr: 2 }} aria-label="voltar">
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

            <Typography variant="body1" sx={{ mb: 4 }}>
                {evento.descricao}
            </Typography>

            <Grid container spacing={2}>
                {evento.fotos.map((foto, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            onClick={() => handleImageClick(index)}
                            sx={{
                                cursor: 'pointer',
                                overflow: 'hidden',
                                '&:hover img': {
                                    transform: 'scale(1.1)',
                                },
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
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Modal
                open={selectedImageIndex !== null}
                onClose={handleCloseModal}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                closeAfterTransition
            >
                <Fade in={selectedImageIndex !== null}>
                    <Box
                        sx={{
                            position: 'relative',
                            maxWidth: '90%',
                            maxHeight: '90%',
                            outline: 'none',
                            boxShadow: 24,
                        }}
                    >
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                },
                            }}
                            aria-label="fechar"
                        >
                            <Close />
                        </IconButton>

                        {selectedImageIndex !== null && (
                            <>
                                <Box
                                    component="img"
                                    src={evento.fotos[selectedImageIndex]}
                                    alt="Foto em tamanho grande"
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        objectFit: 'contain',
                                        borderRadius: 2,
                                        boxShadow: 3,
                                    }}
                                />

                                {/* Botão de imagem anterior */}
                                <IconButton
                                    onClick={handlePreviousImage}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: 16,
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                    }}
                                    aria-label="anterior"
                                >
                                    <ArrowBackIos />
                                </IconButton>

                                {/* Botão de próxima imagem */}
                                <IconButton
                                    onClick={handleNextImage}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: 16,
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        },
                                    }}
                                    aria-label="próxima"
                                >
                                    <ArrowForward />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};

export default EventoDetalhe;
