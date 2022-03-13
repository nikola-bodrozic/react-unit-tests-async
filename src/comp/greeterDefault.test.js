// const myModule = jest.requireActual("./greeterDefault");

// it("call method2 and spy on method1", () => {
//   const spyMethod1 = jest.spyOn(myModule, "method1")
//   expect(myModule.method2()).toBe('You have called Method 2 You have called Method 1');
//   expect(spyMethod1).toHaveBeenCalledTimes(1);
// })

// it("spy on default and clear spy on it", () => {
//   const spyDefault = jest.spyOn(myModule, "default").mockImplementation(() => 5);
//   expect(spyDefault()).toBe(5);
//   spyDefault.mockRestore()
//   expect(myModule.default()).toBe('You have called the Default Method');
// })

// it("spy on method1 mock once", () => {
//   const spyMethod1 = jest.spyOn(myModule, "method1").mockImplementationOnce(() => 23);
//   expect(spyMethod1()).toBe(23);
//   expect(myModule.method1()).toBe("You have called Method 1");
// })

//
//
// second way ES6 module
//
//

import defaultMethod from "./greeterDefault";
import * as mod from "./greeterDefault";

jest.mock('./greeterDefault', () => {
  const originalModule = jest.requireActual('./greeterDefault');
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockImplementation(() => 'You have called a mocked default method!'),
    method1: jest.fn().mockImplementation(() => 'You have called a mocked method 1'),
    // method2: jest.fn().mockImplementation(() => 'You have called a mocked method 2!'),
    // method3: jest.fn().mockImplementation(() => 'You have called a mocked method 3!'),
}})

describe("default and named mocked", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns the correct value for the Default Method", () => {
    expect(defaultMethod()).toBe("You have called a mocked default method!");
    expect(defaultMethod).toHaveBeenCalledTimes(1);
  });

  it("mocked method1 called 1st time", () => {
    expect(mod.method1()).toBe("You have called a mocked method 1");
  });

  it("mocked method1 called 2nd time", () => {
    expect(mod.method1()).toBe("You have called a mocked method 1");
    expect(mod.method1).toHaveBeenCalledTimes(1); // still 1 due to afterEach
  });

  it("not-mocked method2 called", () => {
    expect(mod.method2()).toBe("You have called Method 2 You have called Method 1");
  });

});
