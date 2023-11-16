import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Theme } from '@mui/material/styles';
import theme from '../../theme/theme';
import Logo from './Logo';

const Navbar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: 'none',
}));

const Header = () => {
  return (
    <Navbar theme={theme} position="static">
      <Toolbar>
        <Logo />
      </Toolbar>
    </Navbar>
  );
};

export default Header;
