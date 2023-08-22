import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => { 
  const [DarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === " Dark Mode") {
      document.body.classList.add("darkMode");
      localStorage.setItem("theme", " Dark Mode");
      setDarkTheme(true);
    } else {
      document.body.classList.remove("darkMode");
      localStorage.setItem("theme", " Light Mode");
      setDarkTheme(false);
    }
  }, [DarkTheme]);
  

  const handleTheme = (e) => {
    if (e.target.textContent === " Light Mode") {
      setDarkTheme(false);
      document.body.classList.remove("darkMode");
      localStorage.setItem("theme", " Light Mode");
    } else {
      setDarkTheme(true);
      document.body.classList.add("darkMode");
      localStorage.setItem("theme", " Dark Mode");
    }
  };
  const data = { DarkTheme, handleTheme };
  // DarkTheme:: the current theme mode (dark or light) and handleTheme:: function to toggle the theme.
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
