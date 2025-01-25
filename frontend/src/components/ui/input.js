import React from 'react';

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full p-3 border rounded-lg bg-gray-50 border-gray-300 focus:ring-2 focus:ring-blue-600 ${className}`}
      {...props}
    />
  );
};

export default Input;
