import { Button, Typography } from '@mui/material';
import React from 'react';

type SurveyWelcomeProps = {
  title: string;
  image: string;
  starsuvery: boolean;
};

const SurveyWelcome: React.FC<SurveyWelcomeProps> = ({ title, image }) => {
  return (
    <>
      <Typography variant="h5" component="h2">
        {title}
      </Typography>
      <img src={image} alt="survey" />
      <Button variant="contained" color="secondary">
        Start survey
      </Button>
    </>
  );
};

export default SurveyWelcome;
