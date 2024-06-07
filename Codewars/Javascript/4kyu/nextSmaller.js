const nextSmaller = n => {
    let arr = [...`${n}`], 
    len = arr.length,
    i = len - 2;
    while (i >= 0 && arr[i] <= arr[i + 1]) i--;
    if (i < 0) return -1;
    let j = len - 1;
    while (arr[j] >= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let res = parseInt([...arr.slice(0, i + 1), ...arr.slice(i + 1).sort((a, b) => b - a)].join(''), 10);
    return res.toString().length === n.toString().length ? res : -1;
};

console.log(nextSmaller(21)); // output: 12
console.log(nextSmaller(12334879)); // output: 12334798
console.log(nextSmaller(2003)); // output: -1
