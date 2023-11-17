import { Box, Typography, styled } from '@mui/material';
import { useAccount, useNetwork } from 'wagmi';
import ConnectButton from '../common/ConnectButton';
import SwitchNetwork from '../common/SwitchNetwork';
import SurveyStep from './SurveyStep';

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  padding: theme.spacing(3),
  borderRadius: '0.5em',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  minHeight: 'calc(80vh - 220px)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

const SurveyContainer = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const isNetwork = chain?.id === 5;
  return (
    <Container>
      {!isConnected && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" component="p">
            Please connect your wallet
          </Typography>
          <ConnectButton />
        </Box>
      )}
      {/* check network */}
      {isConnected && !isNetwork && (
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1" component="p">
            Please switch to the Goerli network
          </Typography>
          <SwitchNetwork />
        </Box>
      )}
      {isConnected && isNetwork && <SurveyStep />}
    </Container>
  );
};

export default SurveyContainer;
