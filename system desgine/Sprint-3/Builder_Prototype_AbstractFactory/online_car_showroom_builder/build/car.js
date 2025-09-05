"use strict";
// You are developing an online car showroom where customers can customize their cars before purchasing.
//  Implement the Builder Pattern for creating a Car object with the following properties:
// brand (string)
// engine (string)
// color (string)
// sunroof (boolean)
// automaticTransmission (boolean)
// The CarBuilder class should provide methods to incrementally set these properties and finally build the Car object.
// Demonstrate its usage in the main function by:
// Creating a Tesla Model S with an electric engine, black color, sunroof, and automatic transmission.
// Printing the car details.
class Car {
    constructor(brand, engine, color, sunroof, automaticTransmission) {
        this.automaticTransmission = automaticTransmission;
        this.brand = brand;
        this.color = color;
        this.engine = engine;
        this.sunroof = sunroof;
    }
    getCarDetails() {
        let decription = "";
        if (this.brand) {
            decription += `Car Brand : ${this.brand} `;
        }
        if (this.engine) {
            decription += `, Engine : ${this.engine} `;
        }
        if (this.color) {
            decription += `, Color : ${this.color} `;
        }
        if (this.sunroof) {
            decription += `, with sunroof `;
        }
        if (this.automaticTransmission) {
            decription += `, with automatic transmission`;
        }
        decription += ".";
        console.log(decription);
    }
}
class CarBuilder {
    constructor() {
        this.sunroof = false;
        this.automaticTransmission = false;
    }
    setBrand(brand) {
        this.brand = brand;
        return this;
    }
    setEngine(engine) {
        this.engine = engine;
        return this;
    }
    setColor(color) {
        this.color = color;
        return this;
    }
    setSunroof(sunroof) {
        this.sunroof = sunroof;
        return this;
    }
    setAutomaticTransmission(automaticTransmission) {
        this.automaticTransmission = automaticTransmission;
        return this;
    }
    buildCar() {
        return new Car(this.brand, this.engine, this.color, this.sunroof, this.automaticTransmission);
    }
}
// Creating a Tesla Model S with an electric engine, black color, sunroof, and automatic transmission.
let car = new CarBuilder()
    .setBrand("Tesla")
    .setEngine("Electric")
    .setColor("Black")
    .setSunroof(true)
    .setAutomaticTransmission(true)
    .buildCar();
car.getCarDetails();
let car2 = new CarBuilder()
    .setBrand("Toyota")
    .setEngine("Electric")
    .setColor("white")
    .setSunroof(false)
    .setAutomaticTransmission(true)
    .buildCar();
car2.getCarDetails();
