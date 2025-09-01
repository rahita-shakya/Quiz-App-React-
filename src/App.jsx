import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
import "./App.css";

function App() {
  const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "Capital of France?", options: ["London", "Berlin", "Rome", "Paris"], answer: "Paris" },
    { question: "Which language is used for web apps?", options: ["Python", "C++", "React", "Java"], answer: "React" }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]); // ✅ track answers

  const handleAnswer = (selectedOption) => {
    // Save user’s selected answer
    setUserAnswers((prev) => [
      ...prev,
      {
        question: questions[currentQuestion].question,
        selected: selectedOption,
        correct: questions[currentQuestion].answer,
      },
    ]);

    // Update score if correct
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    // Next question or show result
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {showResult ? (
        <Result
          score={score}
          total={questions.length}
          userAnswers={userAnswers}
          restartQuiz={restartQuiz}
        />
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
