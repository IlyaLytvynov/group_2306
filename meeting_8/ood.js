class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move() {
    console.log('MOVED steps');
  }
}
//
class Bird extends Animals {
  move() {
    console.log('Птичка летает');
  }
}

class Cat extends Animals {
  move() {
    console.log('Котик ходит');
  }
}

const animal = new Animal('Snowy', 2);
const myBird = new Bird('Koko', 1);
const myCat = new Cat('Kitty', 3);
