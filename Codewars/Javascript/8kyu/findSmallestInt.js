function findSmallestInt(arr) {
  let sm = arr[0];
  return arr.reduce(
    (accumulator, currentValue) =>
      (sm = currentValue < sm ? currentValue : accumulator)
  );
}
console.log(findSmallestInt([2,4,9,0,-3]));
