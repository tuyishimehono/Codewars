// Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)
// output: {"1": 'aa', "3": 'bf', "5": 'cq'}

function reverseObject(obj){
    const reversedEntries = Object.entries(obj).map(([key, value]) => [value, key]);
    return Object.fromEntries(reversedEntries);
}
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
console.log(reversedObj); 