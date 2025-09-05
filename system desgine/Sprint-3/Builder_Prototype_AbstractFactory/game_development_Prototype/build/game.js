"use strict";
// You are working on a game development project where multiple characters with similar attributes need to be created.
// Instead of creating them from scratch, implement the Prototype Pattern to clone existing characters efficiently.
class GameCharacter {
    constructor(name, level, weapon) {
        this.name = name;
        this.level = level;
        this.weapon = weapon;
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
    getCharacterDetails() {
        console.log(`Character name is ${this.name} , level is ${this.level} and weapon is ${this.weapon}`);
    }
}
let warrior = new GameCharacter("Warrior", 10, "sword");
warrior.getCharacterDetails();
let warriorClone = warrior.clone();
warriorClone.getCharacterDetails();
