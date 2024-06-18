function highAndLow(numbers){
    let result = []
    result.push(Math.max(...numbers), Math.min(...numbers)); 
    return result;
}
console.log(highAndLow([3,4,2,1,7,-1]))
console.log(highAndLow([6,3,99,2,-3,5,2,6]))