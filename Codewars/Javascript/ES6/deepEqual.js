// Create a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.

// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// // console.log(deepEqualArrays(array1, array2));
// output: true
// ......................................................................................

// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// // console.log(deepEqualArrays(array1, array2));
// output: false

function deepEqualArrays(arr1, arr2){
    const equality = JSON.stringify(arr1) === JSON.stringify(arr2);
    return equality;
}

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

console.log(deepEqualArrays(array1, array2));
//output: false

const array3 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array4 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

console.log(deepEqualArrays(array3, array4));
//output: true