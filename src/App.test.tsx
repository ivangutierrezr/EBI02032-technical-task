import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EBI02032 Technical task title', () => {
  render(<App />);
  const homeTitle = screen.getByText("EBI02032 Technical task");
  expect(homeTitle).toBeInTheDocument();
});
