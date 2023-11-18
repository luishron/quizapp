import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import bitcoin from '../../data/quiz/bitcoin.json';
import NavigationButtons from './NavigationButtons';
import QuestionCard from './QuestionCard';
import QuizCard from './QuizCard';

const QuizStep = () => {
  const { title, image, description, questions } = bitcoin;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);

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

  const startQuiz = () => {
    setQuizStarted(true);
  };

  if (!quizStarted) {
    return (
      <QuizCard image={image} title={title} description={description}>
        <Button
          variant="contained"
          color="secondary"
          onClick={startQuiz}
          endIcon={<FaAngleRight />}
        >
          Start quiz
        </Button>
      </QuizCard>
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

export default QuizStep;
