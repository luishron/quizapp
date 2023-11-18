import { Box, Typography } from '@mui/material';
import { useAccount, useNetwork } from 'wagmi';
import ConnectButton from '../components/common/ConnectButton';
import SwitchNetwork from '../components/common/SwitchNetwork';
import MainLayout from '../components/layout/MainLayout';
import QuizStep from '../components/quiz/QuizStep';

export const Quiz = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const isNetwork = chain?.id === 5;
  return (
    <MainLayout>
      <>
        {!isConnected && (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" component="p">
              Please connect your wallet
            </Typography>
            <ConnectButton />
          </Box>
        )}

        {isConnected && !isNetwork && (
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="subtitle1" component="p">
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

export default Quiz;