import React from 'react';
import InputField from './InputField';
import {
  render,
  act,
  fireEvent
} from "@testing-library/react";

describe('InputField component', () => {

  test('div is shown', () => {
    const { getByTestId } = render(<InputField showDiv={true} />);
    const div = getByTestId('displaySearch')
    expect(div).toBeTruthy()
  });

  test('div is hidden', () => {
    const { queryByTestId } = render(<InputField showDiv={false} />);
    const div = queryByTestId('displaySearch')
    expect(div).toBeFalsy()
  });

  test('await for change in input', async () => {
    await act(async () => {
      const { getByTestId, debug } = render(<InputField showDiv={true} />);
      const input = getByTestId('searchBar')
      const header = getByTestId('displaySearch')
      debug()
      await fireEvent.change(input, { target: { value: 'mike' } })
      debug()
      expect(header.innerHTML).toBe('mike')
    })
  });

});
