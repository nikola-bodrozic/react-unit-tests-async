const myModule = jest.requireActual("./greeterDefault");

describe('my beverageeeee', () => {
  //const spyMethod1 = jest.spyOn(myModule, "method1")
  
  beforeEach(() => {
    
  });

  afterEach(() => {
    //spyMethod1.mockRestore()
  });

  it("call method2 and spy on mocked method1 no mock", () => {
    const spyMethod1 = jest.spyOn(myModule, "method1");
    expect(myModule.method2()).toBe('You have called Method 2 You have called Method 1');
    expect(spyMethod1).toHaveBeenCalledTimes(1);
  })

  it("call method2 and spy on mocked method1", () => {
    const spyMethod1 = jest.spyOn(myModule, "method1").mockImplementation(() => 'you called mocked method1');
    expect(myModule.method2()).toBe('You have called Method 2 you called mocked method1');
    expect(spyMethod1).toHaveBeenCalledTimes(2);
  })

  it("spy on default and clear spy on it", () => {
    const spyDefault = jest.spyOn(myModule, "default").mockImplementation(() => 5);
    expect(spyDefault()).toBe(5);
    spyDefault.mockRestore()
    expect(myModule.default()).toBe('You have called the Default Method');
  })

})
