import { useState } from "react";

const useQuiz = (questions: { question: string; options: string[]; correctAnswer: string }[]) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const setSelectedAnswer = (answer: string) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestion] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestion] === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return {
    currentQuestion,
    selectedAnswer: selectedAnswers[currentQuestion],
    setSelectedAnswer,
    handleNext,
    handlePrev,
    isFinished,
    score,
    questions,
  };
};

export default useQuiz;