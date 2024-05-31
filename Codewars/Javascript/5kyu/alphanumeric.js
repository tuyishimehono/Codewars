function alphanumeric(string){
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let result = true;
    for(let n of string){
        if(!letters.includes(n)){
            result = false;
            break;
        }      
    }
    return result;  
}
console.log(alphanumeric('Monster0')); //true
console.log(alphanumeric('')); // false
console.log(alphanumeric('aldkj_diiwhw')) // false;

// Best practice solution from codewars
function alphanumeric(string){
    return /^[0-9a-z]+$/i.test(string);
}