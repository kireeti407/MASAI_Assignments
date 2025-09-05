enum Brand {
  APPLE = "Apple",
  SAMSUNG = "Samsung",
}

interface IProduct {
  brand: Brand;
  name: String;
  price: number;
  getDetails(): string;
}

class AppleLaptop implements IProduct {
  brand: Brand = Brand.APPLE
  name: String;
  price: number;
  constructor(name:String,price:number){
    this.name = name 
    this.price = price
  }
  getDetails(): string {
    return `Apple Laptop : Name : ${this.name} , Price : ${this.price}.`
  }
}

class AppleMobile implements IProduct {
  brand: Brand = Brand.APPLE
  name: String;
  price: number;
  constructor(name:String,price:number){
    this.name = name 
    this.price = price
  }
  getDetails(): string {
    return `Apple Mobile : Name : ${this.name} , Price : ${this.price}.`
  }
}

class SamsungMobile implements IProduct {
  brand: Brand = Brand.SAMSUNG
  name: String;
  price: number;
  constructor(name:String,price:number){
    this.name = name 
    this.price = price
  }
  getDetails(): string {
    return `Samaung Mobile : Name : ${this.name} , Price : ${this.price}.`
  }
}
class SamsungLaptop implements IProduct {
  brand: Brand = Brand.SAMSUNG
  name: String;
  price: number;
  constructor(name:String,price:number){
    this.name = name 
    this.price = price
  }
  getDetails(): string {
    return `Samsung Laptop : Name : ${this.name} , Price : ${this.price}.`
  }
}

interface IFactoryProcuct {
  createLaptop(name:string,price:number): IProduct;
  createMobile(name:string,price:number): IProduct;
}

class AppleFactoryProduct implements IFactoryProcuct {
  createLaptop(name:string,price:number): IProduct {
    return new AppleLaptop(name,price)
  }
  createMobile(name:string,price:number): IProduct {
    return new AppleMobile(name,price)
  }
}

class SamsungFactoryProduct implements IFactoryProcuct {
   createLaptop(name:string,price:number): IProduct {
    return new SamsungLaptop(name,price)
  }
  createMobile(name:string,price:number): IProduct {
    return new SamsungMobile(name,price)
  }
}

class FactoryOfBrands {
  static provideFactory(brand: Brand): IFactoryProcuct {
    switch (brand) {
      case Brand.APPLE:
        return new AppleFactoryProduct();
      case Brand.SAMSUNG:
        return new SamsungFactoryProduct();
      default:
        throw new Error("Invalid brand");
    }
  }
}
// usage : 
let appleMobile = FactoryOfBrands.provideFactory(Brand.APPLE).createMobile("iPhone pro-max",120000)

console.log(appleMobile.getDetails());