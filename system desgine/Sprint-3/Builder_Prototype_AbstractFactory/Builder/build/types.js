"use strict";
// customized meal app
class Meal {
    constructor(mainDish, dessert, drink) {
        this.dessert = dessert;
        this.drink = drink;
        this.mainDish = mainDish;
    }
    getDescription() {
        let description = "";
        if (this.mainDish) {
            description += `Main Dish : ${this.mainDish} `;
        }
        if (this.drink) {
            description += `, Drink : ${this.drink} `;
        }
        if (this.dessert) {
            description += `, Dessert : ${this.dessert}`;
        }
        console.log(description);
    }
}
class MyMeal {
    setMaindish(maindish) {
        this.mainDish = maindish;
        return this;
    }
    setDrink(drink) {
        this.drink = drink;
        return this;
    }
    setDessert(dessert) {
        this.dessert = dessert;
        return this;
    }
    getMeal() {
        return new Meal(this.mainDish, this.dessert, this.drink);
    }
}
let myMeal = new MyMeal().setMaindish("Pizza").getMeal();
myMeal.getDescription();
let myMeal1 = new MyMeal().setMaindish("Pizza").setDrink("Coke").setDessert("Kabab").getMeal();
myMeal1.getDescription();
