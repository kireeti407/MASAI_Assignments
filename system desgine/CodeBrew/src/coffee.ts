
export interface Coffee {
    getCost(): number;
    getDescription(): string;
}


export class Espresso implements Coffee {
    getCost(): number { return 100; }
    getDescription(): string { return "Espresso"; }
}

export class Latte implements Coffee {
    getCost(): number { return 120; }
    getDescription(): string { return "Latte"; }
}


export abstract class CoffeeDecorator implements Coffee {
    protected coffee: Coffee;
    constructor(coffee: Coffee) { this.coffee = coffee; }
    abstract getCost(): number;
    abstract getDescription(): string;
}

export class Milk extends CoffeeDecorator {
    getCost(): number { return this.coffee.getCost() + 20; }
    getDescription(): string { return this.coffee.getDescription() + ", Milk"; }
}


export class CaramelSyrup extends CoffeeDecorator {
    getCost(): number { return this.coffee.getCost() + 30; }
    getDescription(): string { return this.coffee.getDescription() + ", Caramel Syrup"; }
}