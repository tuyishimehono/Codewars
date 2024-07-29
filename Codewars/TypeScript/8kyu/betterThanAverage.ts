function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
    const sum = classPoints.reduce((acc,current) => acc + current )
    return sum/classPoints.length < yourPoints;
}
console.log(betterThanAverage([45,21,67,88,42,30], 70))
console.log(betterThanAverage([83,46,98], 40))