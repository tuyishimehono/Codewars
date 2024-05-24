function createValidationProxy(obj) {
    const validator = {
      set(target, prop, value) {
        if (typeof prop === 'number' && typeof value!== 'number') {
          throw new Error(`Invalid value for numeric property '${prop}'. Expected a number.`);
        }
        target[prop] = value;
        return true;
      }
    };
  
    return new Proxy(obj, validator);
}
  
const originalObj = {
age: 25,
name: 'John Doe'
};

const validatedObj = createValidationProxy(originalObj);
  
validatedObj.age = 30; 
console.log(validatedObj.age); 

validatedObj.age = 'not a number'; 