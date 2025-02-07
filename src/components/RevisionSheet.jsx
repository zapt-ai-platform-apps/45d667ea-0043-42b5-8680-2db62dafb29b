import React from 'react';

export default function RevisionSheet({ score, total }) {
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <h3 className="text-xl font-semibold mb-2">Fiche de Révision</h3>
      <p>Revoyez vos réponses et les explications associées pour renforcer vos connaissances.</p>
      <p>Score : {score} / {total}</p>
    </div>
  );
}