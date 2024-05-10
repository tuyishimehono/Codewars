function oddRow(n) {
    let result = [];
    for(let i = (n*(n-1)); i<= (n*(n+1));i++){
      if(i%2 !== 0)
        result.push(i);
    }
    return result;
}
console.log(oddRow(90));
