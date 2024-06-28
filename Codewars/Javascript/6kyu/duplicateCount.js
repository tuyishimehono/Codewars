function duplicateCount(text){
    let duplicate = 0;
     const counter = {}
     text.toLowerCase().split('').forEach(e=> counter[e] ? counter[e]+=1 : counter[e] = 1 )
     for(let i in counter){
         if(counter[i] > 1){
             duplicate++
         }
     }
     return duplicate
}
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
   