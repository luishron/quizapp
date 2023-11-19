import { Box, Typography } from '@mui/material';
import { useAccount, useNetwork } from 'wagmi';
import ConnectButton from '../components/common/ConnectButton';
import IconMetamask from '../components/common/IconMetamask';
import SwitchNetwork from '../components/common/SwitchNetwork';
import MainLayout from '../components/layout/MainLayout';
import QuizStep from '../components/quiz/QuizStep';

export const QuizView = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const isNetwork = chain?.id === 5;
  return (
    <MainLayout>
      <>
        {!isConnected && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <IconMetamask size="80" />
            <Typography variant="h5" component="p">
              Please connect your wallet Metamask
            </Typography>
            <ConnectButton />
          </Box>
        )}

        {isConnected && !isNetwork && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <IconMetamask size="80" />
            <Typography variant="h5" component="p">
              Please switch to the Goerli network
            </Typography>
            <SwitchNetwork />
          </Box>
        )}
        {isConnected && isNetwork && <QuizStep />}
      </>
    </MainLayout>
  );
};

export default QuizView;
