import { DeviceFactory } from "./BrandFactory";
import { Brand } from "./types";

let appleFactory = DeviceFactory.createFactory(Brand.Apple);
console.log(appleFactory.createLaptop("Mac", 10000).specifications());

let samsungDeviceFactory = DeviceFactory.createFactory(Brand.SAMSUNG);
let samsungLaptop = samsungDeviceFactory.createLaptop("Mac", 30000);
console.log(samsungLaptop.specifications());
