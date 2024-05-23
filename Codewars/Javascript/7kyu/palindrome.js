function palindrome(str){   
    let reversed = str.split('').reverse().join('');   
    return (str === reversed)? true : false;
}
console.log(palindrome('madam'));
console.log(palindrome('racecar'));
console.log(palindrome('situation'));