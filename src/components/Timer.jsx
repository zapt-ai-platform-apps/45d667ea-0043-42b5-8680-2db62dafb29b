import React, { useState, useEffect } from 'react';

export default function Timer({ initialTime, onTimerEnd }) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimerEnd();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onTimerEnd]);

  return (
    <div className="mb-4 text-lg font-bold">
      Temps restant: {timeLeft}s
    </div>
  );
}