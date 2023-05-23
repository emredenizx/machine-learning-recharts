import "./App.css";
import Dashboard from "components/Dashboard";
import { ThemeProvider } from "styled-components";
import CustomizeThemeProvider, { ThemeContext } from "providers/CustomizeTheme.provider";
import { useContext } from "react";

function Main(): JSX.Element {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

function App(): JSX.Element {
  return (
    <CustomizeThemeProvider>
      <Main />
    </CustomizeThemeProvider>
  );
}

export default App;
