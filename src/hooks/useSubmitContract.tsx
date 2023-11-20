import { useState } from 'react';
import { getContract, getWalletClient } from 'wagmi/actions';
import { contractABI } from '../../public/abi/contractABI';

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

const useSubmitContract = (surveyId, answerIds) => {
  const [response, setResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contractInstance, setContractInstance] = useState(null);

  const initContract = async () => {
    const walletClient = await getWalletClient({ chainId: 5 });
    const contract = getContract({
      address: contractAddress,
      abi: contractABI,
      walletClient,
    });
    setContractInstance(contract);
    return contract;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const contract = await initContract();

    if (!contract) {
      console.log('Contrato no inicializado');
      setIsSubmitting(false);
      return;
    }

    try {
      const tx = await contractInstance.write.submit([surveyId, answerIds]);
      setResponse(tx);
    } catch (error) {
      console.error('Error al enviar la respuesta:', error);
      setResponse('Error al enviar la respuesta');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { response, isSubmitting, handleSubmit };
};

export default useSubmitContract;
