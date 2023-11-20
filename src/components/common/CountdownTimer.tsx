import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaStopwatch } from 'react-icons/fa';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60 * 1000);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1000);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / (60 * 60 * 1000));
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        borderTop: '1px solid rgba(0, 0, 0, 0.5)',
        marginTop: '1rem',
        paddingTop: '1rem',
      }}
    >
      <Typography
        variant="h6"
        component="p"
        sx={{ color: 'text.secondary', fontWeight: 'bold' }}
      >
        Your quiz is incomplete. Feel free to try again when you're ready!
      </Typography>
      <Chip
        label={`Time left: ${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        color="primary"
        icon={<FaStopwatch />}
        sx={{
          color: 'white',
          backgroundColor: 'secondary.main',
          fontSize: '1rem',
          padding: '10px',
        }}
      />
    </Box>
  );
};

export default CountdownTimer;
