import { useQuery } from '@tanstack/react-query';
import { getQuiz } from '../quizzes/getQuiz';

const useQuestions = (quizName) => {
  return useQuery({
    queryKey: [quizName],
    queryFn: () => getQuiz(quizName),
    // Aquí puedes agregar otras opciones como staleTime, cacheTime, etc.
  });
};

export default useQuestions;
