"use client";

import { Container, Typography, Paper } from '@mui/material';

export default function Historia() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    História
                </Typography>
                <Typography variant="body1" paragraph>
                    História da Casa Da Paz
                </Typography>
            </Paper>
        </Container>
    );
}
