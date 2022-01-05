import React from "react";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import Theme from "./theme";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {StyleProvider} from "./contexts/StyleContext";
import { GlobalStyles } from "./global";

function App() {
	const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

    const changeTheme = () => {
      setIsDark(!isDark);
    };
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <div>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          <Main theme={Theme} />
        </StyleProvider>  
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
