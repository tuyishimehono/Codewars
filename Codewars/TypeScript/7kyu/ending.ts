function solution(str: string, ending: string): boolean {
    if(ending === '') return true;
    return (str.slice(-(ending.length)) === ending) ? true : false;
}