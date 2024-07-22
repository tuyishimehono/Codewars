function solution(roman: string): number { 
    const codes: Record<string,number> = {
      I : 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    }
    let result: number = 0;
    const splitArr: string[] = roman.split('')
    splitArr.map((e,i)=> {
        codes[splitArr[i]] < codes[splitArr[i+1]] ? result -= codes[e] : result += codes[e]    
    })
    return result;
}