"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFactory = void 0;
const Brands_1 = require("./Brands");
class DeviceFactory {
    static createFactory(device) {
        switch (device) {
            case "Apple":
                return new Brands_1.AppleFactory();
            case "Samsung":
                return new Brands_1.SamsungFactory();
            default:
                throw new Error("Invalid Device");
        }
    }
}
exports.DeviceFactory = DeviceFactory;
