'use client'

import { SxProps } from '@mui/material';

export const footerStyles: SxProps = {
  backgroundColor: 'primary.main',
  color: 'white',
  py: 2, // Reduzido padding
  mt: 'auto',
  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
};

export const containerStyles: SxProps = {
  textAlign: 'center',
};

export const typographyStyles: SxProps = {
  mb: 1,
  fontSize: { xs: '0.75rem', md: '0.875rem' }, // Fonte mais compacta
};

export const linksContainerStyles: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'center',
  gap: 1, // Menor espaço entre links
  mt: 1,
};
