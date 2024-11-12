"use client";
import React, { useState, useEffect } from 'react';
import {
    Container,
    Typography,
    Grid,
    Box,
    IconButton,
    Card,
    Modal,
    Fade,
    CircularProgress,
    Alert
} from '@mui/material';
import { ArrowBack, Close, ArrowForward, ArrowBackIos } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

interface EventoDetalheProps {
    id: string;
}

interface Galeria {
    id: number;
    nome: string;
    data: string;
    local: string;
    qtd_fotos: number;
    created_at: string;
    updated_at: string;
}

interface Foto {
    id: number;
    id_galeria: number;
    nome: string;
    file: string;
    created_at: string;
    updated_at: string;
}

const EventoDetalhe = ({ id }: EventoDetalheProps) => {
    const router = useRouter();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [galeria, setGaleria] = useState<Galeria | null>(null);
    const [fotos, setFotos] = useState<Foto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGaleriaEFotos = async () => {
            try {
                // Buscar dados da galeria
                const galeriaResponse = await fetch(`http://127.0.0.1:8000/api/galerias/${id}`);
                if (!galeriaResponse.ok) {
                    throw new Error('Falha ao carregar os dados do evento');
                }
                const galeriaData = await galeriaResponse.json();
                setGaleria(galeriaData);

                // Buscar fotos da galeria
                const fotosResponse = await fetch(`http://127.0.0.1:8000/api/galerias/${id}/fotos`);
                if (!fotosResponse.ok) {
                    throw new Error('Falha ao carregar as fotos do evento');
                }
                const fotosData = await fotosResponse.json();
                setFotos(fotosData);

                setError(null);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Erro ao carregar o evento');
            } finally {
                setLoading(false);
            }
        };

        fetchGaleriaEFotos();
    }, [id]);

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImageIndex(null);
    };

    const handleNextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % fotos.length);
        }
    };

    const handlePreviousImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + fotos.length) % fotos.length);
        }
    };

    if (loading) {
        return (
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
                <CircularProgress />
            </Container>
        );
    }

    if (error || !galeria) {
        return (
            <Container sx={{ py: 4 }}>
                <Alert severity="error">{error || 'Evento não encontrado'}</Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => router.back()} sx={{ mr: 2 }} aria-label="voltar">
                    <ArrowBack />
                </IconButton>
                <Box>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {galeria.nome}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {new Date(galeria.data).toLocaleDateString()} - {galeria.local}
                    </Typography>
                </Box>
            </Box>

            <Grid container spacing={2}>
                {fotos.map((foto, index) => (
                    <Grid item xs={12} sm={6} md={4} key={foto.id}>
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
                                src={foto.file}
                                alt={`Foto ${index + 1} do ${galeria.nome}`}
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

                        {selectedImageIndex !== null && fotos[selectedImageIndex] && (
                            <>
                                <Box
                                    component="img"
                                    src={fotos[selectedImageIndex].file}
                                    alt={`Foto ${selectedImageIndex + 1} do ${galeria.nome}`}
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        maxHeight: '80vh',
                                        objectFit: 'contain',
                                        borderRadius: 2,
                                        boxShadow: 3,
                                    }}
                                />

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