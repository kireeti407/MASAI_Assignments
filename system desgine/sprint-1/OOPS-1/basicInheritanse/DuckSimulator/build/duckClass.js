"use strict";
// Create a Duck class that accepts a FlyStrategy and uses it in a performFly() method
// Add a setFlyStrategy() method to change flying behavior at runtime
Object.defineProperty(exports, "__esModule", { value: true });
const flyStrategyInterface_1 = require("./flyStrategyInterface");
class Duck {
    constructor(IFlyStrategy) {
        this.IFlyStrategy = IFlyStrategy;
    }
    performFly() {
        this.IFlyStrategy.fly();
    }
    setFlyStrategy(IFlyStrategy) {
        this.IFlyStrategy = IFlyStrategy;
    }
}
let duck = new Duck(new flyStrategyInterface_1.FastFly());
duck.performFly(); // Flying fast like a rocket!
duck.setFlyStrategy(new flyStrategyInterface_1.NoFly());
duck.performFly(); // I cannot fly
duck.setFlyStrategy(new flyStrategyInterface_1.FastFly());
duck.performFly();
duck.setFlyStrategy(new flyStrategyInterface_1.SuperFly());
duck.performFly(); // 
