function getSum(a: number, b: number): number {
    if (a == b){
      return a;
    }else if (a > b){
      return a + getSum(a-1,b)
    } else {
      return a + getSum(a+1,b)
    }
}

getSum(0,1)
getSum(2,-3)
getSum(1,1)
