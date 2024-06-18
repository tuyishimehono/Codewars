class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(this.lives === 0){
        throw new Error('Oh oh, no more lives!'); 
      }
      else if(n == this.number){
        return true
      }
      else{
        this.lives -=1;
      }        
      return false;
    }
}
let person1 = new Guesser(3,6);
person1.guess(2);