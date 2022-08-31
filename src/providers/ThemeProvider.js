import { createContext, useContext, useState } from 'react';

const themeContext = createContext();
const themeToggleContext = createContext();

export const useThemeContext = () => {
  return useContext(themeContext);
};
export const useThemeToggleContext = () => {
  return useContext(themeToggleContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  console.log('theme: ', theme);
  return (
    <themeContext.Provider value={theme}>
      <themeToggleContext.Provider value={setTheme}>
        {children}
      </themeToggleContext.Provider>
    </themeContext.Provider>
  );
};
