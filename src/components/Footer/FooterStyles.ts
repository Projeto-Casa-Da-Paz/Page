'use client'

import { SxProps } from '@mui/material';

export const footerStyles: SxProps = {
  backgroundColor: 'primary.main',
  color: 'white',
  py: 4,
  mt: 'auto',
  borderTop: '2px solid rgba(255, 255, 255, 0.2)',
};

export const containerStyles: SxProps = {
  textAlign: 'center',
};

export const typographyStyles: SxProps = {
  mb: 0,
  fontSize: { xs: '0.875rem', md: '1rem' },
};

export const linksContainerStyles: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'center',
  gap: 2,
};
