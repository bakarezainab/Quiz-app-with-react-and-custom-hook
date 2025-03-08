import React from "react";
import Quiz from "./components/Quiz";
import "./index.css"

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Quiz />
    </div>
  );
};

export default App;