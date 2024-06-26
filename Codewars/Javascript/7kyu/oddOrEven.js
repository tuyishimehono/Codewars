const oddOrEven = array => array.reduce(( acc,current ) => acc + current, 0)%2 === 0? "even": "odd"
//test cases
console.log(oddOrEven([1023, 1, 2]))
console.log(oddOrEven([]))