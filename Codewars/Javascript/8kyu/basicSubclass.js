class God {
  static create() {
    return [new Man(), new Woman()];
  }
}
function Human(name) {
  this.name = name;
}

function Man() {
  Human.call(this);
}
Man.prototype = Object.create(Human.prototype);

function Woman() {
  Human.call(this);
}
Woman.prototype = Object.create(Human.prototype);
