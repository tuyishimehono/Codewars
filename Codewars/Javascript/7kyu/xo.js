function XO(str) {
  let arr = str.toLowerCase().split("");
  let count1 = 0;
  let count2 = 0;
  arr.map((e) => {
    if (e === "o") count1 += 1;
    if (e === "x") count2 += 1;
  });
  return count1 === count2;
}
console.log(XO('xooowoo'))
console.log(XO('XooXooxoo oo'))