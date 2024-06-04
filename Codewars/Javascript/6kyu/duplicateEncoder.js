function duplicateEncode(word){
    let arr = word.toLowerCase().split('');
    let counter = {};
    arr.forEach(e => {
      counter[e] ? counter[e] +=1 : counter[e] = 1;
    });
    let result = []
    for(let n of arr){
      counter[n]>1 ? result.push(')') : result.push('(')
    }
    return result.join('');
  }
  console.log(duplicateEncode("din")) // output: "((("
  console.log(duplicateEncode("recede")) // output: "()()()"
  console.log(duplicateEncode("Success")) // output: ")())())"