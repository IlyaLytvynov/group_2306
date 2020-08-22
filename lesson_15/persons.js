class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  sayHi() {
    console.log(this.name);
  }

  sayGender() {
    console.log("I'm " + this.gender);
  }
}

class Developer extends Person {
  constructor(name, age, gender, lang) {
    super(name, age, gender);
    this.lang = lang;
  }

  toCode() {
    console.log('Written some thing in lang ' + this.lang);
  }
}

class Cook extends Person {
  constructor(name, age, gender) {
    super(name, age, gender);
  }

  toCook() {
    console.log("I'm cooking");
  }
}

const jsDev = new Developer('Vasya', 20, 'male', 'js');
const javaDev = new Developer('Jack', 23, 'male', 'java');
const dude = new Person('John', 38, 'male');
const gordonRamsy = new Cook('Gordon', 45, 'male');
