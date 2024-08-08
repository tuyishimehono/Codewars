function persistence(num: number): number {
    let numbers = num.toString().split('').map(Number)
    let count = 0;
    while(numbers.length > 1) {
      let mult = numbers.reduce((acc,curr)=> acc * curr)
      count ++ 
      numbers = mult.toString().split('').map(Number)
    }
    return count
}