function tailSwap(arr) {
  const splitArr = arr.map((e) => e.split(":"));
  const result = [];
  result.push(
    splitArr[0][0] + ":" + splitArr[1][1],
    splitArr[1][0] + ":" + splitArr[0][1]
  );
  return result;
}

// Destructuring solution
function tailSwap2(arr) {
    const splitArr = arr.map(e=> e.split(':'))
      const [[a,b],[c,d]] = splitArr;
      return [`${a}:${d}`, `${c}:${b}` ]
}
console.log(tailSwap(['abc:123', 'cde:456']), ['abc:456', 'cde:123'])
