class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
class Shark extends Animal {
  constructor(name, age, status, legs = 0, species = "shark") {
    super(name, age, legs, species, status);
  }
}

class Cat extends Animal {
  constructor(name, age, status, legs = 4, species = "cat") {
    super(name, age, legs, species, status);
  }

  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master, legs = 4, species = "dog") {
    super(name, age, legs, species, status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}`;
  }
}
