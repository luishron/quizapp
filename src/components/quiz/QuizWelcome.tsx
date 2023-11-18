import { Button, Typography } from '@mui/material';
import React from 'react';

type QuizWelcomeProps = {
  title: string;
  image: string;
  starsuvery: boolean;
};

const QuizWelcome: React.FC<QuizWelcomeProps> = ({ title, image }) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <img src={image} alt={title} />
      <Button variant="contained" color="secondary">
        Start Quiz
      </Button>
    </>
  );
};

export default QuizWelcome;
