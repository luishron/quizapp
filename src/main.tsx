import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import App from './App.tsx';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: 'yourAlchemyApiKey' }), publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>
);
