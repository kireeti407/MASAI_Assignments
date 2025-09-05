abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log(`${this.name} says Woof!`);
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log(`${this.name} says Meow!`);
  }
}

let arr: Animal[] = [];
let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");
arr.push(dog);
arr.push(cat);
for (let animal of arr) {
  animal.makeSound();
}
