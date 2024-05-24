function extractWordsAndNumbers(arr){
    let sparr = [...arr];
    let result = [];
    for(let ar of sparr){
        let str = '';
        let word = '';
       for(let char of ar){
        if(!isNaN(char)){
            str +=char;
        }
        else{
            word += char;
        }
       }
       if (word != '')
        result.push(word);
       if (str != '')
        result.push(parseInt(str));
    }
    return result;
}
console.log(extractWordsAndNumbers(i["Hello123", "World456", "49", "Another789"]));