import { Button } from '@mui/material';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import useQuestions from '../../hooks/useQuestions';
import QuizCard from './QuizCard';

const QuizStep = () => {
  const { data: quiz, isLoading, error } = useQuestions('bitcoin');
  // const { title, image, description, questions } = bitcoin;
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

  // if (!quizStarted) {
  return (
    <QuizCard
      image={quiz.image}
      title={quiz.title}
      description={quiz.description}
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
};

//   const currentQuestionData = questions[currentQuestion];
//   const isLastQuestion = currentQuestion === questions.length - 1;
//   const isFirstQuestion = currentQuestion === 0;

//   return (
//     <Box>
//       <QuestionCard
//         questionText={currentQuestionData.text}
//         questionImage={currentQuestionData.image}
//         options={currentQuestionData.options}
//         answer={answers[currentQuestion]}
//         onAnswerChange={handleAnswer}
//       />
//       <NavigationButtons
//         isFirstQuestion={isFirstQuestion}
//         isLastQuestion={isLastQuestion}
//         onPrevious={handlePreviousQuestion}
//         onNext={handleNextQuestion}
//         onFinish={handleFinish}
//       />
//     </Box>
//   );
// };

export default QuizStep;
