function* fibonacciGenerator(limit) {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;
        let temp = current;
        current = next;
        next = temp + next;
        if (current > limit) break;
    }
}

const fibGen = fibonacciGenerator(100);
for (let num of fibGen) {
    console.log(num);
}