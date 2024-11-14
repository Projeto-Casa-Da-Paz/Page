"use client";

import { useState, useEffect } from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Box } from '@mui/material';
import Link from 'next/link';

export default function Documentos() {
  const [documentos, setDocumentos] = useState<any[]>([]);

  useEffect(() => {
    const fetchDocumentosData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/documentos');
        const data = await response.json();
        setDocumentos(data);  // Armazena todos os documentos
      } catch (error) {
        console.error('Erro ao carregar documentos', error);
      }
    };

    fetchDocumentosData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {documentos.length > 0 ? (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Documentos
          </Typography>
          <Typography variant="body1" paragraph>
            Documentos Casa da Paz
          </Typography>

          <List>
            {documentos.map((documento) => (
              <ListItem key={documento.id}>
                <ListItemText
                  primary={documento.nome}
                  secondary={documento.documento}
                />
                {documento.id_diretorio && (
                  <Box sx={{ mt: 1 }}>
                    <Link
                      href={`/documentos/${documento.id_diretorio}`}  // Exemplo de link para abrir documento
                      passHref
                    >
                      <Typography variant="body2" color="primary">
                        Acessar Documento
                      </Typography>
                    </Link>
                  </Box>
                )}
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography variant="h6" align="center">
          Carregando documentos...
        </Typography>
      )}
    </Container>
  );
}
