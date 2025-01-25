import React from 'react';

const Progress = ({ value }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

export default Progress;
