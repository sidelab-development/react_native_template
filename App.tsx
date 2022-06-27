import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { defaulTheme } from './src/global/styles/themes/default';
import Navigation from './src/navigation';

export default function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
