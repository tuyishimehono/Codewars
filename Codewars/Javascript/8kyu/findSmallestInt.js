function findSmallestInt(arr) {
  let sm = arr[0];
  return arr.reduce(
    (accumulator, currentValue) =>
      (sm = currentValue < sm ? currentValue : accumulator)
  );
}
