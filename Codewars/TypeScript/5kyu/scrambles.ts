export function scramble(str1: string, str2: string): boolean {
    const arr1 = str1.split('')
    const arr2 = str2.split('')
  
    const occurence1 : Record<string,number> = {}
    arr1.forEach(str => {
      occurence1[str] ? occurence1[str] += 1 : occurence1[str] = 1
    })
    for(let i of arr2){
      if(!occurence1[i]){
        return false
        break;
      }
      else {
        occurence1[i] -= 1
      }
    }
    return true
}