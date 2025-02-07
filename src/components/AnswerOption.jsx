import React from 'react';

export default function AnswerOption({ option, onSelect, disabled }) {
  return (
    <button
      onClick={onSelect}
      disabled={disabled}
      className="cursor-pointer bg-gray-100 border border-gray-300 px-4 py-2 rounded hover:bg-gray-200 disabled:opacity-50"
    >
      {option}
    </button>
  );
}