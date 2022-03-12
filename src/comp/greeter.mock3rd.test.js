import { method1, method2, method3 } from './greeter'

jest.mock('./greeter', () => ({
  ...jest.requireActual('./greeter'),
  method3: jest.fn().mockImplementation(() => 'You have called a mocked method!'),
}))

describe("named exports - module factory with mock implementation mocked file", () => {
  it("returns the correct value for Method 1", () => {
    expect(method1()).toBe("You have called Method 1");
  });

  it("returns the correct value for Method 2", () => {
    expect(method2()).toBe("You have called Method 2");
  });

  it("returns the correct value for Method 3", () => {
    expect(method3()).toBe("You have called a mocked method!");
  });
});