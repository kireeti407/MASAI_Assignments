"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BrandFactory_1 = require("./BrandFactory");
const types_1 = require("./types");
let appleFactory = BrandFactory_1.DeviceFactory.createFactory(types_1.Brand.Apple);
console.log(appleFactory.createLaptop("Mac", 10000).specifications());
let samsungDeviceFactory = BrandFactory_1.DeviceFactory.createFactory(types_1.Brand.SAMSUNG);
let samsungLaptop = samsungDeviceFactory.createLaptop("Mac", 30000);
console.log(samsungLaptop.specifications());
