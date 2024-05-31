function highAndLow(numbers){
    let result = []
    result.push(Math.max(...numbers), Math.min(...numbers)); 
    return result;
}
console.log(highAndLow([3,4,2,1,7,-1]))