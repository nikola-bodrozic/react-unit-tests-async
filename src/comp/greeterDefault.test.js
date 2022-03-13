const myModule = jest.requireActual("./greeterDefault");

it("call default", () => {
   expect(myModule.default()).toBe('You have called the Default Method You have called Method 1');
})

it("spy on default", () => {
  const spyDefault = jest.spyOn(myModule, "default").mockImplementation(() => 5);
  expect(spyDefault()).toBe(5);
  spyDefault.mockRestore()
  expect(myModule.default()).toBe('You have called the Default Method You have called Method 1');
})

it("spy on method1", () => {
  const spyMethod1 = jest.spyOn(myModule, "method1").mockImplementationOnce(() => 23);
  expect(spyMethod1()).toBe(23);
  expect(myModule.method1()).toBe("You have called Method 1");
})

//
//
// second way ES6 module
//
//

// import defaultMethod, { method1, method2, method3 } from "./greeterDefault";

// jest.mock('./greeterDefault', () => ({
//   __esModule: true,
//   default: jest.fn().mockImplementation(() => 'You have called a mocked default method!'),
//   method1: jest.fn().mockImplementation(() => 'You have called a mocked method 1!'),
//   method2: jest.fn().mockImplementation(() => 'You have called a mocked method 2!'),
//   method3: jest.fn().mockImplementation(() => 'You have called a mocked method 3!'),
// }))

// describe("default and named exports - module factory with mock implementation mocked file", () => {
//   it("returns the correct value for Method 1", () => {
//     expect(method1()).toBe("You have called a mocked method 1!");
//     expect(method1).toHaveBeenCalledTimes(1);
//   });

//   it("returns the correct value for Method 2", () => {
//     expect(method2()).toBe("You have called a mocked method 2!");
//     expect(method2).toHaveBeenCalledTimes(1);
//   });

//   it("returns the correct value for Method 3", () => {
//     expect(method3()).toBe("You have called a mocked method 3!");
//     expect(method3).toHaveBeenCalledTimes(1);
//   });

//   it("returns the correct value for the Default Method", () => {
//     expect(defaultMethod()).toBe("You have called a mocked default method!");
//     expect(defaultMethod).toHaveBeenCalledTimes(1);
//   });
// });
