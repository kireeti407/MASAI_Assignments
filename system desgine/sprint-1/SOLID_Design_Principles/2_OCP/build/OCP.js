"use strict";
// Open Closed Principle
class Standard {
    calculate() {
        console.log("Shipping Price is 50");
    }
}
class Express {
    calculate() {
        console.log("Shipping Price is 100");
    }
}
class UltraExpress {
    calculate() {
        console.log("Shipping Price is 200");
    }
}
class PerformShipping {
    constructor(type) {
        this.type = type;
    }
    ship() {
        this.type.calculate();
    }
}
let standardShipping = new PerformShipping(new Standard());
standardShipping.ship();
let expressShipping = new PerformShipping(new Express);
expressShipping.ship();
