"use strict";
class Soldier {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
    getDescription() {
        console.log(`Soldier name is ${this.name} and his weapon is ${this.weapon}. `);
    }
}
let soldier1 = new Soldier("Aswarth", "Ak47");
soldier1.getDescription();
let soldier2 = new Soldier("chiru", "mp5");
soldier2.getDescription();
let soldier3 = soldier2.clone();
soldier3.getDescription();
let soldier4 = soldier1.clone();
soldier4.getDescription();
