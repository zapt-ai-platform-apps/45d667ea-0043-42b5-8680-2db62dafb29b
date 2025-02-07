import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProgressTracker from '../components/ProgressTracker';
import RevisionSheet from '../components/RevisionSheet';
import Badges from '../components/Badges';

export default function Results() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const navigate = useNavigate();
  
  const handleRestart = () => {
    console.log("Quiz restarted.");
    navigate('/quiz');
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Résultats</h2>
      <p className="mb-4">Votre score : {score} sur {total}</p>
      <ProgressTracker score={score} total={total} />
      <Badges score={score} />
      <RevisionSheet score={score} total={total} />
      <button
        onClick={handleRestart}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Recommencer le Quiz
      </button>
    </div>
  );
}