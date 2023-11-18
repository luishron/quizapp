import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import bitcoin from '../../data/survey/bitcoin.json';
import NavigationButtons from './NavigationButtons';
import QuestionCard from './QuestionCard';
import SurveyCard from './SurveyCard';

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
      <SurveyCard image={image} title={title} description={description}>
        <Button
          variant="contained"
          color="secondary"
          onClick={startSurvey}
          endIcon={<FaAngleRight />}
        >
          Start survey
        </Button>
      </SurveyCard>
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return (
    <Box>
      <QuestionCard
        questionText={currentQuestionData.text}
        questionImage={currentQuestionData.image}
        options={currentQuestionData.options}
        answer={answers[currentQuestion]}
        onAnswerChange={handleAnswer}
      />
      <NavigationButtons
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
        onPrevious={handlePreviousQuestion}
        onNext={handleNextQuestion}
        onFinish={handleFinish}
      />
    </Box>
  );
};

export default SurveyStep;
