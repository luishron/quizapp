// hooks/useQuiz.js
import { useState } from 'react';

const useQuiz = (quiz) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizStarted, setQuizStarted] = useState(false);

  const handleNextQuestion = () => setCurrentQuestion((prev) => prev + 1);
  const handlePreviousQuestion = () => setCurrentQuestion((prev) => prev - 1);
  const handleAnswer = (answer) =>
    setAnswers({ ...answers, [currentQuestion]: answer });
  const handleFinish = () => console.log(answers);
  const startQuiz = () => setQuizStarted(true);

  const isLastQuestion = currentQuestion === quiz.questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;

  return {
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
  };
};

export default useQuiz;
