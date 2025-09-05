// Open Closed Principle

// Problem:
// You are building a shipping cost calculator:

// class Shipping {
//   calculate(type: string): number {
//     if (type === "standard") return 50;
//     if (type === "express") return 100;
//     return 0;
//   }
// }

// Task: Refactor the code using the Open/Closed Principle so.
//  that new shipping types can be added without modifying the Shipping class.

// Solution :

interface Shipping {
  calculate(): void;
}

class Standard implements Shipping {
  calculate():  void{
    console.log("Shipping Price is 50")
  }
}
class Express implements Shipping {
  calculate(): void {
    console.log("Shipping Price is 100");
  }
}
class UltraExpress implements Shipping {
  calculate(): void {
    console.log("Shipping Price is 200");
  }
}
class PerformShipping{
    constructor(private type : Shipping){}
    ship():void{
        this.type.calculate()
    }
}

let standardShipping = new PerformShipping(new Standard)
standardShipping.ship()

let expressShipping = new PerformShipping(new Express)
expressShipping.ship()
