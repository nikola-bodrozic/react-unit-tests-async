const myModule = jest.requireActual("./greeterDefault");

it("spy on default, clear spy on it and call default again", () => {
  const spyDefault = jest.spyOn(myModule, "default").mockImplementation(() => 5);
  expect(spyDefault()).toBe(5);
  spyDefault.mockRestore()
  expect(myModule.default()).toBe('You have called the Default Method');
})

describe('call method2 and spy on method1', () => {
  //const spyMethod1 = jest.spyOn(myModule, "method1")
  
  beforeEach(() => {
    
  });

  afterEach(() => {
    
  });

  it("metod1 has no mock", () => {
    let noMock = jest.spyOn(myModule, "method1")
    expect(myModule.method2()).toBe('You have called Method 2 You have called Method 1');
    expect(noMock).toHaveBeenCalledTimes(1);
  })

  it("method1 has mock", () => {
    let hasMock = jest.spyOn(myModule, "method1").mockImplementation(() => 'you called mocked method1');
    expect(myModule.method2()).toBe('You have called Method 2 you called mocked method1');
    expect(hasMock).toHaveBeenCalledTimes(2);
  })
})
