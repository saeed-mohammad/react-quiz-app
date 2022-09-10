import "./App.css";
import { useState } from "react";

function App() {
  const [currentOption, setCurrentOption] = useState(0);
  const [showScore, setShowscore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of India?",
      answerOptions: [
        { answerText: "Maharashtra", isCorrect: false },
        { answerText: "Delhi", isCorrect: true },
        { answerText: "Pune", isCorrect: false },
        { answerText: "Gujrat", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const handleQuestion = (isCorrect) => {
    const next = currentOption + 1;

    if (next < questions.length) {
      setCurrentOption(next);
    } else {
      setShowscore(true);
    }

    if (isCorrect === true) {
      setScore(score + 1);
    }
  };

  return (
    <div className="App">
      {showScore ? (
        <div className="question-section">
          <div className="show-score">
            You scored is {score} out of {questions.length}
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <h2>
                Question {currentOption + 1} <span>/ {questions.length}</span>
              </h2>
              <h3>{questions[currentOption].questionText}</h3>
            </div>
            <div className="option">
              {questions[currentOption].answerOptions.map((answerOption) => (
                <button onClick={() => handleQuestion(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
