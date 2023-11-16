import styled from '@emotion/styled';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import { useAccount, useNetwork } from 'wagmi';
import theme from '../../theme/theme';
import DisconnectButton from './DisconnectButton';
import Logo from './Logo';

const Navbar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: 'none',
}));

const Header = () => {
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();

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
          <Box>
            <Typography>{address}</Typography>
            <DisconnectButton />
          </Box>
        ) : (
          ''
        )}
      </Toolbar>
    </Navbar>
  );
};

export default Header;
