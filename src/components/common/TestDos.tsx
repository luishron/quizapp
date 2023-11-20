import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { getContract, getWalletClient } from 'wagmi/actions';
import { contractABI } from '../../../public/abi/contractABI';

const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;

export const TestDos = () => {
  const [response, setResponse] = useState('');
  const [contractInstance, setContractInstance] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const surveyId = 1;
  const answerIds = [1, 2, 3];

  const initContract = async () => {
    const walletClient = await getWalletClient({
      chainId: 5,
    });
    const contractInstance = getContract({
      address: contractAddress,
      abi: contractABI,
      walletClient,
    });
    setContractInstance(contractInstance);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await initContract();
    if (!contractInstance) {
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

  console.log({ response });
  return (
    <Box>
      <button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Enviando...' : 'Enviar Respuesta'}
      </button>

      {response && (
        <>
          <Typography variant="h6">Transaction send successfully!</Typography>
        </>
      )}
    </Box>
  );
};
