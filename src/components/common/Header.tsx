// src/components/common/Header/Header.tsx
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './Logo';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
