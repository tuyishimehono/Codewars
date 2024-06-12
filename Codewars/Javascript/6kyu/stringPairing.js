function solution(str){
    if(str.length %2 != 0){
        str += '_'
    }
    if(str === ''){
      return []
    }
    return str.match(/.{1,2}/g)
  }
  console.log(solution(''));
  console.log(solution('abcd'));
  console.log(solution('abcdefg'));
  console.log(solution('graph'))