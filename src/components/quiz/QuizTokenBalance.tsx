import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchBalance } from 'wagmi/actions';

const QuizTokenBalance = ({ userAddress }) => {
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBalance = async () => {
      try {
        const balance = await fetchBalance({
          address: userAddress,
          chainId: 5,
          token: '0x437eF217203452317C3C955Cf282b1eE5F6aaF72',
        });
        setBalance(balance);
      } catch (error) {
        console.error('Error al obtener el saldo:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userAddress) {
      getBalance();
    }
  }, [userAddress]);

  if (loading) {
    return <Typography component="span">Loading...</Typography>;
  }

  return (
    <Box>
      {balance ? (
        <>
          <Typography component="span">
            {balance.symbol}: {balance.formatted}
          </Typography>
        </>
      ) : (
        <Typography component="span">0</Typography>
      )}
    </Box>
  );
};

export default QuizTokenBalance;
