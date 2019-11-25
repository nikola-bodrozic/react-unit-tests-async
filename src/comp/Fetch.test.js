import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom";

import axiosMock from "axios";
import Fetch from "./Fetch";

afterEach(cleanup);

const greetingMock = "hello from axiosMock"

it("fetches and displays data", async () => {
    //We'll be explicit about what data Axios is to return when `get` is called.
    axiosMock.get.mockResolvedValueOnce({ data: { greeting: greetingMock } });
  
    const url = "/greeting";
    const { getByTestId } = render(<Fetch url={url} />);
  
    expect(getByTestId("loading").textContent).toBe("Loading data...");
    const resolvedSpan = await waitForElement(() => getByTestId("resolved"));
  
    expect(resolvedSpan.textContent).toBe(greetingMock);
    expect(axiosMock.get).toHaveBeenCalledTimes(1);

  });