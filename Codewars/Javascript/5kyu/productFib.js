function productFib(prod) {
  let result = [];
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  for (let i = 3; i < prod / 2; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    if (num1 * num2 === prod) {
      result.push(num1, num2, true);
      break;
    } else if (num1 * num2 > prod) {
      result.push(num1, num2, false);
      break;
    }
  }
  return result;
}
console.log(productFib(4563)) // false
console.log(productFib(273)) // true
console.log(productFib(2004)) 
