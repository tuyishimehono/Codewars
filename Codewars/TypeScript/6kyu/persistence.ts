function persistence(num: number): number {
    let count = 0;
    while(num > 9) {
      num = num.toString().split('').map(Number).reduce((acc,curr)=> acc * curr)
      count ++ 
    }
    return count
}
//test cases
persistence(456) // 2
persistence(39) // 2