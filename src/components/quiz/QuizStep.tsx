import { Box, Button } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
import useQuestions from '../../hooks/useQuestions';
import useQuiz from '../../hooks/useQuiz';
import NavigationButtons from './NavigationButtons';
import QuestionCard from './QuestionCard';
import QuizCard from './QuizCard';

const QuizStep = () => {
  const { data: quiz, isLoading, error } = useQuestions('bitcoin');

  const {
    currentQuestion,
    answers,
    quizStarted,
    handleNextQuestion,
    handlePreviousQuestion,
    handleAnswer,
    handleFinish,
    startQuiz,
    isLastQuestion,
    isFirstQuestion,
  } = useQuiz(quiz);

  if (isLoading) {
    return <div>Loading quiz...</div>;
  }

  if (error) {
    return <div>Error loading quiz: {error.message}</div>;
  }

  if (!quizStarted) {
    return (
      <QuizCard
        image={quiz?.image}
        title={quiz?.title}
        description={quiz?.description}
      >
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

  const currentQuestionData = quiz.questions[currentQuestion];

  return (
    <Box>
      <QuestionCard
        questionText={currentQuestionData.text}
        questionImage={currentQuestionData.image}
        options={currentQuestionData.options}
        answer={answers[currentQuestion]}
        onAnswerChange={handleAnswer}
        lifetimeSeconds={currentQuestionData.lifetimeSeconds}
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
