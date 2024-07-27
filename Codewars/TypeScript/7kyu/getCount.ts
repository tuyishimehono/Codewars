const getCount = (str: string): number => {
    const vowels = 'aeiou';
    let count = 0;
    for(let i of str){
      if(vowels.includes(i))
        count++
    }
    return count;
}

console.log(getCount('abssaascera'))
console.log(getCount('brosevroora'))