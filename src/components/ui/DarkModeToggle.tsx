'use client'; // Ensure this component is treated as a client component

import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if the user has a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode if no theme is saved
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark'); // Save theme to localStorage
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light'); // Save theme to localStorage
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-4 py-2 bg-gray-700 text-white rounded-lg transition-colors duration-300"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
