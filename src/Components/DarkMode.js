import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const DarkMode = () => {
  const { DarkTheme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <button
        className={DarkTheme ? "container_button darkMode" : "container_button"}
        onClick={(e) => handleTheme(e)}
      >
        <p>{DarkTheme ? " Light Mode" : " Dark Mode"}</p>
      </button>
    </>
    // If DarkTheme is true, it displays "Light Mode" else, it displays "Dark Mode".
  );
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////