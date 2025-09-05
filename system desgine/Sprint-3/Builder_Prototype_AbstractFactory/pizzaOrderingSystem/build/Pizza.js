"use strict";
// You are developing a Pizza Ordering System where customers can customize their pizzas by choosing different ingredients.
// Implement the Builder Pattern to allow the step-by-step construction of a Pizza object with the following properties:
// size (small, medium, or large)
// cheese (boolean)
// pepperoni (boolean)
// mushrooms (boolean)
// The PizzaBuilder class should allow setting these properties step by step and finally build the Pizza object.
// Demonstrate its usage in the main function by creating a large pizza with cheese and mushrooms and printing its details.
class Pizza {
    constructor(size, cheese, pepperoni, mushrooms) {
        this.size = size;
        this.cheese = cheese;
        this.mushrooms = mushrooms;
        this.pepperoni = pepperoni;
    }
    getDetails() {
        let description = "";
        if (this.size) {
            description += `${this.size} pizza `;
        }
        if (this.cheese) {
            description += ", with cheese";
        }
        if (this.mushrooms) {
            description += ", with mushroooms";
        }
        if (this.pepperoni) {
            description += ", with pepperoni";
        }
        console.log(description);
    }
}
class PizzaBuilder {
    constructor() {
        this.size = "medium";
        this.cheese = false;
        this.pepperoni = false;
        this.mushrooms = false;
    }
    setSize(size) {
        this.size = size;
        return this;
    }
    setCheese(cheese) {
        this.cheese = cheese;
        return this;
    }
    setPepperoni(pepperoni) {
        this.pepperoni = pepperoni;
        return this;
    }
    setMushrooms(mushrooms) {
        this.mushrooms = mushrooms;
        return this;
    }
    buildPizza() {
        return new Pizza(this.size, this.cheese, this.mushrooms, this.pepperoni);
    }
}
let myPizza = new PizzaBuilder().setSize("large").setCheese(true).setMushrooms(true).buildPizza();
myPizza.getDetails();
