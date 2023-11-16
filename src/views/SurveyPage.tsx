import { useAccount, useNetwork } from 'wagmi';
import ConnectButton from '../components/common/ConnectButton';
import SwitchNetwork from '../components/common/SwitchNetwork';
import MainLayout from '../components/layout/MainLayout';

const SurveyPage = () => {
  const { chain } = useNetwork();
  const { isConnected } = useAccount();
  const isNetwork = chain?.id === 5;
  return (
    <MainLayout>
      <h1>Survey</h1>

      {!isConnected && <ConnectButton />}
      {isConnected && !isNetwork && <SwitchNetwork />}
    </MainLayout>
  );
};

export default SurveyPage;
