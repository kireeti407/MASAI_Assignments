"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}
let arr = [];
let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");
arr.push(dog);
arr.push(cat);
for (let animal of arr) {
    animal.makeSound();
}
