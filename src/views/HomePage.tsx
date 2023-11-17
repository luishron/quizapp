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
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          p: 2,
        }}
      >
        <Box
          sx={{
            mb: { xs: 2, md: 0 },
            mr: { md: 2 },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold' }}>
            Answer and Earn with QuizDapp
          </Typography>
          <Typography variant="h6" component="p" sx={{ my: 3 }}>
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
        <Box
          sx={{
            height: 'auto',
            maxWidth: '100%',
            overflow: 'hidden',
          }}
        >
          <img
            src="./img/home.png"
            alt="QuizDapp"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
