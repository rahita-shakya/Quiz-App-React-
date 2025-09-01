import React from "react";

function Quiz({ question, handleAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Quiz;
