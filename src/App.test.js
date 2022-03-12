import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const { getByTestId } = render(<App />);
  const input = getByTestId('bigtitle')
  expect(input).toBeTruthy()
});
