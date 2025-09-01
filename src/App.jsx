import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
 import "./App.css";


function App() {
  const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Capital of France?", options: ["London", "Berlin", "Paris", "Rome"], answer: "Paris" },
    { question: "Which language is used for web apps?", options: ["Python", "C++", "React", "Java"], answer: "React" },
    { question: "What is acrophobia a fear of? ", options: ["Water", "Fire", "Animal", "Height"], answer: "Height" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Quiz
          question={questions[currentQuestion]}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
