// const longFormatData = [
//     { id: 1, name: "Alice", age: 30 },
//     { id: 2, name: "Bob", age: 25 },
//     { id: 3, name: "Charlie", age: 35 }
// ];
// const keys = ["id", "name"];
// // const wideFormatData = pivotLongToWide(longFormatData, keys);
// // console.log(wideFormatData);
// output: {
//   id: [ 1, 2, 3 ],
//   name: [ 'Alice', 'Bob', 'Charlie' ]
// }
// ..................................................................................

function pivotLongToWide(longData, key) {
  let wideFormatData = {};

  key.forEach((k) => {
    wideFormatData[k] = [];
  });

  longData.forEach((row) => {
    key.forEach((k) => {
      wideFormatData[k].push(row[k]);
    });
  });

  return wideFormatData;
}

//test cases
const longFormatData = [
    { id: 1, lastName: "Dany", age: 30 },
    { id: 2, lastName: "Josue", age: 25 },
    { id: 3, lastName: "Noella", age: 35 }
];
const keys = ["id", "lastName"];
const wideFormatData = pivotLongToWide(longFormatData, keys);
console.log(wideFormatData);
  
const longFormatData2 = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 }
];
const keys2 = ["id", "name"];
const wideFormatData2 = pivotLongToWide(longFormatData2, keys2);
console.log(wideFormatData2);
