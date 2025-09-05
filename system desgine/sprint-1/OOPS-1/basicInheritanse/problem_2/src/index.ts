// L1: Q1: Polymorphism – Duck Family
// Problem: Define a base class PolyDuck with a fly() method.
// Create 3 child classes (DesiDuck, VidesiDuck, SmartDuck) that override fly() with different speeds.
//  Create a function makeDuckFly(duck: PolyDuck) that accepts any duck and calls its fly() method.
//  Use this function to test each duck.

class PolyDuck {
  fly(): void {
    console.log("I can fly");
  }
}

class DesiDuck extends PolyDuck {
  fly(): void {
    console.log("DesiDuck flies at 10kmph");
  }
}
class VidesiDuck extends PolyDuck {
  fly(): void {
    console.log("VidesiDuck flies at 20kmph");
  }
}
class SmartDuck extends PolyDuck {
  fly(): void {
    console.log("SmartDuck flies at 50kmph");
  }
}

function makeDuckFly(duck: PolyDuck) {
  duck.fly();
}

makeDuckFly(new DesiDuck()); // DesiDuck flies at 10kmph
makeDuckFly(new VidesiDuck()); // VidesiDuck flies at 20kmph
makeDuckFly(new SmartDuck()); // SmartDuck flies at 50kmph

// L1: Q2: Access Modifiers Exploration
// Problem: Create a User class with the following:

// public name
// private orgCode = "DuckCorp"
// protected role Constructor should accept name and role.
// Add a method introduce() that logs: I am {name} from {orgCode} Create a Manager class that extends User,
// and adds a method getRole() that logs the role. Instantiate both and test their methods.
//  Try accessing orgCode directly (expect compile error).

class User {
  public name: string;
  private orgCode: string = "DuckCorp";
  protected role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  introduce(): void {
    console.log(`I am ${this.name} from ${this.orgCode}`);
  }
}
class Manager extends User {
  constructor(name: string, role: string) {
    super(name, role);
  }
  getRole(): void {
    console.log(`Role : ${this.role}`);
    // console.log(`orgCode : ${this.orgCode}`) // Property 'orgCode' is private and only accessible within class 'User'.
  }
}

let manager1 = new Manager("Johney", "Manager");
manager1.introduce();
manager1.getRole();
