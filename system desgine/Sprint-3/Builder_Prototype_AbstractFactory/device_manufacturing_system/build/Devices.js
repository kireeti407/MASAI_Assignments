"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamsungLaptop = exports.SamsungMobile = exports.AppleLaptop = exports.AppleMobile = void 0;
class AppleMobile {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    specifications() {
        return `Apple Mobile = Name : ${this.name} , Price : ${this.price}`;
    }
}
exports.AppleMobile = AppleMobile;
class AppleLaptop {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    specifications() {
        return `Apple Laptop = Name : ${this.name} , Price : ${this.price}`;
    }
}
exports.AppleLaptop = AppleLaptop;
class SamsungMobile {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    specifications() {
        return `Samsung Mobile = Name : ${this.name} , Price : ${this.price}`;
    }
}
exports.SamsungMobile = SamsungMobile;
class SamsungLaptop {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    specifications() {
        return `Samsung Laptop = Name : ${this.name} , Price : ${this.price}`;
    }
}
exports.SamsungLaptop = SamsungLaptop;
