import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { numQuestions, dispatch } = useQuiz();

  return (
    <div className="start">
      <h2>Bem vindo ao Quis do Harry Potter</h2>
      <h3>{numQuestions} perguntas para testar o seu conhecimento.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Vamos Começar
      </button>
    </div>
  );
}

export default StartScreen;
