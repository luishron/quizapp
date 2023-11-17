import { Box, Typography, styled } from '@mui/material';
import { useAccount, useNetwork } from 'wagmi';
import ConnectButton from '../common/ConnectButton';
import SwitchNetwork from '../common/SwitchNetwork';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: '0.5em',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  minHeight: 'calc(80vh - 220px)',
}));

const SurveyContainer = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const isNetwork = chain?.id === 5;
  return (
    <Container>
      {!isConnected && (
        <>
          <Typography variant="subtitle1" component="p">
            Please connect your wallet
          </Typography>
          <ConnectButton />
        </>
      )}
      {/* check network */}
      {isConnected && !isNetwork && (
        <>
          <Typography variant="subtitle1" component="p">
            Please switch to the Goerli network
          </Typography>
          <SwitchNetwork />
        </>
      )}
      {isConnected && isNetwork && (
        <>
          <Typography variant="subtitle1" component="p">
            Survey
          </Typography>
        </>
      )}
    </Container>
  );
};

export default SurveyContainer;
