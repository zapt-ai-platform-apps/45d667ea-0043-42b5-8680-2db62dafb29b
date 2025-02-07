import React from 'react';

export default function Leaderboard() {
  const leaderboard = [
    { name: 'Alice', score: 10 },
    { name: 'Bob', score: 8 },
    { name: 'Charlie', score: 7 }
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Classement</h2>
      <ul>
        {leaderboard.map((entry, index) => (
          <li key={index} className="mb-2">
            {index + 1}. {entry.name} - {entry.score} points
          </li>
        ))}
      </ul>
    </div>
  );
}