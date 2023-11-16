// Ejemplo en una página específica, como HomePage.tsx
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

const HomePage = () => {
  const navigate = useNavigate();
  const handleGoToSurvey = () => {
    navigate('/survey');
  };
  return (
    <MainLayout>
      <h1>Bienvenido a Mi Aplicación</h1>
      <Button variant="contained" color="primary" onClick={handleGoToSurvey}>
        Take Quizz
      </Button>
    </MainLayout>
  );
};

export default HomePage;
