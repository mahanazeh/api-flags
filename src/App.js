import React from "react";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";
import { FlagProvider } from "./context/FlagContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css"


function App() {
  return ( <React.Fragment>

    
      <ThemeProvider>
        <FlagProvider>
          <Header />
          <Main />
        </FlagProvider>
      </ThemeProvider>


    </React.Fragment>
  );
}

export default App;


