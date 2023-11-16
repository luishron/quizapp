import { useAccount, useConnect, useDisconnect } from 'wagmi';
import SwitchNetwork from './SwitchNetwork';
const Profile = () => {
  const { address, isConnected } = useAccount();

  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div>
        <SwitchNetwork />
        <div>{address}</div>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
  }

  return (
    <>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </>
  );
};

export default Profile;
