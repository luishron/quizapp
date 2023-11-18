import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const QuestionTimer = ({ seconds, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [timeLeft, onTimeout]);

  const progress = (timeLeft / seconds) * 100;

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={progress} size={100} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h5" component="span" color="textSecondary">
          {timeLeft}s
        </Typography>
      </Box>
    </Box>
  );
};

export default QuestionTimer;
