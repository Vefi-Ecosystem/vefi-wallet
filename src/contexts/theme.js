import React, { createContext, useContext, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import * as themes from '../themes';

const ThemeContext = createContext({
  mode: 'light',
  setMode: (mode) => console.log(mode)
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode) => setTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode: theme, setMode }}>
      <ThemeProvider theme={theme === 'dark' ? themes.dark : themes.light}>
        <StatusBar style="light" />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
