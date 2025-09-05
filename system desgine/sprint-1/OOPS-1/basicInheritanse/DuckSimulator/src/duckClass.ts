// Create a Duck class that accepts a FlyStrategy and uses it in a performFly() method
// Add a setFlyStrategy() method to change flying behavior at runtime

import { FastFly, FlyStrategy, NoFly, SuperFly } from "./flyStrategyInterface";

class Duck {
  IFlyStrategy: FlyStrategy;
  constructor(IFlyStrategy: FlyStrategy) {
    this.IFlyStrategy = IFlyStrategy;
  }
  performFly(): void {
    this.IFlyStrategy.fly();
  }
  setFlyStrategy(IFlyStrategy: FlyStrategy) {
    this.IFlyStrategy = IFlyStrategy;
  }
}

let duck = new Duck(new FastFly());
duck.performFly(); // Flying fast like a rocket!
duck.setFlyStrategy(new NoFly());
duck.performFly(); // I cannot fly

duck.setFlyStrategy(new FastFly())
duck.performFly()

duck.setFlyStrategy(new SuperFly())
duck.performFly() // I Can fly with super speed