import React from 'react';
import InputField from './InputField';
import {
  render,
  waitForElement
} from "@testing-library/react";

describe('InputField component', () => {
  test('is displayed', () => {
  	const { getByTestId } = render(<InputField />);
  	const input = getByTestId('searchBar')
  	expect(input).toBeTruthy()
  });
});
