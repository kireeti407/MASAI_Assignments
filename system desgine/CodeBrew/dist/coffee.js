"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaramelSyrup = exports.Milk = exports.CoffeeDecorator = exports.Latte = exports.Espresso = void 0;
class Espresso {
    getCost() { return 100; }
    getDescription() { return "Espresso"; }
}
exports.Espresso = Espresso;
class Latte {
    getCost() { return 120; }
    getDescription() { return "Latte"; }
}
exports.Latte = Latte;
class CoffeeDecorator {
    constructor(coffee) { this.coffee = coffee; }
}
exports.CoffeeDecorator = CoffeeDecorator;
class Milk extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 20; }
    getDescription() { return this.coffee.getDescription() + ", Milk"; }
}
exports.Milk = Milk;
class CaramelSyrup extends CoffeeDecorator {
    getCost() { return this.coffee.getCost() + 30; }
    getDescription() { return this.coffee.getDescription() + ", Caramel Syrup"; }
}
exports.CaramelSyrup = CaramelSyrup;
