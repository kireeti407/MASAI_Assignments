"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamsungFactory = exports.AppleFactory = void 0;
const Devices_1 = require("./Devices");
class AppleFactory {
    createLaptop(name, price) {
        return new Devices_1.AppleLaptop(name, price);
    }
    createMobile(name, price) {
        return new Devices_1.AppleMobile(name, price);
    }
}
exports.AppleFactory = AppleFactory;
class SamsungFactory {
    createLaptop(name, price) {
        return new Devices_1.SamsungLaptop(name, price);
    }
    createMobile(name, price) {
        return new Devices_1.SamsungMobile(name, price);
    }
}
exports.SamsungFactory = SamsungFactory;
