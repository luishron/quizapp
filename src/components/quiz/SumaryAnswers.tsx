import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useSubmitContract from '../../hooks/useSubmitContract';
import CountdownTimer from '../common/CountdownTimer';

const SumaryAnswers = ({ quiz, answers }) => {
  const theme = useTheme();
  const answersArray = Object.keys(answers).map((key) => parseInt(key));

  const {
    response,
    isSubmitting,
    handleSubmit: handleSubmitAnwers,
  } = useSubmitContract(quiz.id, answersArray);

  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const cardStyle = {
    display: 'flex',
    flexDirection: isMobileOrTablet ? 'column-reverse' : 'row',
    position: 'relative',
  };

  const isResult = Object.keys(answers).length === quiz.questions.length;
  const handleSubmit = () => {
    handleSubmitAnwers();
    if (response) {
      navigate('/quiz/earn');
    }
  };
  return (
    <Card sx={cardStyle}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1rem',
          width: isMobileOrTablet ? 'auto' : '50%',
          height: isMobileOrTablet ? '100%' : 'auto',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Typography variant="h4" component="h2" color="primary">
            Summary of Answers
          </Typography>
          {quiz.questions.map((question, index) => (
            <Box key={index}>
              <Typography
                variant="h6"
                component="h3"
                color={theme.palette.text.primary}
              >
                {question.text}
              </Typography>
              <Typography variant="body1" color={theme.palette.text.secondary}>
                {answers[index] ? answers[index] : 'No answer'}
              </Typography>
            </Box>
          ))}
          <Box>
            {isResult ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Answers'}
              </Button>
            ) : (
              <CountdownTimer />
            )}
          </Box>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        alt={`Image for ${quiz.title}`}
        image="./img/answers.png"
        sx={{
          background: 'rgba(0,0,0,0.2)',
          width: isMobileOrTablet ? 'auto' : '50%',
          height: isMobileOrTablet ? '100%' : 'auto',
        }}
      />
    </Card>
  );
};

export default SumaryAnswers;
