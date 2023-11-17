// Ejemplo en una página específica, como HomePage.tsx
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomePage = () => {
  const navigate = useNavigate();
  const handleGoToSurvey = () => {
    navigate('/survey');
  };
  return (
    <MainLayout>
      <Box>
        <Typography variant="h2" component="h1">
          Answer and Earn with QuizDapp
        </Typography>
        <Typography variant="h6" component="p">
          Take Quizzes, Earn Tokens, and Learn About Your Favorite Projects
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleGoToSurvey}
        >
          Get Started
        </Button>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
