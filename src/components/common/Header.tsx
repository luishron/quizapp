import styled from '@emotion/styled';
import { Box, Chip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Theme } from '@mui/material/styles';
import { useAccount, useNetwork } from 'wagmi';
import theme from '../../theme/theme';
import { shortenAddress } from '../../utils/shortenAddress';
import DisconnectButton from './DisconnectButton';
import Logo from './Logo';

const Navbar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.secondary.main,
  boxShadow: 'none',
}));

const ChipAddress = styled(Chip)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.secondary.light,
  color: theme.palette.text.primary,
}));

const Header = () => {
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();

  const isNetwork = chain?.id === 5;

  const shortAddress = shortenAddress(address);

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
            <ChipAddress theme={theme} label={shortAddress} />
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
