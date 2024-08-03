function countRepeats(str) {
  const arr = str.split("");
  let count = 0;
  arr.map((e, i) => {
    if (e === arr[i + 1]) count++;
  });
  return count;
}
