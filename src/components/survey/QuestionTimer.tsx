import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const QuestionTimer = ({ seconds, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          clearInterval(timerInterval);
          onTimeout();
        }
        return newTime;
      });
    }, 1000);

    const progressInterval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(progressInterval);
        }
        return Math.min(oldProgress + 100 / seconds, 100);
      });
    }, (1000 * seconds) / 100);

    return () => {
      clearInterval(timerInterval);
      clearInterval(progressInterval);
    };
  }, [seconds, onTimeout]);

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
          {timeLeft}
          {'s '}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuestionTimer;
