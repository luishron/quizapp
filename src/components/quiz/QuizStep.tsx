import { Box, Button, Typography } from '@mui/material';
import { FaAngleRight } from 'react-icons/fa';
import useQuestions from '../../hooks/useQuestions';
import useQuiz from '../../hooks/useQuiz';
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
    showFinalView,
  } = useQuiz(quiz);
  const handleSubmit = () => {
    console.log('Enviar respuestas:', answers);
    // Aquí iría la lógica para enviar las respuestas
  };
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
      <Box>
        <Typography variant="h4">Resumen de Respuestas</Typography>
        {quiz.questions.map((question, index) => (
          <Box key={index}>
            <Typography variant="h6">{question.text}</Typography>
            <Typography variant="body1">
              Tu respuesta: {answers[index]}
            </Typography>
          </Box>
        ))}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Respuestas
        </Button>
      </Box>
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
