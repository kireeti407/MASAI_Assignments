import { AppleFactory, SamsungFactory } from "./Brands";
import { Brand, DeviceBrand } from "./types";

export class DeviceFactory {
  static createFactory(device: Brand): DeviceBrand {
    switch (device) {
      case "Apple":
        return new AppleFactory();
      case "Samsung":
        return new SamsungFactory();
      default:
        throw new Error("Invalid Device");
    }
  }
}
