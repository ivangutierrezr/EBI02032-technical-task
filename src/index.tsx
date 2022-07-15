import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ThemeProvider from 'react-bootstrap/ThemeProvider'

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider
    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    minBreakpoint="xxs"
  >
    <App />
  </ThemeProvider>, 
  rootElement
);