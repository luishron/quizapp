import { Button } from '@mui/material';
import { FaWallet } from 'react-icons/fa';
import { useConnect } from 'wagmi';

const ConnectButton = () => {
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  return (
    <>
      {connectors.map((connector) => (
        <Button
          variant="contained"
          color="primary"
          disabled={!connector.ready}
          key={connector.id}
          startIcon={<FaWallet color="primary" size="18px" />}
          onClick={() => connect({ connector })}
        >
          {'Connect Wallet'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </Button>
      ))}
    </>
  );
};

export default ConnectButton;
