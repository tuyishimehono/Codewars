const divisors = (n: number):number => {
    let divisors: number = 0;
    for(let i:number = n; i>0;i--){
      if(n%i === 0) divisors +=1;
    }
    return divisors
}