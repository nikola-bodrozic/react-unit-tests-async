import { method1, method2, method3 } from './greeter'

jest.mock('./greeter', () => ({
  method1: jest.fn().mockImplementation(() => 'You have called a mocked method 1!'),
  method2: jest.fn().mockImplementation(() => 'You have called a mocked method 2!'),
  method3: jest.fn().mockImplementation(() => 'You have called a mocked method 3!'),
}))

describe("named exports - module factory with mock implementation mocked file", () => {
  it("returns the correct value for Method 1", () => {
    expect(method1()).toBe("You have called a mocked method 1!");
    expect(method1).toHaveBeenCalledTimes(1);
  });

  it("returns the correct value for Method 2", () => {
    expect(method2()).toBe("You have called a mocked method 2!");
    expect(method2).toHaveBeenCalledTimes(1);
  });

  it("returns the correct value for Method 3", () => {
    expect(method3()).toBe("You have called a mocked method 3!");
    expect(method3).toHaveBeenCalledTimes(1);
  });
});