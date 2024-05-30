function maskify(cc) {
    let str = cc.split('');
      for(let i=0;i<str.length-4;i++){
        str[i] = '#';
      }
      return str.join('');   
}
//test cases
console.log(maskify('4563738599374'));
console.log(maskify('4563'));
console.log(maskify('1'));
console.log(maskify('4563738599374778'));