import React from 'react';

export default function ProgressTracker({ score, total }) {
  const progression = total ? Math.round((score / total) * 100) : 0;
  
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <h3 className="text-xl font-semibold mb-2">Votre Progression</h3>
      <p>Vous avez complété {progression}% du quiz.</p>
    </div>
  );
}