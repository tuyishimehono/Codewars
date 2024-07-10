const findOdd = (xs: number[]): number => {
    const counter : Record<number,number> = {};
    let result:number = 0;
    xs.forEach(e => counter[e] ? counter[e] +=1 : counter[e] = 1 )
    for(let i in counter){
      if(counter[i] %2 !== 0) 
        result = Number(i);
    }
    return result;
};
console.log(findOdd([1,2,2,4,4,5,5]))
console.log(findOdd([2,4,4,5,5]))