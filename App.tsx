import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Navigation from './src/navigation';

import { defaultTheme } from './src/global/styles/themes/default';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigation />
    </ThemeProvider>
  );
}
