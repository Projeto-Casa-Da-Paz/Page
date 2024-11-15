"use client";

import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationItems = [
  { text: 'Inicio', href: '/' },
  {
    text: 'Casa da Paz',
    submenu: [
      { text: 'Contato', href: '/casa-da-paz/contato' },
      { text: 'Prêmios', href: '/casa-da-paz/premios' },
    ]
  },
  {
    text: 'Como Ajudar',
    submenu: [
      { text: 'Doações', href: '/como-ajudar/doacoes' },
      { text: 'Voluntários', href: '/como-ajudar/voluntarios' },
    ]
  },
  {
    text: 'Eventos',
    submenu: [
      { text: 'Bazar', href: '/eventos/bazar' },
      { text: 'Galeria', href: '/eventos/galeria' },
    ]
  },
  {
    text: 'Sobre',
    submenu: [
      { text: 'História', href: '/sobre/historia' },
      { text: 'Parceiros', href: '/sobre/parceiros' },
      { text: 'Colaboradores', href: 'sobre/colaboradores'}
    ]
  }
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>, itemText: string) => {
    setAnchorEl(event.currentTarget);
    setOpenSubMenu(itemText);
  };

  const handleSubMenuClose = () => {
    setAnchorEl(null);
    setOpenSubMenu(null);
  };

  const drawer = (
    <List>
      {navigationItems.map((item) => (
        item.submenu ? (
          <React.Fragment key={item.text}>
            <ListItem
              onMouseEnter={(e) => handleSubMenuOpen(e, item.text)}
              onMouseLeave={handleSubMenuClose}
            >
              <ListItemText primary={item.text} />
            </ListItem>
            <Menu
              anchorEl={anchorEl}
              open={openSubMenu === item.text}
              onClose={handleSubMenuClose}
              MenuListProps={{
                onMouseLeave: handleSubMenuClose,
              }}
            >
              {item.submenu.map((subItem) => (
                <MenuItem
                  key={subItem.text}
                  component={Link}
                  href={subItem.href}
                  onClick={handleSubMenuClose}
                >
                  {subItem.text}
                </MenuItem>
              ))}
            </Menu>
          </React.Fragment>
        ) : (
          <ListItem
            key={item.text}
            component={Link}
            href={item.href}
            sx={{
              ...(pathname === item.href && {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              }),
            }}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        )
      ))}
    </List>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Casa da Paz
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navigationItems.map((item) => (
                item.submenu ? (
                  <div
                    key={item.text}
                    onMouseEnter={(e) => handleSubMenuOpen(e, item.text)}
                    onMouseLeave={handleSubMenuClose}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        backgroundColor: openSubMenu === item.text ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                      }}
                    >
                      {item.text}
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={openSubMenu === item.text}
                      onClose={handleSubMenuClose}
                      MenuListProps={{
                        onMouseLeave: handleSubMenuClose,
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <MenuItem
                          key={subItem.text}
                          component={Link}
                          href={subItem.href}
                          onClick={handleSubMenuClose}
                        >
                          {subItem.text}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                ) : (
                  <Button
                    key={item.text}
                    color="inherit"
                    component={Link}
                    href={item.href}
                    sx={{
                      backgroundColor: pathname === item.href ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    }}
                  >
                    {item.text}
                  </Button>
                )
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
}