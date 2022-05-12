import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { globalTheme } from './theme/global-theme.jss';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      </ThemeProvider>
    </div>
  );
}

export default App;
