import React from 'react';

const ResultBox = ({ result, label }) => {
  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mt-6 border border-gray-300">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">{label}</h2>
      <div className="text-2xl font-bold text-gray-800">{result}</div>
    </div>
  );
};

export default ResultBox;
