import React, { useState } from "react";

export const CustomThemeContext = React.createContext();
export const CustomUpdateThemeContext = React.createContext();

// useContext
function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <CustomThemeContext.Provider value={darkTheme}>
      <CustomUpdateThemeContext.Provider value={toggleTheme}>
        {children}
      </CustomUpdateThemeContext.Provider>
    </CustomThemeContext.Provider>
  );
}

export default ThemeProvider;
