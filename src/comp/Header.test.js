import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

afterEach(cleanup);

it("inserts text in h1", () => {
  const { getByTestId, getByText } = render(<Header text="Hello!" />);
  expect(getByText("Hello!").className).toBe("fancy-h1");
  expect(getByTestId('h1tag').textContent).toBe('Hello!')
});