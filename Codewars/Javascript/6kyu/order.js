function order(words){
    if(words == ""){
      return "";
    }
    let arr = words.split(' ')
    let result = arr.map((e,i)=> {
        let temp = e.split('')
        for(let k of temp){
            if(!isNaN(k)){
                return {n : k,i};
            }
        }
    });
    result.sort((a,b)=> a.n-b.n);
    let output = result.map((e)=>{
        return arr[e.i]
    });
    output = output.join(' ')
    return output;
  }
  console.log(order("is2 Thi1s T4est 3a"));  // output:"Thi1s is2 3a T4est"