function arrayDiff(a, b) {
  
    //Array for storing results
    var result = [];
    
    for(var i = 0; i< a.length; i++) {
      //checking if element i in array a is not also in array b
      if(b.indexOf(a[i])=== -1) {
        
        result.push(a[i]);
      }
    }
    
    return result;
    
}