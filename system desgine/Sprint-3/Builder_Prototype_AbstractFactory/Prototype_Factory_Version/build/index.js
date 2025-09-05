"use strict";
class Soldier {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    getSoldierDetails() {
        console.log(`Soldier name is ${this.name}, his weapon is ${this.weapon}`);
    }
}
class SoldierFactory {
    static createSoldier(name, weapon) {
        return new Soldier(name, weapon);
    }
    static copyFrom(template) {
        return new Soldier(template.name, template.weapon);
    }
}
let soldier1 = SoldierFactory.createSoldier("Dj Alok", "Ak47");
soldier1.getSoldierDetails();
let soldier2 = SoldierFactory.copyFrom(soldier1);
soldier2.getSoldierDetails();
