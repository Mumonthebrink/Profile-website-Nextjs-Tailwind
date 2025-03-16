import React from 'react';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg text-white transition duration-300 ease-in-out ${
        variant === 'primary' ? 'bg-primary hover:scale-105 hover:shadow-lg' : 'bg-secondary hover:opacity-80'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
