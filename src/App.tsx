import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { ContextProvider } from "./context";
import { globalTheme } from "./theme/global-theme.jss";
import { VotePage } from "./views/vote-page";

function App() {
  return (
    <div>
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <ContextProvider>
          <VotePage />
        </ContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
