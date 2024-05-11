import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAccountMenuOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenuOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/home" onClick={handleMenuClose}>
            <ListItemIcon>
              <HomeIcon fontSize="small" />
            </ListItemIcon>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/statistics" onClick={handleMenuClose}>
            <ListItemIcon>
              <BarChartIcon fontSize="small" />
            </ListItemIcon>
            Statistics
          </MenuItem>
          <MenuItem
            aria-haspopup="true"
            onClick={handleAccountMenuOpen}
          >
            <ListItemIcon>
              <AccountCircleIcon fontSize="small" />
            </ListItemIcon>
            My Account
          </MenuItem>
        </Menu>
        <Menu
          id="account-menu"
          anchorEl={accountAnchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(accountAnchorEl)}
          onClose={handleAccountMenuClose}
        >
          <MenuItem component={Link} to="/register" onClick={handleAccountMenuClose}>
            <ListItemIcon>
              <AssignmentIcon fontSize="small" />
            </ListItemIcon>
            Register
          </MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleAccountMenuClose}>
            <ListItemIcon>
              <LoginIcon fontSize="small" />
            </ListItemIcon>
            Login
          </MenuItem>
        </Menu>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          LinkSlice
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
