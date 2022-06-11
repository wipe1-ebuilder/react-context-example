// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Components
import { ColorContextProvider } from './scripts/contexts/color-context';
import ColorOptions from './scripts/components/color-options';
import ColorSummary from './scripts/components/color-summary';
// Styles
import './styles/index.css';

function App() {
  return (
    <ColorContextProvider>
      <ColorSummary />
      <ColorOptions />
    </ColorContextProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
