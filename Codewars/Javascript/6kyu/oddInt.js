function findOdd(A) {
  const counter = new Map();
  A.forEach((ele) => {
    counter.set(ele, counter.has(ele) ? counter.get(ele) + 1 : 1);
  });
  let result;
  counter.forEach((e, i) => {
    if (e % 2 !== 0) {
      result = i;
    }
  });
  return result;
}
