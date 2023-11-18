import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '../quizzes/getQuiz';

const useQuestions = (quizName) => {
  return useQuery({
    queryKey: [quizName],
    queryFn: () => getQuiz(quizName),
  });
};

export default useQuestions;
