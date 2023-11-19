import { Box, Button } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import useQuiz from '../../hooks/useQuiz';
import QuestionCard from './QuestionCard';
import QuizCard from './QuizCard';
import SumaryAnswers from './SumaryAnswers';

const QuizStep = () => {
  const { data: quiz, isLoading, error } = useQuestions('bitcoin');

  const navigate = useNavigate();
  const handleGoToEarn = () => {
    navigate('/quiz');
  };

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
    showFinalView,
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

  const handleTimeout = () => {
    if (!isLastQuestion) {
      handleNextQuestion();
    } else {
      handleFinish();
    }
  };

  if (showFinalView) {
    // Renderizar la vista final
    return (
      <>
        <SumaryAnswers quiz={quiz} answers={answers} />
      </>
    );
  }
  return (
    <Box>
      <QuestionCard
        key={`question-${currentQuestion}`}
        questionText={currentQuestionData.text}
        questionImage={currentQuestionData.image}
        options={currentQuestionData.options}
        answer={answers[currentQuestion]}
        onAnswerChange={handleAnswer}
        lifetimeSeconds={currentQuestionData.lifetimeSeconds}
        onTimeout={handleTimeout}
      />
    </Box>
  );
};

export default QuizStep;
