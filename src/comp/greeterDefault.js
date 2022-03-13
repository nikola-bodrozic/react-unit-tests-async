export const method1 = () => "You have called Method 1";

export const method2 = () => {
  const met1 = exports.method1()
  return "You have called Method 2 " + met1; 
};

export const method3 = () => "You have called Method 3";

const defaultMethod = () => "You have called the Default Method";

export default defaultMethod;
