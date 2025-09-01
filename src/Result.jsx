import React from "react";
import "./Result.css";

function Result({ score, total, userAnswers, restartQuiz }) {
  // Filter only incorrect answers
  const incorrectAnswers = userAnswers.filter(ans => ans.selected !== ans.correct);

  return (
    <div className="result-container">
      <h2>Your Score: {score} / {total}</h2>

      {incorrectAnswers.length > 0 ? (
        <>
          <h3>Review Your Incorrect Answers:</h3>
          <ul>
            {incorrectAnswers.map((ans, index) => (
              <li key={index}>
                <strong>Q{index + 1}:</strong> {ans.question} <br />
                 Correct Answer: <b>{ans.correct}</b> <br />
                <span className="wrong">✘ You chose: {ans.selected}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h3> You got all answers correct!</h3>
      )}

      <button className="restart-btn" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;
