import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders text element', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/I am using markdown/i);
  expect(textElement).toBeInTheDocument();
});
