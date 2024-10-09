import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import '../styles/premios.css';

// Array de imagens de prêmios (substitua com seus próprios dados)
const itemData = [
    {
        img: 'https://via.placeholder.com/400x300?text=Premio+Impulso',
        title: 'Prêmio Impulso',
        subtitle: 'Categoria Gestão',
        rows: 2,
        cols: 2,
        featured: true,
    },
    {
        img: 'https://via.placeholder.com/300x200?text=Premio+2',
        title: 'Prêmio 2',
        subtitle: 'Categoria X',
    },
    {
        img: 'https://via.placeholder.com/300x200?text=Premio+3',
        title: 'Prêmio 3',
        subtitle: 'Categoria Y',
    },
    {
        img: 'https://via.placeholder.com/300x200?text=Premio+4',
        title: 'Prêmio 4',
        subtitle: 'Categoria Z',
        cols: 2,
    },
    {
        img: 'https://via.placeholder.com/300x200?text=Premio+5',
        title: 'Prêmio 5',
        subtitle: 'Categoria W',
        cols: 2,
    },
    {
        img: 'https://via.placeholder.com/400x300?text=Premio+6',
        title: 'Prêmio 6',
        subtitle: 'Categoria V',
        rows: 2,
        cols: 2,
        featured: true,
    },
];

export default function Premios() {
    return (
        <>
            <Container maxWidth="md" className="premios-container">
                <Box my={4}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Prêmios
                    </Typography>
                </Box>

                {/* Seção de descrição */}
                <Paper elevation={3} className="premios-content">
                    <Box p={3}>
                        <Typography variant="body1" paragraph>
                            Ao longo dos anos a Casa da Paz recebeu diversos prêmios e títulos, reconhecendo nosso compromisso e dedicação. Abaixo, apresentamos alguns destes reconhecimentos:
                        </Typography>
                    </Box>
                </Paper>

                <Box my={4}>
                    <Divider />
                </Box>

                {/* Seção da galeria */}
                <Paper elevation={3} className="premios-gallery">
                    <Box p={3}>
                        <ImageList sx={{ width: '100%', height: 650 }}>
                            <ImageListItem key="Subheader" cols={2}>
                                <ListSubheader component="div">Galeria de Prêmios</ListSubheader>
                            </ImageListItem>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Paper>
            </Container>

            {/* Footer */}
            <footer className='premios-footer'>
                <p>
                    Desenvolvido por: Daniel Olvieira | Felipe | João Gabryel | UniAlfa
                </p>
            </footer>
        </>
    );
}