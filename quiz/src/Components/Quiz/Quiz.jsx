import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "Which device is required for Internet Connection?",
    option: ["LAN Cable", "Pen Drive", "Router", "Modem"],
    answer: "Modem"
  },
  {
    question: "Which language is used for web apps?",
    option: ["PHP", "Python", "JavaScript", "All"],
    answer: "All"
  },
  {
    question: "Who is the founder of Microsoft?",
    option: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
    answer: "Bill Gates"
  },
  {
    question: "What does CPU stand for?",
    option: ["Central Process Unit", "Computer Personal Unit", "Central Processing Unit", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which of these is not a programming language?",
    option: ["Python", "HTML", "C++", "Java"],
    answer: "HTML"
  }
];

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleOptionClick = (option) => {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected("");
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <hr />
      {!showResult ? (
        <div className="quiz-question">
          <h2>{questions[currentIndex].question}</h2>
          <ul className="options-list">
            {questions[currentIndex].option.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`option ${answered 
                  ? option === questions[currentIndex].answer 
                    ? 'correct' 
                    : option === selected 
                      ? 'wrong' 
                      : ''
                  : selected === option 
                    ? 'selected' 
                    : ''
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNext} className="next-button">
            {currentIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
          <div className="question-counter">
            Question {currentIndex + 1} of {questions.length}
          </div>
        </div>
      ) //if showresult is false
      : (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="restart-button"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
