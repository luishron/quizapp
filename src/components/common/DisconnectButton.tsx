import { IconButton } from '@mui/material';
import { MdLogout } from 'react-icons/md';
import { useDisconnect } from 'wagmi';

const DisconnectButton = () => {
  const { disconnect } = useDisconnect();
  return (
    <IconButton aria-label="delete" onClick={() => disconnect()}>
      <MdLogout />
    </IconButton>
  );
};

export default DisconnectButton;
