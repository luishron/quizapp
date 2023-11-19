import styled from '@emotion/styled';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Theme } from '@mui/material/styles';
import { useAccount, useNetwork } from 'wagmi';
import theme from '../../theme/theme';
import AccountControl from './AccountControl';
import Logo from './Logo';

const Navbar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const Header = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();

  const isNetwork = chain?.id === 5;

  return (
    <Navbar theme={theme} position="static">
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Logo />
        {isConnected && isNetwork ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <AccountControl />
          </Box>
        ) : (
          ''
        )}
      </Toolbar>
    </Navbar>
  );
};

export default Header;
