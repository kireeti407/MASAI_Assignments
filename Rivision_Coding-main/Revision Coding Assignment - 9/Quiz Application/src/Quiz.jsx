
import React, { useState, useEffect } from 'react';
import { questions } from './questions';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [history, setHistory] = useState([]);
  const [isQuizOver, setIsQuizOver] = useState(false);

    const handleNextQuestion = (isSkipped = false) => {
    if (selectedAnswer === null && !isSkipped) {
      setScore((prevScore) => prevScore - 1);
      addToHistory(currentQuestion.question, "Not Answered", "wrong");
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(15);
    } else {
      setIsQuizOver(true);
    }
  };

    const addToHistory = (question, selectedAnswer, result) => {
    setHistory((prevHistory) => [
      ...prevHistory,
      { question, selectedAnswer, result },
    ]);
  };

  const handleSkipQuestion = () => {
    setScore((prevScore) => prevScore - 1);
    addToHistory(currentQuestion.question, "Skipped", "skipped");
    handleNextQuestion(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setHistory([]);
    setIsQuizOver(false);
  };

  const [longestTime, setLongestTime] = useState(0);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTaken((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const handleNextQuestion = (isSkipped = false) => {
    if (timeTaken > longestTime) {
      setLongestTime(timeTaken);
    }
    setTimeTaken(0);

    if (selectedAnswer === null && !isSkipped) {
      setScore((prevScore) => prevScore - 1);
      addToHistory(currentQuestion.question, "Not Answered", "wrong");
    }

    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(15);
    } else {
      setIsQuizOver(true);
    }
  };

  if (isQuizOver) {
    const correctAnswers = history.filter((item) => item.result === "correct").length;
    const wrongAnswers = history.filter((item) => item.result === "wrong").length;
    const skippedAnswers = history.filter((item) => item.result === "skipped").length;

    return (
      <div>
        <h1>Quiz Over</h1>
        <p>Total Score: {score}</p>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Wrong Answers: {wrongAnswers}</p>
        <p>Skipped Questions: {skippedAnswers}</p>
        <p>Longest Time Taken: {longestTime}s</p>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Quiz App</h1>
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
        >
          {currentQuestionIndex + 1} / {questions.length}
        </div>
      </div>
      <p>Time Left: {timeLeft}s</p>
      <h2>{currentQuestion.question}</h2>
      <div>
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerSelect(option)}
            className={`
              ${selectedAnswer === option ? (option === currentQuestion.correctAnswer ? 'correct' : 'wrong') : ''}
              ${selectedAnswer && option === currentQuestion.correctAnswer ? 'correct' : ''}
            `}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleSkipQuestion} disabled={selectedAnswer !== null}>Skip Question</button>
      <div>
        <p>Score: {score}</p>
      </div>
      <div>
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.question} - {item.selectedAnswer} ({item.result})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );


export default Quiz;
