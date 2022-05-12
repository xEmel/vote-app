import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import { globalTheme } from './theme/global-theme.jss';
import { VotePage } from './views/vote-page';

function App() {
  return (
    <div>
      <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <VotePage />
      </ThemeProvider>
    </div>
  );
}

export default App;
