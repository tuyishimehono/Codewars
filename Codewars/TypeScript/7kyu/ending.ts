function solution(str: string, ending: string): boolean {
    if(ending === '') return true;
    return (str.slice(-(ending.length)) === ending) ? true : false;
}

//best practice solution
function solution2(str: string, ending: string): boolean {
    return str.endsWith(ending);
}
