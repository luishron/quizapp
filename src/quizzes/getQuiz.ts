export const getQuiz = async (quizName) => {
  try {
    const quiz = await import(`../quizzes/data/${quizName}.json`);
    return quiz.default; // Asegúrate de devolver los datos del módulo correctamente
  } catch (error) {
    console.error('Error al cargar el quiz:', error);
    return null;
  }
};
