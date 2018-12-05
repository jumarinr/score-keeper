/* Players.insert({
  name: "Jhon",
  score: 100
});
console.log(Players.find().fetch()); */
/*
let user = {
  name: "andrew",
  sayHi() {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
};
user.sayHi();

let numeros = [9, 99, 4, 56];
let newNember = numeros.map(numero => {
  return numero + 1;
});
console.log(newNember);
*/
class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }
  getPersonDes() {
    return `${this.name} is ${this.age}`;
  }

  getGreeting() {
    return `Hi! I am ${this.name}`;
  }
}
class Employee extends Person {
  constructor(name, age, title) {
    super(name, age);
    this.title = title;
  }
  hasJob() {
    return !!this.title;
  }
  getGreeting() {
    if (this.title) {
      return `Im ${this.name} i work as ${this.title}`;
    } else {
      super.getGreeting();
    }
  }
}
class Programmer extends Person {
  constructor(name, age, preferedLa = "assembly") {
    super(name, age);
    this.preferedLa = preferedLa;
  }
  getGreeting() {
    return `Hi!, I'm ${this.name}. I am a ${this.preferedLa} developer`;
  }
}
let Me = new Programmer("Juan", 18, "JavaScript");
console.log(Me.getGreeting());
//Object spread operator (...)
let user = {
  name: "andrew",
  location: "canada"
};
let person = {
  ...user,
  age: 25
};
console.log(person);

//object property shorthand
let bike = "Scott";
let stuff = {
  bike: bike,
  laptop: "Lenovo"
};
// console.log(stuff);

let house = {
  bedrooms: 2,
  bathrooms: 1.5
};
let yearBuilt = 1995;
let casita = {
  ...house,
  bedrooms: 3,
  yearBuilt: yearBuilt,
  flooring: "Carpet"
};
console.log(casita);
