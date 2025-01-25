import React from 'react';

const Button = ({ children, className, variant, ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg text-white transition";
  const outlineStyles = "border border-blue-600 bg-transparent hover:bg-blue-600";
  const solidStyles = "bg-blue-600 hover:bg-blue-700";

  const buttonClass = variant === 'outline' ? outlineStyles : solidStyles;

  return (
    <button
      className={`${baseStyles} ${buttonClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
