import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/quizData';
import Question from '../components/Question';
import Timer from '../components/Timer';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedMode, setSelectedMode] = useState('training'); // 'training' or 'exam'
  const [score, setScore] = useState(0);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // to reset timer

  const handleAnswer = (isCorrect) => {
    if (isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    console.log("Answer submitted for question:", currentQuestionIndex, "Correct:", isCorrect);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setTimeout(() => {
      setCurrentQuestionIndex(prev => prev + 1);
      setIsAnswerSubmitted(false);
      setTimerKey(prev => prev + 1);
    }, 1000);
  };

  const handleTimerEnd = () => {
    console.log("Timer ended for question:", currentQuestionIndex);
    handleAnswer(false);
  };

  useEffect(() => {
    if (currentQuestionIndex >= quizData.length) {
      console.log("Quiz finished. Final score:", score);
      navigate('/results', { state: { score, total: quizData.length } });
    }
  }, [currentQuestionIndex, quizData.length, score, navigate]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Quiz - Mode: {selectedMode === 'training' ? 'Entraînement' : 'Examen'}</h2>
      <div className="mb-4">
        <button
          onClick={() => setSelectedMode('training')}
          className="cursor-pointer bg-green-500 text-white px-3 py-1 mr-2 rounded"
        >
          Entraînement
        </button>
        <button
          onClick={() => setSelectedMode('exam')}
          className="cursor-pointer bg-red-500 text-white px-3 py-1 rounded"
        >
          Examen
        </button>
      </div>
      {selectedMode === 'exam' && (
        <Timer key={timerKey} initialTime={30} onTimerEnd={handleTimerEnd} />
      )}
      <Question
        question={quizData[currentQuestionIndex]}
        onAnswerSelected={handleAnswer}
        isDisabled={isAnswerSubmitted}
      />
      <div className="mt-4">
        Question {currentQuestionIndex + 1} sur {quizData.length}
      </div>
    </div>
  );
}