import styled from '@emotion/styled';
import { IconButton } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { MdLogout } from 'react-icons/md';
import { useDisconnect } from 'wagmi';
import theme from '../../theme/theme';

const DisconnectIcon = styled(IconButton)(({ theme }: { theme: Theme }) => ({
  color: theme.palette.primary.light,
}));
const DisconnectButton = () => {
  const { disconnect } = useDisconnect();
  return (
    <DisconnectIcon
      theme={theme}
      aria-label="delete"
      color="primary"
      onClick={() => disconnect()}
    >
      <MdLogout />
    </DisconnectIcon>
  );
};

export default DisconnectButton;
