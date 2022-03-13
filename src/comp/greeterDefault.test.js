const myModule = jest.requireActual("./greeterDefault");

describe('my beverageeeee', () => {

  beforeEach(() => {
    
  });

  afterEach(() => {
    console.log("-----------------")
  });

  // it("call method2 and spy on method1", () => {
  //   const spyMethod1 = jest.spyOn(myModule, "method1")
  //   expect(myModule.method2()).toBe('You have called Method 2 You have called Method 1');
  //   expect(spyMethod1).toHaveBeenCalledTimes(1);
  // })

  it("call method2 and spy on mocked method1", () => {
    const spyMethod1 = jest.spyOn(myModule, "method1").mockImplementation(() => 'mocked method1')
    expect(myModule.method1()).toBe('mocked method1');
    expect(spyMethod1).toHaveBeenCalledTimes(1);
  })

  it("spy on default and clear spy on it", () => {
    const spyDefault = jest.spyOn(myModule, "default").mockImplementation(() => 5);
    expect(spyDefault()).toBe(5);
    spyDefault.mockRestore()
    expect(myModule.default()).toBe('You have called the Default Method');
  })

  it("spy on method1 mock once", () => {
    const spyMethod2 = jest.spyOn(myModule, "method1").mockImplementation(() => 23);
    expect(myModule.method1()).toBe(23);
    expect(spyMethod2).toHaveBeenCalledTimes(2);
  })

})
