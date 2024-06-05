function pigIt(str) {
  let arr = str.split(" ");
  let result = [];
  for (let s of arr) {
    if (/^[A-Za-z]+$/.test(s) === false) {
      result.push(s);
    } else {
      let l = s.split("");
      let rem = l.splice(0, 1);
      l = l.join("") + rem + "ay";
      result.push(l);
    }
  }
  return result.join(" ");
}
console.log(pigIt("Pig latin is cool !"));
