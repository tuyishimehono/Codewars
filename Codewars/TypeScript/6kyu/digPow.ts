const digPow = (n: number, p: number) => {
    const arr = Array.from(String(n), Number)
    let sum = 0;
    arr.map(e => {
      sum += e**p
      p+=1
    })
    return sum%n === 0 ? sum/n : -1
}