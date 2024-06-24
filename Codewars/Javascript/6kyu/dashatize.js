function dashatize(num) {
  if (num === "") return "";
  let results = "";
  const arr = num < 0 ? (num * -1).toString().split("") : num.toString().split("");
  if (arr[0] % 2 !== 0 && arr.length > 1) results += `${arr[0]}-`;
  else results += `${arr[0]}`;
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] % 2 !== 0) {
      if (arr[i - 1] % 2 !== 0) results += `${arr[i]}-`;
      else results += `-${arr[i]}-`;
    } else results += `${arr[i]}`;
  }
  if (arr.length > 1) {
    if (arr[arr.length - 1] % 2 !== 0 && arr[arr.length - 2] % 2 === 0)
      results += `-${arr[arr.length - 1]}`;
    else results += `${arr[arr.length - 1]}`;
  }
  return results;
}

// codewars solution that was effective
function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
};