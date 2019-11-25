import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Clickers from "./Clickers";

afterEach(cleanup);

it("displays the count", () => {
  const { getByTestId } = render(<Clickers />);
  expect(getByTestId("count").textContent).toBe("0");
});

it("increments count", async () => {
    const { getByTestId, getByText } = render(<Clickers />);
    fireEvent.click(getByText("Up"));
    expect(getByTestId("count").textContent).toBe("1");
  });

  it("decrement count", async () => {
    const { getByText } = render(<Clickers />);
    fireEvent.click(getByText("Down"));

    const countSpan = await waitForElement(()=>getByText("-1"))
    expect(countSpan.textContent).toBe("-1");
  });