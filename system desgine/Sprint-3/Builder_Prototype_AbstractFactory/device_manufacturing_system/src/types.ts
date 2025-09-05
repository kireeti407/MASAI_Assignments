export enum Brand {
  Apple = "Apple",
  SAMSUNG = "Samsung",
}

export interface Device {
  name: string;
  price: number;
  specifications(): string;
}

export interface DeviceBrand {
  createMobile(name:string,price:number): Device;
  createLaptop(name:string,price:number):Device
}
