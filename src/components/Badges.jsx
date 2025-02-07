import React from 'react';

export default function Badges({ score }) {
  const badge = score > 0 ? "Badge d'Excellence" : "Aucun badge obtenu";
  
  return (
    <div className="mb-4 p-4 border border-gray-300 rounded">
      <h3 className="text-xl font-semibold mb-2">Badges & Récompenses</h3>
      <p>{badge}</p>
    </div>
  );
}