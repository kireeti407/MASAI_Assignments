"use strict";
// Liskov Substitution Principle
class Bird {
    fly() {
        console.log("I can Fly!!");
    }
}
class Eagle extends Bird {
    fly() {
        console.log("Eagles can fly!!");
    }
}
// Here child have all the functionalities in which parent class have.
