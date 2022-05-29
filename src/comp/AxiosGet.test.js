import React from "react";
import {
  render,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom";

import axios from 'axios';

import Fetch from "./Fetch";

const greetingMock = "hello from axiosMock"

it("fetches and displays data", async () => {
  const mockAxiosGet = axios.get.mockImplementation(() => Promise.resolve({ data: { greeting: greetingMock } }));

  const url = "/greeting";
  const { getByTestId } = render(<Fetch url={url} />);

  expect(getByTestId("loading").textContent).toBe("Loading data...");
  const resolvedSpan = await waitForElement(() => getByTestId("resolved"));

  expect(resolvedSpan.textContent).toBe(greetingMock);
  expect(mockAxiosGet).toHaveBeenCalledTimes(1);

});