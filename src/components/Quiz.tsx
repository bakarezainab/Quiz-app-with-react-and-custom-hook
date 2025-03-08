import useQuiz from "../hooks/useQuiz";
import questions from "../data/question";
import Score from "./Score";

const Quiz = () => {
  const {
    currentQuestion,
    selectedAnswer,
    setSelectedAnswer,
    handleNext,
    handlePrev,
    isFinished,
    score,
  } = useQuiz(questions);

  if (isFinished) {
    return <Score score={score} totalQuestions={questions.length} />;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 shadow-xl rounded-xl border border-gray-700 relative">
      <h2 className="text-xl font-semibold text-center mb-4 text-white">Solidity Quiz</h2>
      <p className="text-sm text-gray-400 text-center">Question {currentQuestion + 1}/{questions.length}</p>
      <div className="mt-6">
        <p className="text-lg font-bold mb-4 text-white">{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={`block w-full py-3 px-5 my-2 text-left rounded-lg border transition-all duration-300 ${
              selectedAnswer === option
                ? "bg-pink-500 text-white border-pink-500 shadow-lg"
                : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="px-5 py-2 bg-gray-600 text-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-500"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;