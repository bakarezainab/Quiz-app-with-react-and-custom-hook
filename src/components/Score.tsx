import React from "react";

interface ScoreProps {
  score: number;
  totalQuestions: number;
}

const Score: React.FC<ScoreProps> = ({ score, totalQuestions }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 shadow-lg rounded-md text-center">
      <h2 className="text-2xl font-semibold text-white">Your Score</h2>
      <div className="w-24 h-24 bg-pink-500 text-white flex items-center justify-center text-3xl font-bold mx-auto mt-4">
        {score}/{totalQuestions}
      </div>
      {score >= 6 ? (
        <p className="text-lg mt-4 font-semibold text-gray-300">Congratulation, you are champion</p>
      ) : (
        <p className="text-lg mt-4 font-semibold text-gray-300">Olodo</p>
      )}
    </div>
  );
};

export default Score;