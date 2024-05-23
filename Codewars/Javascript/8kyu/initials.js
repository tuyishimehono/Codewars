function initials(str){
    let initial = str.split(' ');
    return `${(initial[0].split(''))[0].toUpperCase()}.${(initial[1].split(''))[0].toUpperCase()}`
}

console.log(initials('Sam Harris'));
console.log(initials('patrick feeney'));