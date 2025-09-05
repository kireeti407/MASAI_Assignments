"use strict";
// L0: Q1: Basic Inheritance
// Problem: Create a Duck class with a method swim() that logs "I know swimming" to the console. 
// Create a MallardDuck class that extends Duck and inherits the swim() method. 
// Solution : 
class Duck {
    swim() {
        console.log("I know swimming");
    }
}
class MallardDuck extends Duck {
}
let mallardDuck1 = new MallardDuck();
mallardDuck1.swim(); // I know swimming 
// L0: Q2: Method Overriding Basics
// Problem: Create a parent class Bird with a method fly() that logs "I can fly". 
// Create a child class Penguin that overrides the fly() method to log "I cannot fly". 
// Instantiate both classes and call fly() on both objects. 
// Solution : 
class Bird {
    fly() {
        console.log("I can fly");
    }
}
class Penguin extends Bird {
    fly() {
        console.log("I cannot fly");
    }
}
let bird1 = new Bird();
bird1.fly(); // I can fly
let penguin1 = new Penguin();
penguin1.fly(); // I cannot fly
class ToyDuck {
    swim() {
        console.log("Can float on water");
    }
    fly() {
        console.log("Cannot fly");
    }
    sound() {
        console.log("cannot sound");
    }
}
let toyDuck1 = new ToyDuck();
toyDuck1.fly(); // Cannot fly
toyDuck1.sound(); // cannot sound
toyDuck1.swim(); // Can float on water
