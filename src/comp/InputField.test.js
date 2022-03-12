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
    const div = getByTestId('divWeWantToShow')
    expect(div).toBeTruthy()
  });

  test('div is hidden', () => {
    const { queryByTestId } = render(<InputField showDiv={false} />);
    const div = queryByTestId('divWeWantToShow')
    expect(div).toBeFalsy()
  });

  test('await for change in input', async () => {
    await act(async () => {
      const { getByTestId } = render(<InputField showDiv={true} />);
      const input = getByTestId('searchBar')
      const header = getByTestId('displaySearch')
      await fireEvent.change(input, { target: { value: 'mike' } })
      expect(header.innerHTML).toBe('mike')
    })
  });

});
