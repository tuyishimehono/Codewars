function productFib(prod){
    let result = [];
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    for(let i = 3; i<=prod/2;i++){
       sum = num1 + num2;
       num1 = num2;
       num2 = sum;
       if(num1*num2 === prod){
        result.push(num1,num2,true)
        break;
       }
       else if(num1*num2 > prod){
            result.push(num1,num2,false)
            break;
       }
    } 
    return result; 
}
// A solution I saw on codewars that was clever
// function productFib(prod){
//     let n = 0;
//     let nPlus = 1;  
//     while(n*nPlus < prod) {
//       nPlus = n + nPlus;
//       n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
// }
console.log(productFib(4895))
console.log(productFib(5895))