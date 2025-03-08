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
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-xl border border-gray-200 relative">
      <h2 className="text-xl font-semibold text-center mb-4">React Quiz</h2>
      <p className="text-sm text-gray-500 text-center">Question {currentQuestion + 1}/{questions.length}</p>
      <div className="mt-6">
        <p className="text-lg font-bold mb-4">{questions[currentQuestion].question}</p>
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={`block w-full py-3 px-5 my-2 text-left rounded-lg border transition-all duration-300 ${
              selectedAnswer === option
                ? "bg-blue-500 text-white border-blue-500 shadow-lg"
                : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
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
          className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;