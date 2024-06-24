function kebabize(str) {
  let results = "";
  const arr = str.replace(/[0-9]/g, "").split("");
  arr[0] = arr[0].toLowerCase();
  arr.map((e) => {
    results +=
      e === e.toUpperCase() ? `-${e.toLowerCase()}` : `${e.toLowerCase()}`;
  });
  return results;
}
console.log(kebabize('MyCamelCasedString'))
console.log(kebabize('myCamelCasedString'))
console.log(kebabize('MyCamelHas3Humps'))
console.log(kebabize('myCamelHas3Humps'))
console.log(kebabize('CAMEL'))
console.log(kebabize('cAMEL'))