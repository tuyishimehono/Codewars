/* create a multidimensional array that has all permutations.
    create a loop that iterates over permutations and finds totalSsc
    sort the new array
    find max and min through looping in the sorted array
*/

const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
       (acc, item, i) =>
         acc.concat(
           permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
             item,
             ...val,
           ])
         ),
       []
    );
};
function sscForperm(arr){
    let sumArr = [];
    let totalSsc = 0; 
    let sum = 0;
    let newSum = 0;
    
    let perms = permutations(arr);
    console.log(perms)
    for(let i = 0; i<perms.length; i++){
      for(let j = 0; j<perms.length;j++){
        sum += (perms[i][j] * (j+1));  
      }
      newSum += sum[i];
      sumArr.push(newSum);
    }
    sumArr = sumArr.sort();

    let max, min;  
    max = sumArr[sumArr.length -1];
    min = sumArr[sumArr[0]];
    for(let i = 0; i<sumArr.length; i++){
      totalSsc+= sumArr[i];
    }
    console.log(totalSsc);
    
    return [{"total perm":perms.length}, {"total ssc": totalSsc}, {"max ssc": max}, {"min ssc":min}];
}

console.log(sscForperm([6,2,-1]));