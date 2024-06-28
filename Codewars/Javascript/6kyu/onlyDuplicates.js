const onlyDuplicates = (str) => {
    const charCounts = {};
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    return str.split('').filter(char => charCounts[char] > 1).join('');
}
//Best practice solution
// const onlyDuplicates = () => {
//     return str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('');
// }

console.log(onlyDuplicates('abccdefee'), 'cceee')
console.log(onlyDuplicates('hello'), 'll')
console.log(onlyDuplicates('colloquial'), 'ollol')
console.log(onlyDuplicates('foundersandcoders'), 'ondersndoders')