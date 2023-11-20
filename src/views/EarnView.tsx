import { Box, Card, CardContent, Typography } from '@mui/material';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { useAccount, useNetwork } from 'wagmi';
import ConnectButton from '../components/common/ConnectButton';
import IconMetamask from '../components/common/IconMetamask';
import SwitchNetwork from '../components/common/SwitchNetwork';
import MainLayout from '../components/layout/MainLayout';
import QuizTokenBalance from '../components/quiz/QuizTokenBalance';

export const EarnView = () => {
  const { chain } = useNetwork();
  const { address, isConnected } = useAccount();
  const isNetwork = chain?.id === 5;
  useEffect(() => {
    const fireConfetti = () => {
      confetti({
        particleCount: 250,
        spread: 500,
        origin: { y: 0.0 },
        colors: ['#1fc7d4', '#fff'],
        scalar: 1.2,
        zIndex: 1000,
      });
    };

    fireConfetti();
  }, []);

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
        {isConnected && isNetwork && (
          <Card>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Typography variant="h3" component="h2" color="primary">
                Congratuliations!
              </Typography>
              <Typography variant="body1">
                You have earned 1 Quiz token!
                <QuizTokenBalance userAddress={address} />
              </Typography>
            </CardContent>
          </Card>
        )}
      </>
    </MainLayout>
  );
};

export default EarnView;
