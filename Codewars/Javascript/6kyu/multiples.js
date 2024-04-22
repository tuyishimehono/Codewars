/* Create a for loop that iterates over the numbers divisible by the given n
    check whether the current number is divisible by 3 or 5
    add that number to the sum
    return the sum
*/

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(solution(10));
