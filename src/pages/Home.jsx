import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    console.log("Starting quiz...");
    navigate('/quiz');
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur CAP Petite Enfance - Quiz & Révision</h1>
      <p className="mb-6">
        Testez vos connaissances avec nos quiz interactifs et améliorez vos compétences grâce à des fiches de révision détaillées.
      </p>
      <button
        onClick={startQuiz}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
      >
        Commencer le Quiz
      </button>
    </div>
  );
}