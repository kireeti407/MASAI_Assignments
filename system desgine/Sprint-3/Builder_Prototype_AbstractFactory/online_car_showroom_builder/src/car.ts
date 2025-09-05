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
  brand?: string;
  engine?: string;
  color?: string;
  sunroof?: boolean;
  automaticTransmission?: boolean;

  constructor(
    brand?: string,
    engine?: string,
    color?: string,
    sunroof?: boolean,
    automaticTransmission?: boolean
  ) {
    this.automaticTransmission = automaticTransmission;
    this.brand = brand;
    this.color = color;
    this.engine = engine;
    this.sunroof = sunroof;
  }

  getCarDetails(): void {
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
  private brand?: string;
  private engine?: string;
  private color?: string;
  private sunroof?: boolean = false;
  private automaticTransmission?: boolean = false;

  setBrand(brand: string): this {
    this.brand = brand;
    return this;
  }

  setEngine(engine: string): this {
    this.engine = engine;
    return this;
  }

  setColor(color: string): this {
    this.color = color;
    return this;
  }

  setSunroof(sunroof: boolean): this {
    this.sunroof = sunroof;
    return this;
  }

  setAutomaticTransmission(automaticTransmission: boolean): this {
    this.automaticTransmission = automaticTransmission;
    return this;
  }

  buildCar(): Car {
    return new Car(
      this.brand,
      this.engine,
      this.color,
      this.sunroof ,
      this.automaticTransmission
    );
  }
}

// Creating a Tesla Model S with an electric engine, black color, sunroof, and automatic transmission.

let car: Car = new CarBuilder()
  .setBrand("Tesla")
  .setEngine("Electric")
  .setColor("Black")
  .setSunroof(true)
  .setAutomaticTransmission(true)
  .buildCar();
car.getCarDetails();


let car2: Car = new CarBuilder()
  .setBrand("Toyota")
  .setEngine("Electric")
  .setColor("white")
  .setSunroof(false)
  .setAutomaticTransmission(true)
  .buildCar();
car2.getCarDetails();