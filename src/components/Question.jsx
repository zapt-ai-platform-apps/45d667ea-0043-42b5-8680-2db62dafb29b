import React from 'react';
import AnswerOption from './AnswerOption';

export default function Question({ question, onAnswerSelected, isDisabled }) {
  if (!question) return <div>Chargement...</div>;

  return (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
      <div className="flex flex-col space-y-2">
        {question.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            onSelect={() => onAnswerSelected(option === question.correctAnswer)}
            disabled={isDisabled}
          />
        ))}
      </div>
    </div>
  );
}