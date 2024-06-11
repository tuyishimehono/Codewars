function fakeBin(x) {
  let result = [];
  x.split("").map((e) => {
    e < 5 ? result.push("0") : result.push("1");
  });
  return result.join("");
}
