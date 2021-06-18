import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';
import { ThemeProvider as StyledProvider } from '@emotion/react';

import { lightTheme, darkTheme } from '@theme/theme';

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState();
  useEffect(() => {
    const LocalTheme = localStorage.getItem('theme') || 'light';
    setThemeMode(LocalTheme);
  }, []);

  const themeObject = ThemeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ ThemeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { ThemeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (ThemeMode === 'light') {
      setThemeMode('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setThemeMode('light');
      localStorage.setItem('theme', 'light');
    }
  }, [ThemeMode]);

  return [ThemeMode, toggleTheme];
}

export { ThemeProvider, useTheme };

export default ThemeProvider;
