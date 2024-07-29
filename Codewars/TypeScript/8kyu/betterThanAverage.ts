function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
    const sum = classPoints.reduce((acc,current) => acc + current )
    return sum/classPoints.length < yourPoints;
}