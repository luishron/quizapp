import styled from '@emotion/styled';
import { Box, Button, Theme, Typography } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { TestDos } from '../components/common/TestDos';
import MainLayout from '../components/layout/MainLayout';
import theme from '../theme/theme';

export const StyledTitle = styled(Typography)(
  ({ theme }: { theme: Theme }) => ({
    fontWeight: 'bold',
    fontSize: '4rem',
    lineHeight: '4.5rem',
    background: `linear-gradient(45deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  })
);

const StyledSubTitle = styled(Typography)({
  fontSize: '2rem',
  lineHeight: '2.5rem',
  padding: '1.5rem 0',
});

const HomeView = () => {
  const navigate = useNavigate();
  const handleGoToQuiz = () => {
    navigate('/quiz');
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
          <StyledTitle theme={theme}>Answer and Earn with QuizDapp</StyledTitle>
          <StyledSubTitle theme={theme}>
            Take Quizzes, Earn Tokens, and Learn About Your Favorite Projects
          </StyledSubTitle>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<FaAngleRight />}
            onClick={handleGoToQuiz}
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
      <Typography variant="caption" color="text.secondary">
        <TestDos />
      </Typography>
    </MainLayout>
  );
};

export default HomeView;
