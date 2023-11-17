import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import bitcoin from '../../data/survey/bitcoin.json';

const SurveyStep = () => {
  const { title, image, description, questions } = bitcoin;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [surveyStarted, setSurveyStarted] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleFinish = () => {
    console.log(answers);
  };

  const startSurvey = () => {
    setSurveyStarted(true);
  };

  if (!surveyStarted) {
    return (
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          alt="Survey Image"
          image={image}
          style={{ width: 'auto', height: '350px' }}
          title={title}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={startSurvey}
            endIcon={<FaAngleRight />}
          >
            Start survey
          </Button>
        </CardActions>
      </Card>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <Card>
      <CardMedia
        component="img"
        alt={currentQuestionData.text}
        image={currentQuestionData.image}
        style={{ width: 'auto', height: '350px' }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {currentQuestionData.text}
        </Typography>
        <RadioGroup
          value={answers[currentQuestion]}
          onChange={(e) => handleAnswer(e.target.value)}
        >
          {currentQuestionData.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option.text}
              control={<Radio />}
              label={option.text}
            />
          ))}
        </RadioGroup>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        {!isFirstQuestion && (
          <Button
            variant="outlined"
            color="primary"
            onClick={handlePreviousQuestion}
            startIcon={<FaAngleLeft />}
          >
            Previous
          </Button>
        )}
        {!isLastQuestion ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
            endIcon={<FaAngleRight />}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={handleFinish}
            endIcon={<FaAngleRight />}
          >
            Finish
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default SurveyStep;
