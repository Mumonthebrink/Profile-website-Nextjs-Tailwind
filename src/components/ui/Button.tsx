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
      className={`px-6 py-3 rounded-lg text-white transition duration-300 ease-in-out transform ${
        variant === 'primary'
          ? 'bg-[#2A3439] hover:bg-[#DC2556] hover:text-[#2A3439] hover:shadow-lg hover:scale-105'
          : 'bg-[#98F5F7] hover:bg-[#2A3439] hover:text-white hover:opacity-80'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
