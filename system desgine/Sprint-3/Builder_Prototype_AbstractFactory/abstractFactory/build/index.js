"use strict";
var Brand;
(function (Brand) {
    Brand["APPLE"] = "Apple";
    Brand["SAMSUNG"] = "Samsung";
})(Brand || (Brand = {}));
class AppleLaptop {
    constructor(name, price) {
        this.brand = Brand.APPLE;
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `Apple Laptop : Name : ${this.name} , Price : ${this.price}.`;
    }
}
class AppleMobile {
    constructor(name, price) {
        this.brand = Brand.APPLE;
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `Apple Mobile : Name : ${this.name} , Price : ${this.price}.`;
    }
}
class SamsungMobile {
    constructor(name, price) {
        this.brand = Brand.SAMSUNG;
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `Samaung Mobile : Name : ${this.name} , Price : ${this.price}.`;
    }
}
class SamsungLaptop {
    constructor(name, price) {
        this.brand = Brand.SAMSUNG;
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `Samsung Laptop : Name : ${this.name} , Price : ${this.price}.`;
    }
}
class AppleFactoryProduct {
    createLaptop(name, price) {
        return new AppleLaptop(name, price);
    }
    createMobile(name, price) {
        return new AppleMobile(name, price);
    }
}
class SamsungFactoryProduct {
    createLaptop(name, price) {
        return new SamsungLaptop(name, price);
    }
    createMobile(name, price) {
        return new SamsungMobile(name, price);
    }
}
class FactoryOfBrands {
    static provideFactory(brand) {
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
let appleMobile = FactoryOfBrands.provideFactory(Brand.APPLE).createMobile("iPhone pro-max", 120000);
console.log(appleMobile.getDetails());
