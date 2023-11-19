import styled from '@emotion/styled';
import { Box, Chip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Theme } from '@mui/material/styles';
import { useAccount, useNetwork } from 'wagmi';
import theme from '../../theme/theme';
import { shortenAddress } from '../../utils/shortenAddress';
import AccountControl from './AccountControl';
import Logo from './Logo';

const Navbar = styled(AppBar)(({ theme }: { theme: Theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledChip = styled(Chip)(({ theme }: { theme: Theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.background.default,
  fontWeight: 'bold',
  fontSize: '.8rem',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
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
