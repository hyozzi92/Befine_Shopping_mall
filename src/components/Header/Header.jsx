import * as React from 'react';
import './Header.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';

const pages = ['Jacket', 'Top', 'Bottom', 'Hats', 'Accessories'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Token = localStorage.setItem('token', '김효성');

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <StyledToolBar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Befine
          </Typography>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              // justifyContent: 'space-around',
            }}
          >
            {pages.map(page => (
              <Button
                key={page}
                onClick={() => {
                  navigate(`/${page}`);
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Login>
            <li
              // className={token ? 'hide' : ''}
              onClick={() => navigate('/login')}
            >
              로그인
            </li>
            <li
              // className={token ? 'hide' : ''}
              onClick={() => navigate('/signup')}
            >
              회원가입
            </li>
            <div onClick={() => navigate('/cart')}>
              <ShoppingCartIcon />
            </div>
          </Login>
          {/* <Box sx={{}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </StyledToolBar>
      </Container>
    </StyledAppBar>
  );
};
export default Header;

const StyledAppBar = styled(AppBar)`
  && {
    display: flex;
    justify-content: space-around;
    background-color: #1f1f1f;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }
`;
const StyledToolBar = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-around;
  }
`;

const Login = styled.div`
  display: flex;
  list-style: none;
  width: 200px;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
`;
