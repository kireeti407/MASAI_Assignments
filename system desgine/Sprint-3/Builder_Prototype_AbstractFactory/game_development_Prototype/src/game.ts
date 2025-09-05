// You are working on a game development project where multiple characters with similar attributes need to be created.
// Instead of creating them from scratch, implement the Prototype Pattern to clone existing characters efficiently.

// Define a GameCharacter class with the following properties:

// name (string)
// level (integer)
// weapon (string)
// Implement a method clone() in the class to create and return a copy of an existing GameCharacter object.

// Demonstrate its usage in the main function by:

// Creating a character named "Warrior" with level 10 and sword as the weapon.
// Cloning this character to create another character "Warrior Clone" and printing both objects to show they are separate instances.

interface Character {
  clone(): this;
}

class GameCharacter implements Character {
  private name: string;
  private level: number;
  private weapon: string;
  constructor(name: string, level: number, weapon: string) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
  }

  clone(): this {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }
  getCharacterDetails(): void {
    console.log(
      `Character name is ${this.name} , level is ${this.level} and weapon is ${this.weapon}`
    );
  }
}

let warrior = new GameCharacter("Warrior",10,"sword")
warrior.getCharacterDetails()

let warriorClone = warrior.clone()
warriorClone.getCharacterDetails()