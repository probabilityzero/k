import React from 'react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="text-xl font-extrabold">
      {theme === 'light' ? '⸪' : ''}
      {theme === 'dark' ? '⸫' : ''}
      {theme === 'gray' ? '⸬' : ''}
    </button>
  );
};
