import React from 'react';
import InputField from './InputField';
import {
  render,
  act,
  fireEvent
} from "@testing-library/react";

describe('InputField component', () => {

  test('await for change in input', async () => {
    await act(async () => {
      const { getByTestId, debug } = render(<InputField />);
      const input = getByTestId('searchBar')
      const header = getByTestId('displaySearch')
      // debug()
      await fireEvent.change(input, { target: { value: 'mike' } })
      // debug()
      expect(header.innerHTML).toBe('mike')
    })
  });

});
