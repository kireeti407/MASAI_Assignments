import { Device } from "./types";

export class AppleMobile implements Device {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  specifications(): string {
    return `Apple Mobile = Name : ${this.name} , Price : ${this.price}`;
  }
}

export class AppleLaptop implements Device {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  specifications(): string {
    return `Apple Laptop = Name : ${this.name} , Price : ${this.price}`;
  }
}

export class SamsungMobile implements Device {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  specifications(): string {
    return `Samsung Mobile = Name : ${this.name} , Price : ${this.price}`;
  }
}

export class SamsungLaptop implements Device {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  specifications(): string {
    return `Samsung Laptop = Name : ${this.name} , Price : ${this.price}`;
  }
}
