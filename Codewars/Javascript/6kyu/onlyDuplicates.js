
function onlyDuplicates(str) {
    const charCounts = {};
    for (let char of str) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    return str.split('').filter(char => charCounts[char] > 1).join('');
}
console.log(onlyDuplicates('abccdefee'), 'cceee')
console.log(onlyDuplicates('hello'), 'll')
console.log(onlyDuplicates('colloquial'), 'ollol')
console.log(onlyDuplicates('foundersandcoders'), 'ondersndoders')