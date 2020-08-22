// ФАбрика юзеров
function createUser(name, age) {
  return {
    name,
    age,
    sayHi: function () {
      console.log(`Hello my name is ${this.name}`);
    },
    hello: function () {
      console.log(this.age);
    },
  };
}
// функция конструктор
function User1(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(`Hello my name is ${this.name}`);
  };
  this.hello = function () {
    console.log(this.age);
  };
}

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hello my name is ${this.name}`);
  }

  hello() {
    console.log(this.age);
  }
}

function someFunction() {
  console.log(this);
  this.test = 'asdasd';
}

class Bulb {
  constructor() {
    this.isEnabled = false;
  }

  toggleOn() {
    this.isEnabled = true;
    console.log('ENABLED');
  }

  toggleOff() {
    this.isEnabled = false;
    console.log('DISABLED');
  }
}

class LightSwitcher {
  constructor(bulb) {
    this.bulb = bulb;
  }

  toggleOn() {
    this.bulb.toggleOn();
  }

  toggleOff() {
    this.bulb.toggleOff();
  }
}

const myBulb = new Bulb();
const mySwitcher = new LightSwitcher(myBulb);
