import { Button } from '@mui/material';
import { useConnect } from 'wagmi';

const ConnectButton = () => {
  const { connect, connectors, isLoading, pendingConnector } = useConnect();

  return (
    <>
      {connectors.map((connector) => (
        <Button
          variant="contained"
          color="secondary"
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </Button>
      ))}
    </>
  );
};

export default ConnectButton;
