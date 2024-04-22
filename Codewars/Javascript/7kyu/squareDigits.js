/* Change the num into a string so that it can be split.
    Create an array that is going to receive the sum of squared digits
    Create a for loop to iterate over the array and square the numbers
    push to the new array
    After the for loop, join the array elements and turn them into a number
    Return the sum
*/
function squareDigits(num){
    let arr = num.toString().split('');
    let sum = [];
    
    for(let i = 0; i< arr.length; i++){
      sum.push(arr[i]*arr[i]);
    }
    sum = sum.join('');
    sum = Number(sum);
    return sum;
}
console.log(squareDigits(2348));
console.log(squareDigits(178));
