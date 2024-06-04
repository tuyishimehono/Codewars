function digitalRoot(n) {
    if(n===0) return 0;
    let arr = n.toString().split('')
    let sum = arr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
    while(sum.toString().length >1){
      sum = sum.toString().split('').reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue));
    }
    return sum;
  }
  console.log(digitalRoot(544893))